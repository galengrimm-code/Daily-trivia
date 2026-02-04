// src/utils/helpers.js

// Get today's date as a string key (YYYY-MM-DD)
export const getTodayKey = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
};

// Seeded random for consistent daily questions
export const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Get seed from today's date
export const getTodaySeed = () => {
  const today = new Date();
  return today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
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
  Math: { id: 19, color: 'bg-rose-500', icon: '🔢' }
};

export const ALL_CATEGORIES = Object.keys(CATEGORIES);
