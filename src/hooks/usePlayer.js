// src/hooks/usePlayer.js
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
  browserLocalPersistence,
  setPersistence
} from 'firebase/auth';
import { auth, googleProvider } from '../utils/firebase';
import {
  getUserProfile,
  createUserProfile,
  updateUserStats,
  saveScore,
  hasPlayedToday
} from '../utils/firestore';
import { getTodayKey } from '../utils/helpers';

const PlayerContext = createContext(null);

export function PlayerProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [todayScore, setTodayScore] = useState(null);
  const [lastCheckedDate, setLastCheckedDate] = useState(null);

  // Handle auth state and redirect result
  useEffect(() => {
    let unsubscribe;

    const initAuth = async () => {
      try {
        await getRedirectResult(auth);
      } catch (error) {
        console.error('Redirect sign in error:', error);
      }

      unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        setUser(firebaseUser);

        if (firebaseUser) {
          let profile = await getUserProfile(firebaseUser.uid);
          if (!profile) {
            profile = await createUserProfile(
              firebaseUser.uid,
              firebaseUser.displayName || 'Player'
            );
          }
          setUserProfile(profile);

          const todayResult = await hasPlayedToday(firebaseUser.uid);
          setTodayScore(todayResult);
          setLastCheckedDate(getTodayKey());
        } else {
          setUserProfile(null);
          setTodayScore(null);
        }

        setAuthLoading(false);
      });
    };

    initAuth();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // Recheck if date has changed when app regains focus
  useEffect(() => {
    const recheckForNewDay = async () => {
      const today = getTodayKey();
      if (user && lastCheckedDate && lastCheckedDate !== today) {
        const todayResult = await hasPlayedToday(user.uid);
        setTodayScore(todayResult);
        setLastCheckedDate(today);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        recheckForNewDay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', recheckForNewDay);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', recheckForNewDay);
    };
  }, [user, lastCheckedDate]);

  const handleSignIn = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      try {
        await signInWithPopup(auth, googleProvider);
      } catch (popupError) {
        if (popupError.code === 'auth/popup-blocked' ||
            popupError.code === 'auth/popup-closed-by-user' ||
            popupError.code === 'auth/cancelled-popup-request') {
          await signInWithRedirect(auth, googleProvider);
        } else {
          throw popupError;
        }
      }
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  // Called after completing trivia quiz
  const completeTrivia = useCallback(async (score, totalQuestions, durationSeconds) => {
    if (!user || !userProfile) return;

    await saveScore(user.uid, userProfile.displayName, score, totalQuestions, durationSeconds);

    const updatedProfile = await updateUserStats(user.uid, score, totalQuestions);
    setUserProfile(updatedProfile);
    setTodayScore({ score, totalQuestions });
  }, [user, userProfile]);

  // Manually refresh today's score check
  const refreshTodayScore = useCallback(async () => {
    if (!user) return;
    const todayResult = await hasPlayedToday(user.uid);
    setTodayScore(todayResult);
    setLastCheckedDate(getTodayKey());
  }, [user]);

  const value = {
    user,
    userProfile,
    authLoading,
    todayScore,
    handleSignIn,
    handleSignOut,
    completeTrivia,
    refreshTodayScore
  };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};
