// src/games/spelling-bee/SpellingBeeWordList.jsx
import React from 'react';
import { getSpellingBeeScore } from './spellingBeeConstants';

export default function SpellingBeeWordList({ foundWords, pangrams, practiceMode, onRemoveWord }) {
  if (foundWords.length === 0) return null;

  const sorted = [...foundWords].sort((a, b) => {
    const aPangram = pangrams.has(a) ? 1 : 0;
    const bPangram = pangrams.has(b) ? 1 : 0;
    if (aPangram !== bPangram) return bPangram - aPangram;
    if (b.length !== a.length) return b.length - a.length;
    return a.localeCompare(b);
  });

  return (
    <div className="bg-white rounded-card p-3 shadow-card">
      <p className="text-xs text-text-muted font-bold mb-2">
        Found Words ({foundWords.length})
        {practiceMode && onRemoveWord && <span className="font-normal"> — tap to remove</span>}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {sorted.map(word => {
          const isPangram = pangrams.has(word);
          const wordScore = getSpellingBeeScore(word, isPangram);

          return practiceMode && onRemoveWord ? (
            <button
              key={word}
              onClick={() => onRemoveWord(word)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-sm transition-colors ${
                isPangram
                  ? 'bg-amber-100 text-amber-800 ring-1 ring-amber-300 hover:bg-red-100 hover:text-red-700'
                  : 'bg-gray-50 text-text-main hover:bg-red-100 hover:text-red-700'
              }`}
            >
              <span className="font-semibold capitalize">{word}</span>
              <span className={`font-bold text-xs ${isPangram ? 'text-amber-600' : 'text-primary'}`}>+{wordScore}</span>
            </button>
          ) : (
            <div
              key={word}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-sm ${
                isPangram
                  ? 'bg-amber-100 text-amber-800 ring-1 ring-amber-300'
                  : 'bg-gray-50 text-text-main'
              }`}
            >
              <span className="font-semibold capitalize">{word}</span>
              <span className={`font-bold text-xs ${isPangram ? 'text-amber-600' : 'text-primary'}`}>+{wordScore}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
