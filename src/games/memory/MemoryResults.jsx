// src/games/memory/MemoryResults.jsx
import React from 'react';
import { Trophy, Clock, MousePointer, RotateCcw, Home, Share2, Star } from 'lucide-react';

// Format seconds to mm:ss
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default function MemoryResults({
  moves,
  time,
  personalBest,
  isNewBest,
  onPlayAgain,
  onHome,
  onShare,
}) {
  // Calculate rating based on moves (8 pairs, optimal is 8 moves)
  const getRating = () => {
    if (moves <= 10) return { stars: 3, label: 'Perfect!' };
    if (moves <= 14) return { stars: 3, label: 'Excellent!' };
    if (moves <= 18) return { stars: 2, label: 'Great!' };
    if (moves <= 22) return { stars: 2, label: 'Good!' };
    if (moves <= 28) return { stars: 1, label: 'Nice try!' };
    return { stars: 1, label: 'Keep practicing!' };
  };

  const rating = getRating();

  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-card p-6 shadow-card text-center">
          {/* Trophy Icon */}
          <div className="mb-4">
            <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
              <Trophy className="w-10 h-10 text-yellow-500" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-text-main mb-2">
            {rating.label}
          </h1>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3].map((star) => (
              <Star
                key={star}
                className={`w-8 h-8 ${
                  star <= rating.stars
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-4">
              <MousePointer className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-text-main">{moves}</div>
              <div className="text-sm text-text-muted">Moves</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-text-main">{formatTime(time)}</div>
              <div className="text-sm text-text-muted">Time</div>
            </div>
          </div>

          {/* New Personal Best Badge */}
          {isNewBest && (
            <div className="mb-6 py-3 px-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border border-yellow-300">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-yellow-600 fill-yellow-600" />
                <span className="font-bold text-yellow-800">New Personal Best!</span>
                <Star className="w-5 h-5 text-yellow-600 fill-yellow-600" />
              </div>
            </div>
          )}

          {/* Personal Best Display */}
          {personalBest && !isNewBest && (
            <div className="mb-6 text-sm text-text-muted">
              Personal Best: {personalBest.moves} moves in {formatTime(personalBest.time)}
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={onPlayAgain}
              className="w-full py-4 bg-primary text-white rounded-button font-bold text-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Play Again
            </button>

            <div className="flex gap-3">
              <button
                onClick={onShare}
                className="flex-1 py-3 bg-white border-2 border-gray-200 text-text-main rounded-button font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>
              <button
                onClick={onHome}
                className="flex-1 py-3 bg-white border-2 border-gray-200 text-text-main rounded-button font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
