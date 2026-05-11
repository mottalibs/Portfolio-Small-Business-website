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

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: '#about', label: t.nav_about },
    { href: '#skills', label: t.nav_skills },
    { href: '#services', label: t.nav_services },
    { href: '#store', label: t.nav_store },
    { href: '#projects', label: t.nav_projects },
  ];

  return (
    <nav
      id="nav"
      className={`fixed top-0 w-full z-[999] transition-all duration-400 ${
        scrolled
          ? 'py-4 border-b backdrop-blur-2xl'
          : 'py-5'
      }`}
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--bg) 92%, transparent)' : 'transparent',
        borderColor: scrolled ? 'var(--border)' : 'transparent',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="text-[1.1rem] font-black tracking-[4px]">MOTTALIB</a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-[.78rem] font-semibold tracking-[2px] hover:text-[var(--text)] transition-colors duration-300"
              style={{ color: 'var(--muted)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 border-[1.5px] rounded-full text-[.78rem] font-semibold tracking-[2px] transition-all duration-300 hover:text-[var(--bg)]"
            style={{
              borderColor: 'var(--accent)',
              color: 'var(--accent)',
            }}
            onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'var(--bg)'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)'; }}
          >
            {t.nav_contact} <FaArrowRight size={12} />
          </a>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-[10px] border flex items-center justify-center text-sm cursor-pointer transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{ borderColor: 'var(--border)', background: 'var(--bg2)', color: 'var(--text)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="w-10 h-10 rounded-[10px] border flex items-center justify-center text-[.82rem] font-bold cursor-pointer transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{ borderColor: 'var(--border)', background: 'var(--bg2)', color: 'var(--text)' }}
            aria-label="Switch language"
          >
            {lang === 'bn' ? 'EN' : 'বাং'}
          </button>

          {/* Burger Menu */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 w-10 h-10 items-center justify-center bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className="w-[22px] h-[2px] transition-all duration-300"
              style={{
                background: 'var(--text)',
                transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <span
              className="w-[22px] h-[2px] transition-all duration-300"
              style={{
                background: 'var(--text)',
                transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-nav-overlay md:hidden">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-xl font-semibold tracking-[3px] transition-colors duration-300 hover:text-[var(--accent)]"
              style={{ color: 'var(--muted)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-4 inline-flex items-center gap-2 px-8 py-3 border-[1.5px] rounded-full text-base font-semibold tracking-[2px]"
            style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
          >
            {t.nav_contact} <FaArrowRight />
          </a>
        </div>
      )}
    </nav>
  );
}
