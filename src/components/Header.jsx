// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'lucide-react';
import { usePlayer } from '../hooks/usePlayer';

export default function Header({ title, showBack = false, rightAction }) {
  const navigate = useNavigate();
  const { userProfile, handleSignOut } = usePlayer();

  return (
    <header className="flex items-center justify-between py-4 px-4 max-w-2xl mx-auto">
      {showBack ? (
        <button
          onClick={() => navigate(-1)}
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-text-main" />
        </button>
      ) : (
        <div>
          <p className="text-sm text-text-muted">Welcome back,</p>
          <p className="font-bold text-text-main">{userProfile?.displayName}</p>
        </div>
      )}

      {title && (
        <h1 className="text-xl font-bold text-text-main">{title}</h1>
      )}

      {rightAction || (
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <LogOut className="w-4 h-4 text-text-muted" />
          <span className="text-text-muted text-sm">Sign Out</span>
        </button>
      )}
    </header>
  );
}
