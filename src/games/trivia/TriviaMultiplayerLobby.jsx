// src/games/trivia/TriviaMultiplayerLobby.jsx
import React, { useState } from 'react';
import { ArrowLeft, Copy, Check, Users, Crown } from 'lucide-react';
import { CATEGORIES } from '../../utils/helpers';
import questions from '../../data/questions';

const ALL_MP_CATEGORIES = ['History', 'Geography', 'Science', 'Math', 'Animals', 'Bible', 'General Knowledge', 'US States'];

// Get count of multiplayer questions per category
const getMultiplayerCount = (category) => {
  return (questions[category] || []).filter(q => q.pool === 'multiplayer').length;
};

export default function TriviaMultiplayerLobby({
  phase, // 'mp-menu', 'mp-host-setup', or 'mp-lobby'
  lobbies,
  roomId,
  isHost,
  roomPlayers,
  roomHostName,
  roomCategories,
  questionCount,
  onHost,
  onJoinLobby,
  onCreateRoom,
  onStart,
  onLeave,
  onBack,
}) {
  const [copied, setCopied] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([...ALL_MP_CATEGORIES]);

  const playerCount = Object.keys(roomPlayers || {}).length;
  const playerList = Object.entries(roomPlayers || {}).map(([uid, data]) => ({
    odayerId: uid,
    displayName: data.displayName || 'Player',
    isHost: data.displayName === roomHostName,
  }));

  const handleCopyCode = () => {
    if (roomId) {
      navigator.clipboard.writeText(roomId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      if (selectedCategories.length > 1) {
        setSelectedCategories(selectedCategories.filter(c => c !== cat));
      }
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  // Host setup - category selection
  if (phase === 'mp-host-setup') {
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
            <h1 className="text-xl font-bold text-text-main">Host Game</h1>
            <div className="w-10" />
          </div>

          {/* Category Selection */}
          <div className="bg-white rounded-card p-4 mb-6 shadow-card">
            <h3 className="text-lg font-semibold text-text-main mb-3">Select Categories</h3>
            <p className="text-sm text-text-muted mb-4">Choose which categories to include (12 questions total)</p>

            <div className="space-y-2">
              {ALL_MP_CATEGORIES.map(cat => {
                const style = CATEGORIES[cat] || { color: 'bg-gray-500', icon: '?' };
                const isSelected = selectedCategories.includes(cat);
                const questionCount = getMultiplayerCount(cat);

                return (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`w-full flex items-center gap-3 p-3 rounded-button border-2 transition-all ${
                      isSelected
                        ? 'border-primary bg-primary/10'
                        : 'border-gray-200 bg-gray-50 opacity-60'
                    }`}
                  >
                    <div className={`w-10 h-10 ${style.color} rounded-button flex items-center justify-center text-xl text-white`}>
                      {style.icon}
                    </div>
                    <span className="text-text-main font-medium flex-1 text-left">
                      {cat}
                      <span className="text-text-muted text-sm font-normal ml-2">({questionCount})</span>
                    </span>
                    {isSelected && <Check className="w-5 h-5 text-primary" />}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                if (selectedCategories.length === ALL_MP_CATEGORIES.length) {
                  setSelectedCategories([ALL_MP_CATEGORIES[0]]);
                } else {
                  setSelectedCategories([...ALL_MP_CATEGORIES]);
                }
              }}
              className="mt-3 text-sm text-primary hover:underline"
            >
              {selectedCategories.length === ALL_MP_CATEGORIES.length ? 'Deselect All' : 'Select All'}
            </button>
          </div>

          {/* Create Room Button */}
          <button
            onClick={() => onCreateRoom(selectedCategories)}
            className="w-full py-4 bg-primary text-white rounded-button font-bold text-lg hover:bg-primary-hover transition-colors"
          >
            Create Game Room
          </button>
        </div>
      </div>
    );
  }

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
            <h1 className="text-xl font-bold text-text-main">Multiplayer Trivia</h1>
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
                    className="w-full flex items-center justify-between bg-green-50 hover:bg-green-100 rounded-button px-4 py-3 transition-colors border border-green-200"
                  >
                    <div className="text-left">
                      <span className="font-bold text-text-main">{lobby.hostName}'s Game</span>
                      <span className="text-green-600 text-sm ml-2">{lobby.playerCount}/10</span>
                      <div className="text-xs text-text-muted mt-1">
                        {lobby.categories?.slice(0, 3).join(', ')}
                        {lobby.categories?.length > 3 && ` +${lobby.categories.length - 3}`}
                      </div>
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
              {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Game Info */}
        <div className="bg-white rounded-card p-4 mb-4 shadow-card">
          <p className="text-sm text-text-muted mb-2">Categories</p>
          <div className="flex flex-wrap gap-2">
            {(roomCategories || []).map(cat => {
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
          <p className="text-sm text-text-muted mt-3">{questionCount || 20} questions</p>
        </div>

        {/* Players */}
        <div className="bg-white rounded-card p-4 mb-6 shadow-card">
          <p className="text-sm text-text-muted mb-3">Players ({playerCount}/10)</p>
          <div className="space-y-2">
            {playerList.map(player => (
              <div key={player.odayerId} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-text-main font-medium flex-1">
                  {player.displayName}
                </span>
                {player.isHost && (
                  <Crown className="w-4 h-4 text-yellow-500" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Start / Waiting */}
        {isHost ? (
          <button
            onClick={onStart}
            className="w-full py-4 bg-primary text-white rounded-button font-bold text-lg hover:bg-primary-hover transition-colors"
          >
            Start Game
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
