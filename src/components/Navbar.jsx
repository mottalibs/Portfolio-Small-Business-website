'use client';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { FaSun, FaMoon, FaArrowRight } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
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
    { href: '#skills', label: t.nav_skills },
    { href: '#projects', label: t.nav_projects },
  ];

  return (
    <nav id="nav" className={`fixed top-0 w-full z-[999] transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="absolute inset-0 transition-all duration-500" style={{
        background: scrolled ? 'rgba(10, 10, 15, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(30px) saturate(1.5)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(30px) saturate(1.5)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
      }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="font-display text-[.9rem] font-bold tracking-[5px] uppercase hover:text-[var(--accent)] transition-colors duration-300" style={{ color: 'var(--text)' }}>
          MOTTALIB
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-[.72rem] font-medium tracking-[2px] uppercase transition-all duration-300 hover:text-[var(--accent)] font-mono"
              style={{ color: 'var(--muted)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {/* Desktop Contact button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[.68rem] font-semibold tracking-[1.5px] uppercase transition-all duration-500 hover:bg-[var(--accent)] hover:text-[#0a0a0f]"
            style={{ border: '1px solid rgba(0,212,170,0.2)', color: 'var(--accent)', background: 'var(--accent-dim)' }}
          >
            {t.nav_contact}
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-xl border flex items-center justify-center text-xs cursor-pointer transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'transparent', color: 'var(--muted)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun size={12} /> : <FaMoon size={12} />}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="w-8 h-8 rounded-xl border flex items-center justify-center text-[.68rem] font-bold cursor-pointer transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] font-mono"
            style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'transparent', color: 'var(--muted)' }}
            aria-label="Switch language"
          >
            {lang === 'bn' ? 'EN' : 'বাং'}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 w-8 h-8 items-center justify-center bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
              style={{
                background: 'var(--text)',
                transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
              style={{
                background: 'var(--text)',
                transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav — Slide-in Panel */}
      <div className={`mobile-nav-overlay-bg md:hidden ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />
      <div className={`mobile-nav-panel md:hidden ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="text-xl font-light tracking-[4px] uppercase transition-all duration-300 hover:text-[var(--accent)]"
            style={{
              color: 'var(--muted)',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
              transition: `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms, color 0.3s`,
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-semibold tracking-[2px] uppercase"
          style={{
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
            transition: `opacity 0.4s ease ${navLinks.length * 80}ms, transform 0.4s ease ${navLinks.length * 80}ms`,
          }}
        >
          {t.nav_contact} <FaArrowRight size={12} />
        </a>
      </div>
    </nav>
  );
}
