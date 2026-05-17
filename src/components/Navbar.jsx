'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, t, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: '#about', label: t.nav_about },
    { href: '#services', label: t.nav_skills },
    { href: '#projects', label: t.nav_projects },
  ];

  return (
    <nav id="nav" className={`fixed top-0 w-full z-[999] transition-all duration-500 border-b ${scrolled ? 'py-4 bg-[var(--bg)] border-[var(--border)]' : 'py-6 bg-transparent border-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="heading-serif text-[1.4rem] font-bold uppercase tracking-tight" style={{ color: 'var(--text)' }}>
          MOTTALIB<span className="text-[var(--accent)]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-mono text-[0.65rem] tracking-[2px] text-[var(--muted)] hover:text-[var(--text)] transition-colors relative group">
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-flex text-mono text-[0.65rem] tracking-[2px] text-[var(--accent)] border border-[var(--border)] px-4 py-2 hover:border-[var(--accent)] hover:bg-[var(--accent-dim)] transition-all">
            {t.nav_contact}
          </a>

          <button onClick={toggleLang} className="text-mono text-[0.65rem] border border-[var(--border)] px-2 py-2 hover:border-[var(--text)] transition-colors min-w-[32px]">
            {lang === 'bn' ? 'EN' : 'BN'}
          </button>

          <button className="md:hidden text-[var(--text)]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-[var(--bg)] z-[-1] transition-transform duration-500 flex flex-col justify-center items-center gap-8 ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute top-20 left-6 text-mono text-[0.6rem] text-[var(--muted)]">SYS_NAV_MENU</div>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu} className="heading-serif text-3xl uppercase tracking-widest text-[var(--text-secondary)] hover:text-white transition-colors">
            {link.label.replace('_', ' ')}
          </a>
        ))}
        <a href="#contact" onClick={closeMenu} className="text-mono text-[0.8rem] tracking-[3px] text-[var(--accent)] mt-8 border border-[var(--accent)] px-8 py-3">
          {t.nav_contact}
        </a>
      </div>
    </nav>
  );
}
