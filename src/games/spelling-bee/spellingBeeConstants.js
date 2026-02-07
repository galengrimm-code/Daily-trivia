// src/games/spelling-bee/spellingBeeConstants.js

export const GAME_DURATION = 180; // 3 minutes
export const MIN_WORD_LENGTH = 4;
export const PANGRAM_BONUS = 7;
export const MAX_PLAYERS = 8;

// Scoring: 4-letter = 1pt, 5+ = word length, pangram = length + 7
export function getSpellingBeeScore(word, isPangram) {
  if (word.length === 4) return isPangram ? 1 + PANGRAM_BONUS : 1;
  return isPangram ? word.length + PANGRAM_BONUS : word.length;
}

// Rank thresholds as percentage of max possible score
export const RANKS = [
  { name: 'Beginner',    threshold: 0,    emoji: '\u{1F331}' },
  { name: 'Good Start',  threshold: 0.02, emoji: '\u{1F33F}' },
  { name: 'Moving Up',   threshold: 0.05, emoji: '\u{1F33B}' },
  { name: 'Good',        threshold: 0.08, emoji: '\u{2B50}' },
  { name: 'Solid',       threshold: 0.15, emoji: '\u{1F31F}' },
  { name: 'Nice',        threshold: 0.25, emoji: '\u{1F525}' },
  { name: 'Great',       threshold: 0.40, emoji: '\u{1F4AA}' },
  { name: 'Amazing',     threshold: 0.50, emoji: '\u{1F3C6}' },
  { name: 'Genius',      threshold: 0.70, emoji: '\u{1F9E0}' },
  { name: 'Queen Bee',   threshold: 1.00, emoji: '\u{1F41D}' },
];

export function getCurrentRank(score, maxScore) {
  if (maxScore === 0) return RANKS[0];
  const pct = score / maxScore;
  let rank = RANKS[0];
  for (const r of RANKS) {
    if (pct >= r.threshold) rank = r;
    else break;
  }
  return rank;
}

export function getNextRank(score, maxScore) {
  if (maxScore === 0) return null;
  const pct = score / maxScore;
  for (const r of RANKS) {
    if (pct < r.threshold) {
      return { rank: r, pointsNeeded: Math.ceil(r.threshold * maxScore) - score };
    }
  }
  return null; // Already Queen Bee
}
