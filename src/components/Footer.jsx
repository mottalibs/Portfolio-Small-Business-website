'use client';
import { useLanguage } from './LanguageProvider';
import { FaFacebookF, FaGithub, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';

export default function Footer({ config = {} }) {
  const { t } = useLanguage();
  const email = config?.email || 'mottalib@example.com';

  return (
    <footer className="relative" style={{ background: 'var(--bg)' }}>
      {/* Gradient top border */}
      <div className="w-full h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, var(--accent), var(--accent-2), transparent)', opacity: 0.4 }} />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12" style={{ borderBottom: '1px solid var(--border)' }}>
          {/* Brand */}
          <div>
            <a href="#" className="font-display text-[1rem] font-bold tracking-[2px] uppercase inline-block mb-4" style={{ color: 'var(--text)' }}>
              MOTTALIB <span className="gradient-text" style={{ fontWeight: 900 }}>TECH</span>
            </a>
            <p className="text-[.85rem] leading-[1.8] max-w-[280px]" style={{ color: 'var(--muted)' }}>
              {t.footer_tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[.65rem] tracking-[3px] uppercase font-bold mb-5" style={{ color: 'var(--accent)' }}>Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: '#services', label: t.nav_services },
                { href: '#projects', label: t.nav_works },
                { href: '#about', label: 'About' },
                { href: '#contact', label: t.nav_contact },
              ].map(l => (
                <a key={l.href} href={l.href}
                  className="text-[.82rem] font-medium hover:text-[var(--accent)] hover:translate-x-1 transition-all inline-block"
                  style={{ color: 'var(--muted)' }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[.65rem] tracking-[3px] uppercase font-bold mb-5" style={{ color: 'var(--accent)' }}>Connect</h4>
            <div className="social-row mb-6">
              {[
                { icon: <FaFacebookF size={13} />, href: config.facebook || '#' },
                { icon: <FaGithub size={13} />, href: config.github || '#' },
                { icon: <FaEnvelope size={13} />, href: `mailto:${email}` },
              ].map((s, i) => (
                <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener">{s.icon}</a>
              ))}
            </div>
            <p className="text-[.8rem]" style={{ color: 'var(--muted)' }}>{email}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-3">
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
