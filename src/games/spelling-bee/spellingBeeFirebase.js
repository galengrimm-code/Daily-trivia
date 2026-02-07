// src/games/spelling-bee/spellingBeeFirebase.js
import { ref, get, set, update, remove, onValue, query, orderByChild, equalTo, endAt, limitToFirst, serverTimestamp } from 'firebase/database';
import { rtdb } from '../../utils/firebase';
import { getSpellingBeeScore } from './spellingBeeConstants';

// ============================================
// DAILY MODE
// ============================================

export async function checkSpellingBeePlayer(userId, dateKey) {
  try {
    const snapshot = await get(ref(rtdb, `spelling-bee/daily/${dateKey}/players/${userId}`));
    if (snapshot.exists()) {
      const data = snapshot.val();
      return { played: true, score: data.score, wordCount: data.wordCount, rank: data.rank, pangramCount: data.pangramCount || 0 };
    }
    return { played: false };
  } catch (e) {
    console.error('Firebase error:', e);
    return { played: false };
  }
}

export async function saveSpellingBeeScore(userId, displayName, dateKey, score, wordCount, rank, pangramCount = 0, maxScore = 0) {
  try {
    const playerRef = ref(rtdb, `spelling-bee/daily/${dateKey}/players/${userId}`);
    const existing = await get(playerRef);
    if (existing.exists()) return;

    const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

    await set(playerRef, {
      displayName,
      score,
      wordCount,
      rank,
      pangramCount,
      maxScore,
      percentage,
      playedAt: serverTimestamp()
    });

    // Update user's running average
    await updateUserWordGameStats(userId, 'spellingBee', percentage);
  } catch (e) {
    console.error('Firebase error:', e);
  }
}

// Update user's running average for word games
async function updateUserWordGameStats(userId, game, percentage) {
  try {
    const statsRef = ref(rtdb, `userStats/${userId}/${game}`);
    const snapshot = await get(statsRef);

    let gamesPlayed = 1;
    let totalPercentage = percentage;

    if (snapshot.exists()) {
      const data = snapshot.val();
      gamesPlayed = (data.gamesPlayed || 0) + 1;
      totalPercentage = (data.totalPercentage || 0) + percentage;
    }

    const averagePercentage = Math.round(totalPercentage / gamesPlayed);

    await set(statsRef, {
      gamesPlayed,
      totalPercentage,
      averagePercentage
    });
  } catch (e) {
    console.error('Error updating user stats:', e);
  }
}

// Get user's word game stats
export async function getUserWordGameStats(userId) {
  try {
    const statsRef = ref(rtdb, `userStats/${userId}`);
    const snapshot = await get(statsRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (e) {
    console.error('Error getting user stats:', e);
    return null;
  }
}

export async function getSpellingBeeLeaderboard(dateKey) {
  try {
    const snapshot = await get(ref(rtdb, `spelling-bee/daily/${dateKey}/players`));
    if (!snapshot.exists()) return [];

    const players = [];
    snapshot.forEach(child => {
      const data = child.val();
      players.push({
        userId: child.key,
        displayName: data.displayName || 'Anonymous',
        score: data.score,
        wordCount: data.wordCount,
        rank: data.rank || 'Beginner',
      });
    });

    players.sort((a, b) => b.score - a.score);
    return players;
  } catch (e) {
    console.error('Firebase error:', e);
    return [];
  }
}

// ============================================
// MULTIPLAYER - ROOM MANAGEMENT
// ============================================

async function cleanupOldRooms() {
  try {
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    const roomsQuery = query(
      ref(rtdb, 'spelling-bee/rooms'),
      orderByChild('createdAt'),
      endAt(oneHourAgo),
      limitToFirst(10)
    );
    const snapshot = await get(roomsQuery);
    const promises = [];
    snapshot.forEach(child => {
      promises.push(remove(ref(rtdb, `spelling-bee/rooms/${child.key}`)));
    });
    await Promise.all(promises);
  } catch (e) {
    console.error('Cleanup error:', e);
  }
}

export async function createRoom(userId, displayName, puzzleCode) {
  try {
    await cleanupOldRooms();

    let roomId;
    let attempts = 0;
    do {
      roomId = String(Math.floor(10000 + Math.random() * 90000));
      const exists = await get(ref(rtdb, `spelling-bee/rooms/${roomId}`));
      if (!exists.exists()) break;
      attempts++;
    } while (attempts < 10);

    if (attempts >= 10) return { error: 'Could not generate room ID' };

    const roomData = {
      puzzleCode,
      host: userId,
      hostName: displayName,
      status: 'waiting',
      createdAt: serverTimestamp(),
      players: {
        [userId]: {
          displayName,
          joinedAt: serverTimestamp(),
          submitted: false
        }
      }
    };

    await set(ref(rtdb, `spelling-bee/rooms/${roomId}`), roomData);
    return { roomId, puzzleCode };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

export async function joinRoom(roomId, userId, displayName) {
  try {
    const roomRef = ref(rtdb, `spelling-bee/rooms/${roomId}`);
    const snapshot = await get(roomRef);
    if (!snapshot.exists()) return { error: 'Room not found' };

    const room = snapshot.val();
    if (room.status !== 'waiting') return { error: 'Game already started' };

    const playerCount = Object.keys(room.players || {}).length;
    if (playerCount >= 8) return { error: 'Room is full' };

    await set(ref(rtdb, `spelling-bee/rooms/${roomId}/players/${userId}`), {
      displayName,
      joinedAt: serverTimestamp(),
      submitted: false
    });

    const updatedSnapshot = await get(ref(rtdb, `spelling-bee/rooms/${roomId}/players`));
    const players = {};
    updatedSnapshot.forEach(child => {
      players[child.key] = child.val();
    });

    return { puzzleCode: room.puzzleCode, players };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

export async function startRoom(roomId) {
  try {
    console.log('startRoom called with roomId:', roomId, 'type:', typeof roomId);

    // Validate roomId
    if (!roomId || typeof roomId !== 'string' || !/^\d{5}$/.test(roomId)) {
      console.error('Invalid roomId:', roomId);
      return { error: 'Invalid room code' };
    }

    const startTime = Date.now() + 5000; // 5 seconds from now
    const roomPath = `spelling-bee/rooms/${roomId}`;
    console.log('Room path:', roomPath);

    // Verify room exists first
    const roomRef = ref(rtdb, roomPath);
    const snapshot = await get(roomRef);
    if (!snapshot.exists()) {
      console.error('Room does not exist:', roomId);
      return { error: 'Room not found' };
    }
    console.log('Room exists, updating...');

    // Update with a single call
    await update(roomRef, {
      status: 'playing',
      startTime: startTime
    });
    console.log('Room updated successfully');

    return { success: true, startTime };
  } catch (e) {
    console.error('Firebase error in startRoom:', e);
    console.error('Error message:', e.message);
    console.error('Error code:', e.code);
    return { error: e.message || 'Network error' };
  }
}

export async function submitWords(roomId, userId, words) {
  try {
    const playerRef = ref(rtdb, `spelling-bee/rooms/${roomId}/players/${userId}`);
    await update(playerRef, {
      words: words.join(','),
      submitted: true
    });

    const roomSnapshot = await get(ref(rtdb, `spelling-bee/rooms/${roomId}`));
    const room = roomSnapshot.val();
    const players = Object.values(room.players || {});
    const allSubmitted = players.every(p => p.submitted);

    if (allSubmitted) {
      await calculateAndSetResults(roomId);
    }

    return { success: true };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

async function calculateAndSetResults(roomId) {
  try {
    const roomSnapshot = await get(ref(rtdb, `spelling-bee/rooms/${roomId}`));
    const room = roomSnapshot.val();
    if (!room || !room.players) return;

    const playerWords = {};
    const playerNames = Object.keys(room.players);
    playerNames.forEach(userId => {
      const data = room.players[userId];
      playerWords[userId] = data.words
        ? data.words.split(',').map(w => w.trim().toLowerCase()).filter(w => w)
        : [];
    });

    // No duplicate cancellation — Spelling Bee MP is a race for most words
    const isPangram = (word) => new Set(word.split('')).size >= 7;

    // Score each player on ALL their words
    const results = playerNames.map(userId => {
      const words = playerWords[userId];
      const score = words.reduce((total, word) => {
        return total + getSpellingBeeScore(word, isPangram(word));
      }, 0);
      return {
        userId,
        displayName: room.players[userId].displayName,
        words,
        score
      };
    });

    results.sort((a, b) => b.score - a.score);

    await update(ref(rtdb, `spelling-bee/rooms/${roomId}`), {
      status: 'finished',
      results: { players: results, status: 'finished' }
    });
  } catch (e) {
    console.error('Error calculating results:', e);
  }
}

export async function getResults(roomId) {
  try {
    const snapshot = await get(ref(rtdb, `spelling-bee/rooms/${roomId}`));
    if (!snapshot.exists()) return { error: 'Room not found' };

    const room = snapshot.val();
    if (room.results) return room.results;

    await calculateAndSetResults(roomId);
    const updatedSnapshot = await get(ref(rtdb, `spelling-bee/rooms/${roomId}/results`));
    return updatedSnapshot.val() || { error: 'Results not available' };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

export async function leaveRoom(roomId, userId, isHost) {
  try {
    if (isHost) {
      await remove(ref(rtdb, `spelling-bee/rooms/${roomId}`));
    } else {
      await remove(ref(rtdb, `spelling-bee/rooms/${roomId}/players/${userId}`));
    }
  } catch (e) {
    console.error('Firebase error:', e);
  }
}

export async function playAgain(roomId, newPuzzleCode) {
  try {
    const roomRef = ref(rtdb, `spelling-bee/rooms/${roomId}`);
    const snapshot = await get(roomRef);
    const room = snapshot.val();
    if (!room) return { error: 'Room not found' };

    const resetPlayers = {};
    Object.keys(room.players).forEach(userId => {
      resetPlayers[userId] = {
        displayName: room.players[userId].displayName,
        joinedAt: room.players[userId].joinedAt,
        submitted: false
      };
    });

    await update(roomRef, {
      puzzleCode: newPuzzleCode,
      status: 'waiting',
      startTime: null,
      results: null,
      players: resetPlayers
    });

    return { success: true };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

// ============================================
// REAL-TIME LISTENERS
// ============================================

export function startRoomListener(roomId, callback) {
  const roomRef = ref(rtdb, `spelling-bee/rooms/${roomId}`);
  const unsubscribe = onValue(roomRef, (snapshot) => {
    if (!snapshot.exists()) {
      callback({ deleted: true });
      return;
    }
    callback({ ...snapshot.val(), roomId });
  });
  return unsubscribe;
}

export function startLobbyListener(callback) {
  const roomsRef = ref(rtdb, 'spelling-bee/rooms');
  const waitingQuery = query(roomsRef, orderByChild('status'), equalTo('waiting'));

  const unsubscribe = onValue(waitingQuery, (snapshot) => {
    const lobbies = [];
    snapshot.forEach(child => {
      const room = child.val();
      if (room.createdAt && Date.now() - room.createdAt < 60 * 60 * 1000) {
        lobbies.push({
          roomId: child.key,
          hostName: room.hostName || 'Unknown',
          playerCount: Object.keys(room.players || {}).length,
          createdAt: room.createdAt
        });
      }
    });
    lobbies.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    callback(lobbies);
  });

  return unsubscribe;
}
