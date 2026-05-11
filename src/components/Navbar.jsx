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

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

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
      className={`fixed top-0 w-full z-[999] transition-all duration-500 ${
        scrolled
          ? 'py-3'
          : 'py-5'
      }`}
    >
      {/* Glassmorphic background bar */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
          backdropFilter: scrolled ? 'blur(30px) saturate(1.5)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(30px) saturate(1.5)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="font-display text-[1rem] font-bold tracking-[5px] uppercase text-white hover:text-[var(--accent)] transition-colors duration-300">
          CHARMATHA
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-[.72rem] font-medium tracking-[2.5px] uppercase transition-all duration-300 hover:text-white"
              style={{ color: 'var(--muted)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* CTA Button — Desktop only */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-[.7rem] font-semibold tracking-[2px] uppercase transition-all duration-400"
            style={{
              background: 'var(--accent)',
              color: '#000',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(255,255,255,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {t.nav_contact} <FaArrowRight size={10} />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full border flex items-center justify-center text-xs cursor-pointer transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--muted)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun size={12} /> : <FaMoon size={12} />}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="w-9 h-9 rounded-full border flex items-center justify-center text-[.72rem] font-bold cursor-pointer transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--muted)' }}
            aria-label="Switch language"
          >
            {lang === 'bn' ? 'EN' : 'বাং'}
          </button>

          {/* Burger Menu */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 w-9 h-9 items-center justify-center bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className="block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
              }}
            />
            <span
              className="block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-nav-overlay md:hidden">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl font-light tracking-[4px] uppercase transition-all duration-300 hover:text-[var(--accent)]"
              style={{
                color: 'var(--muted)',
                opacity: 0,
                animation: `fadeInUp 0.5s ease ${i * 80}ms forwards`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-6 inline-flex items-center gap-3 px-8 py-3 rounded-full text-sm font-semibold tracking-[2px] uppercase"
            style={{
              background: 'var(--accent)',
              color: '#000',
              opacity: 0,
              animation: `fadeInUp 0.5s ease ${navLinks.length * 80}ms forwards`,
            }}
          >
            {t.nav_contact} <FaArrowRight size={12} />
          </a>
        </div>
      )}
    </nav>
  );
}
