'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { FaArrowRight } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, t, toggleLang } = useLanguage();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#services', label: t.nav_services },
    { href: '#projects', label: t.nav_works },
    { href: '#about', label: 'About' },
  ];

  return (
    <nav id="nav" className={`fixed top-0 w-full z-[999] transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="absolute inset-0 transition-all duration-500" style={{
        background: scrolled ? 'rgba(13,13,13,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(30px) saturate(1.5)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
      }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="font-display text-[.9rem] font-bold tracking-[2px] uppercase hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text)' }}>
          MOTTALIB <span style={{ fontWeight: 800 }}>TECH</span>
        </a>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a key={link.href + i} href={link.href}
              className="text-[.78rem] font-medium tracking-[1px] transition-all duration-300 hover:text-[var(--accent)]"
              style={{ color: i === 0 ? 'var(--text)' : 'var(--muted)' }}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button onClick={toggleLang}
            className="hidden md:flex text-[.68rem] font-semibold tracking-[1px] uppercase hover:text-[var(--accent)] cursor-pointer bg-transparent border-none transition-all"
            style={{ color: 'var(--muted)' }} aria-label="Language">
            {lang === 'bn' ? 'EN' : 'বাং'}
          </button>
          <a href="#contact" className="hidden md:inline-flex btn-outline-accent">
            Get in Touch <FaArrowRight size={10} />
          </a>

          {/* Hamburger */}
          <button className="md:hidden flex flex-col gap-[5px] p-2 w-8 h-8 items-center justify-center bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
              style={{ background: 'var(--text)', transform: menuOpen ? 'rotate(45deg) translate(3px,3px)' : 'none' }} />
            <span className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
              style={{ background: 'var(--text)', transform: menuOpen ? 'rotate(-45deg) translate(3px,-3px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className={`mobile-nav-overlay-bg md:hidden ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />
      <div className={`mobile-nav-panel md:hidden ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <a key={link.href + i} href={link.href} onClick={closeMenu}
            className="text-xl font-light tracking-[4px] uppercase hover:text-[var(--accent)] transition-all"
            style={{ color: 'var(--muted)', opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
              transition: `opacity .4s ease ${i * 80}ms, transform .4s ease ${i * 80}ms, color .3s` }}>
            {link.label}
          </a>
        ))}
        <button onClick={() => { toggleLang(); closeMenu(); }}
          className="mt-4 text-sm font-semibold tracking-[2px] uppercase bg-transparent border-none cursor-pointer text-left"
          style={{ color: 'var(--accent)', opacity: menuOpen ? 1 : 0, transition: `opacity .4s ease ${navLinks.length * 80}ms` }}>
          {lang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
        </button>
        <a href="#contact" onClick={closeMenu}
          className="mt-2 btn-primary w-fit"
          style={{ opacity: menuOpen ? 1 : 0, transition: `opacity .4s ease ${(navLinks.length + 1) * 80}ms` }}>
          Get in Touch <FaArrowRight size={12} />
        </a>
      </div>
    </nav>
  );
}
