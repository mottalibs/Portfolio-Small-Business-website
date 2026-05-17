'use client';
import { useLanguage } from './LanguageProvider';

export default function Footer({ config = {} }) {
  const { t } = useLanguage();
  const email = config?.email || 'mottalib@example.com';

  return (
    <footer className="relative border-t border-[var(--tactical-grey)] py-12" style={{ background: 'var(--bg)' }}>
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        
        <div className="flex flex-col gap-2">
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '2rem', color: 'var(--text)', lineHeight: 1 }}>
            MOTTALIB
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>
            SYS.ADMIN // SECURITY // DEVELOPMENT
          </span>
        </div>

        <div className="flex flex-col items-start md:items-end gap-6">
          <div className="flex gap-4" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', letterSpacing: '1px' }}>
            <a href={config.github || '#'} className="clickable text-[var(--muted)] hover:text-[var(--accent)] transition-colors">[ GITHUB ]</a>
            <a href={config.facebook || '#'} className="clickable text-[var(--muted)] hover:text-[var(--accent)] transition-colors">[ FACEBOOK ]</a>
            <a href={`mailto:${email}`} className="clickable text-[var(--muted)] hover:text-[var(--accent)] transition-colors">[ COMM_LINK ]</a>
          </div>
          
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '1px' }}>
            [ TERMINAL_SESSION_END ] {new Date().getFullYear()} // {t.footer_copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
