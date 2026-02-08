// src/utils/helpers.js

// Get the current "game day" in Central Time (resets at 2 AM CT)
const getGameDay = () => {
  // Get current time in Central Time
  const now = new Date();
  const centralTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Chicago' }));

  // If before 2 AM CT, use previous day as the game day
  if (centralTime.getHours() < 2) {
    centralTime.setDate(centralTime.getDate() - 1);
  }

  return centralTime;
};

// Get today's date as a string key (YYYY-MM-DD) based on Central Time, resets at 2 AM
export const getTodayKey = () => {
  const gameDay = getGameDay();
  return `${gameDay.getFullYear()}-${String(gameDay.getMonth() + 1).padStart(2, '0')}-${String(gameDay.getDate()).padStart(2, '0')}`;
};

// Seeded random for consistent daily questions
export const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Get seed from today's date (based on Central Time game day)
export const getTodaySeed = () => {
  const gameDay = getGameDay();
  return gameDay.getFullYear() * 10000 + (gameDay.getMonth() + 1) * 100 + gameDay.getDate();
};

// Decode HTML entities from API responses
export const decodeHTML = (str) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
};

// Shuffle array using Fisher-Yates algorithm
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Parse a YYYY-MM-DD string as local date (not UTC)
export const parseLocalDate = (dateStr) => {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
};

// Calculate days between two date strings (using local time)
export const daysBetween = (date1, date2) => {
  const d1 = parseLocalDate(date1);
  const d2 = parseLocalDate(date2);
  const diffTime = Math.abs(d2 - d1);
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
};

// Get the start of the current week (Monday at 2 AM CT)
// Week resets Sunday night at 2 AM CT (which is Monday 2 AM CT)
export const getWeekStartKey = () => {
  const gameDay = getGameDay();

  // Get day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = gameDay.getDay();

  // Calculate days since Monday (if Sunday, it's 6 days since Monday)
  const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  // Go back to Monday
  const monday = new Date(gameDay);
  monday.setDate(monday.getDate() - daysSinceMonday);

  return `${monday.getFullYear()}-${String(monday.getMonth() + 1).padStart(2, '0')}-${String(monday.getDate()).padStart(2, '0')}`;
};

// Check if streak should continue or reset
export const calculateStreak = (lastPlayed, currentStreak) => {
  if (!lastPlayed) return 1;
  
  const today = getTodayKey();
  if (lastPlayed === today) return currentStreak; // Already played today
  
  const days = daysBetween(lastPlayed, today);
  if (days === 1) return currentStreak + 1; // Consecutive day
  return 1; // Streak broken, start fresh
};

// Category configuration
export const CATEGORIES = {
  History: { id: 23, color: 'bg-amber-500', icon: '📜' },
  Geography: { id: 22, color: 'bg-emerald-500', icon: '🌍' },
  Science: { id: 17, color: 'bg-blue-500', icon: '🔬' },
  Bible: { id: null, color: 'bg-purple-500', icon: '📖' },
  Math: { id: 19, color: 'bg-rose-500', icon: '🔢' },
  Animals: { id: 27, color: 'bg-green-500', icon: '🐾' }
};

export const ALL_CATEGORIES = Object.keys(CATEGORIES);
