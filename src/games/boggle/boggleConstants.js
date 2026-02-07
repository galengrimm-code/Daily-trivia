// src/games/boggle/boggleConstants.js

// Standard Boggle dice (16 dice, 6 faces each)
export const BOGGLE_DICE = [
  'AAEEGN', 'ABBJOO', 'ACHOPS', 'AFFKPS',
  'AOOTTW', 'CIMOTU', 'DEILRX', 'DELRVY',
  'DISTTY', 'EEGHNW', 'EEINSU', 'EHRTVW',
  'EIOSST', 'ELRTTY', 'HIMNQU', 'HLNNRZ'
];

// Game duration in seconds
export const GAME_DURATION = 180;

// Minimum word length
export const MIN_WORD_LENGTH = 3;

// Scoring by word length (Qu counts as 1 letter)
// 3-4 letters = 1pt, 5 = 2, 6 = 3, 7 = 5, 8+ = 11
export const WORD_SCORES = {
  3: 1,
  4: 1,
  5: 2,
  6: 3,
  7: 5,
  8: 11 // 8+ all score 11
};

// Max players in a multiplayer room
export const MAX_PLAYERS = 8;

// Grid size
export const GRID_SIZE = 4;
export const TOTAL_TILES = GRID_SIZE * GRID_SIZE;
