// src/games/memory/useMemoryGame.js
import { useState, useCallback, useRef, useEffect } from 'react';

// Card themes - emoji pairs
const CARD_SETS = [
  ['🍎', '🍊', '🍋', '🍇', '🍓', '🍒', '🥝', '🍑', '🥭', '🍍', '🫐', '🍌'],
  ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮'],
  ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🎱', '🏓', '🏸', '🥊', '⛳', '🎳'],
  ['🚗', '🚕', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🛵', '🚲', '✈️', '🚀'],
  ['🌸', '🌺', '🌻', '🌹', '🌷', '💐', '🌼', '🪻', '🌿', '🍀', '🌴', '🌵'],
  ['🎸', '🎹', '🥁', '🎺', '🎷', '🪗', '🎻', '🪕', '🎤', '🎧', '🎼', '🎵'],
];

// Seeded random number generator
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Shuffle array with seed
const shuffleWithSeed = (array, seed) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    seed = seed * 1103515245 + 12345;
    const j = Math.abs(seed) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Number of pairs (8 pairs = 16 cards = 4x4 grid)
const NUM_PAIRS = 8;

// Generate a deck of card pairs
const generateDeck = (seed) => {
  // Pick a random card set based on seed
  const setIndex = Math.floor(seededRandom(seed) * CARD_SETS.length);
  const cardSet = CARD_SETS[setIndex];

  // Shuffle the card set and take only NUM_PAIRS
  const shuffledSet = shuffleWithSeed([...cardSet], seed + 1).slice(0, NUM_PAIRS);

  // Create pairs (8 pairs = 16 cards)
  const pairs = shuffledSet.flatMap((emoji, index) => [
    { id: index * 2, pairId: index, emoji },
    { id: index * 2 + 1, pairId: index, emoji },
  ]);

  // Shuffle the pairs
  return shuffleWithSeed(pairs, seed);
};

export default function useMemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]); // Currently flipped (max 2)
  const [matchedPairs, setMatchedPairs] = useState([]); // Matched pair IDs
  const [moves, setMoves] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [phase, setPhase] = useState('intro'); // intro | playing | results
  const [isProcessing, setIsProcessing] = useState(false);

  const timerRef = useRef(null);

  // Timer effect
  useEffect(() => {
    if (phase === 'playing' && startTime) {
      timerRef.current = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [phase, startTime]);

  // Check for game completion
  useEffect(() => {
    if (matchedPairs.length === NUM_PAIRS && phase === 'playing') {
      // All pairs matched - game complete
      clearInterval(timerRef.current);
      setPhase('results');
    }
  }, [matchedPairs, phase]);

  const startGame = useCallback(() => {
    const seed = Date.now();
    const deck = generateDeck(seed);

    setCards(deck);
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
    setStartTime(Date.now());
    setElapsedTime(0);
    setIsProcessing(false);
    setPhase('playing');
  }, []);

  const flipCard = useCallback((cardId) => {
    if (isProcessing) return;
    if (flippedCards.includes(cardId)) return;
    if (flippedCards.length >= 2) return;

    const card = cards.find(c => c.id === cardId);
    if (!card) return;
    if (matchedPairs.includes(card.pairId)) return;

    const newFlipped = [...flippedCards, cardId];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      setIsProcessing(true);

      const [firstId, secondId] = newFlipped;
      const firstCard = cards.find(c => c.id === firstId);
      const secondCard = cards.find(c => c.id === secondId);

      if (firstCard.pairId === secondCard.pairId) {
        // Match found
        setTimeout(() => {
          setMatchedPairs(prev => [...prev, firstCard.pairId]);
          setFlippedCards([]);
          setIsProcessing(false);
        }, 500);
      } else {
        // No match - flip back after delay
        setTimeout(() => {
          setFlippedCards([]);
          setIsProcessing(false);
        }, 1000);
      }
    }
  }, [cards, flippedCards, matchedPairs, isProcessing]);

  const isCardFlipped = useCallback((cardId) => {
    return flippedCards.includes(cardId);
  }, [flippedCards]);

  const isCardMatched = useCallback((cardId) => {
    const card = cards.find(c => c.id === cardId);
    return card ? matchedPairs.includes(card.pairId) : false;
  }, [cards, matchedPairs]);

  const playAgain = useCallback(() => {
    startGame();
  }, [startGame]);

  const goToIntro = useCallback(() => {
    setPhase('intro');
  }, []);

  return {
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
    goToIntro,
  };
}
