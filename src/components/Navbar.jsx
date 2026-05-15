'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { FaArrowRight } from 'react-icons/fa';

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
    { href: '#services', label: t.nav_services },
    { href: '#projects', label: t.nav_works },
    { href: '#contact', label: t.nav_contact },
  ];

  return (
    <nav id="nav" className={`fixed top-0 w-full z-[999] transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="absolute inset-0 transition-all duration-500" style={{
        background: scrolled ? 'rgba(18, 20, 29, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(30px) saturate(1.5)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(30px) saturate(1.5)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
      }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
            style={{ background: 'var(--accent)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#12141D" strokeWidth="3" strokeLinecap="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
        </a>

        {/* Desktop Nav Links — Right aligned */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-[.78rem] font-medium tracking-[1px] transition-all duration-300 hover:text-[var(--accent)]"
              style={{ color: 'var(--muted)' }}
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle — small */}
          <button
            onClick={toggleLang}
            className="text-[.68rem] font-semibold tracking-[1px] uppercase transition-all duration-300 hover:text-[var(--accent)] cursor-pointer bg-transparent border-none"
            style={{ color: 'var(--muted)' }}
            aria-label="Switch language"
          >
            {lang === 'bn' ? 'EN' : 'বাং'}
          </button>
        </div>

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

      {/* Mobile Nav */}
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
        <button
          onClick={() => { toggleLang(); closeMenu(); }}
          className="mt-4 text-sm font-semibold tracking-[2px] uppercase bg-transparent border-none cursor-pointer text-left"
          style={{
            color: 'var(--accent)',
            opacity: menuOpen ? 1 : 0,
            transition: `opacity 0.4s ease ${navLinks.length * 80}ms`,
          }}
        >
          {lang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
        </button>
        <a
          href="#contact"
          onClick={closeMenu}
          className="mt-2 inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-semibold tracking-[2px] uppercase"
          style={{
            background: 'var(--accent)',
            color: 'var(--bg)',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
            transition: `opacity 0.4s ease ${(navLinks.length + 1) * 80}ms, transform 0.4s ease ${(navLinks.length + 1) * 80}ms`,
          }}
        >
          {t.hero_btn2} <FaArrowRight size={12} />
        </a>
      </div>
    </nav>
  );
}
