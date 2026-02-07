// src/components/Leaderboard.jsx
import React from 'react';
import { Trophy, ArrowLeft, Loader } from 'lucide-react';

// Reusable mini leaderboard component
function MiniLeaderboard({ title, icon, entries, currentUserId, scoreKey, scoreLabel }) {
  return (
    <div className="bg-white rounded-card p-3 shadow-card">
      <h2 className="text-text-main font-semibold mb-2 flex items-center gap-2 text-sm">
        <span className="text-lg">{icon}</span>
        {title}
      </h2>
      {entries.length === 0 ? (
        <p className="text-text-muted text-center py-1 text-xs">No scores yet</p>
      ) : (
        <div className="space-y-0.5">
          {entries.slice(0, 5).map((entry, idx) => (
            <div
              key={entry.userId || entry.id || idx}
              className={`flex items-center justify-between px-2 py-1 rounded text-xs ${
                entry.userId === currentUserId ? 'bg-blue-50' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs ${
                  idx === 0 ? 'bg-yellow-400 text-yellow-900' :
                  idx === 1 ? 'bg-gray-300 text-gray-700' :
                  idx === 2 ? 'bg-amber-600 text-white' :
                  'bg-gray-200 text-text-muted'
                }`}>
                  {idx + 1}
                </span>
                <span className="text-text-main font-medium truncate max-w-[140px]">{entry.displayName}</span>
              </div>
              <span className="text-text-main font-bold">
                {typeof scoreKey === 'function' ? scoreKey(entry) : entry[scoreKey]}
                {scoreLabel && <span className="text-text-muted font-normal ml-0.5">{scoreLabel}</span>}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Leaderboard({
  todayEntries,
  weeklyEntries,
  boggleEntries,
  spellingBeeEntries,
  currentUserId,
  loading,
  onBack
}) {
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <ArrowLeft className="w-6 h-6 text-text-main" />
          </button>
          <h1 className="text-xl font-bold text-text-main flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            Today's Leaderboards
          </h1>
          <div className="w-10" />
        </div>

        {/* Game Leaderboards Grid */}
        <div className="grid grid-cols-1 gap-3 mb-4">
          {/* Trivia Today */}
          <MiniLeaderboard
            title="Trivia"
            icon={'\u{1F9E0}'}
            entries={todayEntries || []}
            currentUserId={currentUserId}
            scoreKey={(e) => `${e.score}/${e.totalQuestions}`}
          />

          {/* Boggle Today */}
          <MiniLeaderboard
            title="Boggle"
            icon={'\u{1F524}'}
            entries={boggleEntries || []}
            currentUserId={currentUserId}
            scoreKey="score"
            scoreLabel="pts"
          />

          {/* Spelling Bee Today */}
          <MiniLeaderboard
            title="Spelling Bee"
            icon={'\u{1F41D}'}
            entries={spellingBeeEntries || []}
            currentUserId={currentUserId}
            scoreKey="score"
            scoreLabel="pts"
          />
        </div>

        {/* Weekly Summary */}
        {weeklyEntries && weeklyEntries.length > 0 && (
          <div className="bg-white rounded-card p-3 shadow-card mb-4">
            <h2 className="text-text-main font-semibold mb-2 flex items-center gap-2 text-sm">
              <span className="text-lg">{'\u{1F3C6}'}</span>
              Weekly Trivia
            </h2>
            <div className="space-y-0.5">
              {weeklyEntries.slice(0, 5).map((entry, idx) => (
                <div
                  key={entry.userId}
                  className={`flex items-center justify-between px-2 py-1 rounded text-xs ${
                    entry.userId === currentUserId ? 'bg-blue-50' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs ${
                      idx === 0 ? 'bg-yellow-400 text-yellow-900' :
                      idx === 1 ? 'bg-gray-300 text-gray-700' :
                      idx === 2 ? 'bg-amber-600 text-white' :
                      'bg-gray-200 text-text-muted'
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="text-text-main font-medium truncate max-w-[120px]">{entry.displayName}</span>
                    <span className="text-text-muted">{entry.gamesPlayed}g</span>
                  </div>
                  <span className="text-text-main font-bold">{entry.totalScore}<span className="text-text-muted font-normal ml-0.5">pts</span></span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button onClick={onBack} className="w-full py-3 bg-primary text-white rounded-button font-bold hover:bg-primary-hover transition-colors">
          Back
        </button>
      </div>
    </div>
  );
}
