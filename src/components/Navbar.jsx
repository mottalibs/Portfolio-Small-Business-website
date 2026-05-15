'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';

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
    { href: '#services', label: t.nav_services || 'Services' },
    { href: '#projects', label: t.nav_works || 'Projects' },
    { href: '#about', label: 'About' },
  ];

  return (
    <nav id="nav" className={`fixed top-0 w-full z-[999] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="absolute inset-0 transition-all duration-500" style={{
        background: scrolled ? 'rgba(18,14,12,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(30px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
      }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="font-display text-[1.1rem] tracking-[1px] hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text)', fontWeight: 400 }}>
          MOTTALIB <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>TECH</span>
        </a>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-10 bg-[rgba(255,255,255,0.03)] px-8 py-3 rounded-full border border-[rgba(255,255,255,0.05)]">
          {navLinks.map((link, i) => (
            <a key={link.href + i} href={link.href}
              className="text-[.85rem] transition-all duration-300 hover:text-white"
              style={{ color: i === 0 ? 'white' : 'var(--text-secondary)' }}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-flex px-6 py-2.5 rounded-full text-[.85rem] border border-[rgba(255,255,255,0.15)] text-white hover:bg-white hover:text-black transition-all duration-300">
            Get in Touch
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
        <a href="#contact" onClick={closeMenu}
          className="mt-6 px-6 py-3 rounded-full text-[.9rem] border border-[rgba(255,255,255,0.15)] text-white text-center hover:bg-white hover:text-black transition-all duration-300"
          style={{ opacity: menuOpen ? 1 : 0, transition: `opacity .4s ease ${(navLinks.length + 1) * 80}ms` }}>
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
