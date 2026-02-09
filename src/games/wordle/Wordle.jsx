// src/games/wordle/Wordle.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Delete, CornerDownLeft, BarChart2, X } from 'lucide-react';
import { getTodaysWord, isValidWord, evaluateGuess, getKeyboardStatus, generateShareText, REVEAL_DELAY } from './wordleUtils';
import { getTodayKey } from '../../utils/helpers';
import { usePlayer } from '../../hooks/usePlayer';
import { saveWordleScore, getWordleStats, saveWordleStats } from './wordleFirebase';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['BACK', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER']
];

export default function Wordle() {
  const navigate = useNavigate();
  const { user } = usePlayer();
  const [target] = useState(() => getTodaysWord());
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameState, setGameState] = useState('playing'); // playing, won, lost
  const [message, setMessage] = useState('');
  const [shakeRow, setShakeRow] = useState(-1);
  const [revealingRow, setRevealingRow] = useState(-1);
  const [bounceRow, setBounceRow] = useState(-1);
  const [revealedTiles, setRevealedTiles] = useState(0); // Track how many tiles have flipped in current reveal
  const [showStats, setShowStats] = useState(false);
  const [stats, setStats] = useState({
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    guessDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
  });
  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  // Load saved game state from localStorage
  useEffect(() => {
    const savedDate = localStorage.getItem('wordle_date');
    const today = getTodayKey();

    if (savedDate === today) {
      const savedGuesses = JSON.parse(localStorage.getItem('wordle_guesses') || '[]');
      const savedState = localStorage.getItem('wordle_state') || 'playing';
      setGuesses(savedGuesses);
      setGameState(savedState);
      setScoreSubmitted(localStorage.getItem('wordle_submitted') === 'true');
      // Show stats if game is already completed
      if (savedState === 'won' || savedState === 'lost') {
        setShowStats(true);
      }
    } else {
      // New day - reset
      localStorage.setItem('wordle_date', today);
      localStorage.setItem('wordle_guesses', '[]');
      localStorage.setItem('wordle_state', 'playing');
      localStorage.removeItem('wordle_submitted');
    }
  }, []);

  // Load stats from Firebase (with localStorage fallback)
  useEffect(() => {
    const loadStats = async () => {
      if (user) {
        // Try Firebase first
        const firebaseStats = await getWordleStats(user.uid);
        if (firebaseStats) {
          setStats(firebaseStats);
          // Sync to localStorage as cache
          localStorage.setItem('wordle_stats', JSON.stringify(firebaseStats));
          return;
        }
      }
      // Fall back to localStorage
      const savedStats = JSON.parse(localStorage.getItem('wordle_stats') || 'null');
      if (savedStats) {
        setStats(savedStats);
        // If user is logged in, migrate localStorage stats to Firebase
        if (user) {
          saveWordleStats(user.uid, savedStats);
        }
      }
    };
    loadStats();
  }, [user]);

  // Handle sequential tile reveal animation
  useEffect(() => {
    if (revealingRow === -1) {
      setRevealedTiles(0);
      return;
    }

    // Reveal tiles one by one
    const timers = [];
    for (let i = 0; i <= 5; i++) {
      const timer = setTimeout(() => {
        setRevealedTiles(i);
      }, i * REVEAL_DELAY + REVEAL_DELAY / 2); // Reveal at midpoint of flip
      timers.push(timer);
    }

    return () => timers.forEach(t => clearTimeout(t));
  }, [revealingRow]);

  // Save game state
  useEffect(() => {
    localStorage.setItem('wordle_guesses', JSON.stringify(guesses));
    localStorage.setItem('wordle_state', gameState);
  }, [guesses, gameState]);

  const showMessage = useCallback((msg, duration = 1500) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), duration);
  }, []);

  const updateStats = useCallback((won, numGuesses) => {
    const newStats = { ...stats };
    newStats.gamesPlayed += 1;

    if (won) {
      newStats.gamesWon += 1;
      newStats.currentStreak += 1;
      newStats.maxStreak = Math.max(newStats.maxStreak, newStats.currentStreak);
      newStats.guessDistribution = {
        ...newStats.guessDistribution,
        [numGuesses]: (newStats.guessDistribution[numGuesses] || 0) + 1
      };
    } else {
      newStats.currentStreak = 0;
    }

    setStats(newStats);

    // Save to localStorage as cache
    localStorage.setItem('wordle_stats', JSON.stringify(newStats));

    // Save to Firebase if logged in
    if (user) {
      saveWordleStats(user.uid, newStats);
    }

    // Submit score to daily leaderboard
    if (user && !scoreSubmitted) {
      const dateKey = getTodayKey();
      saveWordleScore(user.uid, user.displayName, dateKey, won, numGuesses);
      setScoreSubmitted(true);
      localStorage.setItem('wordle_submitted', 'true');
    }

    // Show stats modal immediately after game ends
    setShowStats(true);
  }, [user, scoreSubmitted, stats]);

  const handleKeyPress = useCallback((key) => {
    if (gameState !== 'playing') return;

    if (key === 'BACK') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (key === 'ENTER') {
      if (currentGuess.length !== 5) {
        showMessage('Not enough letters');
        setShakeRow(guesses.length);
        setTimeout(() => setShakeRow(-1), 600);
        return;
      }

      if (!isValidWord(currentGuess)) {
        showMessage('Not in word list');
        setShakeRow(guesses.length);
        setTimeout(() => setShakeRow(-1), 600);
        return;
      }

      const newGuesses = [...guesses, currentGuess];
      setGuesses(newGuesses);
      setCurrentGuess('');
      setRevealingRow(guesses.length);

      // Check win/lose after reveal animation
      setTimeout(() => {
        setRevealingRow(-1);

        const won = currentGuess.toUpperCase() === target;
        const lost = !won && newGuesses.length >= 6;

        if (won) {
          setGameState('won');
          setBounceRow(newGuesses.length - 1);
          setTimeout(() => setBounceRow(-1), 1000);
          showMessage(['Genius!', 'Magnificent!', 'Impressive!', 'Splendid!', 'Great!', 'Phew!'][newGuesses.length - 1], 3000);
          updateStats(true, newGuesses.length);
        } else if (lost) {
          setGameState('lost');
          showMessage(target, 5000);
          updateStats(false, null);
        }
      }, REVEAL_DELAY * 5 + 300);
    } else if (currentGuess.length < 5 && /^[A-Z]$/.test(key)) {
      setCurrentGuess(prev => prev + key);
    }
  }, [currentGuess, guesses, gameState, target, showMessage, updateStats]);

  // Keyboard input handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      if (e.key === 'Enter') {
        handleKeyPress('ENTER');
      } else if (e.key === 'Backspace') {
        handleKeyPress('BACK');
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        handleKeyPress(e.key.toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress]);

  const handleShare = async () => {
    const text = generateShareText(guesses, target, gameState === 'won');
    try {
      await navigator.clipboard.writeText(text);
      showMessage('Copied to clipboard!');
    } catch {
      // Fallback for mobile
      if (navigator.share) {
        await navigator.share({ text });
      }
    }
  };

  const keyboardStatus = getKeyboardStatus(guesses, target);

  // Render a single tile
  const renderTile = (letter, status, rowIndex, colIndex, isRevealing, isBouncing) => {
    const revealDelay = isRevealing ? colIndex * REVEAL_DELAY : 0;
    const bounceDelay = isBouncing ? colIndex * 100 : 0;

    // Only show color after tile has flipped (using revealedTiles state)
    const isRevealed = !isRevealing || colIndex < revealedTiles;
    const effectiveStatus = isRevealed ? status : null;

    let bgColor = 'bg-white border-2 border-gray-300';
    let textColor = 'text-text-main';

    if (effectiveStatus === 'correct') {
      bgColor = 'bg-green-500 border-green-500';
      textColor = 'text-white';
    } else if (effectiveStatus === 'present') {
      bgColor = 'bg-yellow-500 border-yellow-500';
      textColor = 'text-white';
    } else if (effectiveStatus === 'absent') {
      bgColor = 'bg-gray-500 border-gray-500';
      textColor = 'text-white';
    } else if (letter) {
      bgColor = 'bg-white border-2 border-gray-400';
    }

    return (
      <div
        key={colIndex}
        className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold rounded ${bgColor} ${textColor}`}
        style={{
          animation: isRevealing ? 'flip 0.5s ease forwards' : isBouncing ? 'bounce 0.3s ease forwards' : 'none',
          animationDelay: isRevealing ? `${revealDelay}ms` : isBouncing ? `${bounceDelay}ms` : '0ms'
        }}
      >
        {letter}
      </div>
    );
  };

  // Render a row of tiles
  const renderRow = (rowIndex) => {
    const isCurrentRow = rowIndex === guesses.length && gameState === 'playing';
    const isGuessedRow = rowIndex < guesses.length;
    const isShaking = shakeRow === rowIndex;
    const isRevealing = revealingRow === rowIndex;
    const isBouncing = bounceRow === rowIndex;

    let letters = '';
    let evaluation = null;

    if (isGuessedRow) {
      letters = guesses[rowIndex];
      evaluation = evaluateGuess(letters, target);
    } else if (isCurrentRow) {
      letters = currentGuess;
    }

    return (
      <div
        key={rowIndex}
        className={`flex gap-1.5 justify-center ${isShaking ? 'animate-shake' : ''}`}
      >
        {[0, 1, 2, 3, 4].map(colIndex => {
          const letter = letters[colIndex] || '';
          const status = evaluation ? evaluation[colIndex].status : null;
          return renderTile(letter, status, rowIndex, colIndex, isRevealing, isBouncing);
        })}
      </div>
    );
  };

  // Render keyboard key
  const renderKey = (key) => {
    const status = keyboardStatus[key];
    let bgColor = 'bg-gray-200 hover:bg-gray-300';
    let textColor = 'text-text-main';

    if (status === 'correct') {
      bgColor = 'bg-green-500 hover:bg-green-600';
      textColor = 'text-white';
    } else if (status === 'present') {
      bgColor = 'bg-yellow-500 hover:bg-yellow-600';
      textColor = 'text-white';
    } else if (status === 'absent') {
      bgColor = 'bg-gray-500 hover:bg-gray-600';
      textColor = 'text-white';
    }

    const isWide = key === 'ENTER' || key === 'BACK';

    return (
      <button
        key={key}
        onClick={() => handleKeyPress(key)}
        className={`${isWide ? 'px-2 sm:px-3' : 'w-8 sm:w-9'} h-11 sm:h-12 rounded font-bold text-sm ${bgColor} ${textColor} transition-colors flex items-center justify-center`}
      >
        {key === 'BACK' ? <Delete className="w-4 h-4" /> : key === 'ENTER' ? <CornerDownLeft className="w-4 h-4" /> : key}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
        <button
          onClick={() => navigate('/')}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-text-main" />
        </button>
        <h1 className="text-xl font-bold text-text-main">Wordle</h1>
        <button
          onClick={() => setShowStats(true)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <BarChart2 className="w-5 h-5 text-text-main" />
        </button>
      </div>

      {/* Message Toast */}
      {message && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg font-bold z-50 animate-fade-in">
          {message}
        </div>
      )}

      {/* Game Board */}
      <div className="flex-1 flex flex-col items-center justify-start pt-4">
        <div className="flex flex-col gap-1.5 mb-2">
          {[0, 1, 2, 3, 4, 5].map(renderRow)}
        </div>

        {/* Game Over Actions */}
        {gameState !== 'playing' && (
          <div className="flex gap-4">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-5 py-2 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors text-sm"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        )}
      </div>

      {/* Keyboard */}
      <div className="p-2 pb-4">
        <div className="flex flex-col gap-1.5 items-center max-w-lg mx-auto">
          {KEYBOARD_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-1.5">
              {row.map(renderKey)}
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes flip {
          0% { transform: rotateX(0); }
          50% { transform: rotateX(90deg); }
          100% { transform: rotateX(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translate(-50%, -10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease forwards;
        }
        .animate-shake {
          animation: shake 0.6s ease;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
      `}</style>

      {/* Statistics Modal */}
      {showStats && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 relative">
            <button
              onClick={() => setShowStats(false)}
              className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-text-muted" />
            </button>

            <h2 className="text-xl font-bold text-text-main text-center mb-6">Statistics</h2>

            {/* Stats Row */}
            <div className="flex justify-center gap-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-text-main">{stats.gamesPlayed}</div>
                <div className="text-xs text-text-muted">Played</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-text-main">
                  {stats.gamesPlayed > 0 ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) : 0}
                </div>
                <div className="text-xs text-text-muted">Win %</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-text-main">{stats.currentStreak}</div>
                <div className="text-xs text-text-muted">Current Streak</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-text-main">{stats.maxStreak}</div>
                <div className="text-xs text-text-muted">Max Streak</div>
              </div>
            </div>

            {/* Guess Distribution */}
            <h3 className="text-sm font-bold text-text-main mb-3">GUESS DISTRIBUTION</h3>
            <div className="space-y-1 mb-6">
              {[1, 2, 3, 4, 5, 6].map(num => {
                const count = stats.guessDistribution[num] || 0;
                const maxCount = Math.max(...Object.values(stats.guessDistribution), 1);
                const width = Math.max((count / maxCount) * 100, 8);
                const isCurrentGuess = gameState === 'won' && guesses.length === num;

                return (
                  <div key={num} className="flex items-center gap-2">
                    <span className="w-4 text-sm font-medium text-text-main">{num}</span>
                    <div
                      className={`h-5 flex items-center justify-end px-2 rounded-sm ${
                        isCurrentGuess ? 'bg-green-500' : 'bg-gray-400'
                      }`}
                      style={{ width: `${width}%`, minWidth: '24px' }}
                    >
                      <span className="text-xs font-bold text-white">{count}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Share Button (only show when game is over) */}
            {gameState !== 'playing' && (
              <button
                onClick={handleShare}
                className="w-full flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors"
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
