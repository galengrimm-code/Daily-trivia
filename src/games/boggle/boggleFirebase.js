// src/games/boggle/boggleFirebase.js
import { ref, get, set, update, remove, onValue, query, orderByChild, equalTo, endAt, limitToFirst, serverTimestamp } from 'firebase/database';
import { rtdb } from '../../utils/firebase';
import { getWordScore } from './boggleUtils';

// ============================================
// DAILY MODE
// ============================================

// Check if a player has already played today's daily boggle
export async function checkBogglePlayer(userId, dateKey) {
  try {
    const snapshot = await get(ref(rtdb, `boggle/daily/${dateKey}/players/${userId}`));
    if (snapshot.exists()) {
      const data = snapshot.val();
      return { played: true, score: data.score, wordCount: data.wordCount };
    }
    return { played: false };
  } catch (e) {
    console.error('Firebase error:', e);
    return { played: false };
  }
}

// Save daily boggle score
export async function saveBoggleScore(userId, displayName, dateKey, score, wordCount) {
  try {
    const playerRef = ref(rtdb, `boggle/daily/${dateKey}/players/${userId}`);

    // Prevent overwrites
    const existing = await get(playerRef);
    if (existing.exists()) return;

    await set(playerRef, {
      displayName,
      score,
      wordCount,
      playedAt: serverTimestamp()
    });
  } catch (e) {
    console.error('Firebase error:', e);
  }
}

// Get daily boggle leaderboard
export async function getBoggleLeaderboard(dateKey) {
  try {
    const snapshot = await get(ref(rtdb, `boggle/daily/${dateKey}/players`));
    if (!snapshot.exists()) return [];

    const players = [];
    snapshot.forEach(child => {
      const data = child.val();
      players.push({
        userId: child.key,
        displayName: data.displayName || 'Anonymous',
        score: data.score,
        wordCount: data.wordCount
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

// Clean up rooms older than 1 hour
async function cleanupOldRooms() {
  try {
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    const roomsQuery = query(
      ref(rtdb, 'boggle/rooms'),
      orderByChild('createdAt'),
      endAt(oneHourAgo),
      limitToFirst(10)
    );
    const snapshot = await get(roomsQuery);

    const promises = [];
    snapshot.forEach(child => {
      promises.push(remove(ref(rtdb, `boggle/rooms/${child.key}`)));
    });
    await Promise.all(promises);
  } catch (e) {
    console.error('Cleanup error:', e);
  }
}

// Create a multiplayer room
export async function createRoom(userId, displayName, boardCode) {
  try {
    await cleanupOldRooms();

    // Generate unique 5-digit room ID
    let roomId;
    let attempts = 0;
    do {
      roomId = String(Math.floor(10000 + Math.random() * 90000));
      const exists = await get(ref(rtdb, `boggle/rooms/${roomId}`));
      if (!exists.exists()) break;
      attempts++;
    } while (attempts < 10);

    if (attempts >= 10) {
      return { error: 'Could not generate room ID' };
    }

    const roomData = {
      boardCode,
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

    await set(ref(rtdb, `boggle/rooms/${roomId}`), roomData);
    return { roomId, boardCode };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

// Join a multiplayer room
export async function joinRoom(roomId, userId, displayName) {
  try {
    const roomRef = ref(rtdb, `boggle/rooms/${roomId}`);
    const snapshot = await get(roomRef);

    if (!snapshot.exists()) return { error: 'Room not found' };

    const room = snapshot.val();
    if (room.status !== 'waiting') return { error: 'Game already started' };

    const playerCount = Object.keys(room.players || {}).length;
    if (playerCount >= 8) return { error: 'Room is full' };

    await set(ref(rtdb, `boggle/rooms/${roomId}/players/${userId}`), {
      displayName,
      joinedAt: serverTimestamp(),
      submitted: false
    });

    const updatedSnapshot = await get(ref(rtdb, `boggle/rooms/${roomId}/players`));
    const players = {};
    updatedSnapshot.forEach(child => {
      players[child.key] = child.val();
    });

    return { boardCode: room.boardCode, players };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

// Start a room (host only) — sets status to playing with server-synced start time
export async function startRoom(roomId) {
  try {
    // Get server time offset
    const offsetSnapshot = await get(ref(rtdb, '.info/serverTimeOffset'));
    const offset = offsetSnapshot.val() || 0;
    const serverTime = Date.now() + offset;
    const startTime = serverTime + 5000; // 5 seconds from now

    await update(ref(rtdb, `boggle/rooms/${roomId}`), {
      status: 'playing',
      startTime
    });

    return { success: true, startTime };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

// Submit words after game ends
export async function submitWords(roomId, userId, words) {
  try {
    const playerRef = ref(rtdb, `boggle/rooms/${roomId}/players/${userId}`);
    await update(playerRef, {
      words: words.join(','),
      submitted: true
    });

    // Check if all players have submitted
    const roomSnapshot = await get(ref(rtdb, `boggle/rooms/${roomId}`));
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

// Calculate and store multiplayer results
async function calculateAndSetResults(roomId) {
  try {
    const roomSnapshot = await get(ref(rtdb, `boggle/rooms/${roomId}`));
    const room = roomSnapshot.val();
    if (!room || !room.players) return;

    // Collect words by player
    const playerWords = {};
    const playerNames = Object.keys(room.players);
    playerNames.forEach(userId => {
      const data = room.players[userId];
      playerWords[userId] = data.words
        ? data.words.split(',').map(w => w.trim().toLowerCase()).filter(w => w)
        : [];
    });

    // Find duplicates
    const wordCounts = {};
    Object.values(playerWords).forEach(words => {
      words.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
      });
    });
    const duplicates = Object.keys(wordCounts).filter(w => wordCounts[w] > 1);

    // Score each player (excluding duplicates)
    const results = playerNames.map(userId => {
      const words = playerWords[userId];
      const uniqueWords = words.filter(w => !duplicates.includes(w));
      const score = uniqueWords.reduce((total, word) => total + getWordScore(word), 0);
      return {
        userId,
        displayName: room.players[userId].displayName,
        words,
        uniqueWords,
        score
      };
    });

    results.sort((a, b) => b.score - a.score);

    await update(ref(rtdb, `boggle/rooms/${roomId}`), {
      status: 'finished',
      results: { players: results, duplicates, status: 'finished' }
    });
  } catch (e) {
    console.error('Error calculating results:', e);
  }
}

// Get multiplayer results
export async function getResults(roomId) {
  try {
    const snapshot = await get(ref(rtdb, `boggle/rooms/${roomId}`));
    if (!snapshot.exists()) return { error: 'Room not found' };

    const room = snapshot.val();
    if (room.results) return room.results;

    // Results not ready — calculate them
    await calculateAndSetResults(roomId);
    const updatedSnapshot = await get(ref(rtdb, `boggle/rooms/${roomId}/results`));
    return updatedSnapshot.val() || { error: 'Results not available' };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

// Leave a room
export async function leaveRoom(roomId, userId, isHost) {
  try {
    if (isHost) {
      await remove(ref(rtdb, `boggle/rooms/${roomId}`));
    } else {
      await remove(ref(rtdb, `boggle/rooms/${roomId}/players/${userId}`));
    }
  } catch (e) {
    console.error('Firebase error:', e);
  }
}

// Reset room for another game (host only)
export async function playAgain(roomId, newBoardCode) {
  try {
    const roomRef = ref(rtdb, `boggle/rooms/${roomId}`);
    const snapshot = await get(roomRef);
    const room = snapshot.val();
    if (!room) return { error: 'Room not found' };

    // Reset each player's state
    const resetPlayers = {};
    Object.keys(room.players).forEach(userId => {
      resetPlayers[userId] = {
        displayName: room.players[userId].displayName,
        joinedAt: room.players[userId].joinedAt,
        submitted: false
      };
    });

    await update(roomRef, {
      boardCode: newBoardCode,
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

// Listen for room changes (returns unsubscribe function)
export function startRoomListener(roomId, callback) {
  const roomRef = ref(rtdb, `boggle/rooms/${roomId}`);
  const unsubscribe = onValue(roomRef, (snapshot) => {
    if (!snapshot.exists()) {
      callback({ deleted: true });
      return;
    }
    callback({ ...snapshot.val(), roomId });
  });
  return unsubscribe;
}

// Listen for open lobbies (returns unsubscribe function)
export function startLobbyListener(callback) {
  const roomsRef = ref(rtdb, 'boggle/rooms');
  const waitingQuery = query(roomsRef, orderByChild('status'), equalTo('waiting'));

  const unsubscribe = onValue(waitingQuery, (snapshot) => {
    const lobbies = [];
    snapshot.forEach(child => {
      const room = child.val();
      // Only show rooms less than 1 hour old
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
