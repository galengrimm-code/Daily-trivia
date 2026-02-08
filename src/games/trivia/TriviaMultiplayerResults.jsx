// src/games/trivia/TriviaMultiplayerResults.jsx
import React from 'react';
import { Trophy, Clock, Home, RotateCcw, Share2, Crown } from 'lucide-react';
import { CATEGORIES } from '../../utils/helpers';

export default function TriviaMultiplayerResults({
  standings,
  questions,
  categories,
  totalQuestions,
  userId,
  isHost,
  roomId,
  onPlayAgain,
  onHome,
}) {
  const myRank = standings.findIndex(p => p.odayerId === userId) + 1;
  const myData = standings.find(p => p.odayerId === userId);
  const winner = standings[0];

  const formatTime = (ms) => {
    if (!ms) return '0.0s';
    const seconds = Math.floor(ms / 1000);
    const tenths = Math.floor((ms % 1000) / 100);
    if (seconds >= 60) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}m ${secs}s`;
    }
    return `${seconds}.${tenths}s`;
  };

  const handleShare = () => {
    const lines = [
      `Multiplayer Trivia - Room ${roomId}`,
      ``,
      `${winner?.displayName} wins!`,
      ``,
      ...standings.slice(0, 5).map((p, i) =>
        `${i + 1}. ${p.displayName}: ${p.score}/${totalQuestions}`
      ),
    ];

    if (myRank > 5) {
      lines.push(`...`);
      lines.push(`${myRank}. ${myData?.displayName}: ${myData?.score}/${totalQuestions} (you)`);
    }

    const text = lines.join('\n');

    if (navigator.share) {
      navigator.share({ text }).catch(() => {
        navigator.clipboard.writeText(text);
        alert('Results copied to clipboard!');
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Results copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center py-6 mb-4">
          <div className="text-5xl mb-3">{myRank === 1 ? '\u{1F3C6}' : '\u{1F3C1}'}</div>
          <h1 className="text-2xl font-bold text-text-main mb-2">
            {myRank === 1 ? 'You Won!' : 'Game Over!'}
          </h1>
          <p className="text-text-muted">
            {myRank === 1
              ? `Congratulations! You got ${myData?.score}/${totalQuestions} correct!`
              : `You finished ${myRank}${myRank === 2 ? 'nd' : myRank === 3 ? 'rd' : 'th'} with ${myData?.score}/${totalQuestions}`
            }
          </p>
        </div>

        {/* Winner Podium */}
        <div className="bg-white rounded-card p-6 mb-4 shadow-card">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-6 h-6 text-yellow-500" />
            <span className="text-lg font-bold text-text-main">Winner</span>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-3">
              {'\u{1F3C6}'}
            </div>
            <h2 className="text-xl font-bold text-text-main">{winner?.displayName}</h2>
            <p className="text-primary font-bold text-2xl">{winner?.score}/{totalQuestions}</p>
            <p className="text-text-muted text-sm flex items-center justify-center gap-1 mt-1">
              <Clock className="w-4 h-4" />
              {formatTime(winner?.totalTime)}
            </p>
          </div>
        </div>

        {/* Full Standings */}
        <div className="bg-white rounded-card p-4 mb-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-bold text-text-muted">Final Standings</span>
          </div>
          <div className="space-y-2">
            {standings.map((player, idx) => (
              <div
                key={player.odayerId}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  player.odayerId === userId ? 'bg-primary/10 border-2 border-primary' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    idx === 0 ? 'bg-yellow-400 text-white' :
                    idx === 1 ? 'bg-gray-400 text-white' :
                    idx === 2 ? 'bg-amber-600 text-white' :
                    'bg-gray-200 text-text-muted'
                  }`}>
                    {idx + 1}
                  </span>
                  <div>
                    <span className={`font-medium block ${player.odayerId === userId ? 'text-primary' : 'text-text-main'}`}>
                      {player.displayName}
                      {player.odayerId === userId && ' (you)'}
                    </span>
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatTime(player.totalTime)}
                    </span>
                  </div>
                </div>
                <span className="font-bold text-lg text-text-main">{player.score}/{totalQuestions}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted text-center mt-3">
            Ties broken by fastest total time
          </p>
        </div>

        {/* Categories Played */}
        <div className="bg-white rounded-card p-4 mb-6 shadow-card">
          <p className="text-sm text-text-muted mb-2">Categories</p>
          <div className="flex flex-wrap gap-2">
            {(categories || []).map(cat => {
              const style = CATEGORIES[cat] || { color: 'bg-gray-500', icon: '?' };
              return (
                <span
                  key={cat}
                  className={`${style.color} px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-1`}
                >
                  <span>{style.icon}</span>
                  {cat}
                </span>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={handleShare}
            className="w-full py-4 bg-white text-text-main rounded-button font-bold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-card"
          >
            <Share2 className="w-5 h-5" />
            Share Results
          </button>

          {isHost && (
            <button
              onClick={onPlayAgain}
              className="w-full py-4 bg-primary text-white rounded-button font-bold text-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Play Again
            </button>
          )}

          {!isHost && (
            <div className="text-center py-2 text-text-muted text-sm">
              Waiting for host to start new game...
            </div>
          )}

          <button
            onClick={onHome}
            className="w-full py-4 bg-gray-100 text-text-main rounded-button font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
