// src/games/wordle/Wordle.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Delete, BarChart2, X } from 'lucide-react';
import { getTodaysWord, isValidWord, evaluateGuess, getKeyboardStatus, generateShareText, REVEAL_DELAY } from './wordleUtils';
import { getTodayKey, getShortDateStr } from '../../utils/helpers';
import { usePlayer } from '../../hooks/usePlayer';
import { saveWordleScore, getWordleStats, saveWordleStats } from './wordleFirebase';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']
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
  const [showImport, setShowImport] = useState(false);
  const [stats, setStats] = useState({
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    guessDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
  });
  const [importData, setImportData] = useState({
    gamesPlayed: '',
    currentStreak: '',
    maxStreak: '',
    g1: '', g2: '', g3: '', g4: '', g5: '', g6: ''
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

    // Reveal tiles one by one (reveal color when tile is flat at 50% of animation)
    const timers = [];
    for (let i = 0; i <= 5; i++) {
      const timer = setTimeout(() => {
        setRevealedTiles(i);
      }, i * REVEAL_DELAY + 250); // Reveal at midpoint of 500ms flip animation
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

  const handleImportStats = () => {
    const gamesPlayed = parseInt(importData.gamesPlayed) || 0;
    const currentStreak = parseInt(importData.currentStreak) || 0;
    const maxStreak = parseInt(importData.maxStreak) || 0;
    const guessDistribution = {
      1: parseInt(importData.g1) || 0,
      2: parseInt(importData.g2) || 0,
      3: parseInt(importData.g3) || 0,
      4: parseInt(importData.g4) || 0,
      5: parseInt(importData.g5) || 0,
      6: parseInt(importData.g6) || 0
    };
    const gamesWon = Object.values(guessDistribution).reduce((a, b) => a + b, 0);

    const newStats = {
      gamesPlayed,
      gamesWon,
      currentStreak,
      maxStreak,
      guessDistribution
    };

    setStats(newStats);
    localStorage.setItem('wordle_stats', JSON.stringify(newStats));

    if (user) {
      saveWordleStats(user.uid, newStats);
    }

    setShowImport(false);
    alert('Stats imported successfully!');
  };

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

  const handleShare = () => {
    const text = generateShareText(guesses, target, gameState === 'won', getShortDateStr());
    if (navigator.share) {
      navigator.share({ text }).catch(() => {});
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
    let textColor = 'text-gray-900';

    if (effectiveStatus === 'correct') {
      bgColor = 'bg-green-600 border-green-600';
      textColor = 'text-white';
    } else if (effectiveStatus === 'present') {
      bgColor = 'bg-yellow-500 border-yellow-500';
      textColor = 'text-white';
    } else if (effectiveStatus === 'absent') {
      bgColor = 'bg-gray-500 border-gray-500';
      textColor = 'text-white';
    } else if (letter) {
      bgColor = 'bg-white border-2 border-gray-900';
    }

    return (
      <div
        key={colIndex}
        className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl font-bold ${bgColor} ${textColor}`}
        style={{
          animation: isRevealing ? 'flip 0.5s ease-in-out forwards' : isBouncing ? 'bounce 0.3s ease forwards' : 'none',
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
        className={`flex gap-1 justify-center ${isShaking ? 'animate-shake' : ''}`}
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
    let textColor = 'text-gray-900';

    if (status === 'correct') {
      bgColor = 'bg-green-600 hover:bg-green-700';
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
        className={`${isWide ? 'px-2 sm:px-3 text-xs' : 'w-8 sm:w-10'} h-14 rounded-md font-bold ${bgColor} ${textColor} transition-colors flex items-center justify-center`}
      >
        {key === 'BACK' ? <Delete className="w-5 h-5" /> : key}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
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
      <div className="flex flex-col items-center pt-4 mb-8">
        <div className="flex flex-col gap-1.5">
          {[0, 1, 2, 3, 4, 5].map(renderRow)}
        </div>

        {/* Game Over Actions */}
        {gameState !== 'playing' && (
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors"
            >
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        )}
      </div>

      {/* Keyboard */}
      <div className="p-2 pb-4">
        <div className="flex flex-col gap-2 items-center max-w-lg mx-auto">
          {KEYBOARD_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-1.5 justify-center">
              {row.map(renderKey)}
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes flip {
          0% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
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
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <h2 className="text-sm font-bold text-black tracking-wide text-center mb-4">STATISTICS</h2>

            {/* Stats Row */}
            <div className="flex justify-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-light text-black">{stats.gamesPlayed}</div>
                <div className="text-xs text-gray-600">Played</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-black">
                  {stats.gamesPlayed > 0 ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) : 0}
                </div>
                <div className="text-xs text-gray-600">Win %</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-black">{stats.currentStreak}</div>
                <div className="text-xs text-gray-600 leading-tight">Current<br/>Streak</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-black">{stats.maxStreak}</div>
                <div className="text-xs text-gray-600 leading-tight">Max<br/>Streak</div>
              </div>
            </div>

            {/* Guess Distribution */}
            <h3 className="text-sm font-bold text-black tracking-wide mb-3">GUESS DISTRIBUTION</h3>
            <div className="space-y-1 mb-6">
              {[1, 2, 3, 4, 5, 6].map(num => {
                const count = stats.guessDistribution[num] || 0;
                const maxCount = Math.max(...Object.values(stats.guessDistribution), 1);
                const width = Math.max((count / maxCount) * 100, 7);
                const isCurrentGuess = gameState === 'won' && guesses.length === num;

                return (
                  <div key={num} className="flex items-center gap-2">
                    <span className="w-3 text-sm font-bold text-black">{num}</span>
                    <div
                      className={`h-5 flex items-center justify-end px-2 ${
                        isCurrentGuess ? 'bg-green-600' : 'bg-gray-500'
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
                className="w-full flex items-center justify-center gap-2 py-4 bg-green-600 text-white rounded-full font-bold text-lg hover:bg-green-700 transition-colors"
              >
                Share
                <Share2 className="w-5 h-5" />
              </button>
            )}

            {/* Import Stats Button */}
            <button
              onClick={() => setShowImport(true)}
              className="w-full mt-3 text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Import NYT Wordle Stats
            </button>
          </div>
        </div>
      )}

      {/* Import Stats Modal */}
      {showImport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 relative">
            <button
              onClick={() => setShowImport(false)}
              className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <h2 className="text-lg font-bold text-black text-center mb-4">Import NYT Stats</h2>
            <p className="text-xs text-gray-500 text-center mb-4">Enter your stats from NYT Wordle</p>

            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-xs text-gray-600">Played</label>
                  <input
                    type="number"
                    value={importData.gamesPlayed}
                    onChange={(e) => setImportData({...importData, gamesPlayed: e.target.value})}
                    className="w-full border rounded px-2 py-1 text-center"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Current Streak</label>
                  <input
                    type="number"
                    value={importData.currentStreak}
                    onChange={(e) => setImportData({...importData, currentStreak: e.target.value})}
                    className="w-full border rounded px-2 py-1 text-center"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-600">Max Streak</label>
                  <input
                    type="number"
                    value={importData.maxStreak}
                    onChange={(e) => setImportData({...importData, maxStreak: e.target.value})}
                    className="w-full border rounded px-2 py-1 text-center"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-600 block mb-1">Guess Distribution</label>
                <div className="grid grid-cols-6 gap-1">
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <div key={num} className="text-center">
                      <div className="text-xs text-gray-500 mb-1">{num}</div>
                      <input
                        type="number"
                        value={importData[`g${num}`]}
                        onChange={(e) => setImportData({...importData, [`g${num}`]: e.target.value})}
                        className="w-full border rounded px-1 py-1 text-center text-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleImportStats}
                className="w-full py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors mt-4"
              >
                Import Stats
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
