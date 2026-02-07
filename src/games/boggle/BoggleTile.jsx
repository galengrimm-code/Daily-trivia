// src/games/boggle/BoggleTile.jsx
import React from 'react';

export default function BoggleTile({ letter, index, isSelected, isLast, disabled, inputMode, onPointerDown, onPointerMove, onPointerUp, onTap, setTileRef }) {
  let className = 'aspect-square rounded-xl text-2xl font-bold flex items-center justify-center select-none tile transition-all duration-100 ';

  if (isSelected) {
    className += isLast
      ? 'bg-yellow-400 text-green-900 scale-110 shadow-lg ring-4 ring-yellow-300 '
      : 'bg-teal-500 text-white ';
  } else {
    className += 'bg-white text-green-800 shadow-card ';
  }

  if (disabled) className += 'opacity-75 ';

  const handlers = {};

  if (inputMode === 'swipe') {
    handlers.onPointerDown = onPointerDown;
    handlers.onPointerMove = onPointerMove;
    handlers.onPointerUp = onPointerUp;
  } else if (inputMode === 'tap') {
    handlers.onClick = () => onTap?.(index);
  }

  return (
    <div
      ref={(el) => setTileRef?.(index, el)}
      data-index={index}
      className={className}
      {...handlers}
    >
      {letter}
    </div>
  );
}
