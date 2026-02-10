// src/utils/firestore.js
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase';
import { getTodayKey, getWeekStartKey, calculateStreak } from './helpers';

// ============================================
// USER FUNCTIONS
// ============================================

export const getUserProfile = async (userId) => {
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return { id: userId, ...userSnap.data() };
  }
  return null;
};

export const createUserProfile = async (userId, displayName) => {
  const userRef = doc(db, 'users', userId);
  const userData = {
    displayName,
    streak: 0,
    longestStreak: 0,
    totalGames: 0,
    totalCorrect: 0,
    lastPlayed: null,
    createdAt: Timestamp.now()
  };

  await setDoc(userRef, userData);
  return { id: userId, ...userData };
};

export const updateUserStats = async (userId, score, totalQuestions) => {
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) return null;

  const userData = userSnap.data();
  const today = getTodayKey();
  const newStreak = calculateStreak(userData.lastPlayed, userData.streak);
  const longestStreak = Math.max(newStreak, userData.longestStreak || 0);

  const updates = {
    streak: newStreak,
    longestStreak,
    totalGames: userData.totalGames + 1,
    totalCorrect: userData.totalCorrect + score,
    lastPlayed: today
  };

  await updateDoc(userRef, updates);
  return { id: userId, ...userData, ...updates };
};

// ============================================
// SCORE FUNCTIONS
// ============================================

export const saveScore = async (userId, displayName, score, totalQuestions, durationSeconds = 0) => {
  const today = getTodayKey();
  const scoreId = `${userId}_${today}`;
  const scoreRef = doc(db, 'scores', scoreId);

  const scoreData = {
    userId,
    displayName,
    score,
    totalQuestions,
    duration: durationSeconds,
    date: today,
    timestamp: Timestamp.now()
  };

  await setDoc(scoreRef, scoreData);
  return scoreData;
};

export const hasPlayedToday = async (userId) => {
  const today = getTodayKey();
  const scoreId = `${userId}_${today}`;
  const scoreRef = doc(db, 'scores', scoreId);
  const scoreSnap = await getDoc(scoreRef);

  return scoreSnap.exists() ? scoreSnap.data() : null;
};

export const getTodayLeaderboard = async () => {
  const today = getTodayKey();
  const scoresRef = collection(db, 'scores');
  const q = query(
    scoresRef,
    where('date', '==', today),
    orderBy('score', 'desc'),
    orderBy('duration', 'asc'),
    limit(50)
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getWeeklyLeaderboard = async () => {
  // Week starts Monday at 2 AM CT, resets Sunday night at 2 AM CT
  const weekStartKey = getWeekStartKey();

  const scoresRef = collection(db, 'scores');
  const q = query(
    scoresRef,
    where('date', '>=', weekStartKey),
    orderBy('date', 'desc')
  );

  const snapshot = await getDocs(q);
  const scores = snapshot.docs.map(doc => doc.data());

  const userScores = {};
  scores.forEach(score => {
    if (!userScores[score.userId]) {
      userScores[score.userId] = {
        userId: score.userId,
        displayName: score.displayName,
        totalScore: 0,
        gamesPlayed: 0
      };
    }
    userScores[score.userId].totalScore += score.score;
    userScores[score.userId].gamesPlayed += 1;
  });

  return Object.values(userScores).sort((a, b) => b.totalScore - a.totalScore);
};

export const getUserScoreHistory = async (userId, limitCount = 30) => {
  const scoresRef = collection(db, 'scores');
  const q = query(
    scoresRef,
    where('userId', '==', userId),
    orderBy('date', 'desc'),
    limit(limitCount)
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// ============================================
// DAILY QUESTIONS FUNCTIONS
// ============================================

export const getTodaysQuestionsFromDB = async () => {
  const today = getTodayKey();
  const questionsRef = doc(db, 'dailyQuestions', today);
  const questionsSnap = await getDoc(questionsRef);

  if (questionsSnap.exists()) {
    return questionsSnap.data().questions;
  }
  return null;
};

export const saveTodaysQuestionsToDB = async (questions) => {
  const today = getTodayKey();
  const questionsRef = doc(db, 'dailyQuestions', today);

  await setDoc(questionsRef, {
    questions,
    date: today,
    createdAt: Timestamp.now()
  });

  return questions;
};

export const deleteTodaysQuestions = async () => {
  const today = getTodayKey();
  const questionsRef = doc(db, 'dailyQuestions', today);
  await deleteDoc(questionsRef);
  console.log(`Deleted questions for ${today}`);
  return today;
};

// ============================================
// QUESTION TRACKING FUNCTIONS (prevent repeats)
// ============================================

// Get recently used question hashes (last 60 days)
export const getRecentQuestionHashes = async () => {
  const trackingRef = doc(db, 'settings', 'usedQuestions');
  const trackingSnap = await getDoc(trackingRef);

  if (trackingSnap.exists()) {
    const data = trackingSnap.data();
    const sixtyDaysAgo = Date.now() - (60 * 24 * 60 * 60 * 1000);

    // Filter to only include hashes from the last 60 days
    const recentHashes = {};
    Object.entries(data.hashes || {}).forEach(([hash, timestamp]) => {
      if (timestamp > sixtyDaysAgo) {
        recentHashes[hash] = timestamp;
      }
    });

    return recentHashes;
  }
  return {};
};

// Get all used question hashes (lifetime)
export const getAllQuestionHashes = async () => {
  const trackingRef = doc(db, 'settings', 'usedQuestions');
  const trackingSnap = await getDoc(trackingRef);

  if (trackingSnap.exists()) {
    return trackingSnap.data().hashes || {};
  }
  return {};
};

// Get used question count by comparing hashes to a pool of questions
export const getUsedQuestionCount = (questionPool, usedHashes) => {
  // Simple hash function (must match the one in api.js)
  const hashQuestion = (questionText) => {
    let hash = 0;
    const str = questionText.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash.toString(36);
  };

  let usedCount = 0;
  questionPool.forEach(q => {
    const hash = hashQuestion(q.q);
    if (usedHashes[hash]) {
      usedCount++;
    }
  });

  return usedCount;
};

// Add a question hash to the tracking list
export const addQuestionHash = async (hash) => {
  const trackingRef = doc(db, 'settings', 'usedQuestions');
  const trackingSnap = await getDoc(trackingRef);

  let hashes = {};
  if (trackingSnap.exists()) {
    hashes = trackingSnap.data().hashes || {};
  }

  // Add new hash with current timestamp
  hashes[hash] = Date.now();

  // Clean up old hashes (older than 60 days)
  const sixtyDaysAgo = Date.now() - (60 * 24 * 60 * 60 * 1000);
  Object.keys(hashes).forEach(h => {
    if (hashes[h] < sixtyDaysAgo) {
      delete hashes[h];
    }
  });

  await setDoc(trackingRef, { hashes });
};
