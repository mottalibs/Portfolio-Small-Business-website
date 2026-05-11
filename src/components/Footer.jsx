'use client';
import { useLanguage } from './LanguageProvider';
import { FaFacebookF, FaWhatsapp, FaGithub } from 'react-icons/fa';

export default function Footer({ config = {} }) {
  const { t } = useLanguage();

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }} className="pt-16">
      <div className="max-w-[1240px] mx-auto px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
          {/* Brand */}
          <div>
            <span className="text-[1.1rem] font-black tracking-[4px]">MOTTALIB</span>
            <p className="mt-3 text-sm max-w-[300px]" style={{ color: 'var(--muted)' }}>
              {t.footer_desc}
            </p>
          </div>
          {/* Links */}
          <div>
            <h5 className="text-[.7rem] tracking-[3px] font-bold mb-4" style={{ color: 'var(--muted)' }}>
              {t.footer_links}
            </h5>
            {['#about', '#services', '#store', '#projects'].map(link => (
              <a
                key={link}
                href={link}
                className="block text-sm py-1 transition-all duration-300 hover:text-[var(--accent)] hover:pl-1"
                style={{ color: 'var(--muted)' }}
              >
                {link.replace('#', '').charAt(0).toUpperCase() + link.replace('#', '').slice(1)}
              </a>
            ))}
          </div>
          {/* Services */}
          <div>
            <h5 className="text-[.7rem] tracking-[3px] font-bold mb-4" style={{ color: 'var(--muted)' }}>
              {t.footer_services}
            </h5>
            {['Print & Copy', 'Job Apply', 'CV & ID Card', 'Chuktinama'].map(s => (
              <a
                key={s}
                href="#services"
                className="block text-sm py-1 transition-all duration-300 hover:text-[var(--accent)] hover:pl-1"
                style={{ color: 'var(--muted)' }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center py-6"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-[.78rem]" style={{ color: 'var(--muted)' }}>
            &copy; {new Date().getFullYear()} Mottalib — Charmatha Digital Point
          </p>
          <div className="flex gap-4 mt-3 sm:mt-0">
            <a href={config.facebook || '#'} aria-label="Facebook" className="transition-colors duration-300 hover:text-[var(--accent)]" style={{ color: 'var(--muted)' }}>
              <FaFacebookF />
            </a>
            <a href={`https://wa.me/${config.whatsapp || '8801XXXXXXXXX'}`} target="_blank" rel="noopener" aria-label="WhatsApp" className="transition-colors duration-300 hover:text-[var(--accent)]" style={{ color: 'var(--muted)' }}>
              <FaWhatsapp />
            </a>
            <a href={config.github || '#'} aria-label="GitHub" className="transition-colors duration-300 hover:text-[var(--accent)]" style={{ color: 'var(--muted)' }}>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
