// src/games/trivia/triviaMultiplayer.js
// Multiplayer trivia using Firebase Realtime Database

import { ref, get, set, update, remove, onValue, onDisconnect, query, orderByChild, equalTo, serverTimestamp } from 'firebase/database';
import { rtdb } from '../../utils/firebase';
import questions from '../../data/questions';

// Helper to get questions filtered by pool
const getMultiplayerQuestions = (category) => {
  return (questions[category] || []).filter(q => q.pool === 'multiplayer');
};

const QUESTIONS_PER_GAME = 15;

// ============================================
// QUESTION SELECTION
// ============================================

// Get used question hashes for multiplayer
async function getUsedQuestionHashes() {
  try {
    const snapshot = await get(ref(rtdb, 'trivia/multiplayer/usedQuestions'));
    if (snapshot.exists()) {
      return snapshot.val() || {};
    }
    return {};
  } catch (e) {
    console.error('Error getting used questions:', e);
    return {};
  }
}

// Mark questions as used (uses update() to avoid race conditions between hosts)
async function markQuestionsUsed(questionHashes) {
  try {
    const usedRef = ref(rtdb, 'trivia/multiplayer/usedQuestions');
    const now = Date.now();
    const updates = {};
    questionHashes.forEach(hash => {
      updates[hash] = now;
    });
    await update(usedRef, updates);
  } catch (e) {
    console.error('Error marking questions used:', e);
  }
}

// Reset used questions when pool is exhausted
async function resetUsedQuestions() {
  try {
    await remove(ref(rtdb, 'trivia/multiplayer/usedQuestions'));
  } catch (e) {
    console.error('Error resetting used questions:', e);
  }
}

// Simple hash for question deduplication
function hashQuestion(q) {
  let hash = 0;
  for (let i = 0; i < q.length; i++) {
    const char = q.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(36);
}

// Select questions for a multiplayer game
async function selectQuestions(categories) {
  const usedHashes = await getUsedQuestionHashes();
  const selected = [];
  const selectedHashes = [];

  // Get all available questions from selected categories
  const availableByCategory = {};
  let totalAvailable = 0;

  categories.forEach(cat => {
    const catQuestions = getMultiplayerQuestions(cat);
    availableByCategory[cat] = catQuestions.filter(q => {
      const hash = hashQuestion(q.q);
      return !usedHashes[hash];
    });
    totalAvailable += availableByCategory[cat].length;
  });

  // If we don't have enough unused questions, reset the pool
  if (totalAvailable < QUESTIONS_PER_GAME) {
    await resetUsedQuestions();
    // Refetch with cleared pool
    categories.forEach(cat => {
      availableByCategory[cat] = getMultiplayerQuestions(cat);
    });
  }

  // Distribute questions evenly across categories
  const questionsPerCategory = Math.ceil(QUESTIONS_PER_GAME / categories.length);

  categories.forEach(cat => {
    const catQuestions = availableByCategory[cat];
    // Shuffle and take up to questionsPerCategory
    const shuffled = [...catQuestions].sort(() => Math.random() - 0.5);
    const toTake = shuffled.slice(0, questionsPerCategory);

    toTake.forEach(q => {
      selected.push({ ...q, category: cat });
      selectedHashes.push(hashQuestion(q.q));
    });
  });

  // Trim to exactly QUESTIONS_PER_GAME and shuffle final order
  const finalQuestions = selected
    .slice(0, QUESTIONS_PER_GAME)
    .sort(() => Math.random() - 0.5);

  // Mark these questions as used
  await markQuestionsUsed(selectedHashes.slice(0, QUESTIONS_PER_GAME));

  return finalQuestions;
}

// ============================================
// ROOM MANAGEMENT
// ============================================

// Clean up stale rooms:
// - Rooms older than 2 hours (any status)
// - Waiting rooms with no activity for 15 minutes
// - Rooms with no players
async function cleanupOldRooms() {
  try {
    const now = Date.now();
    const twoHoursAgo = now - (2 * 60 * 60 * 1000);
    const fifteenMinutesAgo = now - (15 * 60 * 1000);

    // Get all rooms and check each one
    const snapshot = await get(ref(rtdb, 'trivia/rooms'));
    if (!snapshot.exists()) return;

    const promises = [];
    snapshot.forEach(child => {
      const room = child.val();
      const roomRef = ref(rtdb, `trivia/rooms/${child.key}`);
      const createdAt = room.createdAt || 0;
      const lastActivity = room.lastActivity || createdAt;
      const playerCount = Object.keys(room.players || {}).length;

      // Remove if: older than 2 hours, OR waiting with no activity for 15 min, OR no players
      if (createdAt < twoHoursAgo ||
          (room.status === 'waiting' && lastActivity < fifteenMinutesAgo) ||
          playerCount === 0) {
        promises.push(remove(roomRef));
      }
    });

    await Promise.all(promises);
  } catch (e) {
    console.error('Cleanup error:', e);
  }
}

// Create a multiplayer room
export async function createRoom(userId, displayName, categories) {
  try {
    await cleanupOldRooms();

    // Validate categories
    const validCategories = ['History', 'Geography', 'Science', 'Math', 'Animals', 'Bible', 'General Knowledge', 'US States', 'Logic & Applied Geography'];
    const selectedCategories = categories.filter(c => validCategories.includes(c));

    if (selectedCategories.length === 0) {
      return { error: 'Please select at least one category' };
    }

    // Generate unique 5-digit room code
    let roomId;
    let attempts = 0;
    do {
      roomId = String(Math.floor(10000 + Math.random() * 90000));
      const exists = await get(ref(rtdb, `trivia/rooms/${roomId}`));
      if (!exists.exists()) break;
      attempts++;
    } while (attempts < 10);

    if (attempts >= 10) {
      return { error: 'Could not generate room code' };
    }

    // Select questions for this game
    const questions = await selectQuestions(selectedCategories);

    const roomData = {
      host: userId,
      hostName: displayName,
      status: 'waiting', // waiting, playing, finished
      categories: selectedCategories,
      questions,
      currentQuestion: -1, // -1 means not started, 0-19 during game
      questionStartTime: null,
      createdAt: serverTimestamp(),
      lastActivity: serverTimestamp(),
      players: {
        [userId]: {
          displayName,
          joinedAt: serverTimestamp(),
          score: 0,
          totalTime: 0,
          answers: {},
        }
      }
    };

    const roomRef = ref(rtdb, `trivia/rooms/${roomId}`);
    await set(roomRef, roomData);

    // Set up automatic cleanup if host disconnects while room is waiting
    onDisconnect(roomRef).remove();

    return { roomId, categories: selectedCategories, questionCount: questions.length };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

// Join a multiplayer room
export async function joinRoom(roomId, userId, displayName) {
  try {
    const roomRef = ref(rtdb, `trivia/rooms/${roomId}`);
    const snapshot = await get(roomRef);

    if (!snapshot.exists()) return { error: 'Room not found' };

    const room = snapshot.val();
    if (room.status !== 'waiting') return { error: 'Game already started' };

    const playerCount = Object.keys(room.players || {}).length;
    if (playerCount >= 10) return { error: 'Room is full (max 10 players)' };

    // Check if already in room
    if (room.players && room.players[userId]) {
      return {
        categories: room.categories,
        players: room.players,
        questionCount: room.questions?.length || QUESTIONS_PER_GAME
      };
    }

    // Add player and update lastActivity
    await set(ref(rtdb, `trivia/rooms/${roomId}/players/${userId}`), {
      displayName,
      joinedAt: serverTimestamp(),
      score: 0,
      totalTime: 0,
      answers: {},
    });
    await update(roomRef, { lastActivity: serverTimestamp() });

    const updatedSnapshot = await get(ref(rtdb, `trivia/rooms/${roomId}/players`));
    const players = {};
    updatedSnapshot.forEach(child => {
      players[child.key] = child.val();
    });

    return {
      categories: room.categories,
      players,
      questionCount: room.questions?.length || QUESTIONS_PER_GAME
    };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

// Start the game (host only)
export async function startGame(roomId) {
  try {
    const roomRef = ref(rtdb, `trivia/rooms/${roomId}`);
    const snapshot = await get(roomRef);

    if (!snapshot.exists()) return { error: 'Room not found' };

    const room = snapshot.val();
    const playerCount = Object.keys(room.players || {}).length;

    if (playerCount < 1) return { error: 'Need at least 1 player' };

    // Cancel the onDisconnect handler so room isn't deleted mid-game
    await onDisconnect(roomRef).cancel();

    await update(roomRef, {
      status: 'playing',
      currentQuestion: 0,
      questionStartTime: Date.now(),
      lastActivity: serverTimestamp(),
    });

    return { success: true };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

// Submit an answer
export async function submitAnswer(roomId, userId, questionIndex, answerIndex, clientTimeTaken) {
  try {
    const roomSnapshot = await get(ref(rtdb, `trivia/rooms/${roomId}`));

    if (!roomSnapshot.exists()) return { error: 'Room not found' };

    const room = roomSnapshot.val();

    // Validate question index is within bounds
    if (questionIndex < 0 || questionIndex >= room.questions.length) {
      return { error: 'Invalid question' };
    }

    // Check if already answered
    const playerData = room.players?.[userId];
    if (playerData?.answers?.[questionIndex] !== undefined) {
      return { error: 'Already answered' };
    }

    // Use client-provided time (more accurate since each player tracks their own question timer)
    const timeTaken = clientTimeTaken || 0;

    // Check if correct
    const question = room.questions[questionIndex];
    const isCorrect = answerIndex === question.correct;

    // Update player's answer and score
    const playerRef = ref(rtdb, `trivia/rooms/${roomId}/players/${userId}`);
    const currentScore = playerData?.score || 0;
    const currentTime = playerData?.totalTime || 0;

    await update(playerRef, {
      [`answers/${questionIndex}`]: {
        answer: answerIndex,
        correct: isCorrect,
        time: timeTaken,
      },
      score: isCorrect ? currentScore + 1 : currentScore,
      totalTime: currentTime + timeTaken,
    });

    return {
      success: true,
      correct: isCorrect,
      correctAnswer: question.correct,
      timeTaken
    };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

// Move to next question (host only) - kept for compatibility
export async function nextQuestion(roomId) {
  try {
    const roomRef = ref(rtdb, `trivia/rooms/${roomId}`);
    const snapshot = await get(roomRef);

    if (!snapshot.exists()) return { error: 'Room not found' };

    const room = snapshot.val();
    const nextIndex = (room.currentQuestion || 0) + 1;

    if (nextIndex >= room.questions.length) {
      // Game is finished
      await update(roomRef, {
        status: 'finished',
        currentQuestion: nextIndex,
        finishedAt: serverTimestamp(),
      });
      return { finished: true };
    }

    await update(roomRef, {
      currentQuestion: nextIndex,
      questionStartTime: Date.now(),
    });

    return { success: true, questionIndex: nextIndex };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

// Check if all players finished and mark game complete
export async function checkGameCompletion(roomId) {
  try {
    const roomRef = ref(rtdb, `trivia/rooms/${roomId}`);
    const snapshot = await get(roomRef);

    if (!snapshot.exists()) return { error: 'Room not found' };

    const room = snapshot.val();

    // Don't check if already finished
    if (room.status === 'finished') return { alreadyFinished: true };

    const totalQuestions = room.questions?.length || QUESTIONS_PER_GAME;
    const players = room.players || {};

    // Check if all players have answered all questions
    const allPlayersFinished = Object.values(players).every(player => {
      const answeredCount = Object.keys(player.answers || {}).length;
      return answeredCount >= totalQuestions;
    });

    if (allPlayersFinished) {
      await update(roomRef, {
        status: 'finished',
        finishedAt: serverTimestamp(),
      });
      return { finished: true };
    }

    return { finished: false };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

// Get current standings
export function getStandings(players) {
  const standings = Object.entries(players || {}).map(([id, data]) => ({
    odayerId: id,
    displayName: data.displayName || 'Anonymous',
    score: data.score || 0,
    totalTime: data.totalTime || 0,
    answeredCount: Object.keys(data.answers || {}).length,
  }));

  // Sort by score desc, then by totalTime asc (tiebreaker)
  standings.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.totalTime - b.totalTime; // Lower time wins ties
  });

  return standings;
}

// Get final results
export async function getResults(roomId) {
  try {
    const snapshot = await get(ref(rtdb, `trivia/rooms/${roomId}`));
    if (!snapshot.exists()) return { error: 'Room not found' };

    const room = snapshot.val();
    const standings = getStandings(room.players);

    return {
      standings,
      questions: room.questions,
      categories: room.categories,
      totalQuestions: room.questions?.length || 0,
    };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

// Leave a room
export async function leaveRoom(roomId, userId, isHost) {
  try {
    if (isHost) {
      await remove(ref(rtdb, `trivia/rooms/${roomId}`));
    } else {
      await remove(ref(rtdb, `trivia/rooms/${roomId}/players/${userId}`));
    }
    return { success: true };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

// Play again with new questions (host only)
export async function playAgain(roomId, categories) {
  try {
    const roomRef = ref(rtdb, `trivia/rooms/${roomId}`);
    const snapshot = await get(roomRef);

    if (!snapshot.exists()) return { error: 'Room not found' };

    const room = snapshot.val();

    // Select new questions
    const selectedCategories = categories || room.categories;
    const questions = await selectQuestions(selectedCategories);

    // Reset each player's state
    const resetPlayers = {};
    Object.keys(room.players).forEach(userId => {
      resetPlayers[userId] = {
        displayName: room.players[userId].displayName,
        joinedAt: room.players[userId].joinedAt,
        score: 0,
        totalTime: 0,
        answers: {},
      };
    });

    await update(roomRef, {
      status: 'waiting',
      categories: selectedCategories,
      questions,
      currentQuestion: -1,
      questionStartTime: null,
      players: resetPlayers,
      finishedAt: null,
    });

    return { success: true, questionCount: questions.length };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

// ============================================
// REAL-TIME LISTENERS
// ============================================

// Listen for room changes (returns unsubscribe function)
export function startRoomListener(roomId, callback) {
  const roomRef = ref(rtdb, `trivia/rooms/${roomId}`);
  const unsubscribe = onValue(roomRef, (snapshot) => {
    if (!snapshot.exists()) {
      callback({ deleted: true });
      return;
    }
    const data = snapshot.val();
    callback({
      ...data,
      roomId,
      standings: getStandings(data.players),
    });
  });
  return unsubscribe;
}

// Listen for open lobbies (returns unsubscribe function)
export function startLobbyListener(callback) {
  const roomsRef = ref(rtdb, 'trivia/rooms');
  const waitingQuery = query(roomsRef, orderByChild('status'), equalTo('waiting'));

  const unsubscribe = onValue(waitingQuery, (snapshot) => {
    const lobbies = [];
    snapshot.forEach(child => {
      const room = child.val();
      // Only show rooms less than 2 hours old
      if (room.createdAt && Date.now() - room.createdAt < 2 * 60 * 60 * 1000) {
        lobbies.push({
          roomId: child.key,
          hostName: room.hostName || 'Unknown',
          playerCount: Object.keys(room.players || {}).length,
          categories: room.categories,
          createdAt: room.createdAt,
        });
      }
    });
    lobbies.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    callback(lobbies);
  });

  return unsubscribe;
}

// Export constants
export { QUESTIONS_PER_GAME };
