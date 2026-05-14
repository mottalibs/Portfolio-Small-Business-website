'use client';
import { useState, useEffect, useCallback } from 'react';

export default function TypeWriter({
  words = [],
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseDuration = 2000,
  className = '',
}) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex] || '';

    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
    } else {
      setText(currentWord.substring(0, text.length + 1));
    }

    // Determine next delay
    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && text === currentWord) {
      delay = pauseDuration;
      setIsDeleting(true);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      delay = 300;
    }

    return delay;
  }, [text, wordIndex, isDeleting, words, typeSpeed, deleteSpeed, pauseDuration]);

  useEffect(() => {
    if (words.length === 0) return;
    const delay = tick();
    const timer = setTimeout(() => {
      tick();
      // Force re-render
      setText((prev) => {
        const currentWord = words[wordIndex] || '';
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, words, tick]);

  useEffect(() => {
    if (words.length === 0) return;
    const currentWord = words[wordIndex] || '';
    
    if (!isDeleting && text === currentWord) {
      const timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timer);
    }
    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const delay = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, words, typeSpeed, deleteSpeed, pauseDuration]);

  return (
    <span className={`typewriter-text ${className}`}>
      {text}
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </span>
  );
}
