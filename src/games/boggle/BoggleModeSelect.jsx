// src/games/boggle/BoggleModeSelect.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export default function BoggleModeSelect({ dailyResult, dictLoading, onStartDaily, onStartPractice, onOpenMultiplayer }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between py-4 mb-4">
          <button
            onClick={() => navigate('/')}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-text-main" />
          </button>
          <h1 className="text-xl font-bold text-text-main">Daily Boggle</h1>
          <div className="w-10" />
        </div>

        <div className="text-center py-4 mb-6">
          <div className="text-5xl mb-3">{'\u{1F524}'}</div>
          <h2 className="text-2xl font-bold text-text-main mb-2">Boggle</h2>
          <p className="text-text-muted">Find words in the letter grid</p>
        </div>

        {dictLoading && (
          <div className="text-center text-text-muted mb-4 animate-pulse">
            Loading dictionary...
          </div>
        )}

        <div className="space-y-3">
          {/* Daily Challenge */}
          <button
            onClick={onStartDaily}
            disabled={dictLoading}
            className="w-full bg-white rounded-card p-5 shadow-card hover:shadow-card-hover transition-shadow text-left disabled:opacity-50"
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl w-12 h-12 flex items-center justify-center bg-blue-50 rounded-card">
                {'\u{1F4C5}'}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-text-main">Daily Challenge</h3>
                <p className="text-text-muted text-sm">
                  {dailyResult ? `Completed - ${dailyResult.score} pts` : "Today's board • 3 minutes"}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-text-muted" />
            </div>
          </button>

          {/* Practice Mode */}
          <button
            onClick={() => onStartPractice()}
            disabled={dictLoading}
            className="w-full bg-white rounded-card p-5 shadow-card hover:shadow-card-hover transition-shadow text-left disabled:opacity-50"
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl w-12 h-12 flex items-center justify-center bg-green-50 rounded-card">
                {'\u{1F3AF}'}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-text-main">Practice Mode</h3>
                <p className="text-text-muted text-sm">Random boards • Unlimited replays</p>
              </div>
              <ChevronRight className="w-5 h-5 text-text-muted" />
            </div>
          </button>

          {/* Multiplayer */}
          <button
            onClick={onOpenMultiplayer}
            disabled={dictLoading}
            className="w-full bg-white rounded-card p-5 shadow-card hover:shadow-card-hover transition-shadow text-left disabled:opacity-50"
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl w-12 h-12 flex items-center justify-center bg-purple-50 rounded-card">
                {'\u{1F46B}'}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-text-main">Multiplayer</h3>
                <p className="text-text-muted text-sm">Play with friends • Duplicate words cancel</p>
              </div>
              <ChevronRight className="w-5 h-5 text-text-muted" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
