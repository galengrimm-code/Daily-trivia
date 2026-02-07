// src/games/spelling-bee/SpellingBeeFloatingPoints.jsx
import React, { useEffect, useState } from 'react';

export default function SpellingBeeFloatingPoints({ points, id, isPangram, onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, 800);
    return () => clearTimeout(timer);
  }, [id, onDone]);

  if (!visible || !points) return null;

  const color = isPangram ? '#D97706' : '#22C55E';
  const glow = isPangram ? 'rgba(217, 119, 6, 0.5)' : 'rgba(34, 197, 94, 0.5)';

  return (
    <div
      key={id}
      className="float-points"
      style={{
        left: '50%',
        top: '35%',
        color,
        textShadow: `0 2px 8px ${glow}`
      }}
    >
      +{points}
    </div>
  );
}
