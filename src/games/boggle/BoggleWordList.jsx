// src/games/boggle/BoggleWordList.jsx
import React from 'react';
import { X } from 'lucide-react';
import { getWordScore } from './boggleUtils';

export default function BoggleWordList({ foundWords, practiceMode, onRemoveWord }) {
  if (foundWords.length === 0) {
    return (
      <div className="text-center text-text-muted py-4 text-sm">
        No words found yet
      </div>
    );
  }

  // Sort by score (highest first), then alphabetically
  const sorted = [...foundWords].sort((a, b) => {
    const scoreDiff = getWordScore(b) - getWordScore(a);
    if (scoreDiff !== 0) return scoreDiff;
    return a.localeCompare(b);
  });

  return (
    <div className="flex flex-wrap gap-2">
      {sorted.map((word) => (
        <div
          key={word}
          className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full shadow-card text-sm"
        >
          <span className="font-semibold text-text-main capitalize">{word}</span>
          <span className="text-primary font-bold">+{getWordScore(word)}</span>
          {practiceMode && onRemoveWord && (
            <button
              onClick={() => onRemoveWord(word)}
              className="ml-1 text-text-muted hover:text-error transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
