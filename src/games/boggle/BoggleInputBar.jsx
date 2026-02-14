// src/games/boggle/BoggleInputBar.jsx
import React from 'react';
import { Send, RotateCcw } from 'lucide-react';

export default function BoggleInputBar({ inputMode, setInputMode, currentWord, typedWord, setTypedWord, onSubmit, onClear, disabled }) {
  const modes = [
    { id: 'swipe', label: 'Swipe' },
    { id: 'tap', label: 'Tap' },
    { id: 'type', label: 'Type' },
  ];

  return (
    <div className="space-y-3">
      {/* Input mode toggle */}
      <div className="flex gap-1 bg-gray-100 rounded-button p-1">
        {modes.map(mode => (
          <button
            key={mode.id}
            onClick={() => setInputMode(mode.id)}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${
              inputMode === mode.id
                ? 'bg-white text-primary shadow-card'
                : 'text-text-muted hover:text-text-main'
            }`}
          >
            {mode.label}
          </button>
        ))}
      </div>

      {/* Current word display / type input */}
      {inputMode === 'type' ? (
        <div className="flex gap-2">
          <input
            type="text"
            value={typedWord}
            onChange={(e) => setTypedWord(e.target.value.toUpperCase())}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && typedWord.length >= 3) onSubmit();
            }}
            placeholder="Type a word..."
            className="flex-1 px-4 py-3 bg-white rounded-button shadow-card text-text-main font-semibold text-lg outline-none focus:ring-2 focus:ring-primary"
            disabled={disabled}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          <button
            onClick={onSubmit}
            disabled={disabled || typedWord.length < 3}
            className="px-4 py-3 bg-primary text-white rounded-button font-bold disabled:opacity-50 transition-colors hover:bg-primary-hover"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      ) : inputMode === 'tap' ? (
        <div className="flex items-center gap-3">
          <button
            onClick={onClear}
            disabled={disabled || !currentWord}
            className="px-4 py-3 bg-white rounded-button shadow-card text-text-muted font-semibold disabled:opacity-40 hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Clear
          </button>
          <div className="flex-1 px-4 py-3 bg-white rounded-button shadow-card text-center min-h-[48px] flex items-center justify-center">
            <span className={`text-lg font-bold ${currentWord ? 'text-text-main' : 'text-text-muted'}`}>
              {currentWord || 'Tap letters...'}
            </span>
          </div>
          <button
            onClick={() => onSubmit(currentWord)}
            disabled={disabled || !currentWord || currentWord.length < 3}
            className="px-5 py-3 bg-primary text-white rounded-button font-bold disabled:opacity-40 transition-colors hover:bg-primary-hover flex items-center gap-2"
          >
            Enter
            <Send className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div className="flex-1 px-4 py-3 bg-white rounded-button shadow-card text-center min-h-[48px] flex items-center justify-center">
            <span className={`text-lg font-bold ${currentWord ? 'text-text-main' : 'text-text-muted'}`}>
              {currentWord || 'Swipe letters...'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
