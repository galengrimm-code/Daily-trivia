// src/components/Leaderboard.jsx
import React from 'react';
import { Trophy, Star, Award, ArrowLeft, Loader } from 'lucide-react';

export default function Leaderboard({ todayEntries, weeklyEntries, currentUserId, loading, onBack }) {
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
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <ArrowLeft className="w-6 h-6 text-text-main" />
          </button>
          <h1 className="text-2xl font-bold text-text-main flex items-center gap-2">
            <Trophy className="w-7 h-7 text-yellow-500" />
            Leaderboard
          </h1>
          <div className="w-10" />
        </div>

        {/* Today's Scores */}
        <div className="bg-white rounded-card p-4 mb-4 shadow-card">
          <h2 className="text-text-main font-semibold mb-2 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Today's Scores
          </h2>
          <p className="text-text-muted text-xs mb-3">Ties broken by fastest completion time</p>
          {todayEntries.length === 0 ? (
            <p className="text-text-muted text-center py-4">No scores yet today. Be the first!</p>
          ) : (
            <div className="space-y-2">
              {todayEntries.map((entry, idx) => (
                <div key={entry.id} className={`flex items-center justify-between p-3 rounded-button ${entry.userId === currentUserId ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      idx === 0 ? 'bg-yellow-400 text-yellow-900' :
                      idx === 1 ? 'bg-gray-300 text-gray-700' :
                      idx === 2 ? 'bg-amber-600 text-white' :
                      'bg-gray-200 text-text-muted'
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="text-text-main font-medium">{entry.displayName}</span>
                  </div>
                  <span className="text-text-main font-bold">{entry.score}/{entry.totalQuestions}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Weekly Scores */}
        <div className="bg-white rounded-card p-4 shadow-card">
          <h2 className="text-text-main font-semibold mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            This Week
          </h2>
          {weeklyEntries.length === 0 ? (
            <p className="text-text-muted text-center py-4">No data yet. Keep playing!</p>
          ) : (
            <div className="space-y-2">
              {weeklyEntries.map((entry, idx) => (
                <div key={entry.userId} className={`flex items-center justify-between p-3 rounded-button ${entry.userId === currentUserId ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      idx === 0 ? 'bg-yellow-400 text-yellow-900' :
                      idx === 1 ? 'bg-gray-300 text-gray-700' :
                      idx === 2 ? 'bg-amber-600 text-white' :
                      'bg-gray-200 text-text-muted'
                    }`}>
                      {idx + 1}
                    </span>
                    <div>
                      <span className="text-text-main font-medium">{entry.displayName}</span>
                      <p className="text-text-muted text-xs">{entry.gamesPlayed} {entry.gamesPlayed === 1 ? 'game' : 'games'}</p>
                    </div>
                  </div>
                  <span className="text-text-main font-bold">{entry.totalScore} pts</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button onClick={onBack} className="w-full mt-6 py-4 bg-primary text-white rounded-button font-bold hover:bg-primary-hover transition-colors">
          Back
        </button>
      </div>
    </div>
  );
}
