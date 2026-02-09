// src/games/wordle/Wordle.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Delete, CornerDownLeft } from 'lucide-react';
import { getTodaysWord, isValidWord, evaluateGuess, getKeyboardStatus, generateShareText, REVEAL_DELAY } from './wordleUtils';
import { getTodayKey } from '../../utils/helpers';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']
];

export default function Wordle() {
  const navigate = useNavigate();
  const [target] = useState(() => getTodaysWord());
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameState, setGameState] = useState('playing'); // playing, won, lost
  const [message, setMessage] = useState('');
  const [shakeRow, setShakeRow] = useState(-1);
  const [revealingRow, setRevealingRow] = useState(-1);
  const [bounceRow, setBounceRow] = useState(-1);

  // Load saved game state from localStorage
  useEffect(() => {
    const savedDate = localStorage.getItem('wordle_date');
    const today = getTodayKey();

    if (savedDate === today) {
      const savedGuesses = JSON.parse(localStorage.getItem('wordle_guesses') || '[]');
      const savedState = localStorage.getItem('wordle_state') || 'playing';
      setGuesses(savedGuesses);
      setGameState(savedState);
    } else {
      // New day - reset
      localStorage.setItem('wordle_date', today);
      localStorage.setItem('wordle_guesses', '[]');
      localStorage.setItem('wordle_state', 'playing');
    }
  }, []);

  // Save game state
  useEffect(() => {
    localStorage.setItem('wordle_guesses', JSON.stringify(guesses));
    localStorage.setItem('wordle_state', gameState);
  }, [guesses, gameState]);

  const showMessage = useCallback((msg, duration = 1500) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), duration);
  }, []);

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

        if (currentGuess.toUpperCase() === target) {
          setGameState('won');
          setBounceRow(newGuesses.length - 1);
          setTimeout(() => setBounceRow(-1), 1000);
          showMessage(['Genius!', 'Magnificent!', 'Impressive!', 'Splendid!', 'Great!', 'Phew!'][newGuesses.length - 1], 3000);
        } else if (newGuesses.length >= 6) {
          setGameState('lost');
          showMessage(target, 5000);
        }
      }, REVEAL_DELAY * 5 + 300);
    } else if (currentGuess.length < 5 && /^[A-Z]$/.test(key)) {
      setCurrentGuess(prev => prev + key);
    }
  }, [currentGuess, guesses, gameState, target, showMessage]);

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

    let bgColor = 'bg-white border-2 border-gray-300';
    let textColor = 'text-text-main';

    if (status === 'correct') {
      bgColor = 'bg-green-500 border-green-500';
      textColor = 'text-white';
    } else if (status === 'present') {
      bgColor = 'bg-yellow-500 border-yellow-500';
      textColor = 'text-white';
    } else if (status === 'absent') {
      bgColor = 'bg-gray-500 border-gray-500';
      textColor = 'text-white';
    } else if (letter) {
      bgColor = 'bg-white border-2 border-gray-400';
    }

    return (
      <div
        key={colIndex}
        className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl font-bold rounded ${bgColor} ${textColor} transition-all`}
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
        className={`${isWide ? 'px-3 sm:px-4' : 'w-8 sm:w-10'} h-14 rounded font-bold text-sm sm:text-base ${bgColor} ${textColor} transition-colors flex items-center justify-center`}
      >
        {key === 'BACK' ? <Delete className="w-5 h-5" /> : key === 'ENTER' ? <CornerDownLeft className="w-5 h-5" /> : key}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button
          onClick={() => navigate('/')}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-text-main" />
        </button>
        <h1 className="text-xl font-bold text-text-main">Wordle</h1>
        <div className="w-10" />
      </div>

      {/* Message Toast */}
      {message && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg font-bold z-50 animate-fade-in">
          {message}
        </div>
      )}

      {/* Game Board */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="flex flex-col gap-1.5 mb-8">
          {[0, 1, 2, 3, 4, 5].map(renderRow)}
        </div>

        {/* Game Over Actions */}
        {gameState !== 'playing' && (
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        )}
      </div>

      {/* Keyboard */}
      <div className="p-2 pb-4 sm:p-4">
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
    </div>
  );
}
