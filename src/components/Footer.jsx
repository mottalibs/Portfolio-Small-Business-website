'use client';
import { useLanguage } from './LanguageProvider';
import { FaFacebookF, FaWhatsapp, FaGithub, FaInstagram, FaHeart, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer({ config = {} }) {
  const { t } = useLanguage();
  const phone = config?.phone || '+880 1XXX-XXXXXX';
  const email = config?.email || 'hello@charmathadigital.com';
  const address = config?.address || 'চারমাথা ডিজিটাল পয়েন্ট';

  const socials = [
    { icon: <FaFacebookF size={13} />, href: config.facebook || '#' },
    { icon: <FaWhatsapp size={13} />, href: `https://wa.me/${config.whatsapp || '8801XXXXXXXXX'}` },
    { icon: <FaInstagram size={13} />, href: config.instagram || '#' },
    { icon: <FaGithub size={13} />, href: config.github || '#' },
  ];

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-14 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-[.9rem] font-bold tracking-[5px] uppercase text-white">CHARMATHA</span>
            <p className="mt-3 text-[.82rem] leading-[1.7] max-w-[280px]" style={{ color: 'var(--muted)' }}>{t.footer_desc}</p>
            <div className="flex gap-2.5 mt-5">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ borderColor: 'var(--glass-border)', background: 'var(--glass)', color: 'var(--muted)' }} onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = 'var(--accent)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'var(--glass)'; e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-[.6rem] tracking-[3px] font-bold mb-4 uppercase" style={{ color: 'var(--muted)' }}>{t.footer_links}</h5>
            {['#about', '#skills', '#services', '#store', '#projects', '#contact'].map(link => (
              <a key={link} href={link} className="block text-[.82rem] py-1 transition-all duration-300 hover:text-[var(--accent)] hover:translate-x-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {link.replace('#', '').charAt(0).toUpperCase() + link.replace('#', '').slice(1)}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h5 className="text-[.6rem] tracking-[3px] font-bold mb-4 uppercase" style={{ color: 'var(--muted)' }}>{t.footer_services}</h5>
            {['Print & Copy', 'Job Apply', 'CV & ID Card', 'Chuktinama', 'Data Entry'].map(s => (
              <a key={s} href="#services" className="block text-[.82rem] py-1 transition-all duration-300 hover:text-[var(--accent)] hover:translate-x-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{s}</a>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-[.6rem] tracking-[3px] font-bold mb-4 uppercase" style={{ color: 'var(--muted)' }}>{t.sec_contact}</h5>
            <div className="flex items-center gap-2 mb-3">
              <FaMapMarkerAlt size={10} style={{ color: 'var(--accent)' }} />
              <span className="text-[.8rem]" style={{ color: 'rgba(255,255,255,0.4)' }}>{address}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <FaEnvelope size={10} style={{ color: 'var(--accent)' }} />
              <span className="text-[.8rem]" style={{ color: 'rgba(255,255,255,0.4)' }}>{email}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={10} style={{ color: 'var(--accent)' }} />
              <span className="text-[.8rem]" style={{ color: 'rgba(255,255,255,0.4)' }}>{phone}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-5 gap-2" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-[.68rem] tracking-[1px]" style={{ color: 'rgba(255,255,255,0.2)' }}>&copy; {new Date().getFullYear()} Charmatha Digital Point.</p>
          <p className="text-[.68rem] tracking-[1px] flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.15)' }}>Built with <FaHeart size={9} style={{ color: 'var(--accent)' }} /> by Mottalib</p>
        </div>
      </div>
    </footer>
  );
}
