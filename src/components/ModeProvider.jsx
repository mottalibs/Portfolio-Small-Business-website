'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ModeContext = createContext({ mode: 'cyberpunk', toggleMode: () => {} });

export function useMode() { return useContext(ModeContext); }

export default function ModeProvider({ children }) {
  const [mode, setMode] = useState('cyberpunk'); // default mode

  useEffect(() => {
    const saved = localStorage.getItem('app-mode') || 'cyberpunk';
    setMode(saved);
    document.documentElement.setAttribute('data-mode', saved);
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'cyberpunk' ? 'corporate' : 'cyberpunk';
    setMode(newMode);
    localStorage.setItem('app-mode', newMode);
    document.documentElement.setAttribute('data-mode', newMode);
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}
