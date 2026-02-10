// src/games/trivia/TriviaReview.jsx
import React, { useState, useEffect } from 'react';
import { Check, X, Zap, ArrowLeft, Loader } from 'lucide-react';
import { CATEGORIES } from '../../utils/helpers';
import { loadTodaysQuestions } from '../../utils/api';

export default function TriviaReview({ questions: initialQuestions, userAnswers, onBack }) {
  const [questions, setQuestions] = useState(initialQuestions || []);
  const [loading, setLoading] = useState(!initialQuestions || initialQuestions.length === 0);

  useEffect(() => {
    if (!initialQuestions || initialQuestions.length === 0) {
      setLoading(true);
      loadTodaysQuestions().then(q => {
        setQuestions(q);
        setLoading(false);
      });
    }
  }, [initialQuestions]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-text-main text-xl">Loading review...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <ArrowLeft className="w-6 h-6 text-text-main" />
          </button>
          <h1 className="text-2xl font-bold text-text-main">Review Answers</h1>
          <div className="w-10" />
        </div>

        <div className="space-y-4">
          {questions.map((question, idx) => {
            const style = CATEGORIES[question.category] || { color: 'bg-gray-500', icon: '\u{2753}' };
            const userAnswer = userAnswers?.[idx];
            const wasCorrect = userAnswer?.correct;
            const selectedIndex = userAnswer?.selected;

            return (
              <div key={idx} className="bg-white rounded-card p-4 shadow-card">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`${style.color} px-2 py-1 rounded-full text-white text-xs font-medium flex items-center gap-1`}>
                    <span>{style.icon}</span>
                    {question.category}
                  </div>
                  {userAnswer && (
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${wasCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {wasCorrect ? 'Correct' : 'Wrong'}
                    </div>
                  )}
                </div>
                <p className="text-text-main font-medium mb-3">{question.q}</p>

                {/* Show user's wrong answer if they got it wrong */}
                {userAnswer && !wasCorrect && selectedIndex !== undefined && (
                  <div className="flex items-center gap-2 bg-red-50 rounded-lg p-3 border border-red-200 mb-2">
                    <X className="w-5 h-5 text-red-600" />
                    <span className="text-red-700 font-medium">Your answer: {question.options[selectedIndex]}</span>
                  </div>
                )}

                {/* Always show the correct answer */}
                <div className="flex items-center gap-2 bg-green-50 rounded-lg p-3 border border-green-200">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-medium">{wasCorrect ? 'Your answer: ' : 'Correct answer: '}{question.options[question.correct]}</span>
                </div>

                {question.fact && (
                  <div className="mt-3 flex items-start gap-2 text-text-muted text-sm">
                    <Zap className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>{question.fact}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button onClick={onBack} className="w-full mt-6 py-4 bg-primary text-white rounded-button font-bold hover:bg-primary-hover transition-colors">
          Back
        </button>
      </div>
    </div>
  );
}
