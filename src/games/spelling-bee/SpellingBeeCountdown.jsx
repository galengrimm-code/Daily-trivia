// src/games/spelling-bee/SpellingBeeCountdown.jsx
import React from 'react';

export default function SpellingBeeCountdown({ count }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl font-extrabold text-amber-600 animate-pulse mb-4">
          {count <= 0 ? 'GO!' : count}
        </div>
        <p className="text-text-muted text-lg">Get ready...</p>
      </div>
    </div>
  );
}
