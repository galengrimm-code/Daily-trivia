// src/games/boggle/BoggleMultiplayerResults.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Home } from 'lucide-react';
import { getWordScore } from './boggleUtils';

const MEDALS = ['\u{1F947}', '\u{1F948}', '\u{1F949}'];

export default function BoggleMultiplayerResults({ mpResults, possibleWords, currentUserId, isHost, onPlayAgain, onLeave }) {
  const [expandedPlayers, setExpandedPlayers] = useState(new Set());
  const [showDuplicates, setShowDuplicates] = useState(false);

  const players = mpResults?.players || [];
  const duplicates = mpResults?.duplicates || [];
  const totalPossible = possibleWords?.length || 0;

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
            const isExpanded = expandedPlayers.has(player.userId);

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
                      {player.uniqueWords?.length || 0} unique / {player.words?.length || 0} total words
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-text-main">{player.score}</div>
                    <div className="text-xs text-text-muted">pts</div>
                  </div>
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-text-muted" /> : <ChevronDown className="w-4 h-4 text-text-muted" />}
                </button>

                {isExpanded && (
                  <div className="bg-gray-50 rounded-b-card px-4 py-3 -mt-1">
                    {player.uniqueWords?.length > 0 && (
                      <div className="mb-2">
                        <p className="text-xs font-bold text-success mb-1">Unique Words</p>
                        <div className="flex flex-wrap gap-1">
                          {player.uniqueWords.map(w => (
                            <span key={w} className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs capitalize">
                              {w} +{getWordScore(w)}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {player.words?.filter(w => duplicates.includes(w)).length > 0 && (
                      <div>
                        <p className="text-xs font-bold text-error mb-1">Cancelled (duplicates)</p>
                        <div className="flex flex-wrap gap-1">
                          {player.words.filter(w => duplicates.includes(w)).map(w => (
                            <span key={w} className="bg-red-50 text-red-400 px-2 py-0.5 rounded-full text-xs capitalize line-through">
                              {w}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Duplicates summary */}
        {duplicates.length > 0 && (
          <div className="bg-white rounded-card p-4 mb-6 shadow-card">
            <button
              onClick={() => setShowDuplicates(!showDuplicates)}
              className="w-full flex items-center justify-between"
            >
              <h3 className="font-bold text-text-main">Shared Words ({duplicates.length})</h3>
              {showDuplicates ? <ChevronUp className="w-4 h-4 text-text-muted" /> : <ChevronDown className="w-4 h-4 text-text-muted" />}
            </button>
            {showDuplicates && (
              <div className="flex flex-wrap gap-2 mt-3">
                {duplicates.map(w => (
                  <span key={w} className="bg-red-50 text-red-500 px-3 py-1 rounded-full text-sm capitalize">
                    {w}
                  </span>
                ))}
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
