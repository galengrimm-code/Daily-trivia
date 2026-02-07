// src/games/boggle/BoggleTimer.jsx
import React from 'react';
import { formatTime } from './boggleUtils';

export default function BoggleTimer({ timeLeft }) {
  const isUrgent = timeLeft <= 30;

  return (
    <div className={`text-2xl font-mono font-bold text-center ${isUrgent ? 'text-error timer-urgent' : 'text-text-main'}`}>
      {'\u{23F1}'} {formatTime(timeLeft)}
    </div>
  );
}
