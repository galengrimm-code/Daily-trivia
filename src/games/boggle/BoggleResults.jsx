// src/games/boggle/BoggleResults.jsx
import React, { useState } from 'react';
import { Share2, Trophy, Home, RotateCcw, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { getWordScore, generateShareText } from './boggleUtils';
import { getFullDateStr } from '../../utils/helpers';

export default function BoggleResults({
  score, maxScore, foundWords, possibleWords, practiceMode, practiceCode, dailyResult,
  onShare, onViewLeaderboard, onNewGame, onReplay, onHome
}) {
  const [showMissed, setShowMissed] = useState(false);

  // When returning to a completed daily, foundWords is empty but dailyResult has the count
  const wordsFoundCount = foundWords.length || (dailyResult?.wordCount) || 0;
  const isReturningPlayer = foundWords.length === 0 && dailyResult;

  // Score emoji
  let scoreEmoji = '\u{1F3AF}';
  if (score >= 100) scoreEmoji = '\u{1F3C6}';
  else if (score >= 50) scoreEmoji = '\u{1F525}';
  else if (score >= 25) scoreEmoji = '\u{2B50}';

  // Create lowercase Set of found words for efficient, case-insensitive lookup
  const foundSet = new Set(foundWords.map(w => w.toLowerCase()));
  const missedWords = possibleWords
    ? possibleWords.filter(w => !foundSet.has(w.toLowerCase())).sort((a, b) => getWordScore(b) - getWordScore(a))
    : [];

  const handleShare = () => {
    const text = generateShareText(score, foundWords, getFullDateStr());
    if (navigator.share) {
      navigator.share({ text }).catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        {/* Score Header */}
        <div className="text-center py-8">
          <div className="text-6xl mb-4">{scoreEmoji}</div>
          {isReturningPlayer && (
            <p className="text-text-muted text-sm mb-2">Today's Results</p>
          )}
          <div className="text-5xl font-extrabold text-text-main mb-2">{score}</div>
          <p className="text-text-muted text-lg">
            {maxScore > 0 ? `of ${maxScore} possible points` : 'points'}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-card p-3 shadow-card text-center">
            <div className="text-xl font-bold text-primary">{wordsFoundCount}</div>
            <div className="text-xs text-text-muted">Words</div>
          </div>
          <div className="bg-white rounded-card p-3 shadow-card text-center">
            <div className="text-xl font-bold text-primary">
              {possibleWords ? possibleWords.length : '...'}
            </div>
            <div className="text-xs text-text-muted">Possible</div>
          </div>
          <div className="bg-white rounded-card p-3 shadow-card text-center">
            <div className="text-xl font-bold text-primary">
              {maxScore > 0 ? `${Math.round((score / maxScore) * 100)}%` : '...'}
            </div>
            <div className="text-xs text-text-muted">Score</div>
          </div>
        </div>

        {/* Found Words (only show when we have the actual word list) */}
        {foundWords.length > 0 && !isReturningPlayer && (
          <div className="bg-white rounded-card p-4 mb-4 shadow-card">
            <h3 className="font-bold text-text-main mb-3">Your Words</h3>
            <div className="flex flex-wrap gap-2">
              {[...foundWords].sort((a, b) => getWordScore(b) - getWordScore(a)).map(word => (
                <span key={word} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                  {word} <span className="text-green-500">+{getWordScore(word)}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Missed Words */}
        {possibleWords && missedWords.length > 0 && (
          <div className={`bg-white rounded-card shadow-card mb-6 ${showMissed ? 'p-4' : 'px-4 py-2'}`}>
            <button
              onClick={() => setShowMissed(!showMissed)}
              className="w-full flex items-center justify-between"
            >
              <span className={`text-text-muted ${showMissed ? 'font-bold text-text-main' : 'text-sm'}`}>
                Missed Words ({missedWords.length})
              </span>
              {showMissed ? <ChevronUp className="w-4 h-4 text-text-muted" /> : <ChevronDown className="w-4 h-4 text-text-muted" />}
            </button>
            {showMissed && (
              <div className="flex flex-wrap gap-2 mt-3 max-h-64 overflow-y-auto">
                {missedWords.map(word => (
                  <span key={word} className="bg-gray-50 text-text-muted px-3 py-1 rounded-full text-sm capitalize">
                    {word} <span className="text-gray-400">+{getWordScore(word)}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {!practiceMode && (
            <>
              <button
                onClick={handleShare}
                className="w-full py-3 bg-primary text-white rounded-button font-bold flex items-center justify-center gap-2 hover:bg-primary-hover transition-colors"
              >
                <Share2 className="w-5 h-5" />
                Share Results
              </button>
              <button
                onClick={onViewLeaderboard}
                className="w-full py-3 bg-white text-text-main rounded-button font-bold shadow-card flex items-center justify-center gap-2 hover:shadow-card-hover transition-shadow"
              >
                <Trophy className="w-5 h-5 text-yellow-500" />
                Leaderboard
              </button>
            </>
          )}

          {practiceMode && (
            <>
              <button
                onClick={onNewGame}
                className="w-full py-3 bg-primary text-white rounded-button font-bold flex items-center justify-center gap-2 hover:bg-primary-hover transition-colors"
              >
                <Plus className="w-5 h-5" />
                New Board
              </button>
              <button
                onClick={onReplay}
                className="w-full py-3 bg-white text-text-main rounded-button font-bold shadow-card flex items-center justify-center gap-2 hover:shadow-card-hover transition-shadow"
              >
                <RotateCcw className="w-5 h-5" />
                Replay This Board
              </button>
            </>
          )}

          <button
            onClick={onHome}
            className="w-full py-3 bg-gray-100 text-text-main rounded-button font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Games
          </button>
        </div>
      </div>
    </div>
  );
}
