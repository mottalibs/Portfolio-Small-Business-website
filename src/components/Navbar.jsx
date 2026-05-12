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
    { href: '#services', label: t.nav_services },
    { href: '#skills', label: t.nav_skills },
    { href: '#store', label: t.nav_store },
    { href: '#projects', label: t.nav_projects },
  ];

  return (
    <nav id="nav" className={`fixed top-0 w-full z-[999] transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="absolute inset-0 transition-all duration-500" style={{
        background: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(30px) saturate(1.5)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(30px) saturate(1.5)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
      }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="font-display text-[.9rem] font-bold tracking-[6px] uppercase text-white hover:text-[var(--accent)] transition-colors duration-300">
          CHARMATHA
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-[.7rem] font-medium tracking-[2px] uppercase transition-all duration-300 hover:text-[var(--accent)]" style={{ color: 'var(--muted)' }}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[.68rem] font-semibold tracking-[2px] uppercase transition-all duration-500 hover:bg-[var(--accent)] hover:text-[#0a0a0a]" style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}>
            {t.nav_contact}
          </a>

          <button onClick={toggleTheme} className="w-8 h-8 rounded-full border flex items-center justify-center text-xs cursor-pointer transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]" style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'transparent', color: 'var(--muted)' }} aria-label="Toggle theme">
            {theme === 'dark' ? <FaSun size={11} /> : <FaMoon size={11} />}
          </button>

          <button onClick={toggleLang} className="w-8 h-8 rounded-full border flex items-center justify-center text-[.68rem] font-bold cursor-pointer transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]" style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'transparent', color: 'var(--muted)' }} aria-label="Switch language">
            {lang === 'bn' ? 'EN' : 'বাং'}
          </button>

          <button className="md:hidden flex flex-col gap-[5px] p-2 w-8 h-8 items-center justify-center bg-transparent border-none cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className="block w-5 h-[1px] bg-white transition-all duration-300 origin-center" style={{ transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none' }} />
            <span className="block w-5 h-[1px] bg-white transition-all duration-300 origin-center" style={{ transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-nav-overlay md:hidden">
          {navLinks.map((link, i) => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="text-2xl font-light tracking-[5px] uppercase transition-all duration-300 hover:text-[var(--accent)]" style={{ color: 'var(--muted)', opacity: 0, animation: `fadeInUp 0.5s ease ${i * 80}ms forwards` }}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className="mt-6 inline-flex items-center gap-3 px-8 py-3 rounded-full text-sm font-semibold tracking-[2px] uppercase" style={{ border: '1px solid var(--accent)', color: 'var(--accent)', opacity: 0, animation: `fadeInUp 0.5s ease ${navLinks.length * 80}ms forwards` }}>
            {t.nav_contact} <FaArrowRight size={12} />
          </a>
        </div>
      )}
    </nav>
  );
}
