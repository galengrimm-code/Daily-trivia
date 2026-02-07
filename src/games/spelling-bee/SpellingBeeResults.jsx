// src/games/spelling-bee/SpellingBeeResults.jsx
import React, { useState } from 'react';
import { Share2, Trophy, Home, RotateCcw, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { getSpellingBeeScore, getCurrentRank } from './spellingBeeConstants';
import { generateShareText } from './spellingBeeUtils';
import { getTodayKey } from '../../utils/helpers';

export default function SpellingBeeResults({
  score, maxScore, foundWords, validWords, pangrams,
  practiceMode, puzzleCode, dailyResult,
  onViewLeaderboard, onNewGame, onReplay, onHome
}) {
  const [showMissed, setShowMissed] = useState(false);

  const wordsFoundCount = foundWords.length || (dailyResult?.wordCount) || 0;
  const isReturningPlayer = foundWords.length === 0 && dailyResult;
  const displayScore = isReturningPlayer ? dailyResult.score : score;

  const rank = getCurrentRank(displayScore, maxScore);
  const pangramCount = foundWords.filter(w => pangrams.has(w)).length;

  const missedWords = validWords
    ? validWords.filter(w => !foundWords.includes(w)).sort((a, b) => {
        const aP = pangrams.has(a) ? 1 : 0;
        const bP = pangrams.has(b) ? 1 : 0;
        if (aP !== bP) return bP - aP;
        return b.length - a.length;
      })
    : [];

  const handleShare = () => {
    const text = generateShareText(displayScore, maxScore, rank.name, wordsFoundCount, pangramCount, getTodayKey());
    if (navigator.share) {
      navigator.share({ text }).catch(() => {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        {/* Rank Header */}
        <div className="text-center py-8">
          <div className="text-6xl mb-3">{rank.emoji}</div>
          {isReturningPlayer && (
            <p className="text-text-muted text-sm mb-2">Today's Results</p>
          )}
          <div className="text-2xl font-extrabold text-amber-700 mb-1">{rank.name}</div>
          <div className="text-4xl font-extrabold text-text-main">{displayScore}</div>
          <p className="text-text-muted">of {maxScore} possible points</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-card p-3 shadow-card text-center">
            <div className="text-xl font-bold text-primary">{wordsFoundCount}</div>
            <div className="text-xs text-text-muted">Words</div>
          </div>
          <div className="bg-white rounded-card p-3 shadow-card text-center">
            <div className="text-xl font-bold text-primary">
              {validWords ? validWords.length : '...'}
            </div>
            <div className="text-xs text-text-muted">Possible</div>
          </div>
          <div className="bg-white rounded-card p-3 shadow-card text-center">
            <div className="text-xl font-bold text-amber-600">{pangramCount}</div>
            <div className="text-xs text-text-muted">Pangrams</div>
          </div>
        </div>

        {/* Found Words */}
        {foundWords.length > 0 && !isReturningPlayer && (
          <div className="bg-white rounded-card p-4 mb-4 shadow-card">
            <h3 className="font-bold text-text-main mb-3">Your Words</h3>
            <div className="flex flex-wrap gap-2">
              {[...foundWords].sort((a, b) => {
                const aP = pangrams.has(a) ? 1 : 0;
                const bP = pangrams.has(b) ? 1 : 0;
                if (aP !== bP) return bP - aP;
                return b.length - a.length;
              }).map(word => {
                const isPangram = pangrams.has(word);
                return (
                  <span key={word} className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
                    isPangram
                      ? 'bg-amber-100 text-amber-800 ring-1 ring-amber-300'
                      : 'bg-green-50 text-green-700'
                  }`}>
                    {word} <span className={isPangram ? 'text-amber-600' : 'text-green-500'}>+{getSpellingBeeScore(word, isPangram)}</span>
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Missed Words */}
        {validWords && missedWords.length > 0 && !isReturningPlayer && (
          <div className="bg-white rounded-card p-4 mb-6 shadow-card">
            <button
              onClick={() => setShowMissed(!showMissed)}
              className="w-full flex items-center justify-between"
            >
              <h3 className="font-bold text-text-main">Missed Words ({missedWords.length})</h3>
              {showMissed ? <ChevronUp className="w-5 h-5 text-text-muted" /> : <ChevronDown className="w-5 h-5 text-text-muted" />}
            </button>
            {showMissed && (
              <div className="flex flex-wrap gap-2 mt-3">
                {missedWords.slice(0, 50).map(word => {
                  const isPangram = pangrams.has(word);
                  return (
                    <span key={word} className={`px-3 py-1 rounded-full text-sm capitalize ${
                      isPangram
                        ? 'bg-amber-50 text-amber-400'
                        : 'bg-gray-50 text-text-muted'
                    }`}>
                      {word} <span className="text-gray-400">+{getSpellingBeeScore(word, isPangram)}</span>
                    </span>
                  );
                })}
                {missedWords.length > 50 && (
                  <span className="text-text-muted text-sm py-1">...and {missedWords.length - 50} more</span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {!practiceMode && (
            <>
              <button onClick={handleShare} className="w-full py-3 bg-primary text-white rounded-button font-bold flex items-center justify-center gap-2 hover:bg-primary-hover transition-colors">
                <Share2 className="w-5 h-5" /> Share Results
              </button>
              <button onClick={onViewLeaderboard} className="w-full py-3 bg-white text-text-main rounded-button font-bold shadow-card flex items-center justify-center gap-2 hover:shadow-card-hover transition-shadow">
                <Trophy className="w-5 h-5 text-yellow-500" /> Leaderboard
              </button>
            </>
          )}

          {practiceMode && (
            <>
              <button onClick={onNewGame} className="w-full py-3 bg-primary text-white rounded-button font-bold flex items-center justify-center gap-2 hover:bg-primary-hover transition-colors">
                <Plus className="w-5 h-5" /> New Puzzle
              </button>
              <button onClick={onReplay} className="w-full py-3 bg-white text-text-main rounded-button font-bold shadow-card flex items-center justify-center gap-2 hover:shadow-card-hover transition-shadow">
                <RotateCcw className="w-5 h-5" /> Replay This Puzzle
              </button>
            </>
          )}

          <button onClick={onHome} className="w-full py-3 bg-gray-100 text-text-main rounded-button font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
            <Home className="w-5 h-5" /> Back to Games
          </button>
        </div>
      </div>
    </div>
  );
}
