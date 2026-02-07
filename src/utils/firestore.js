// src/utils/firestore.js
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase';
import { getTodayKey, calculateStreak } from './helpers';

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
  const today = new Date();
  const weekAgo = new Date(today);
  weekAgo.setDate(weekAgo.getDate() - 7);
  const weekAgoKey = `${weekAgo.getFullYear()}-${String(weekAgo.getMonth() + 1).padStart(2, '0')}-${String(weekAgo.getDate()).padStart(2, '0')}`;

  const scoresRef = collection(db, 'scores');
  const q = query(
    scoresRef,
    where('date', '>=', weekAgoKey),
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

// ============================================
// TRIVIA SESSION TOKEN FUNCTIONS
// ============================================

export const getTriviaSessionToken = async () => {
  const tokenRef = doc(db, 'settings', 'triviaToken');
  const tokenSnap = await getDoc(tokenRef);

  if (tokenSnap.exists()) {
    return tokenSnap.data();
  }
  return null;
};

export const updateTriviaSessionToken = async (token) => {
  const tokenRef = doc(db, 'settings', 'triviaToken');

  await setDoc(tokenRef, {
    token,
    createdAt: Timestamp.now()
  });

  return token;
};
