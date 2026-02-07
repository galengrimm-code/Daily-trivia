// src/games/boggle/BoggleBoard.jsx
import React, { useRef, useEffect } from 'react';
import BoggleTile from './BoggleTile';

export default function BoggleBoard({ board, selectedPath, inputMode, disabled, swipeHandlers, setTileRef, tileRefs, onTap }) {
  const svgRef = useRef(null);

  // Render swipe lines between selected tiles
  useEffect(() => {
    if (!svgRef.current || !tileRefs?.current) return;
    const svg = svgRef.current;

    if (selectedPath.length > 1 && inputMode === 'swipe') {
      let lines = '';
      const svgRect = svg.getBoundingClientRect();

      for (let i = 0; i < selectedPath.length - 1; i++) {
        const from = tileRefs.current[selectedPath[i]];
        const to = tileRefs.current[selectedPath[i + 1]];
        if (from && to) {
          const fromRect = from.getBoundingClientRect();
          const toRect = to.getBoundingClientRect();
          const x1 = fromRect.left + fromRect.width / 2 - svgRect.left;
          const y1 = fromRect.top + fromRect.height / 2 - svgRect.top;
          const x2 = toRect.left + toRect.width / 2 - svgRect.left;
          const y2 = toRect.top + toRect.height / 2 - svgRect.top;
          lines += `<line class="swipe-line" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
        }
      }
      svg.innerHTML = lines;
    } else {
      svg.innerHTML = '';
    }
  }, [selectedPath, inputMode, tileRefs]);

  return (
    <div className="board-container relative">
      <svg
        ref={svgRef}
        className="swipe-svg absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 5 }}
      />
      <div className="grid grid-cols-4 gap-2">
        {board.map((letter, index) => (
          <BoggleTile
            key={index}
            letter={letter}
            index={index}
            isSelected={selectedPath.includes(index)}
            isLast={selectedPath[selectedPath.length - 1] === index}
            disabled={disabled}
            inputMode={inputMode}
            onPointerDown={swipeHandlers?.onPointerDown}
            onPointerMove={swipeHandlers?.onPointerMove}
            onPointerUp={swipeHandlers?.onPointerUp}
            onTap={onTap}
            setTileRef={setTileRef}
          />
        ))}
      </div>
    </div>
  );
}
