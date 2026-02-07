// src/games/boggle/BoggleLeaderboard.jsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const MEDALS = ['\u{1F947}', '\u{1F948}', '\u{1F949}'];

export default function BoggleLeaderboard({ entries, currentUserId, onBack }) {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between py-4 mb-4">
          <button
            onClick={onBack}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-text-main" />
          </button>
          <h1 className="text-xl font-bold text-text-main">Boggle Leaderboard</h1>
          <div className="w-10" />
        </div>

        {entries.length === 0 ? (
          <div className="text-center py-8 text-text-muted">
            No scores yet today. Be the first!
          </div>
        ) : (
          <div className="space-y-2">
            {entries.map((entry, index) => {
              const isCurrentUser = entry.userId === currentUserId;
              return (
                <div
                  key={entry.userId}
                  className={`flex items-center gap-3 bg-white rounded-card p-4 shadow-card ${
                    isCurrentUser ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <div className="w-10 text-center">
                    {index < 3 ? (
                      <span className="text-2xl">{MEDALS[index]}</span>
                    ) : (
                      <span className="text-text-muted font-bold">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className={`font-bold ${isCurrentUser ? 'text-primary' : 'text-text-main'}`}>
                      {entry.displayName}
                    </div>
                    <div className="text-sm text-text-muted">
                      {entry.wordCount} words
                    </div>
                  </div>
                  <div className="text-xl font-bold text-text-main">
                    {entry.score} <span className="text-sm text-text-muted">pts</span>
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
