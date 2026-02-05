// src/App.jsx
import React, { useState, useEffect } from 'react';
import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
  browserLocalPersistence,
  setPersistence
} from 'firebase/auth';
import { auth, googleProvider } from './config/firebase';
import {
  getUserProfile,
  createUserProfile,
  updateUserStats,
  saveScore,
  hasPlayedToday,
  getTodayLeaderboard,
  getWeeklyLeaderboard
} from './utils/database';
import { loadTodaysQuestions } from './utils/api';
import { CATEGORIES, ALL_CATEGORIES, getTodayKey } from './utils/helpers';
import { 
  Trophy, Star, Flame, ChevronRight, Check, X, 
  RotateCcw, Share2, Home, Award, Zap, Loader, LogOut 
} from 'lucide-react';

export default function App() {
  // Auth state
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Game state
  const [screen, setScreen] = useState('home');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [todaysQuestions, setTodaysQuestions] = useState([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  const [todayScore, setTodayScore] = useState(null);
  const [lastCheckedDate, setLastCheckedDate] = useState(null);
  const [quizStartTime, setQuizStartTime] = useState(null);

  // Leaderboard state
  const [todayLeaderboard, setTodayLeaderboard] = useState([]);
  const [weeklyLeaderboard, setWeeklyLeaderboard] = useState([]);

  // Handle auth state and redirect result
  useEffect(() => {
    let unsubscribe;

    const initAuth = async () => {
      // First, check for redirect result (important for mobile sign-in)
      try {
        await getRedirectResult(auth);
      } catch (error) {
        console.error('Redirect sign in error:', error);
      }

      // Then listen to auth state changes
      unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        setUser(firebaseUser);

        if (firebaseUser) {
          // Get or create user profile
          let profile = await getUserProfile(firebaseUser.uid);
          if (!profile) {
            profile = await createUserProfile(
              firebaseUser.uid,
              firebaseUser.displayName || 'Player'
            );
          }
          setUserProfile(profile);

          // Check if already played today
          const todayResult = await hasPlayedToday(firebaseUser.uid);
          setTodayScore(todayResult);
          setLastCheckedDate(getTodayKey());
        } else {
          setUserProfile(null);
          setTodayScore(null);
        }

        setAuthLoading(false);
      });
    };

    initAuth();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // Recheck if date has changed when app regains focus/visibility
  useEffect(() => {
    const recheckForNewDay = async () => {
      const today = getTodayKey();
      if (user && lastCheckedDate && lastCheckedDate !== today) {
        // Date has changed, recheck if user played today
        const todayResult = await hasPlayedToday(user.uid);
        setTodayScore(todayResult);
        setLastCheckedDate(today);
        // Reset to home screen for the new day
        if (!todayResult) {
          setScreen('home');
        }
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        recheckForNewDay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', recheckForNewDay);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', recheckForNewDay);
    };
  }, [user, lastCheckedDate]);

  // Sign in with Google
  const handleSignIn = async () => {
    try {
      // Set persistence before sign-in
      await setPersistence(auth, browserLocalPersistence);

      // Try popup first, fall back to redirect if blocked
      try {
        await signInWithPopup(auth, googleProvider);
      } catch (popupError) {
        // If popup is blocked or fails, use redirect
        if (popupError.code === 'auth/popup-blocked' ||
            popupError.code === 'auth/popup-closed-by-user' ||
            popupError.code === 'auth/cancelled-popup-request') {
          await signInWithRedirect(auth, googleProvider);
        } else {
          throw popupError;
        }
      }
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  // Sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setScreen('home');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  // Start the quiz
  const startQuiz = async () => {
    setIsLoadingQuestions(true);
    const questions = await loadTodaysQuestions();
    setTodaysQuestions(questions);
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setQuizStartTime(Date.now()); // Track when quiz started
    setIsLoadingQuestions(false);
    setScreen('quiz');
  };

  // Handle answer selection
  const handleAnswer = (index) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
    setShowFeedback(true);

    const isCorrect = index === todaysQuestions[currentQuestion].correct;
    setAnswers([...answers, { selected: index, correct: isCorrect }]);
  };

  // Move to next question or finish
  const nextQuestion = async () => {
    if (currentQuestion < todaysQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Quiz complete - calculate and save score
      // answers array already includes all responses including the last one
      const finalScore = answers.filter(a => a.correct).length;
      const durationSeconds = Math.round((Date.now() - quizStartTime) / 1000);

      // Save to Firebase
      await saveScore(
        user.uid,
        userProfile.displayName,
        finalScore,
        todaysQuestions.length,
        durationSeconds
      );

      // Update user stats
      const updatedProfile = await updateUserStats(
        user.uid,
        finalScore,
        todaysQuestions.length
      );
      setUserProfile(updatedProfile);

      setTodayScore({ score: finalScore, totalQuestions: todaysQuestions.length });
      setScreen('results');
    }
  };

  // Get current score during quiz
  const getScore = () => {
    return answers.filter(a => a.correct).length;
  };

  // Load leaderboard data
  const loadLeaderboards = async () => {
    const [today, weekly] = await Promise.all([
      getTodayLeaderboard(),
      getWeeklyLeaderboard()
    ]);
    setTodayLeaderboard(today);
    setWeeklyLeaderboard(weekly);
    setScreen('leaderboard');
  };

  // Share score
  const shareScore = () => {
    const score = todayScore?.score || 0;
    const total = todayScore?.totalQuestions || 5;
    const streak = userProfile?.streak || 0;
    const text = `🧠 Daily Trivia: ${score}/${total}\n🔥 Streak: ${streak} days\nCan you beat my score?`;

    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      alert('Score copied to clipboard!');
    }
  };

  // Loading screen
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-teal-800 to-emerald-900 flex items-center justify-center">
        <div className="text-white text-xl flex items-center gap-3">
          <Loader className="w-6 h-6 animate-spin" />
          Loading...
        </div>
      </div>
    );
  }

  // Sign in screen
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-teal-800 to-emerald-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full border border-white/20 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Daily Trivia</h1>
          <p className="text-white/70 mb-8">Test your knowledge every day with your family!</p>
          
          <div className="space-y-4 mb-8">
            {ALL_CATEGORIES.map((category) => (
              <div key={category} className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                <div className={`w-10 h-10 ${CATEGORIES[category].color} rounded-xl flex items-center justify-center text-xl`}>
                  {CATEGORIES[category].icon}
                </div>
                <span className="text-white font-medium">{category}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleSignIn}
            className="w-full py-4 bg-white rounded-xl font-bold text-gray-900 hover:bg-gray-100 transition-colors flex items-center justify-center gap-3"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" />
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  // Home Screen
  if (screen === 'home') {
    const hasPlayed = !!todayScore;

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-teal-800 to-emerald-900 p-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between py-4">
            <div className="text-white">
              <p className="text-sm text-white/70">Welcome back,</p>
              <p className="font-bold">{userProfile?.displayName}</p>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <LogOut className="w-4 h-4 text-white" />
              <span className="text-white text-sm">Sign Out</span>
            </button>
          </div>

          <div className="text-center py-4">
            <h1 className="text-4xl font-bold text-white mb-2">Daily Trivia</h1>
            <p className="text-white/70">6 questions across 6 categories</p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <Flame className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-semibold">{userProfile?.streak || 0} day streak</span>
            </div>
            <button
              onClick={loadLeaderboards}
              className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Leaderboard</span>
            </button>
          </div>

          {/* Today's Topics */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 mb-6 border border-white/20">
            <h2 className="text-lg font-semibold text-white/90 mb-4">Today's Topics</h2>
            <div className="space-y-3">
              {ALL_CATEGORIES.map((category) => (
                <div key={category} className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                  <div className={`w-10 h-10 ${CATEGORIES[category].color} rounded-xl flex items-center justify-center text-xl`}>
                    {CATEGORIES[category].icon}
                  </div>
                  <span className="text-white font-medium">{category}</span>
                  {hasPlayed && <Check className="w-5 h-5 text-green-400 ml-auto" />}
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          {hasPlayed ? (
            <div className="text-center">
              <div className="bg-green-500/20 backdrop-blur rounded-2xl p-6 mb-4 border border-green-500/30">
                <Check className="w-12 h-12 text-green-400 mx-auto mb-2" />
                <p className="text-white text-lg font-semibold">Today's Trivia Complete!</p>
                <p className="text-white/70">Score: {todayScore.score}/{todayScore.totalQuestions}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setScreen('review')}
                  className="flex-1 py-4 bg-white/20 rounded-xl font-bold text-white hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Review
                </button>
                <button
                  onClick={shareScore}
                  className="flex-1 py-4 bg-white/20 rounded-xl font-bold text-white hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
              <p className="text-white/50 text-sm mt-4">Come back tomorrow for new questions!</p>
            </div>
          ) : (
            <button
              onClick={startQuiz}
              className="w-full py-4 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl font-bold text-gray-900 text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30"
            >
              Start Today's Trivia
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Quiz Loading
  if (screen === 'quiz' && isLoadingQuestions) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-teal-800 to-emerald-900 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-white animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Loading questions...</p>
        </div>
      </div>
    );
  }

  // Quiz Screen
  if (screen === 'quiz' && todaysQuestions.length > 0) {
    const question = todaysQuestions[currentQuestion];
    const style = CATEGORIES[question.category] || { color: 'bg-gray-500', icon: '❓' };

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-teal-800 to-emerald-900 p-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className={`${style.color} px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-2`}>
              <span>{style.icon}</span>
              {question.category}
            </div>
            <div className="text-white/70">
              Question {currentQuestion + 1} of {todaysQuestions.length}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-2 bg-white/20 rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-500"
              style={{ width: `${((currentQuestion + (showFeedback ? 1 : 0)) / todaysQuestions.length) * 100}%` }}
            />
          </div>

          {/* Question */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 mb-6 border border-white/20">
            <h2 className="text-xl font-semibold text-white leading-relaxed">
              {question.q}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, idx) => {
              let buttonStyle = "bg-white/10 border-white/20 hover:bg-white/20";

              if (showFeedback) {
                if (idx === question.correct) {
                  buttonStyle = "bg-green-500/30 border-green-500/50";
                } else if (idx === selectedAnswer && idx !== question.correct) {
                  buttonStyle = "bg-red-500/30 border-red-500/50";
                } else {
                  buttonStyle = "bg-white/5 border-white/10 opacity-50";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={showFeedback}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${buttonStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      showFeedback && idx === question.correct ? 'bg-green-500 text-white' :
                      showFeedback && idx === selectedAnswer ? 'bg-red-500 text-white' :
                      'bg-white/20 text-white'
                    }`}>
                      {showFeedback && idx === question.correct ? <Check className="w-5 h-5" /> :
                       showFeedback && idx === selectedAnswer && idx !== question.correct ? <X className="w-5 h-5" /> :
                       String.fromCharCode(65 + idx)}
                    </div>
                    <span className="text-white font-medium">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className={`rounded-2xl p-4 mb-6 ${
              selectedAnswer === question.correct ? 'bg-green-500/20 border border-green-500/30' : 'bg-blue-500/20 border border-blue-500/30'
            }`}>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/90 text-sm">{question.fact}</p>
              </div>
            </div>
          )}

          {/* Next Button */}
          {showFeedback && (
            <button
              onClick={nextQuestion}
              className="w-full py-4 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl font-bold text-gray-900 text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {currentQuestion < todaysQuestions.length - 1 ? 'Next Question' : 'See Results'}
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Score */}
          <div className="text-center mt-4">
            <span className="text-white/50">Current Score: </span>
            <span className="text-white font-bold">{getScore()}/{currentQuestion + (showFeedback ? 1 : 0)}</span>
          </div>
        </div>
      </div>
    );
  }

  // Results Screen
  if (screen === 'results') {
    const score = todayScore?.score || 0;
    const total = todayScore?.totalQuestions || 5;
    const percentage = (score / total) * 100;

    let message = "Keep practicing!";
    let emoji = "💪";
    if (percentage === 100) { message = "Perfect score!"; emoji = "🏆"; }
    else if (percentage >= 80) { message = "Excellent!"; emoji = "🌟"; }
    else if (percentage >= 60) { message = "Great job!"; emoji = "👏"; }
    else if (percentage >= 40) { message = "Good effort!"; emoji = "👍"; }

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-teal-800 to-emerald-900 p-4 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center">
            <div className="text-6xl mb-4">{emoji}</div>
            <h2 className="text-3xl font-bold text-white mb-2">{message}</h2>

            {/* Score Circle */}
            <div className="relative w-40 h-40 mx-auto my-8">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                <circle cx="80" cy="80" r="70" fill="none" stroke="url(#gradient)" strokeWidth="12" strokeLinecap="round" strokeDasharray={`${percentage * 4.4} 440`} />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#facc15" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-white">{score}/{total}</span>
                <span className="text-white/60">Correct</span>
              </div>
            </div>

            {/* Streak */}
            <div className="flex items-center justify-center gap-2 bg-cyan-500/20 rounded-full px-6 py-3 mb-8">
              <Flame className="w-6 h-6 text-cyan-400" />
              <span className="text-white font-bold text-lg">{userProfile?.streak || 0} Day Streak!</span>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button onClick={() => setScreen('review')} className="w-full py-3 bg-white/20 rounded-xl font-semibold text-white hover:bg-white/30 transition-colors flex items-center justify-center gap-2">
                <RotateCcw className="w-5 h-5" />
                Review Answers
              </button>
              <button onClick={shareScore} className="w-full py-3 bg-white/20 rounded-xl font-semibold text-white hover:bg-white/30 transition-colors flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5" />
                Share Score
              </button>
              <button onClick={loadLeaderboards} className="w-full py-3 bg-white/20 rounded-xl font-semibold text-white hover:bg-white/30 transition-colors flex items-center justify-center gap-2">
                <Trophy className="w-5 h-5" />
                View Leaderboard
              </button>
              <button onClick={() => setScreen('home')} className="w-full py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl font-bold text-gray-900 hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Review Screen
  if (screen === 'review') {
    // Load questions if not already loaded
    if (todaysQuestions.length === 0) {
      loadTodaysQuestions().then(questions => {
        setTodaysQuestions(questions);
      });

      return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 via-teal-800 to-emerald-900 flex items-center justify-center">
          <div className="text-center">
            <Loader className="w-12 h-12 text-white animate-spin mx-auto mb-4" />
            <p className="text-white text-xl">Loading review...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-teal-800 to-emerald-900 p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">Review Answers</h1>
            <button onClick={() => setScreen('home')} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Home className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="space-y-4">
            {todaysQuestions.map((question, idx) => {
              const style = CATEGORIES[question.category] || { color: 'bg-gray-500', icon: '❓' };

              return (
                <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`${style.color} px-2 py-1 rounded-full text-white text-xs font-medium flex items-center gap-1`}>
                      <span>{style.icon}</span>
                      {question.category}
                    </div>
                  </div>
                  <p className="text-white font-medium mb-3">{question.q}</p>
                  <div className="flex items-center gap-2 bg-green-500/20 rounded-lg p-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-green-300 font-medium">{question.options[question.correct]}</span>
                  </div>
                  <div className="mt-3 flex items-start gap-2 text-white/60 text-sm">
                    <Zap className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>{question.fact}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <button onClick={() => setScreen('home')} className="w-full mt-6 py-4 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl font-bold text-gray-900 hover:opacity-90 transition-opacity">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Leaderboard Screen
  if (screen === 'leaderboard') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-teal-800 to-emerald-900 p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Trophy className="w-7 h-7 text-yellow-400" />
              Leaderboard
            </h1>
            <button onClick={() => setScreen('home')} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Home className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Today's Scores */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 mb-4 border border-white/20">
            <h2 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              Today's Scores
            </h2>
            {todayLeaderboard.length === 0 ? (
              <p className="text-white/60 text-center py-4">No scores yet today. Be the first!</p>
            ) : (
              <div className="space-y-2">
                {todayLeaderboard.map((entry, idx) => (
                  <div key={entry.id} className={`flex items-center justify-between p-3 rounded-xl ${entry.userId === user.uid ? 'bg-yellow-500/20 border border-yellow-500/30' : 'bg-white/5'}`}>
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${idx === 0 ? 'bg-yellow-500 text-gray-900' : idx === 1 ? 'bg-gray-300 text-gray-900' : idx === 2 ? 'bg-amber-600 text-white' : 'bg-white/20 text-white'}`}>
                        {idx + 1}
                      </span>
                      <span className="text-white font-medium">{entry.displayName}</span>
                    </div>
                    <span className="text-white font-bold">{entry.score}/{entry.totalQuestions}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Weekly Scores */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
            <h2 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-400" />
              This Week
            </h2>
            {weeklyLeaderboard.length === 0 ? (
              <p className="text-white/60 text-center py-4">No data yet. Keep playing!</p>
            ) : (
              <div className="space-y-2">
                {weeklyLeaderboard.map((entry, idx) => (
                  <div key={entry.userId} className={`flex items-center justify-between p-3 rounded-xl ${entry.userId === user.uid ? 'bg-teal-500/20 border border-teal-500/30' : 'bg-white/5'}`}>
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${idx === 0 ? 'bg-yellow-500 text-gray-900' : idx === 1 ? 'bg-gray-300 text-gray-900' : idx === 2 ? 'bg-amber-600 text-white' : 'bg-white/20 text-white'}`}>
                        {idx + 1}
                      </span>
                      <div>
                        <span className="text-white font-medium">{entry.displayName}</span>
                        <p className="text-white/50 text-xs">{entry.gamesPlayed} {entry.gamesPlayed === 1 ? 'game' : 'games'}</p>
                      </div>
                    </div>
                    <span className="text-white font-bold">{entry.totalScore} pts</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => setScreen('home')} className="w-full mt-6 py-4 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl font-bold text-gray-900 hover:opacity-90 transition-opacity">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return null;
}
