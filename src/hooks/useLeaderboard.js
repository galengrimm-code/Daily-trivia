// src/hooks/useLeaderboard.js
import { useState, useCallback } from 'react';
import { getTodayLeaderboard, getWeeklyLeaderboard } from '../utils/firestore';

export function useLeaderboard() {
  const [todayLeaderboard, setTodayLeaderboard] = useState([]);
  const [weeklyLeaderboard, setWeeklyLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadLeaderboards = useCallback(async () => {
    setLoading(true);
    try {
      const [today, weekly] = await Promise.all([
        getTodayLeaderboard(),
        getWeeklyLeaderboard()
      ]);
      setTodayLeaderboard(today);
      setWeeklyLeaderboard(weekly);
    } catch (error) {
      console.error('Failed to load leaderboards:', error);
    }
    setLoading(false);
  }, []);

  return { todayLeaderboard, weeklyLeaderboard, loading, loadLeaderboards };
}
