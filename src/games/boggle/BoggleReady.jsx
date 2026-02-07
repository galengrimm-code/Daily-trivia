// src/games/boggle/BoggleReady.jsx
import React, { useState } from 'react';
import { ChevronRight, Copy, Check } from 'lucide-react';
import { getTodayKey } from '../../utils/helpers';

export default function BoggleReady({ board, practiceMode, practiceCode, inputMode, setInputMode, onStart, onLoadCode, onBack }) {
  const [codeInput, setCodeInput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    if (practiceCode) {
      navigator.clipboard.writeText(practiceCode.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between py-4 mb-4">
          <button
            onClick={onBack}
            className="text-text-muted hover:text-text-main transition-colors font-medium"
          >
            &larr; Back
          </button>
          <h1 className="text-xl font-bold text-text-main">
            {practiceMode ? 'Practice' : 'Daily Boggle'}
          </h1>
          <div className="w-12" />
        </div>

        {/* Date or Code */}
        <div className="text-center mb-4">
          {practiceMode ? (
            <div className="flex items-center justify-center gap-2">
              <span className="text-text-muted">Board Code:</span>
              <span className="font-bold text-text-main text-lg">{practiceCode}</span>
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

        {/* Board Preview (practice only — daily board hidden until Start) */}
        {practiceMode ? (
          <div className="bg-white rounded-card p-4 mb-6 shadow-card">
            <div className="grid grid-cols-4 gap-2">
              {board.map((letter, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl bg-gray-50 text-xl font-bold text-green-800 flex items-center justify-center"
                >
                  {letter}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-card p-6 mb-6 shadow-card text-center">
            <p className="text-text-muted">Find as many words as you can in 3 minutes!</p>
            <p className="text-text-muted text-sm mt-1">Select adjacent letters to form words.</p>
          </div>
        )}

        {/* Practice: Load from code */}
        {practiceMode && (
          <div className="bg-white rounded-card p-4 mb-6 shadow-card">
            <p className="text-sm text-text-muted mb-2">Play a specific board:</p>
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
                onClick={() => {
                  onLoadCode(codeInput);
                  setCodeInput('');
                }}
                className="px-4 py-2 bg-gray-100 rounded-button font-semibold text-text-main hover:bg-gray-200 transition-colors"
              >
                Load
              </button>
            </div>
          </div>
        )}

        {/* Input Method */}
        <div className="bg-white rounded-card p-4 mb-6 shadow-card">
          <p className="text-sm text-text-muted text-center mb-3">Input Method</p>
          <div className="flex justify-center gap-2">
            {['swipe', 'tap', 'type'].map(mode => (
              <button
                key={mode}
                onClick={() => setInputMode(mode)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  inputMode === mode
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-text-main hover:bg-gray-200'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="w-full py-4 bg-primary text-white rounded-button font-bold text-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 shadow-lg"
        >
          Start Game
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Rules */}
        <div className="mt-6 bg-white rounded-card p-4 shadow-card">
          <h3 className="font-bold text-text-main mb-2">How to Play</h3>
          <ul className="space-y-1 text-sm text-text-muted">
            <li>{'\u{2022}'} Find words by connecting adjacent letters</li>
            <li>{'\u{2022}'} Words must be 3+ letters</li>
            <li>{'\u{2022}'} Each tile can only be used once per word</li>
            <li>{'\u{2022}'} Longer words score more points</li>
            <li>{'\u{2022}'} You have 3 minutes!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
