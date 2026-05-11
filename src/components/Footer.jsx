'use client';
import { useLanguage } from './LanguageProvider';
import { FaFacebookF, FaWhatsapp, FaGithub, FaInstagram, FaArrowUp } from 'react-icons/fa';

export default function Footer({ config = {} }) {
  const { t } = useLanguage();

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <span className="font-display text-[1rem] font-bold tracking-[5px] uppercase">CHARMATHA</span>
            <p className="mt-4 text-sm leading-relaxed max-w-[360px]" style={{ color: 'var(--muted)' }}>
              {t.footer_desc}
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: <FaFacebookF size={13} />, href: config.facebook || '#' },
                { icon: <FaWhatsapp size={13} />, href: `https://wa.me/${config.whatsapp || '8801XXXXXXXXX'}` },
                { icon: <FaInstagram size={13} />, href: config.instagram || '#' },
                { icon: <FaGithub size={13} />, href: config.github || '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener"
                  className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ borderColor: 'var(--glass-border)', background: 'var(--glass)', color: 'var(--muted)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--glass)'; e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-[.65rem] tracking-[3px] font-bold mb-5 uppercase" style={{ color: 'var(--muted)' }}>
              {t.footer_links}
            </h5>
            {['#about', '#skills', '#services', '#store', '#projects'].map(link => (
              <a
                key={link}
                href={link}
                className="block text-sm py-1.5 transition-all duration-300 hover:text-[var(--accent)] hover:translate-x-1"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {link.replace('#', '').charAt(0).toUpperCase() + link.replace('#', '').slice(1)}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h5 className="text-[.65rem] tracking-[3px] font-bold mb-5 uppercase" style={{ color: 'var(--muted)' }}>
              {t.footer_services}
            </h5>
            {['Print & Copy', 'Job Apply', 'CV & ID Card', 'Chuktinama', 'Data Entry'].map(s => (
              <a
                key={s}
                href="#services"
                className="block text-sm py-1.5 transition-all duration-300 hover:text-[var(--accent)] hover:translate-x-1"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center py-6 gap-3"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-[.72rem] tracking-[1px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
            &copy; {new Date().getFullYear()} Charmatha Digital Point. All rights reserved.
          </p>
          <p className="text-[.72rem] tracking-[1px]" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Built with ❤️ by Mottalib
          </p>
        </div>
      </div>
    </footer>
  );
}
