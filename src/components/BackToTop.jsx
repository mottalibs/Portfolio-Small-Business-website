'use client';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-[100px] right-7 w-11 h-11 rounded-xl border flex items-center justify-center text-base cursor-pointer z-[900] transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--bg)] hover:border-[var(--accent)]"
      style={{
        background: 'var(--bg2)',
        borderColor: 'var(--border)',
        color: 'var(--text)',
        opacity: show ? 1 : 0,
        visibility: show ? 'visible' : 'hidden',
      }}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}
