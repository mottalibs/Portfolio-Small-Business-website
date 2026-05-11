'use client';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${done ? 'done' : ''}`}>
      <div className="loader-bar" />
    </div>
  );
}
