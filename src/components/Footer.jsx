'use client';
import { useLanguage } from './LanguageProvider';
import { FaFacebookF, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer({ config = {} }) {
  const { t } = useLanguage();
  const email = config?.email || 'mottalib@example.com';

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'var(--accent)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#12141D" strokeWidth="3" strokeLinecap="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex gap-6">
            {[
              { href: '#services', label: t.nav_services },
              { href: '#projects', label: t.nav_works },
              { href: '#contact', label: t.nav_contact },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-[.75rem] font-medium tracking-[1px] transition-all duration-300 hover:text-[var(--accent)]"
                style={{ color: 'var(--muted)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="social-row">
            {[
              { icon: <FaFacebookF size={12} />, href: config.facebook || '#' },
              { icon: <FaGithub size={12} />, href: config.github || '#' },
              { icon: <FaEnvelope size={12} />, href: `mailto:${email}` },
            ].map((s, i) => (
              <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
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
