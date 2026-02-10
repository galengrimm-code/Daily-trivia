// src/games/wordle/wordleUtils.js
import { getTodaySeed, seededRandom } from '../../utils/helpers';
import wordleWords from '../../data/wordleWords';
import wordleUsedWords from '../../data/wordleUsedWords';

// Get today's word using seeded random (same word for everyone each day)
export const getTodaysWord = () => {
  // Filter out already used words
  const availableWords = wordleWords.filter(w => !wordleUsedWords.includes(w));

  // If all words used, use full pool
  const pool = availableWords.length > 0 ? availableWords : wordleWords;

  const seed = getTodaySeed();
  const index = Math.floor(seededRandom(seed) * pool.length);
  return pool[index];
};

// Check if a word is valid (in the word list)
export const isValidWord = (word) => {
  return wordleWords.includes(word.toUpperCase());
};

// Evaluate a guess against the target word
// Returns array of { letter, status } where status is 'correct', 'present', or 'absent'
export const evaluateGuess = (guess, target) => {
  const guessArr = guess.toUpperCase().split('');
  const targetArr = target.toUpperCase().split('');
  const result = guessArr.map(letter => ({ letter, status: 'absent' }));

  // Track which target letters have been matched
  const targetMatched = new Array(5).fill(false);
  const guessMatched = new Array(5).fill(false);

  // First pass: find exact matches (correct position)
  for (let i = 0; i < 5; i++) {
    if (guessArr[i] === targetArr[i]) {
      result[i].status = 'correct';
      targetMatched[i] = true;
      guessMatched[i] = true;
    }
  }

  // Second pass: find present letters (wrong position)
  for (let i = 0; i < 5; i++) {
    if (guessMatched[i]) continue; // Skip already matched

    for (let j = 0; j < 5; j++) {
      if (targetMatched[j]) continue; // Skip already matched target letters

      if (guessArr[i] === targetArr[j]) {
        result[i].status = 'present';
        targetMatched[j] = true;
        break;
      }
    }
  }

  return result;
};

// Get keyboard letter statuses from all guesses
export const getKeyboardStatus = (guesses, target) => {
  const status = {};

  for (const guess of guesses) {
    const evaluation = evaluateGuess(guess, target);
    for (const { letter, status: letterStatus } of evaluation) {
      // Correct > Present > Absent (don't downgrade)
      if (status[letter] === 'correct') continue;
      if (status[letter] === 'present' && letterStatus === 'absent') continue;
      status[letter] = letterStatus;
    }
  }

  return status;
};

// Generate share text for completed game
export const generateShareText = (guesses, target, won, shortDate) => {
  const emojiGrid = guesses.map(guess => {
    const evaluation = evaluateGuess(guess, target);
    return evaluation.map(({ status }) => {
      if (status === 'correct') return '🟩';
      if (status === 'present') return '🟨';
      return '⬛';
    }).join('');
  }).join('\n');

  const score = won ? `${guesses.length}/6` : 'X/6';

  return `Wordle\n${shortDate}\n${score}\n\n${emojiGrid}`;
};

// Animation delays for revealing tiles
export const REVEAL_DELAY = 300; // ms per tile
export const SHAKE_DURATION = 600; // ms for invalid word shake
export const BOUNCE_DELAY = 100; // ms between letter bounces on win
