// src/games/spelling-bee/SpellingBeeReady.jsx
import React, { useState } from 'react';
import { ChevronRight, Copy, Check } from 'lucide-react';
import { getTodayKey } from '../../utils/helpers';
import SpellingBeeHoneycomb from './SpellingBeeHoneycomb';

export default function SpellingBeeReady({ centerLetter, outerLetters, practiceMode, puzzleCode, onStart, onLoadCode, onBack }) {
  const [codeInput, setCodeInput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    if (puzzleCode) {
      navigator.clipboard.writeText(puzzleCode.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between py-4 mb-4">
          <button
            onClick={onBack}
            className="text-text-muted hover:text-text-main transition-colors font-medium"
          >
            &larr; Back
          </button>
          <h1 className="text-xl font-bold text-text-main">
            {practiceMode ? 'Practice' : 'Daily Spelling Bee'}
          </h1>
          <div className="w-12" />
        </div>

        <div className="text-center mb-4">
          {practiceMode ? (
            <div className="flex items-center justify-center gap-2">
              <span className="text-text-muted">Puzzle Code:</span>
              <span className="font-bold text-text-main text-lg">{puzzleCode}</span>
              <button
                onClick={handleCopyCode}
                className="p-1.5 text-text-muted hover:text-primary transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          ) : (
            <p className="text-text-muted">{getTodayKey()}</p>
          )}
        </div>

        {/* Puzzle preview (practice only — daily hidden until Start) */}
        {practiceMode ? (
          <SpellingBeeHoneycomb
            centerLetter={centerLetter}
            outerLetters={outerLetters}
            onLetterClick={() => {}}
            disabled={true}
          />
        ) : (
          <div className="bg-white rounded-card p-6 mb-6 shadow-card text-center">
            <div className="text-4xl mb-3">{'\u{1F41D}'}</div>
            <p className="text-text-muted">Find words using 7 letters in 3 minutes!</p>
            <p className="text-text-muted text-sm mt-1">Every word must include the center letter.</p>
          </div>
        )}

        {/* Practice: Load from code */}
        {practiceMode && (
          <div className="bg-white rounded-card p-4 mb-6 shadow-card">
            <p className="text-sm text-text-muted mb-2">Play a specific puzzle:</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                placeholder="5-digit code"
                className="flex-1 px-4 py-2 rounded-button border border-border text-text-main outline-none focus:ring-2 focus:ring-primary"
                maxLength={5}
              />
              <button
                onClick={() => { onLoadCode(codeInput); setCodeInput(''); }}
                className="px-4 py-2 bg-gray-100 rounded-button font-semibold text-text-main hover:bg-gray-200 transition-colors"
              >
                Load
              </button>
            </div>
          </div>
        )}

        <button
          onClick={onStart}
          className="w-full py-4 bg-primary text-white rounded-button font-bold text-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 shadow-lg"
        >
          Start Game
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="mt-6 bg-white rounded-card p-4 shadow-card">
          <h3 className="font-bold text-text-main mb-2">How to Play</h3>
          <ul className="space-y-1 text-sm text-text-muted">
            <li>{'\u{2022}'} Make words using the 7 letters</li>
            <li>{'\u{2022}'} Every word must include the <span className="font-bold text-amber-600">center letter</span></li>
            <li>{'\u{2022}'} Words must be 4+ letters</li>
            <li>{'\u{2022}'} Letters can be reused</li>
            <li>{'\u{2022}'} Use all 7 letters for a <span className="font-bold text-amber-600">pangram bonus!</span></li>
            <li>{'\u{2022}'} 4 letters = 1pt, 5+ letters = word length</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
