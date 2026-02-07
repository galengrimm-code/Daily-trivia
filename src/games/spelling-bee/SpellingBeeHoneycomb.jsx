// src/games/spelling-bee/SpellingBeeHoneycomb.jsx
import React from 'react';
import SpellingBeeHexTile from './SpellingBeeHexTile';

// Hex positions: center + 6 outer in a tight ring
// Tile size: 90x100. Container: 290x310.
// Gap between hex edges: ~2-3px
const POSITIONS = [
  { top: '50%', left: '50%' },       // center
  { top: '24%', left: '34%' },       // top-left
  { top: '24%', left: '66%' },       // top-right
  { top: '50%', left: '18%' },       // mid-left
  { top: '50%', left: '82%' },       // mid-right
  { top: '76%', left: '34%' },       // bottom-left
  { top: '76%', left: '66%' },       // bottom-right
];

export default function SpellingBeeHoneycomb({ centerLetter, outerLetters, onLetterClick, disabled }) {
  return (
    <div className="relative w-[290px] h-[310px] mx-auto my-4">
      {/* Center hex */}
      <SpellingBeeHexTile
        letter={centerLetter}
        isCenter={true}
        onClick={onLetterClick}
        disabled={disabled}
        style={{ top: POSITIONS[0].top, left: POSITIONS[0].left }}
      />

      {/* Outer hexes */}
      {outerLetters.map((letter, i) => (
        <SpellingBeeHexTile
          key={`${letter}-${i}`}
          letter={letter}
          isCenter={false}
          onClick={onLetterClick}
          disabled={disabled}
          style={{ top: POSITIONS[i + 1].top, left: POSITIONS[i + 1].left }}
        />
      ))}
    </div>
  );
}
