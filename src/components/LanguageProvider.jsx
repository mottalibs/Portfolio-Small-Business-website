'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '@/lib/translations';

const LanguageContext = createContext({ lang: 'bn', t: translations.bn, toggleLang: () => {} });

export function useLanguage() { return useContext(LanguageContext); }

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState('bn');

  useEffect(() => {
    const saved = localStorage.getItem('lang') || 'bn';
    setLang(saved);
    document.documentElement.lang = saved;
  }, []);

  const toggleLang = () => {
    const next = lang === 'bn' ? 'en' : 'bn';
    setLang(next);
    localStorage.setItem('lang', next);
    document.documentElement.lang = next;
  };

  const t = translations[lang] || translations.bn;

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
