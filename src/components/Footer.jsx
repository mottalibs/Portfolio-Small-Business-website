'use client';
import { useLanguage } from './LanguageProvider';
import { useMode } from './ModeProvider';
import { FaFacebookF, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer({ config = {} }) {
  const { t } = useLanguage();
  const { mode } = useMode();
  const email = config?.email || 'mottalib@example.com';

  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <a href="#" className="heading-serif text-[2rem] font-bold uppercase tracking-tight block mb-4" style={{ color: 'var(--text)' }}>
              MOTTALIB<span className="text-[var(--accent)]">.</span>
            </a>
            <p className="text-mono text-[0.7rem] text-[var(--muted)] leading-[1.8] max-w-[300px]">
              {t.footer_tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-mono text-[0.6rem] text-[var(--muted)] tracking-[2px] mb-6 uppercase">
              {mode === 'cyberpunk' ? 'SYS_DIRECTORIES' : 'Navigation'}
            </div>
            <div className="flex flex-col gap-3">
              {['#about', '#services', '#projects', '#contact'].map(link => (
                <a key={link} href={link} className="text-mono text-[0.75rem] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors w-fit">
                  {link.replace('#', '').toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
             <div className="text-mono text-[0.6rem] text-[var(--muted)] tracking-[2px] mb-6 uppercase">
               {mode === 'cyberpunk' ? 'SECURE_NETWORK' : 'Social Links'}
             </div>
             <div className="flex gap-4">
              {[
                { icon: <FaFacebookF size={14} />, href: config.facebook || '#' },
                { icon: <FaGithub size={14} />, href: config.github || '#' },
                { icon: <FaEnvelope size={14} />, href: `mailto:${email}` },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[var(--border)] bg-[var(--bg2)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-mono text-[0.6rem] text-[var(--muted)] tracking-[1px]">
            &copy; {new Date().getFullYear()} MOTTALIB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-mono text-[0.6rem] text-[var(--muted)] tracking-[1px] uppercase">
            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse"></span>
            {mode === 'cyberpunk' ? 'SYSTEM_ONLINE' : 'All Systems Operational'}
          </div>
        </div>

      </div>
    </footer>
  );
}
