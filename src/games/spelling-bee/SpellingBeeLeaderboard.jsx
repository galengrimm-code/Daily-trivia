// src/games/spelling-bee/SpellingBeeLeaderboard.jsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const MEDALS = ['\u{1F947}', '\u{1F948}', '\u{1F949}'];

export default function SpellingBeeLeaderboard({ entries, currentUserId, onBack }) {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between py-4 mb-4">
          <button onClick={onBack} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <ArrowLeft className="w-5 h-5 text-text-main" />
          </button>
          <h1 className="text-xl font-bold text-text-main">Leaderboard</h1>
          <div className="w-10" />
        </div>

        {entries.length === 0 ? (
          <div className="text-center text-text-muted py-8">No scores yet today</div>
        ) : (
          <div className="space-y-2">
            {entries.map((entry, index) => {
              const isMe = entry.userId === currentUserId;
              return (
                <div
                  key={entry.userId}
                  className={`flex items-center gap-3 bg-white rounded-card p-4 shadow-card ${isMe ? 'ring-2 ring-primary' : ''}`}
                >
                  <div className="w-10 text-center">
                    {index < 3 ? (
                      <span className="text-2xl">{MEDALS[index]}</span>
                    ) : (
                      <span className="text-text-muted font-bold">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className={`font-bold ${isMe ? 'text-primary' : 'text-text-main'}`}>
                      {entry.displayName}
                    </div>
                    <div className="text-xs text-text-muted">
                      {entry.wordCount} words {'\u{2022}'} {entry.rank}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-text-main">{entry.score}</div>
                    <div className="text-xs text-text-muted">pts</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
