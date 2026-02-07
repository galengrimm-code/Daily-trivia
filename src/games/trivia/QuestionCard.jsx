// src/games/trivia/QuestionCard.jsx
import React from 'react';
import { Check, X, ChevronRight, Zap } from 'lucide-react';
import { CATEGORIES } from '../../utils/helpers';

export default function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  showFeedback,
  currentScore,
  onSelectAnswer,
  onNext
}) {
  const style = CATEGORIES[question.category] || { color: 'bg-gray-500', icon: '\u{2753}' };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className={`${style.color} px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-2`}>
            <span>{style.icon}</span>
            {question.category}
          </div>
          <div className="text-text-muted">
            Question {questionIndex + 1} of {totalQuestions}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-200 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${((questionIndex + (showFeedback ? 1 : 0)) / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="bg-white rounded-card p-6 mb-6 shadow-card">
          <h2 className="text-xl font-semibold text-text-main leading-relaxed">
            {question.q}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {question.options.map((option, idx) => {
            let buttonStyle = "bg-white border-border hover:bg-gray-50";
            let circleStyle = "bg-gray-100 text-text-muted";

            if (showFeedback) {
              if (idx === question.correct) {
                buttonStyle = "bg-green-50 border-green-300";
                circleStyle = "bg-green-500 text-white";
              } else if (idx === selectedAnswer && idx !== question.correct) {
                buttonStyle = "bg-red-50 border-red-300";
                circleStyle = "bg-red-500 text-white";
              } else {
                buttonStyle = "bg-gray-50 border-gray-200 opacity-50";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => onSelectAnswer(idx)}
                disabled={showFeedback}
                className={`w-full p-4 rounded-button border-2 text-left transition-all ${buttonStyle}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${circleStyle}`}>
                    {showFeedback && idx === question.correct ? <Check className="w-5 h-5" /> :
                     showFeedback && idx === selectedAnswer && idx !== question.correct ? <X className="w-5 h-5" /> :
                     String.fromCharCode(65 + idx)}
                  </div>
                  <span className="text-text-main font-medium">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`rounded-card p-4 mb-6 ${
            selectedAnswer === question.correct ? 'bg-green-50 border border-green-200' : 'bg-blue-50 border border-blue-200'
          }`}>
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <p className="text-text-main text-sm">{question.fact}</p>
            </div>
          </div>
        )}

        {/* Next Button */}
        {showFeedback && (
          <button
            onClick={onNext}
            className="w-full py-4 bg-primary text-white rounded-button font-bold text-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2"
          >
            {questionIndex < totalQuestions - 1 ? 'Next Question' : 'See Results'}
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Score */}
        <div className="text-center mt-4">
          <span className="text-text-muted">Current Score: </span>
          <span className="text-text-main font-bold">{currentScore}/{questionIndex + (showFeedback ? 1 : 0)}</span>
        </div>
      </div>
    </div>
  );
}
