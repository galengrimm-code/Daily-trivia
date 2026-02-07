// src/games/trivia/TriviaResults.jsx
import React from 'react';
import { RotateCcw, Share2, Trophy, Home, Flame } from 'lucide-react';
import { getScoreMessage } from './triviaUtils';

export default function TriviaResults({
  score,
  totalQuestions,
  streak,
  onReview,
  onShare,
  onViewLeaderboard,
  onHome
}) {
  const percentage = (score / totalQuestions) * 100;
  const { message, emoji } = getScoreMessage(score, totalQuestions);

  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-card p-8 shadow-card text-center">
          <div className="text-6xl mb-4">{emoji}</div>
          <h2 className="text-3xl font-bold text-text-main mb-2">{message}</h2>

          {/* Score Circle */}
          <div className="relative w-40 h-40 mx-auto my-8">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="80" cy="80" r="70" fill="none" stroke="#E2E8F0" strokeWidth="12" />
              <circle cx="80" cy="80" r="70" fill="none" stroke="url(#scoreGradient)" strokeWidth="12" strokeLinecap="round" strokeDasharray={`${percentage * 4.4} 440`} />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#22C55E" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-text-main">{score}/{totalQuestions}</span>
              <span className="text-text-muted">Correct</span>
            </div>
          </div>

          {/* Streak */}
          <div className="flex items-center justify-center gap-2 bg-blue-50 rounded-full px-6 py-3 mb-8">
            <Flame className="w-6 h-6 text-primary" />
            <span className="text-text-main font-bold text-lg">{streak} Day Streak!</span>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button onClick={onReview} className="w-full py-3 bg-gray-100 rounded-button font-semibold text-text-main hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <RotateCcw className="w-5 h-5" />
              Review Answers
            </button>
            <button onClick={onShare} className="w-full py-3 bg-gray-100 rounded-button font-semibold text-text-main hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" />
              Share Score
            </button>
            <button onClick={onViewLeaderboard} className="w-full py-3 bg-gray-100 rounded-button font-semibold text-text-main hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Trophy className="w-5 h-5" />
              View Leaderboard
            </button>
            <button onClick={onHome} className="w-full py-3 bg-primary text-white rounded-button font-bold hover:bg-primary-hover transition-colors flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
