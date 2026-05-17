'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const animRef = useRef(null);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setCoords({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);
    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseenter', handleEnter);
    document.addEventListener('mouseleave', handleLeave);

    const addHoverListeners = () => {
      const targets = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .clickable');
      targets.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
      return targets;
    };

    let targets = addHoverListeners();
    const observer = new MutationObserver(() => {
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
      targets = addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseenter', handleEnter);
      document.removeEventListener('mouseleave', handleLeave);
      observer.disconnect();
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed', top: 0, left: 0, 
        pointerEvents: 'none', zIndex: 99999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}
    >
      {/* Center dot */}
      <div style={{ width: 4, height: 4, background: 'var(--accent)', borderRadius: '50%' }} />
      
      {/* Crosshair lines */}
      <div style={{ position: 'absolute', width: 20, height: 1, background: 'var(--accent)', opacity: 0.5 }} />
      <div style={{ position: 'absolute', width: 1, height: 20, background: 'var(--accent)', opacity: 0.5 }} />
      
      {/* Targeting brackets on hover */}
      {isHovering && (
        <>
          <div style={{ position: 'absolute', width: 40, height: 40, border: '1px solid var(--accent)', opacity: 0.8, transition: 'all 0.2s', animation: 'spin 10s linear infinite' }} />
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes spin { 100% { transform: rotate(360deg); } }
          `}} />
        </>
      )}

      {/* Coordinate tracker */}
      <div style={{ 
        position: 'absolute', top: 15, left: 15, 
        fontFamily: "'JetBrains Mono', monospace", 
        fontSize: '10px', color: 'var(--accent)', 
        opacity: 0.7, whiteSpace: 'nowrap'
      }}>
        X:{coords.x} Y:{coords.y}
      </div>
    </div>
  );
}
