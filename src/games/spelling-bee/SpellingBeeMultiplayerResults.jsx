// src/games/spelling-bee/SpellingBeeMultiplayerResults.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Home } from 'lucide-react';
import { getSpellingBeeScore } from './spellingBeeConstants';

const MEDALS = ['\u{1F947}', '\u{1F948}', '\u{1F949}'];

export default function SpellingBeeMultiplayerResults({ mpResults, validWords, currentUserId, isHost, onPlayAgain, onLeave }) {
  const [expandedPlayers, setExpandedPlayers] = useState(new Set());
  const [showAllWords, setShowAllWords] = useState(false);

  const players = mpResults?.players || [];
  const totalPossible = validWords?.length || 0;

  // Check if a word is a pangram (uses 7 unique letters)
  const isPangram = (word) => new Set(word.split('')).size >= 7;

  // Sort possible words: pangrams first, then by length, then alphabetically
  const sortedValidWords = [...(validWords || [])].sort((a, b) => {
    const aP = isPangram(a) ? 1 : 0;
    const bP = isPangram(b) ? 1 : 0;
    if (aP !== bP) return bP - aP;
    if (b.length !== a.length) return b.length - a.length;
    return a.localeCompare(b);
  });

  const pangramCount = sortedValidWords.filter(isPangram).length;

  const togglePlayer = (userId) => {
    setExpandedPlayers(prev => {
      const next = new Set(prev);
      if (next.has(userId)) {
        next.delete(userId);
      } else {
        next.add(userId);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center py-6 mb-4">
          <div className="text-5xl mb-2">{'\u{1F3C6}'}</div>
          <h1 className="text-2xl font-bold text-text-main">Results</h1>
          {totalPossible > 0 && (
            <p className="text-text-muted mt-1">{totalPossible} words possible</p>
          )}
        </div>

        {/* Player Rankings */}
        <div className="space-y-2 mb-6">
          {players.map((player, index) => {
            const isMe = player.userId === currentUserId;
            const words = player.words || [];

            return (
              <div key={player.userId}>
                <button
                  onClick={() => togglePlayer(player.userId)}
                  className={`w-full flex items-center gap-3 bg-white rounded-card p-4 shadow-card text-left ${
                    isMe ? 'ring-2 ring-primary' : ''
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
                    <div className={`font-bold ${isMe ? 'text-primary' : 'text-text-main'}`}>
                      {player.displayName}
                    </div>
                    <div className="text-sm text-text-muted">
                      {words.length} words
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-text-main">{player.score}</div>
                    <div className="text-xs text-text-muted">pts</div>
                  </div>
                  {expandedPlayers.has(player.userId) ? <ChevronUp className="w-4 h-4 text-text-muted" /> : <ChevronDown className="w-4 h-4 text-text-muted" />}
                </button>

                {expandedPlayers.has(player.userId) && words.length > 0 && (
                  <div className="bg-gray-50 rounded-b-card px-4 py-3 -mt-1">
                    <div className="flex flex-wrap gap-1">
                      {[...words].sort((a, b) => {
                        const aP = new Set(a.split('')).size >= 7 ? 1 : 0;
                        const bP = new Set(b.split('')).size >= 7 ? 1 : 0;
                        if (aP !== bP) return bP - aP;
                        return b.length - a.length;
                      }).map(w => {
                        const isPangram = new Set(w.split('')).size >= 7;
                        return (
                          <span key={w} className={`px-2 py-0.5 rounded-full text-xs capitalize ${
                            isPangram
                              ? 'bg-amber-100 text-amber-800 ring-1 ring-amber-300'
                              : 'bg-green-50 text-green-700'
                          }`}>
                            {w} +{getSpellingBeeScore(w, isPangram)}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* All Possible Words */}
        {totalPossible > 0 && (
          <div className="bg-white rounded-card p-4 mb-6 shadow-card">
            <button
              onClick={() => setShowAllWords(!showAllWords)}
              className="w-full flex items-center justify-between"
            >
              <h3 className="font-bold text-text-main">
                All Possible Words ({totalPossible})
                {pangramCount > 0 && (
                  <span className="ml-2 text-amber-600 text-sm font-normal">
                    {pangramCount} pangram{pangramCount > 1 ? 's' : ''}
                  </span>
                )}
              </h3>
              {showAllWords ? <ChevronUp className="w-4 h-4 text-text-muted" /> : <ChevronDown className="w-4 h-4 text-text-muted" />}
            </button>
            {showAllWords && (
              <div className="flex flex-wrap gap-1 mt-3 max-h-64 overflow-y-auto">
                {sortedValidWords.map(w => {
                  const isWordPangram = isPangram(w);
                  return (
                    <span key={w} className={`px-2 py-0.5 rounded-full text-xs capitalize ${
                      isWordPangram
                        ? 'bg-amber-100 text-amber-800 ring-1 ring-amber-300 font-semibold'
                        : 'bg-gray-100 text-text-main'
                    }`}>
                      {w} +{getSpellingBeeScore(w, isWordPangram)}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="space-y-3">
          {isHost && (
            <button
              onClick={onPlayAgain}
              className="w-full py-3 bg-primary text-white rounded-button font-bold hover:bg-primary-hover transition-colors"
            >
              Play Again
            </button>
          )}
          <button
            onClick={onLeave}
            className="w-full py-3 bg-gray-100 text-text-main rounded-button font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
          >
            <Home className="w-5 h-5" />
            Leave Room
          </button>
        </div>
      </div>
    </div>
  );
}
