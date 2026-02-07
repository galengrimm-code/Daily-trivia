// src/components/GameCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ChevronRight } from 'lucide-react';

export default function GameCard({ title, icon, path, status, score, description }) {
  const navigate = useNavigate();
  const isDisabled = status === 'coming-soon';

  return (
    <button
      onClick={() => !isDisabled && navigate(path)}
      disabled={isDisabled}
      className={`w-full bg-white rounded-card p-5 shadow-card text-left transition-all ${
        isDisabled
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:shadow-card-hover active:scale-[0.98]'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="text-3xl w-12 h-12 flex items-center justify-center bg-gray-50 rounded-card">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-text-main text-lg">{title}</h3>
          {description && (
            <p className="text-text-muted text-sm truncate">{description}</p>
          )}
        </div>
        <div className="flex-shrink-0">
          {status === 'completed' && (
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-text-main">{score}</span>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
            </div>
          )}
          {status === 'play' && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm font-semibold text-primary">Play</span>
              <ChevronRight className="w-4 h-4 text-primary" />
            </div>
          )}
          {status === 'coming-soon' && (
            <span className="text-sm text-text-muted font-medium">Soon</span>
          )}
        </div>
      </div>
    </button>
  );
}
