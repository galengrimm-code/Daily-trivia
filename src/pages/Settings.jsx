// src/pages/Settings.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Flame, LogOut } from 'lucide-react';
import { usePlayer } from '../hooks/usePlayer';

export default function Settings() {
  const navigate = useNavigate();
  const { userProfile, handleSignOut } = usePlayer();

  const onSignOut = async () => {
    await handleSignOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between py-4 mb-4">
          <button
            onClick={() => navigate('/')}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-text-main" />
          </button>
          <h1 className="text-xl font-bold text-text-main">Settings</h1>
          <div className="w-10" />
        </div>

        {/* Profile */}
        <div className="bg-white rounded-card p-6 shadow-card mb-4">
          <h2 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">Profile</h2>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {userProfile?.displayName?.charAt(0)?.toUpperCase() || '?'}
            </div>
            <div>
              <p className="text-lg font-bold text-text-main">{userProfile?.displayName}</p>
              <p className="text-text-muted text-sm">Google Account</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-card p-6 shadow-card mb-4">
          <h2 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">Stats</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-text-muted">Current Streak</span>
              <div className="flex items-center gap-1">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="font-bold text-text-main">{userProfile?.streak || 0} days</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-muted">Best Streak</span>
              <span className="font-bold text-text-main">{userProfile?.longestStreak || 0} days</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-muted">Games Played</span>
              <span className="font-bold text-text-main">{userProfile?.totalGames || 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-muted">Total Correct</span>
              <span className="font-bold text-text-main">{userProfile?.totalCorrect || 0}</span>
            </div>
          </div>
        </div>

        {/* Sign Out */}
        <button
          onClick={onSignOut}
          className="w-full py-4 bg-white rounded-card shadow-card font-semibold text-error hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
