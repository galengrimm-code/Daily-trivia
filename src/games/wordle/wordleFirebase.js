// src/games/wordle/wordleFirebase.js
import { ref, get, set, serverTimestamp } from 'firebase/database';
import { rtdb } from '../../utils/firebase';

// Check if a player has already played today's Wordle
export async function checkWordlePlayer(userId, dateKey) {
  try {
    const snapshot = await get(ref(rtdb, `wordle/daily/${dateKey}/players/${userId}`));
    if (snapshot.exists()) {
      const data = snapshot.val();
      return { played: true, won: data.won, guesses: data.guesses, score: data.score };
    }
    return { played: false };
  } catch (e) {
    console.error('Firebase error:', e);
    return { played: false };
  }
}

// Save daily Wordle score
export async function saveWordleScore(userId, displayName, dateKey, won, guesses) {
  try {
    const playerRef = ref(rtdb, `wordle/daily/${dateKey}/players/${userId}`);

    // Prevent overwrites
    const existing = await get(playerRef);
    if (existing.exists()) return { alreadyPlayed: true };

    // Score: 7 - guesses for win (6 for 1 guess, 1 for 6 guesses), 0 for loss
    const score = won ? (7 - guesses) : 0;

    await set(playerRef, {
      displayName,
      won,
      guesses,
      score,
      playedAt: serverTimestamp()
    });

    return { success: true, score };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}

// Get daily Wordle leaderboard
export async function getWordleLeaderboard(dateKey) {
  try {
    const snapshot = await get(ref(rtdb, `wordle/daily/${dateKey}/players`));
    if (!snapshot.exists()) return [];

    const players = [];
    snapshot.forEach(child => {
      const data = child.val();
      players.push({
        userId: child.key,
        displayName: data.displayName || 'Anonymous',
        won: data.won,
        guesses: data.guesses,
        score: data.score
      });
    });

    // Sort by score (higher is better), then by guesses (fewer is better for winners)
    players.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      // For tied scores, sort by fewer guesses
      return a.guesses - b.guesses;
    });

    return players;
  } catch (e) {
    console.error('Firebase error:', e);
    return [];
  }
}

// Get user's Wordle statistics from Firebase
export async function getWordleStats(userId) {
  try {
    const snapshot = await get(ref(rtdb, `userStats/${userId}/wordle`));
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (e) {
    console.error('Firebase error:', e);
    return null;
  }
}

// Save user's Wordle statistics to Firebase
export async function saveWordleStats(userId, stats) {
  try {
    await set(ref(rtdb, `userStats/${userId}/wordle`), stats);
    return { success: true };
  } catch (e) {
    console.error('Firebase error:', e);
    return { error: 'Network error' };
  }
}
