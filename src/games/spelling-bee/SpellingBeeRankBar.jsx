// src/games/spelling-bee/SpellingBeeRankBar.jsx
import React from 'react';
import { RANKS, getCurrentRank, getNextRank } from './spellingBeeConstants';

export default function SpellingBeeRankBar({ score, maxScore }) {
  const currentRank = getCurrentRank(score, maxScore);
  const nextRank = getNextRank(score, maxScore);
  const progress = maxScore > 0 ? (score / maxScore) * 100 : 0;

  return (
    <div className="bg-white rounded-card p-3 mb-4 shadow-card">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-amber-700">
          {currentRank.emoji} {currentRank.name}
        </span>
        {nextRank ? (
          <span className="text-xs text-text-muted">
            {nextRank.pointsNeeded} pts to {nextRank.rank.name}
          </span>
        ) : (
          <span className="text-xs text-amber-600 font-bold">Max rank!</span>
        )}
      </div>
      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-400 rounded-full transition-all duration-500"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      {/* Rank threshold dots */}
      <div className="relative h-2 mt-0.5">
        {RANKS.slice(1).map((rank, i) => (
          <div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full -translate-x-1/2 ${
              progress >= rank.threshold * 100 ? 'bg-amber-400' : 'bg-gray-300'
            }`}
            style={{ left: `${rank.threshold * 100}%`, top: '0' }}
            title={rank.name}
          />
        ))}
      </div>
    </div>
  );
}
