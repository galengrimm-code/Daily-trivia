// src/hooks/useLeaderboard.js
import { useState, useCallback } from 'react';
import { getTodayLeaderboard, getWeeklyLeaderboard } from '../utils/firestore';
import { getBoggleLeaderboard } from '../games/boggle/boggleFirebase';
import { getSpellingBeeLeaderboard } from '../games/spelling-bee/spellingBeeFirebase';
import { getWordleLeaderboard } from '../games/wordle/wordleFirebase';
import { getTodayKey } from '../utils/helpers';

export function useLeaderboard() {
  const [todayLeaderboard, setTodayLeaderboard] = useState([]);
  const [weeklyLeaderboard, setWeeklyLeaderboard] = useState([]);
  const [boggleLeaderboard, setBoggleLeaderboard] = useState([]);
  const [spellingBeeLeaderboard, setSpellingBeeLeaderboard] = useState([]);
  const [wordleLeaderboard, setWordleLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadLeaderboards = useCallback(async () => {
    setLoading(true);
    try {
      const dateKey = getTodayKey();
      const [today, weekly, boggle, spellingBee, wordle] = await Promise.all([
        getTodayLeaderboard(),
        getWeeklyLeaderboard(),
        getBoggleLeaderboard(dateKey),
        getSpellingBeeLeaderboard(dateKey),
        getWordleLeaderboard(dateKey)
      ]);
      setTodayLeaderboard(today);
      setWeeklyLeaderboard(weekly);
      setBoggleLeaderboard(boggle);
      setSpellingBeeLeaderboard(spellingBee);
      setWordleLeaderboard(wordle);
    } catch (error) {
      console.error('Failed to load leaderboards:', error);
    }
    setLoading(false);
  }, []);

  return {
    todayLeaderboard,
    weeklyLeaderboard,
    boggleLeaderboard,
    spellingBeeLeaderboard,
    wordleLeaderboard,
    loading,
    loadLeaderboards
  };
}
