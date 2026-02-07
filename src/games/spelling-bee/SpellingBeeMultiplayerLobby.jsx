// src/games/spelling-bee/SpellingBeeMultiplayerLobby.jsx
import React, { useState } from 'react';
import { ArrowLeft, Copy, Check, Users } from 'lucide-react';

export default function SpellingBeeMultiplayerLobby({
  phase, // 'mp-menu' or 'mp-lobby'
  lobbies, roomId, isHost, roomPlayers, roomHostName,
  onHost, onJoinLobby, onStart, onLeave, onBack
}) {
  const [copied, setCopied] = useState(false);

  const playerCount = Object.keys(roomPlayers).length;
  const playerList = Object.entries(roomPlayers).map(([uid, data]) => ({
    uid,
    displayName: data.displayName || 'Player'
  }));

  const handleCopyCode = () => {
    if (roomId) {
      navigator.clipboard.writeText(roomId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  // Lobby browser (mp-menu)
  if (phase === 'mp-menu') {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between py-4 mb-4">
            <button
              onClick={onBack}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-text-main" />
            </button>
            <h1 className="text-xl font-bold text-text-main">Multiplayer</h1>
            <div className="w-10" />
          </div>

          {/* Host Button */}
          <button
            onClick={onHost}
            className="w-full py-4 bg-primary text-white rounded-button font-bold text-lg hover:bg-primary-hover transition-colors mb-4"
          >
            Host Game
          </button>

          {/* Open Games */}
          <div className="bg-white rounded-card p-4 shadow-card">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-text-muted" />
              <span className="text-sm font-bold text-text-muted">Open Games</span>
            </div>

            {lobbies.length === 0 ? (
              <div className="text-center text-text-muted py-4">
                No open games right now.<br />
                <span className="text-sm">Host one to get started!</span>
              </div>
            ) : (
              <div className="space-y-2">
                {lobbies.map(lobby => (
                  <button
                    key={lobby.roomId}
                    onClick={() => onJoinLobby(lobby.roomId)}
                    className="w-full flex items-center justify-between bg-amber-50 hover:bg-amber-100 rounded-button px-4 py-3 transition-colors border border-amber-200"
                  >
                    <div className="text-left">
                      <span className="font-bold text-text-main">{lobby.hostName}'s Game</span>
                      <span className="text-amber-600 text-sm ml-2">{lobby.playerCount}/8</span>
                    </div>
                    <span className="bg-primary text-white px-3 py-1 rounded-lg font-bold text-sm">
                      Join
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // In-room lobby (mp-lobby)
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between py-4 mb-4">
          <button
            onClick={onLeave}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-text-main" />
          </button>
          <h1 className="text-xl font-bold text-text-main">Game Lobby</h1>
          <div className="w-10" />
        </div>

        {/* Room Code */}
        <div className="text-center mb-6">
          <p className="text-text-muted text-sm mb-1">Room Code</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-4xl font-extrabold text-text-main tracking-widest">{roomId}</span>
            <button
              onClick={handleCopyCode}
              className="p-2 text-text-muted hover:text-primary transition-colors"
            >
              {copied ? <Check className="w-5 h-5 text-success" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Players */}
        <div className="bg-white rounded-card p-4 mb-6 shadow-card">
          <p className="text-sm text-text-muted mb-3">Players ({playerCount})</p>
          <div className="space-y-2">
            {playerList.map(player => (
              <div key={player.uid} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-success rounded-full" />
                <span className="text-text-main font-medium">
                  {player.displayName}
                  {roomPlayers[player.uid]?.displayName === roomHostName ? ' (host)' : ''}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Start / Waiting */}
        {isHost ? (
          <button
            onClick={onStart}
            disabled={playerCount < 2}
            className="w-full py-4 bg-primary text-white rounded-button font-bold text-lg hover:bg-primary-hover transition-colors disabled:opacity-50"
          >
            {playerCount < 2 ? 'Waiting for players...' : 'Start Game'}
          </button>
        ) : (
          <div className="text-center py-4 text-text-muted animate-pulse">
            Waiting for host to start...
          </div>
        )}
      </div>
    </div>
  );
}
