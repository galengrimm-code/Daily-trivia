// src/games/boggle/useBoggleTap.js
import { useCallback } from 'react';
import { areAdjacent } from './boggleUtils';

export default function useBoggleTap({ board, selectedPath, setSelectedPath, setCurrentWord, disabled }) {

  const handleTileTap = useCallback((index) => {
    if (disabled) return;

    setSelectedPath(currentPath => {
      let newPath;

      if (currentPath.length === 0) {
        // First tile
        newPath = [index];
      } else if (currentPath.includes(index)) {
        // Tapping an already-selected tile
        if (currentPath[currentPath.length - 1] === index && currentPath.length > 1) {
          // Tap last tile → backtrack
          newPath = currentPath.slice(0, -1);
        } else if (currentPath.length === 1) {
          // Tap only tile → deselect
          newPath = [];
        } else {
          // Tap middle tile → ignore
          return currentPath;
        }
      } else if (areAdjacent(currentPath[currentPath.length - 1], index)) {
        // Adjacent unselected tile → extend
        newPath = [...currentPath, index];
      } else {
        // Non-adjacent → ignore
        return currentPath;
      }

      const word = newPath.map(i => board[i]).join('');
      setCurrentWord(word);
      return newPath;
    });
  }, [disabled, board, setSelectedPath, setCurrentWord]);

  return { handleTileTap };
}
