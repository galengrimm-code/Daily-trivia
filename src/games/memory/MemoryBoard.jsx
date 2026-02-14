// src/games/memory/MemoryBoard.jsx
import React from 'react';
import MemoryCard from './MemoryCard';

export default function MemoryBoard({
  cards,
  onFlipCard,
  isCardFlipped,
  isCardMatched,
  isProcessing,
}) {
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 p-2">
      {cards.map((card) => (
        <MemoryCard
          key={card.id}
          card={card}
          isFlipped={isCardFlipped(card.id)}
          isMatched={isCardMatched(card.id)}
          onClick={() => onFlipCard(card.id)}
          disabled={isProcessing}
        />
      ))}
    </div>
  );
}
