// src/games/spelling-bee/spellingBeeUtils.js
import { getSpellingBeeScore } from './spellingBeeConstants';

// Seeded random (same as boggleUtils)
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// ============================================
// PANGRAM INDEX (lazy singleton)
// ============================================

let _pangramIndex = null;

export function buildPangramIndex(dictionary) {
  if (_pangramIndex) return _pangramIndex;

  const letterSetMap = {};

  for (const word of dictionary) {
    if (word.length < 4 || word.includes('s')) continue;
    const uniqueLetters = [...new Set(word.split(''))].sort().join('');
    if (uniqueLetters.length === 7) {
      if (!letterSetMap[uniqueLetters]) letterSetMap[uniqueLetters] = [];
      letterSetMap[uniqueLetters].push(word);
    }
  }

  _pangramIndex = Object.entries(letterSetMap).map(([key, pangrams]) => ({
    letters: key.split(''),
    pangrams,
    key,
  }));

  return _pangramIndex;
}

// ============================================
// PUZZLE GENERATION
// ============================================

export function getValidWords(letters, centerLetter, dictionary) {
  const letterSet = new Set(letters);
  const valid = [];

  for (const word of dictionary) {
    if (word.length < 4) continue;
    if (word.includes('s')) continue;
    if (!word.includes(centerLetter)) continue;

    let allValid = true;
    for (const ch of word) {
      if (!letterSet.has(ch)) {
        allValid = false;
        break;
      }
    }
    if (allValid) valid.push(word);
  }

  return valid;
}

// Check if letter set has enough vowels (at least 2)
function hasEnoughVowels(letters) {
  const vowels = 'aeiou';
  let vowelCount = 0;
  for (const letter of letters) {
    if (vowels.includes(letter)) vowelCount++;
  }
  return vowelCount >= 2;
}

export function generatePuzzle(seed, dictionary) {
  const pangramIndex = buildPangramIndex(dictionary);
  if (pangramIndex.length === 0) return null;

  let currentSeed = seed;
  let attempts = 0;

  while (attempts < 100) {
    // Pick a letter set
    const setIndex = Math.floor(seededRandom(currentSeed++) * pangramIndex.length);
    const chosen = pangramIndex[setIndex];
    const letters = [...chosen.letters];

    // Skip if not enough vowels (need at least 2)
    if (!hasEnoughVowels(letters)) {
      currentSeed += 100;
      attempts++;
      continue;
    }

    // Pick center letter
    const centerIndex = Math.floor(seededRandom(currentSeed++) * 7);
    const centerLetter = letters[centerIndex];

    // Shuffle outer letters deterministically
    const outerLetters = letters.filter(l => l !== centerLetter);
    for (let i = outerLetters.length - 1; i > 0; i--) {
      const j = Math.floor(seededRandom(currentSeed++) * (i + 1));
      [outerLetters[i], outerLetters[j]] = [outerLetters[j], outerLetters[i]];
    }

    // Find all valid words
    const validWords = getValidWords(letters, centerLetter, dictionary);

    // Find pangrams among valid words
    const pangramSet = new Set();
    for (const word of validWords) {
      const unique = new Set(word.split(''));
      if (unique.size === 7) pangramSet.add(word);
    }

    // Validate puzzle quality
    if (validWords.length >= 20 && pangramSet.size >= 1) {
      // Calculate max score
      let maxScore = 0;
      for (const word of validWords) {
        maxScore += getSpellingBeeScore(word, pangramSet.has(word));
      }

      return {
        centerLetter,
        outerLetters,
        validWords,
        pangrams: [...pangramSet],
        maxScore,
        seed: seed,
      };
    }

    currentSeed += 1000;
    attempts++;
  }

  // Fallback: return best attempt with relaxed constraints
  const setIndex = Math.floor(seededRandom(seed) * pangramIndex.length);
  const chosen = pangramIndex[setIndex];
  const letters = [...chosen.letters];
  const centerLetter = letters[0];
  const outerLetters = letters.slice(1);
  const validWords = getValidWords(letters, centerLetter, dictionary);
  const pangramSet = new Set();
  for (const word of validWords) {
    if (new Set(word.split('')).size === 7) pangramSet.add(word);
  }
  let maxScore = 0;
  for (const word of validWords) {
    maxScore += getSpellingBeeScore(word, pangramSet.has(word));
  }

  return { centerLetter, outerLetters, validWords, pangrams: [...pangramSet], maxScore, seed };
}

export function generateDailyPuzzle(dateKey, dictionary) {
  const seed = parseInt(dateKey.replace(/-/g, ''), 10);
  return generatePuzzle(seed, dictionary);
}

export function generateSeededPuzzle(code, dictionary) {
  return generatePuzzle(code, dictionary);
}

// ============================================
// VALIDATION
// ============================================

export function isValidWord(word, centerLetter, letterSet) {
  if (word.length < 4) return false;
  if (word.includes('s')) return false;
  if (!word.includes(centerLetter)) return false;
  for (const ch of word) {
    if (!letterSet.has(ch)) return false;
  }
  return true;
}

// ============================================
// PRACTICE CODE
// ============================================

export function generatePracticeCode() {
  return Math.floor(10000 + Math.random() * 90000);
}

// ============================================
// SHARE TEXT
// ============================================

export function generateShareText(score, maxScore, rankName, wordCount, pangramCount, dateKey) {
  const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  const lines = [
    dateKey,
    `\u{1F41D} Spelling Bee: ${rankName}`,
    `${score} pts (${pct}%) \u{2022} ${wordCount} words`,
  ];

  if (pangramCount > 0) {
    lines.push(`PANGRAM${pangramCount > 1 ? 'S' : ''}: ${pangramCount}`);
  }

  return lines.join('\n');
}

// ============================================
// MULTIPLAYER RESULTS
// ============================================

export function calculateMultiplayerResults(playerWords) {

  // Count word occurrences across players
  const wordCounts = {};
  Object.values(playerWords).forEach(words => {
    words.forEach(word => {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
  });
  const duplicates = Object.keys(wordCounts).filter(w => wordCounts[w] > 1);

  // Determine pangrams
  const isPangram = (word) => new Set(word.split('')).size === 7;

  // Score each player (excluding duplicates)
  const results = Object.entries(playerWords).map(([userId, words]) => {
    const uniqueWords = words.filter(w => !duplicates.includes(w));
    const score = uniqueWords.reduce((total, word) => {
      return total + getSpellingBeeScore(word, isPangram(word));
    }, 0);
    return { userId, words, uniqueWords, score };
  });

  results.sort((a, b) => b.score - a.score);
  return { players: results, duplicates };
}
