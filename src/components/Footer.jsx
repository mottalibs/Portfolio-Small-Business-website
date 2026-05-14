'use client';
import { useLanguage } from './LanguageProvider';
import { FaFacebookF, FaGithub, FaEnvelope, FaHeart, FaTerminal } from 'react-icons/fa';

export default function Footer({ config = {} }) {
  const { t } = useLanguage();
  const email = config?.email || 'mottalib@example.com';

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8 py-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8" style={{ borderBottom: '1px solid var(--border)' }}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-dim)', border: '1px solid rgba(0,212,170,0.1)' }}>
                <FaTerminal size={12} style={{ color: 'var(--accent)' }} />
              </div>
              <span className="font-display text-[.85rem] font-bold tracking-[5px] uppercase" style={{ color: 'var(--text)' }}>
                MOTTALIB
              </span>
            </div>
            <p className="text-[.82rem] leading-[1.7] max-w-[320px]" style={{ color: 'var(--muted)' }}>
              {t.footer_tagline}
            </p>
          </div>

          {/* Quick links */}
          <div className="flex gap-6">
            {['#about', '#skills', '#projects', '#contact'].map(link => (
              <a
                key={link}
                href={link}
                className="text-[.72rem] font-medium tracking-[2px] uppercase transition-all duration-300 hover:text-[var(--accent)] font-mono"
                style={{ color: 'var(--muted)' }}
              >
                {link.replace('#', '')}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-2">
            {[
              { icon: <FaFacebookF size={12} />, href: config.facebook || '#' },
              { icon: <FaGithub size={12} />, href: config.github || '#' },
              { icon: <FaEnvelope size={12} />, href: `mailto:${email}` },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: 'var(--accent-dim)',
                  color: 'var(--accent)',
                  border: '1px solid rgba(0,212,170,0.08)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.color = '#0a0a0f';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--accent-dim)';
                  e.currentTarget.style.color = 'var(--accent)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-2">
          <p className="text-[.65rem] tracking-[1px] font-mono" style={{ color: 'rgba(255,255,255,0.15)' }}>
            &copy; {new Date().getFullYear()} Mottalib. All rights reserved.
          </p>
          <p className="text-[.65rem] tracking-[1px] flex items-center gap-1 font-mono" style={{ color: 'rgba(255,255,255,0.1)' }}>
            Built with <FaHeart size={8} style={{ color: 'var(--accent)' }} /> & Linux
          </p>
        </div>
      </div>
    </footer>
  );
}
