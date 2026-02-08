// src/games/trivia/TriviaMultiplayerGame.jsx
import React, { useState, useEffect } from 'react';
import { Check, X, ChevronRight, Trophy, Clock, Users } from 'lucide-react';
import { CATEGORIES } from '../../utils/helpers';

export default function TriviaMultiplayerGame({
  room,
  userId,
  onSubmitAnswer,
  onNextQuestion,
  onExit,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const currentQuestion = room.currentQuestion;
  const question = room.questions?.[currentQuestion];
  const isHost = room.host === userId;
  const standings = room.standings || [];
  const totalQuestions = room.questions?.length || 20;

  // Check if current user has already answered this question
  const myPlayer = room.players?.[userId];
  const myAnswers = myPlayer?.answers || {};
  const alreadyAnswered = myAnswers[currentQuestion] !== undefined;

  // Track elapsed time
  useEffect(() => {
    if (!room.questionStartTime) return;

    const interval = setInterval(() => {
      setElapsedTime(Date.now() - room.questionStartTime);
    }, 100);

    return () => clearInterval(interval);
  }, [room.questionStartTime]);

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setHasAnswered(alreadyAnswered);
  }, [currentQuestion, alreadyAnswered]);

  // Count how many players have answered
  const answeredCount = Object.values(room.players || {}).filter(
    p => p.answers?.[currentQuestion] !== undefined
  ).length;
  const totalPlayers = Object.keys(room.players || {}).length;
  const allAnswered = answeredCount === totalPlayers;

  const handleAnswer = async (index) => {
    if (hasAnswered) return;

    setSelectedAnswer(index);
    setHasAnswered(true);

    await onSubmitAnswer(currentQuestion, index);
  };

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const tenths = Math.floor((ms % 1000) / 100);
    return `${seconds}.${tenths}s`;
  };

  if (!question) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-text-main">Loading question...</p>
      </div>
    );
  }

  const style = CATEGORIES[question.category] || { color: 'bg-gray-500', icon: '?' };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className={`${style.color} px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-2`}>
            <span>{style.icon}</span>
            {question.category}
          </div>
          <div className="text-text-muted">
            Question {currentQuestion + 1} of {totalQuestions}
          </div>
          <button
            onClick={onExit}
            className="p-2 text-text-muted hover:text-text-main transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="bg-white rounded-card p-6 mb-4 shadow-card">
          <h2 className="text-xl font-semibold text-text-main leading-relaxed">
            {question.q}
          </h2>
        </div>

        {/* Timer / Answered Status */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center gap-2 text-text-muted">
            <Clock className="w-4 h-4" />
            <span>{formatTime(elapsedTime)}</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted">
            <Users className="w-4 h-4" />
            <span>{answeredCount}/{totalPlayers} answered</span>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {question.options.map((option, idx) => {
            let buttonStyle = "bg-white border-gray-200 hover:bg-gray-50";
            let circleStyle = "bg-gray-100 text-text-muted";
            let showResult = hasAnswered && allAnswered;

            if (hasAnswered) {
              if (!allAnswered) {
                // Waiting for others - just show selected
                if (idx === selectedAnswer) {
                  buttonStyle = "bg-blue-50 border-blue-300";
                  circleStyle = "bg-blue-500 text-white";
                }
              } else {
                // All answered - show correct/incorrect
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
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={hasAnswered}
                className={`w-full p-4 rounded-button border-2 text-left transition-all ${buttonStyle}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${circleStyle}`}>
                    {showResult && idx === question.correct ? <Check className="w-5 h-5" /> :
                     showResult && idx === selectedAnswer && idx !== question.correct ? <X className="w-5 h-5" /> :
                     String.fromCharCode(65 + idx)}
                  </div>
                  <span className="text-text-main font-medium">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Waiting / Next Button */}
        {hasAnswered && !allAnswered && (
          <div className="text-center py-3 text-text-muted animate-pulse mb-4">
            Waiting for other players...
          </div>
        )}

        {hasAnswered && allAnswered && isHost && (
          <button
            onClick={onNextQuestion}
            className="w-full py-4 bg-primary text-white rounded-button font-bold text-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 mb-4"
          >
            {currentQuestion < totalQuestions - 1 ? 'Next Question' : 'See Results'}
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {hasAnswered && allAnswered && !isHost && (
          <div className="text-center py-3 text-text-muted animate-pulse mb-4">
            Waiting for host...
          </div>
        )}

        {/* Live Standings */}
        <div className="bg-white rounded-card p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-bold text-text-muted">Live Standings</span>
          </div>
          <div className="space-y-2">
            {standings.slice(0, 5).map((player, idx) => (
              <div
                key={player.odayerId}
                className={`flex items-center justify-between p-2 rounded-lg ${
                  player.odayerId === userId ? 'bg-primary/10' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    idx === 0 ? 'bg-yellow-400 text-white' :
                    idx === 1 ? 'bg-gray-400 text-white' :
                    idx === 2 ? 'bg-amber-600 text-white' :
                    'bg-gray-200 text-text-muted'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className={`font-medium ${player.odayerId === userId ? 'text-primary' : 'text-text-main'}`}>
                    {player.displayName}
                    {player.odayerId === userId && ' (you)'}
                  </span>
                </div>
                <span className="font-bold text-text-main">{player.score}/{currentQuestion + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
