'use client';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const circumference = 2 * Math.PI * 18;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-[100px] right-7 w-12 h-12 flex items-center justify-center cursor-pointer z-[900] transition-all duration-500 hover:scale-110 group"
      style={{
        opacity: show ? 1 : 0,
        visibility: show ? 'visible' : 'hidden',
        transform: show ? 'translateY(0)' : 'translateY(20px)',
        background: 'transparent',
        border: 'none',
      }}
      aria-label="Back to top"
    >
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r="18" fill="var(--bg2)" stroke="var(--border)" strokeWidth="1.5" />
        <circle cx="22" cy="22" r="18" fill="none" stroke="url(#grad)" strokeWidth="2"
          strokeDasharray={circumference} strokeDashoffset={dashOffset}
          strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.2s' }} />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-2)" />
          </linearGradient>
        </defs>
      </svg>
      <FaArrowUp className="relative z-10 text-xs text-[var(--text)] group-hover:text-[var(--accent)] transition-colors" />
    </button>
  );
}
