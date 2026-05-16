'use client';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 15 + 5;
      });
    }, 120);
    const timer = setTimeout(() => setDone(true), 1400);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, []);

  return (
    <div className={`preloader ${done ? 'done' : ''}`}>
      <div className="preloader-logo">MOTTALIB</div>
      <div className="preloader-ring">
        <div className="preloader-progress">{Math.min(Math.round(progress), 100)}%</div>
      </div>
    </div>
  );
}
