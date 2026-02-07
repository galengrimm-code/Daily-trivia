// src/games/boggle/useBoggleSwipe.js
import { useRef, useCallback } from 'react';
import { areAdjacent, isDiagonal } from './boggleUtils';

const BACKTRACK_DELAY = 150; // ms before allowing backtrack
const TOUCH_RADIUS = 30; // px tolerance around tile edges

export default function useBoggleSwipe({ board, selectedPath, setSelectedPath, setCurrentWord, onSubmitWord, onClearSelection, disabled }) {
  const isDragging = useRef(false);
  const lastTileAddedTime = useRef(0);
  const tileRefs = useRef([]);

  const setTileRef = useCallback((index, el) => {
    tileRefs.current[index] = el;
  }, []);

  // Find tile at screen coordinates with expanded hit area
  const getTileFromPoint = useCallback((x, y) => {
    // Try exact hit first
    const el = document.elementFromPoint(x, y);
    if (el?.dataset?.index !== undefined) {
      return parseInt(el.dataset.index);
    }

    // Fallback: nearest tile within touch radius
    let nearestIndex = -1;
    let nearestDist = Infinity;

    for (let i = 0; i < tileRefs.current.length; i++) {
      const tile = tileRefs.current[i];
      if (!tile) continue;
      const rect = tile.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      if (x >= rect.left - TOUCH_RADIUS && x <= rect.right + TOUCH_RADIUS &&
          y >= rect.top - TOUCH_RADIUS && y <= rect.bottom + TOUCH_RADIUS) {
        const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearestIndex = i;
        }
      }
    }
    return nearestIndex;
  }, []);

  const getTileCenter = useCallback((index) => {
    const tile = tileRefs.current[index];
    if (!tile) return null;
    const rect = tile.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  }, []);

  const handlePointerDown = useCallback((e) => {
    if (disabled) return;
    const index = parseInt(e.currentTarget.dataset.index);
    if (isNaN(index)) return;

    e.preventDefault();
    e.currentTarget.setPointerCapture?.(e.pointerId);
    isDragging.current = true;
    lastTileAddedTime.current = Date.now();

    const newPath = [index];
    setSelectedPath(newPath);
    setCurrentWord(board[index]);
  }, [disabled, board, setSelectedPath, setCurrentWord]);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging.current || disabled) return;
    e.preventDefault();

    const clientX = e.clientX;
    const clientY = e.clientY;

    setSelectedPath(currentPath => {
      if (currentPath.length === 0) return currentPath;
      const lastIndex = currentPath[currentPath.length - 1];

      const touchedIndex = getTileFromPoint(clientX, clientY);

      // Backtracking: touching the previous tile
      if (currentPath.length >= 2 && touchedIndex === currentPath[currentPath.length - 2]) {
        if (Date.now() - lastTileAddedTime.current > BACKTRACK_DELAY) {
          const newPath = currentPath.slice(0, -1);
          const word = newPath.map(i => board[i]).join('');
          setCurrentWord(word);
          lastTileAddedTime.current = Date.now();
          return newPath;
        }
        return currentPath;
      }

      // Check if touched tile is valid
      if (touchedIndex !== -1 && touchedIndex !== lastIndex &&
          !currentPath.includes(touchedIndex) && areAdjacent(lastIndex, touchedIndex)) {

        // Diagonal preference logic
        const lastPos = getTileCenter(lastIndex);
        if (lastPos) {
          const dx = clientX - lastPos.x;
          const dy = clientY - lastPos.y;
          const swipeAngle = Math.atan2(Math.abs(dy), Math.abs(dx));
          const isDiagonalSwipe = swipeAngle > 0.4 && swipeAngle < 1.17;

          if (isDiagonalSwipe && !isDiagonal(lastIndex, touchedIndex)) {
            for (let i = 0; i < 16; i++) {
              if (currentPath.includes(i) || !areAdjacent(lastIndex, i) || !isDiagonal(lastIndex, i)) continue;
              const diagPos = getTileCenter(i);
              if (!diagPos) continue;
              const toDiagX = diagPos.x - lastPos.x;
              const toDiagY = diagPos.y - lastPos.y;
              if ((dx > 0) === (toDiagX > 0) && (dy > 0) === (toDiagY > 0)) {
                const newPath = [...currentPath, i];
                const word = newPath.map(idx => board[idx]).join('');
                setCurrentWord(word);
                lastTileAddedTime.current = Date.now();
                return newPath;
              }
            }
          }
        }

        // Add the touched tile
        const newPath = [...currentPath, touchedIndex];
        const word = newPath.map(i => board[i]).join('');
        setCurrentWord(word);
        lastTileAddedTime.current = Date.now();
        return newPath;
      }

      return currentPath;
    });
  }, [disabled, board, getTileFromPoint, getTileCenter, setSelectedPath, setCurrentWord]);

  const handlePointerUp = useCallback((e) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    setSelectedPath(currentPath => {
      const word = currentPath.map(i => board[i]).join('');
      if (currentPath.length > 0 && word.length >= 3) {
        onSubmitWord();
      } else {
        onClearSelection();
      }
      return currentPath;
    });
  }, [board, onSubmitWord, onClearSelection, setSelectedPath]);

  return {
    setTileRef,
    handlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
    },
    tileRefs,
  };
}
