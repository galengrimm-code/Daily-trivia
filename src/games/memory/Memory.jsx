// src/games/memory/Memory.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, MousePointer, ChevronRight } from 'lucide-react';
import { usePlayer } from '../../hooks/usePlayer';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import useMemoryGame from './useMemoryGame';
import MemoryBoard from './MemoryBoard';
import MemoryResults from './MemoryResults';

// Format seconds to mm:ss
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default function Memory() {
  const navigate = useNavigate();
  const { user } = usePlayer();
  const [personalBest, setPersonalBest] = useState(null);
  const [isNewBest, setIsNewBest] = useState(false);

  const {
    cards,
    moves,
    elapsedTime,
    matchedPairs,
    phase,
    isProcessing,
    flipCard,
    isCardFlipped,
    isCardMatched,
    startGame,
    playAgain,
  } = useMemoryGame();

  // Load personal best on mount
  useEffect(() => {
    const loadPersonalBest = async () => {
      if (!user) return;
      try {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          if (data.memoryBest) {
            setPersonalBest(data.memoryBest);
          }
        }
      } catch (e) {
        console.error('Error loading personal best:', e);
      }
    };
    loadPersonalBest();
  }, [user]);

  // Save personal best when game completes
  useEffect(() => {
    const savePersonalBest = async () => {
      if (phase !== 'results' || !user) return;

      const currentScore = { moves, time: elapsedTime };

      // Check if this is a new personal best (fewer moves, or same moves but faster)
      const isBetter = !personalBest ||
        moves < personalBest.moves ||
        (moves === personalBest.moves && elapsedTime < personalBest.time);

      if (isBetter) {
        setIsNewBest(true);
        setPersonalBest(currentScore);

        try {
          const userRef = doc(db, 'users', user.uid);
          await updateDoc(userRef, { memoryBest: currentScore });
        } catch (e) {
          console.error('Error saving personal best:', e);
        }
      } else {
        setIsNewBest(false);
      }
    };

    savePersonalBest();
  }, [phase, user, moves, elapsedTime, personalBest]);

  const handleShare = () => {
    const text = `Memory Game\n${moves} moves in ${formatTime(elapsedTime)}\n\nPlay at ${window.location.origin}/memory`;

    if (navigator.share) {
      navigator.share({ text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
      });
    }
  };

  const handlePlayAgain = () => {
    setIsNewBest(false);
    playAgain();
  };

  // Results screen
  if (phase === 'results') {
    return (
      <MemoryResults
        moves={moves}
        time={elapsedTime}
        personalBest={personalBest}
        isNewBest={isNewBest}
        onPlayAgain={handlePlayAgain}
        onHome={() => navigate('/')}
        onShare={handleShare}
      />
    );
  }

  // Playing screen
  if (phase === 'playing') {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between py-4 mb-2">
            <button
              onClick={() => navigate('/')}
              className="text-text-muted hover:text-text-main transition-colors font-medium"
            >
              &larr; Exit
            </button>
            <h1 className="text-xl font-bold text-text-main">Memory</h1>
            <div className="w-12" />
          </div>

          {/* Stats Bar */}
          <div className="flex items-center justify-center gap-6 mb-4 py-3 bg-white rounded-card shadow-card">
            <div className="flex items-center gap-2">
              <MousePointer className="w-5 h-5 text-primary" />
              <span className="font-bold text-text-main">{moves}</span>
              <span className="text-text-muted text-sm">moves</span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-bold text-text-main">{formatTime(elapsedTime)}</span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-text-main">{matchedPairs.length}</span>
              <span className="text-text-muted text-sm">/ 12</span>
            </div>
          </div>

          {/* Game Board */}
          <MemoryBoard
            cards={cards}
            onFlipCard={flipCard}
            isCardFlipped={isCardFlipped}
            isCardMatched={isCardMatched}
            isProcessing={isProcessing}
          />
        </div>
      </div>
    );
  }

  // Intro screen
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between py-4 mb-4">
          <button
            onClick={() => navigate('/')}
            className="text-text-muted hover:text-text-main transition-colors font-medium"
          >
            &larr; Back
          </button>
          <h1 className="text-xl font-bold text-text-main">Memory</h1>
          <div className="w-12" />
        </div>

        {/* Hero */}
        <div className="text-center py-6 mb-6">
          <div className="text-6xl mb-4">{'\u{1F0CF}'}</div>
          <h2 className="text-2xl font-bold text-text-main mb-2">Concentration</h2>
          <p className="text-text-muted">Match all 12 pairs as fast as you can!</p>
        </div>

        {/* How to Play */}
        <div className="bg-white rounded-card p-6 mb-6 shadow-card">
          <h3 className="text-lg font-semibold text-text-main mb-4">How to Play</h3>
          <ul className="space-y-3 text-text-muted">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">1.</span>
              <span>Flip two cards to reveal their symbols</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">2.</span>
              <span>If they match, they stay face up</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">3.</span>
              <span>If not, they flip back - remember their positions!</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">4.</span>
              <span>Find all 12 pairs with the fewest moves</span>
            </li>
          </ul>
        </div>

        {/* Personal Best */}
        {personalBest && (
          <div className="bg-white rounded-card p-4 mb-6 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-text-muted">Personal Best</span>
              <span className="font-bold text-text-main">
                {personalBest.moves} moves in {formatTime(personalBest.time)}
              </span>
            </div>
          </div>
        )}

        {/* Start Button */}
        <button
          onClick={startGame}
          className="w-full py-4 bg-primary text-white rounded-button font-bold text-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 shadow-lg"
        >
          Start Game
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
