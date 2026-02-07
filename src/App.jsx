// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Loader, ArrowLeft } from 'lucide-react';
import { PlayerProvider, usePlayer } from './hooks/usePlayer';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Trivia from './games/trivia/Trivia';
import Boggle from './games/boggle/Boggle';
import SpellingBee from './games/spelling-bee/SpellingBee';

function SignIn() {
  const { handleSignIn } = usePlayer();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-white rounded-card p-8 max-w-md w-full shadow-card text-center">
        <div className="text-5xl mb-4">{'\u{1F520}'}</div>
        <h1 className="text-4xl font-extrabold text-text-main mb-2">Daily Games</h1>
        <p className="text-text-muted mb-8">Word puzzles and trivia for the family</p>

        <button
          onClick={handleSignIn}
          className="w-full py-4 bg-white border-2 border-border rounded-button font-bold text-text-main hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

function ComingSoon({ title }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between py-4 mb-8">
          <button
            onClick={() => navigate('/')}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-text-main" />
          </button>
          <h1 className="text-xl font-bold text-text-main">{title}</h1>
          <div className="w-10" />
        </div>
        <div className="text-center py-16">
          <div className="text-6xl mb-4">{'\u{1F6A7}'}</div>
          <h2 className="text-2xl font-bold text-text-main mb-2">Coming Soon</h2>
          <p className="text-text-muted">This game is under construction. Check back later!</p>
        </div>
      </div>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const { user, authLoading } = usePlayer();

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) return <SignIn />;
  return children;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/trivia" element={<ProtectedRoute><Trivia /></ProtectedRoute>} />
      <Route path="/boggle" element={<ProtectedRoute><Boggle /></ProtectedRoute>} />
      <Route path="/spelling-bee" element={<ProtectedRoute><SpellingBee /></ProtectedRoute>} />
      <Route path="/wordle" element={<ProtectedRoute><ComingSoon title="Word Guess" /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PlayerProvider>
        <AppRoutes />
      </PlayerProvider>
    </BrowserRouter>
  );
}
