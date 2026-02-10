// src/games/boggle/boggleUtils.js
import { BOGGLE_DICE, WORD_SCORES, MIN_WORD_LENGTH } from './boggleConstants';

// Seeded random number generator (deterministic)
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate daily board from date string (e.g., "2025-01-15")
export function generateDailyBoard(dateString) {
  const seed = dateString.split('-').join('') * 1;
  let currentSeed = seed;

  const shuffledDice = [...BOGGLE_DICE];
  for (let i = shuffledDice.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(currentSeed++) * (i + 1));
    [shuffledDice[i], shuffledDice[j]] = [shuffledDice[j], shuffledDice[i]];
  }

  return shuffledDice.map(die => {
    const faceIndex = Math.floor(seededRandom(currentSeed++) * 6);
    const letter = die[faceIndex];
    return letter === 'Q' ? 'Qu' : letter;
  });
}

// Generate board from numeric seed (for practice/multiplayer)
export function generateSeededBoard(seed) {
  let currentSeed = seed;

  const shuffledDice = [...BOGGLE_DICE];
  for (let i = shuffledDice.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(currentSeed++) * (i + 1));
    [shuffledDice[i], shuffledDice[j]] = [shuffledDice[j], shuffledDice[i]];
  }

  return shuffledDice.map(die => {
    const faceIndex = Math.floor(seededRandom(currentSeed++) * 6);
    const letter = die[faceIndex];
    return letter === 'Q' ? 'Qu' : letter;
  });
}

// Generate a random 5-digit code
export function generatePracticeCode() {
  return Math.floor(10000 + Math.random() * 90000);
}

// Validate board quality
// - Minimum 3 vowels
// - Maximum 6 vowels
// - No more than 3 letters that appear more than once
export function validateBoard(board) {
  const vowels = 'AEIOU';
  let vowelCount = 0;
  const letterCounts = {};

  board.forEach(letter => {
    const l = letter.toUpperCase().charAt(0);
    if (vowels.includes(l)) vowelCount++;
    letterCounts[l] = (letterCounts[l] || 0) + 1;
  });

  // Must have between 3 and 6 vowels
  if (vowelCount < 3 || vowelCount > 6) return false;

  // Count how many letters appear more than once
  let duplicateCount = 0;
  for (const count of Object.values(letterCounts)) {
    if (count >= 2) duplicateCount++;
  }
  // No more than 3 duplicate letters
  if (duplicateCount > 3) return false;

  return true;
}

// Generate a random validated board with code
export function generateRandomBoard() {
  let code, board;
  let attempts = 0;

  do {
    code = generatePracticeCode();
    board = generateSeededBoard(code);
    attempts++;
  } while (!validateBoard(board) && attempts < 100);

  return { board, code };
}

// Check if two positions are adjacent on 4x4 grid
export function areAdjacent(pos1, pos2) {
  const row1 = Math.floor(pos1 / 4), col1 = pos1 % 4;
  const row2 = Math.floor(pos2 / 4), col2 = pos2 % 4;
  return Math.abs(row1 - row2) <= 1 && Math.abs(col1 - col2) <= 1 && pos1 !== pos2;
}

// Check if two positions are diagonally adjacent
export function isDiagonal(pos1, pos2) {
  const row1 = Math.floor(pos1 / 4), col1 = pos1 % 4;
  const row2 = Math.floor(pos2 / 4), col2 = pos2 % 4;
  return Math.abs(row1 - row2) === 1 && Math.abs(col1 - col2) === 1;
}

// Check if a word can be formed on the board (DFS pathfinding)
export function canFormWord(word, board) {
  const upperWord = word.toUpperCase();
  const boardUpper = board.map(l => l.toUpperCase());

  function search(wordIndex, position, used) {
    if (wordIndex >= upperWord.length) return true;
    const remaining = upperWord.slice(wordIndex);
    const letter = boardUpper[position];
    if (!remaining.startsWith(letter)) return false;

    const newUsed = new Set(used);
    newUsed.add(position);
    const nextIndex = wordIndex + letter.length;
    if (nextIndex >= upperWord.length) return true;

    for (let next = 0; next < 16; next++) {
      if (!newUsed.has(next) && areAdjacent(position, next)) {
        if (search(nextIndex, next, newUsed)) return true;
      }
    }
    return false;
  }

  for (let start = 0; start < 16; start++) {
    if (search(0, start, new Set())) return true;
  }
  return false;
}

// Calculate word score (Qu counts as 1 letter)
export function getWordScore(word) {
  const len = word.replace(/qu/gi, 'Q').length;
  if (len < MIN_WORD_LENGTH) return 0;
  if (len >= 8) return WORD_SCORES[8];
  return WORD_SCORES[len] || 0;
}

// Get all possible words on a board
export function getAllPossibleWords(board, dictionary) {
  const possibleWords = [];
  dictionary.forEach(word => {
    if (word.length >= MIN_WORD_LENGTH && canFormWord(word, board)) {
      possibleWords.push(word);
    }
  });
  return possibleWords;
}

// Format seconds as M:SS
export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Calculate multiplayer results with duplicate cancellation
export function calculateMultiplayerResults(playerWords) {
  // playerWords: { [userId]: { displayName, words: string[] } }

  // Count occurrences of each word across all players
  const wordCounts = {};
  Object.values(playerWords).forEach(({ words }) => {
    words.forEach(word => {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
  });

  // Words found by multiple players are duplicates (cancelled)
  const duplicates = Object.keys(wordCounts).filter(w => wordCounts[w] > 1);

  // Calculate scores excluding duplicates
  const results = Object.entries(playerWords).map(([userId, { displayName, words }]) => {
    const uniqueWords = words.filter(w => !duplicates.includes(w));
    const score = uniqueWords.reduce((total, word) => total + getWordScore(word), 0);
    return { userId, displayName, words, uniqueWords, score };
  });

  // Sort by score descending
  results.sort((a, b) => b.score - a.score);

  return { players: results, duplicates };
}

// Generate share text for results
export function generateShareText(score, foundWords, dateString) {
  // Find longest word (Qu counts as 1 letter)
  let longestWord = '';
  foundWords.forEach(word => {
    const len = word.replace(/qu/gi, 'Q').length;
    const longestLen = longestWord.replace(/qu/gi, 'Q').length;
    if (len > longestLen) longestWord = word;
  });
  const longestLen = longestWord ? longestWord.replace(/qu/gi, 'Q').length : 0;

  return `${dateString}\n\u{1F524} Boggle: ${score} pts\nLongest: ${longestLen} letters`;
}
