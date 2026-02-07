// src/games/spelling-bee/SpellingBeeInput.jsx
import React, { useEffect } from 'react';
import { Delete, RotateCw } from 'lucide-react';

export default function SpellingBeeInput({
  currentInput, centerLetter, outerLetters,
  onAddLetter, onDelete, onSubmit, onShuffle, disabled
}) {
  // Keyboard handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (disabled) return;
      if (e.key === 'Enter') { e.preventDefault(); onSubmit(); return; }
      if (e.key === 'Backspace') { e.preventDefault(); onDelete(); return; }
      const letter = e.key.toLowerCase();
      if (/^[a-z]$/.test(letter)) {
        e.preventDefault();
        onAddLetter(letter);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [disabled, onSubmit, onDelete, onAddLetter]);

  return (
    <div className="text-center mb-2">
      {/* Current word display */}
      <div className="min-h-[52px] flex items-center justify-center mb-4 px-4">
        {currentInput ? (
          <span className="text-3xl font-extrabold tracking-wider">
            {currentInput.split('').map((ch, i) => (
              <span key={i} className={ch === centerLetter ? 'text-amber-500' : 'text-text-main'}>
                {ch.toUpperCase()}
              </span>
            ))}
            <span className="animate-pulse text-text-muted">|</span>
          </span>
        ) : (
          <span className="text-text-muted text-lg">Type or click letters</span>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onDelete}
            disabled={disabled || !currentInput}
            className="px-5 py-2.5 bg-white rounded-button font-semibold text-text-main shadow-card hover:shadow-card-hover transition-shadow disabled:opacity-40 flex items-center gap-1.5"
          >
            <Delete className="w-4 h-4" />
            Delete
          </button>
          <button
            onClick={onShuffle}
            disabled={disabled}
            className="p-2.5 bg-white rounded-full shadow-card hover:shadow-card-hover transition-shadow disabled:opacity-40"
          >
            <RotateCw className="w-5 h-5 text-text-muted" />
          </button>
        </div>
        <button
          onClick={onSubmit}
          disabled={disabled || !currentInput}
          className="px-5 py-2.5 bg-primary text-white rounded-button font-bold hover:bg-primary-hover transition-colors disabled:opacity-40"
        >
          Enter
        </button>
      </div>
    </div>
  );
}
