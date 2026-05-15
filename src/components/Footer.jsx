'use client';
import { useLanguage } from './LanguageProvider';
import { FaFacebookF, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer({ config = {} }) {
  const { t } = useLanguage();
  const email = config?.email || 'mottalib@example.com';

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8" style={{ borderBottom: '1px solid var(--border)' }}>
          <a href="#" className="font-display text-[.85rem] font-bold tracking-[2px] uppercase" style={{ color: 'var(--text)' }}>
            MOTTALIB <span style={{ fontWeight: 800 }}>TECH</span>
          </a>
          <div className="flex gap-6">
            {[
              { href: '#services', label: t.nav_services },
              { href: '#projects', label: t.nav_works },
              { href: '#contact', label: t.nav_contact },
            ].map(l => (
              <a key={l.href} href={l.href} className="text-[.75rem] font-medium tracking-[1px] hover:text-[var(--accent)] transition-all" style={{ color: 'var(--muted)' }}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="social-row">
            {[
              { icon: <FaFacebookF size={12} />, href: config.facebook || '#' },
              { icon: <FaGithub size={12} />, href: config.github || '#' },
              { icon: <FaEnvelope size={12} />, href: `mailto:${email}` },
            ].map((s, i) => (
              <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener">{s.icon}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-2">
          <p className="text-[.68rem] tracking-[1px]" style={{ color: 'rgba(255,255,255,0.15)' }}>
            &copy; {new Date().getFullYear()} Mottalib. All rights reserved.
          </p>
          <p className="text-[.68rem] tracking-[1px] flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.1)' }}>
            {t.footer_copyright} <FaHeart size={8} style={{ color: 'var(--accent)' }} />
          </p>
        </div>
      </div>
    </footer>
  );
}
