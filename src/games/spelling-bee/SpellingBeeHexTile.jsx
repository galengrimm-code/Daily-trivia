// src/games/spelling-bee/SpellingBeeHexTile.jsx
import React, { useRef } from 'react';

const HEX_CLIP = 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)';

export default function SpellingBeeHexTile({ letter, isCenter, onClick, disabled, style }) {
  const innerRef = useRef(null);

  const handleClick = () => {
    if (disabled) return;
    // Pop animation on inner div to avoid conflicting with position transform
    const el = innerRef.current;
    if (el) {
      el.style.transform = 'scale(0.85)';
      setTimeout(() => { el.style.transform = 'scale(1)'; }, 80);
    }
    onClick(letter);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{
        ...style,
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
      }}
      className={`w-[100px] h-[112px] ${disabled ? 'opacity-60' : ''}`}
    >
      <div
        ref={innerRef}
        className={`w-full h-full flex items-center justify-center text-3xl font-extrabold transition-transform duration-100 ${
          isCenter
            ? 'bg-amber-400 text-amber-900 hover:bg-amber-300 active:bg-amber-500'
            : 'bg-gray-200 text-text-main hover:bg-gray-300 active:bg-gray-400'
        }`}
        style={{ clipPath: HEX_CLIP }}
      >
        {letter.toUpperCase()}
      </div>
    </button>
  );
}
