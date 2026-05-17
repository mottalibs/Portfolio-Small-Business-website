'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, t, toggleLang } = useLanguage();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-[999]" style={{
      background: scrolled ? 'var(--bg)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--tactical-grey)' : '1px solid transparent',
      transition: 'all 0.3s'
    }}>
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Branding */}
        <a href="#" className="flex flex-col">
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.2rem', color: 'var(--text)', letterSpacing: '1px' }}>
            MOTTALIB
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: 'var(--accent)', letterSpacing: '3px', textTransform: 'uppercase' }}>
            Sys.Admin // {lang === 'en' ? 'BD' : 'EN'}
          </span>
        </a>

        {/* Right: Tactical Links */}
        <div className="flex items-center gap-6" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '1px' }}>
          <a href="#about" className="hidden md:inline-block hover:text-[var(--accent)] transition-colors clickable">[ DOSSIER ]</a>
          <a href="#projects" className="hidden md:inline-block hover:text-[var(--accent)] transition-colors clickable">[ EVIDENCE ]</a>
          <a href="#contact" className="hover:text-[var(--accent)] transition-colors clickable text-[var(--text)]">[ INITIATE_CONTACT ]</a>
          
          {/* Lang Toggle */}
          <button onClick={toggleLang} className="clickable hover:text-[var(--accent)] transition-colors bg-transparent border-none text-[var(--muted)]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem' }}>
            {lang === 'en' ? '[ BN ]' : '[ EN ]'}
          </button>
        </div>
      </div>
    </nav>
  );
}
