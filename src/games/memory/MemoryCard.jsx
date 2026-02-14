// src/games/memory/MemoryCard.jsx
import React from 'react';

export default function MemoryCard({ card, isFlipped, isMatched, onClick, disabled }) {
  const showFace = isFlipped || isMatched;

  return (
    <button
      onClick={onClick}
      disabled={disabled || isMatched}
      className={`
        aspect-square w-full rounded-xl transition-all duration-300 transform
        ${showFace ? 'rotate-y-180' : ''}
        ${isMatched ? 'opacity-60 scale-95' : 'hover:scale-105 active:scale-95'}
        ${disabled && !isMatched ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
      style={{ perspective: '1000px' }}
    >
      <div
        className={`
          relative w-full h-full transition-transform duration-300 transform-style-3d
          ${showFace ? 'rotate-y-180' : ''}
        `}
        style={{
          transformStyle: 'preserve-3d',
          transform: showFace ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Card Back */}
        <div
          className={`
            absolute inset-0 w-full h-full rounded-xl
            bg-gradient-to-br from-primary to-primary-hover
            flex items-center justify-center
            shadow-lg backface-hidden
            ${showFace ? 'invisible' : 'visible'}
          `}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-white/30 text-3xl font-bold">?</div>
        </div>

        {/* Card Face */}
        <div
          className={`
            absolute inset-0 w-full h-full rounded-xl
            bg-white border-2 border-gray-200
            flex items-center justify-center
            shadow-lg
            ${showFace ? 'visible' : 'invisible'}
            ${isMatched ? 'border-green-400 bg-green-50' : ''}
          `}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <span className="text-4xl sm:text-5xl">{card.emoji}</span>
        </div>
      </div>
    </button>
  );
}
