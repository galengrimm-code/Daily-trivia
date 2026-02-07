// src/games/boggle/BoggleFloatingPoints.jsx
import React, { useEffect, useState } from 'react';

export default function BoggleFloatingPoints({ points, id, onDone }) {
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

  return (
    <div
      key={id}
      className="float-points"
      style={{
        left: '50%',
        top: '40%',
        color: '#22C55E',
        textShadow: '0 2px 8px rgba(34, 197, 94, 0.5)'
      }}
    >
      +{points}
    </div>
  );
}
