// src/games/trivia/Trivia.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Loader, Users } from 'lucide-react';
import { usePlayer } from '../../hooks/usePlayer';
import { useLeaderboard } from '../../hooks/useLeaderboard';
import { loadTodaysQuestions } from '../../utils/api';
import { CATEGORIES, ALL_CATEGORIES } from '../../utils/helpers';
import { shareScore } from './triviaUtils';
import QuestionCard from './QuestionCard';
import TriviaResults from './TriviaResults';
import TriviaReview from './TriviaReview';
import Leaderboard from '../../components/Leaderboard';
import TriviaMultiplayerLobby from './TriviaMultiplayerLobby';
import TriviaMultiplayerGame from './TriviaMultiplayerGame';
import TriviaMultiplayerResults from './TriviaMultiplayerResults';
import useTriviaMultiplayer from './useTriviaMultiplayer';

export default function Trivia() {
  const navigate = useNavigate();
  const { user, userProfile, todayScore, completeTrivia } = usePlayer();
  const { todayLeaderboard, weeklyLeaderboard, loading: lbLoading, loadLeaderboards } = useLeaderboard();

  // Local trivia state
  const [phase, setPhase] = useState('intro'); // intro | playing | results | review | leaderboard
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [todaysQuestions, setTodaysQuestions] = useState([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  const [quizStartTime, setQuizStartTime] = useState(null);

  // Multiplayer state
  const mp = useTriviaMultiplayer(user);

  // If already played today, jump to results
  useEffect(() => {
    if (todayScore && phase === 'intro') {
      setPhase('results');
    }
  }, [todayScore, phase]);

  const startQuiz = async () => {
    setIsLoadingQuestions(true);
    const questions = await loadTodaysQuestions();
    setTodaysQuestions(questions);
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setQuizStartTime(Date.now());
    setIsLoadingQuestions(false);
    setPhase('playing');
  };

  const handleAnswer = (index) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
    setShowFeedback(true);

    const isCorrect = index === todaysQuestions[currentQuestion].correct;
    setAnswers([...answers, { selected: index, correct: isCorrect }]);
  };

  const nextQuestion = async () => {
    if (currentQuestion < todaysQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      const finalScore = answers.filter(a => a.correct).length;
      const durationSeconds = Math.round((Date.now() - quizStartTime) / 1000);
      await completeTrivia(finalScore, todaysQuestions.length, durationSeconds);
      setPhase('results');
    }
  };

  const getScore = () => answers.filter(a => a.correct).length;

  const handleShare = () => {
    const score = todayScore?.score || 0;
    const total = todayScore?.totalQuestions || 5;
    const streak = userProfile?.streak || 0;
    const result = shareScore(score, total, streak);
    if (result === 'clipboard') {
      alert('Score copied to clipboard!');
    }
  };

  const handleViewLeaderboard = async () => {
    await loadLeaderboards();
    setPhase('leaderboard');
  };

  // ============================================
  // MULTIPLAYER RENDERS
  // ============================================

  // Multiplayer menu / host setup / lobby
  if (mp.phase === 'mp-menu' || mp.phase === 'mp-host-setup' || mp.phase === 'mp-lobby') {
    return (
      <TriviaMultiplayerLobby
        phase={mp.phase}
        lobbies={mp.lobbies}
        roomId={mp.roomId}
        isHost={mp.isHost}
        roomPlayers={mp.room?.players || {}}
        roomHostName={mp.room?.hostName}
        roomCategories={mp.room?.categories}
        questionCount={mp.room?.questions?.length}
        onHost={mp.openHostSetup}
        onJoinLobby={mp.handleJoinRoom}
        onCreateRoom={mp.handleCreateRoom}
        onStart={mp.handleStartGame}
        onLeave={mp.handleLeaveRoom}
        onBack={mp.handleBack}
      />
    );
  }

  // Multiplayer game
  if (mp.phase === 'mp-playing' && mp.room) {
    return (
      <TriviaMultiplayerGame
        room={mp.room}
        userId={user?.uid}
        onSubmitAnswer={mp.handleSubmitAnswer}
        onNextQuestion={mp.handleNextQuestion}
        onExit={mp.closeMultiplayer}
      />
    );
  }

  // Multiplayer results
  if (mp.phase === 'mp-results' && mp.room) {
    return (
      <TriviaMultiplayerResults
        standings={mp.room.standings || []}
        questions={mp.room.questions}
        categories={mp.room.categories}
        totalQuestions={mp.room.questions?.length || 20}
        userId={user?.uid}
        isHost={mp.isHost}
        roomId={mp.roomId}
        onPlayAgain={mp.handlePlayAgain}
        onHome={mp.closeMultiplayer}
      />
    );
  }

  // ============================================
  // DAILY TRIVIA RENDERS
  // ============================================

  // Loading questions
  if (phase === 'playing' && isLoadingQuestions) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-text-main text-xl">Loading questions...</p>
        </div>
      </div>
    );
  }

  // Active quiz
  if (phase === 'playing' && todaysQuestions.length > 0) {
    return (
      <QuestionCard
        question={todaysQuestions[currentQuestion]}
        questionIndex={currentQuestion}
        totalQuestions={todaysQuestions.length}
        selectedAnswer={selectedAnswer}
        showFeedback={showFeedback}
        currentScore={getScore()}
        onSelectAnswer={handleAnswer}
        onNext={nextQuestion}
        onExit={() => navigate('/')}
      />
    );
  }

  // Review
  if (phase === 'review') {
    return (
      <TriviaReview
        questions={todaysQuestions}
        onBack={() => setPhase('results')}
      />
    );
  }

  // Leaderboard
  if (phase === 'leaderboard') {
    return (
      <Leaderboard
        todayEntries={todayLeaderboard}
        weeklyEntries={weeklyLeaderboard}
        currentUserId={user?.uid}
        loading={lbLoading}
        onBack={() => setPhase('results')}
      />
    );
  }

  // Results (played today)
  if (phase === 'results' && todayScore) {
    return (
      <TriviaResults
        score={todayScore.score}
        totalQuestions={todayScore.totalQuestions}
        streak={userProfile?.streak || 0}
        onReview={() => setPhase('review')}
        onShare={handleShare}
        onViewLeaderboard={handleViewLeaderboard}
        onMultiplayer={mp.openMultiplayer}
        onHome={() => navigate('/')}
      />
    );
  }

  // Intro screen (hasn't played today)
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between py-4 mb-4">
          <button
            onClick={() => navigate('/')}
            className="text-text-muted hover:text-text-main transition-colors font-medium"
          >
            &larr; Back
          </button>
          <h1 className="text-xl font-bold text-text-main">Daily Trivia</h1>
          <div className="w-12" />
        </div>

        <div className="text-center py-4 mb-6">
          <div className="text-5xl mb-3">{'\u{1F9E0}'}</div>
          <h2 className="text-2xl font-bold text-text-main mb-2">Today's Trivia</h2>
          <p className="text-text-muted">6 questions across 6 categories</p>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-card p-6 mb-6 shadow-card">
          <h3 className="text-lg font-semibold text-text-main mb-4">Today's Topics</h3>
          <div className="space-y-3">
            {ALL_CATEGORIES.map((category) => (
              <div key={category} className="flex items-center gap-3 bg-gray-50 rounded-button p-3">
                <div className={`w-10 h-10 ${CATEGORIES[category].color} rounded-button flex items-center justify-center text-xl`}>
                  {CATEGORIES[category].icon}
                </div>
                <span className="text-text-main font-medium">{category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={startQuiz}
          disabled={isLoadingQuestions}
          className="w-full py-4 bg-primary text-white rounded-button font-bold text-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 shadow-lg mb-4"
        >
          {isLoadingQuestions ? (
            <>
              <Loader className="w-6 h-6 animate-spin" />
              Loading...
            </>
          ) : (
            <>
              Start Today's Trivia
              <ChevronRight className="w-6 h-6" />
            </>
          )}
        </button>

        {/* Multiplayer Button */}
        <button
          onClick={mp.openMultiplayer}
          className="w-full py-4 bg-white text-text-main rounded-button font-bold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-card border-2 border-gray-200"
        >
          <Users className="w-6 h-6 text-primary" />
          Multiplayer
        </button>

        {/* Error Toast */}
        {mp.error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-center">
            {mp.error}
            <button onClick={mp.clearError} className="ml-2 underline">Dismiss</button>
          </div>
        )}
      </div>
    </div>
  );
}
