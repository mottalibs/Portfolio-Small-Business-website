'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { lang, t, toggleLang } = useLanguage();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    const sections = ['services', 'projects', 'about', 'contact'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { threshold: 0.3 });
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const navLinks = [
    { href: '#', label: 'Home', id: '' },
    { href: '#services', label: t.nav_services || 'Services', id: 'services' },
    { href: '#projects', label: t.nav_works || 'Projects', id: 'projects' },
    { href: '#about', label: 'About', id: 'about' },
  ];

  return (
    <nav id="nav" className={`fixed top-0 w-full z-[999] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="absolute inset-0 transition-all duration-500" style={{
        background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(30px) saturate(1.5)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,170,0.08)' : '1px solid transparent',
      }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="font-display text-[1.1rem] tracking-[2px] hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text)', fontWeight: 500 }}>
          MOTTALIB <span className="gradient-text" style={{ fontWeight: 800 }}>TECH</span>
        </a>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-1 bg-[rgba(255,255,255,0.03)] px-2 py-1.5 rounded-full border border-[rgba(255,255,255,0.05)]">
          {navLinks.map((link) => {
            const isActive = link.id === activeSection || (link.id === '' && activeSection === '');
            return (
              <a key={link.href} href={link.href}
                className="relative px-5 py-2 text-[.82rem] rounded-full transition-all duration-300"
                style={{
                  color: isActive ? 'var(--text)' : 'var(--muted)',
                  background: isActive ? 'rgba(0,212,170,0.08)' : 'transparent',
                }}>
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button onClick={toggleLang}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[.75rem] font-medium border border-[rgba(255,255,255,0.08)] hover:border-[var(--accent)] transition-all duration-300 cursor-pointer bg-transparent"
            style={{ color: 'var(--muted)' }}>
            <span>{lang === 'en' ? '🇧🇩' : '🇬🇧'}</span>
            <span>{lang === 'en' ? 'বাংলা' : 'EN'}</span>
          </button>

          {/* CTA */}
          <a href="#contact" className="hidden md:inline-flex px-6 py-2.5 rounded-full text-[.82rem] font-medium transition-all duration-300"
            style={{
              background: 'var(--accent-dim)',
              border: '1px solid rgba(0,212,170,0.2)',
              color: 'var(--accent)',
            }}
            onMouseEnter={(e) => { e.target.style.background = 'var(--accent)'; e.target.style.color = '#0a0a0f'; e.target.style.borderColor = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.target.style.background = 'var(--accent-dim)'; e.target.style.color = 'var(--accent)'; e.target.style.borderColor = 'rgba(0,212,170,0.2)'; }}>
            Get in Touch
          </a>

          {/* Hamburger */}
          <button className="md:hidden flex flex-col gap-[6px] p-2 w-9 h-9 items-center justify-center bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className="block w-5 h-[1.5px] transition-all duration-300 origin-center rounded-full"
              style={{ background: 'var(--text)', transform: menuOpen ? 'rotate(45deg) translate(3px,3px)' : 'none' }} />
            <span className="block w-5 h-[1.5px] transition-all duration-300 origin-center rounded-full"
              style={{ background: 'var(--text)', transform: menuOpen ? 'rotate(-45deg) translate(3px,-3px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className={`mobile-nav-overlay-bg md:hidden ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />
      <div className={`mobile-nav-panel md:hidden ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <a key={link.href} href={link.href} onClick={closeMenu}
            className="text-xl font-light tracking-[4px] uppercase hover:text-[var(--accent)] transition-all"
            style={{ color: 'var(--muted)', opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
              transition: `opacity .4s ease ${i * 80}ms, transform .4s ease ${i * 80}ms, color .3s` }}>
            {link.label}
          </a>
        ))}
        {/* Mobile Language Toggle */}
        <button onClick={() => { toggleLang(); closeMenu(); }}
          className="mt-2 px-5 py-2.5 rounded-full text-[.85rem] font-medium border border-[rgba(255,255,255,0.1)] text-[var(--muted)] bg-transparent cursor-pointer hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          style={{ opacity: menuOpen ? 1 : 0, transition: `opacity .4s ease ${navLinks.length * 80}ms` }}>
          {lang === 'en' ? '🇧🇩 বাংলা' : '🇬🇧 English'}
        </button>
        <a href="#contact" onClick={closeMenu}
          className="mt-4 px-6 py-3 rounded-full text-[.9rem] font-medium text-center transition-all duration-300"
          style={{
            background: 'var(--accent-dim)', border: '1px solid rgba(0,212,170,0.2)', color: 'var(--accent)',
            opacity: menuOpen ? 1 : 0, transition: `opacity .4s ease ${(navLinks.length + 1) * 80}ms`,
          }}>
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
