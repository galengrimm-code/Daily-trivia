// src/games/boggle/BoggleFloatingPoints.jsx
import React, { useEffect, useState } from 'react';

export default function BoggleFloatingPoints({ points, id, onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, 1200);
    return () => clearTimeout(timer);
  }, [id, onDone]);

  if (!visible || !points) return null;

  return (
    <div className="float-points text-primary" style={{ left: '50%', top: '30%', transform: 'translateX(-50%)' }}>
      +{points}
    </div>
  );
}
