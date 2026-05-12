'use client';
import { useLanguage } from './LanguageProvider';
import { FaFacebookF, FaWhatsapp, FaGithub, FaInstagram, FaHeart, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer({ config = {} }) {
  const { t } = useLanguage();
  const phone = config?.phone || '+880 1XXX-XXXXXX';
  const email = config?.email || 'hello@charmathadigital.com';
  const address = config?.address || 'চারমাথা ডিজিটাল পয়েন্ট';

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8 pt-16 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-[.85rem] font-bold tracking-[6px] uppercase text-white">CHARMATHA</span>
            <p className="mt-3 text-[.8rem] leading-[1.7] max-w-[260px]" style={{ color: 'var(--muted)' }}>{t.footer_desc}</p>
            <div className="flex gap-2 mt-5">
              {[{ icon: <FaFacebookF size={12}/>, href: config.facebook || '#' }, { icon: <FaWhatsapp size={12}/>, href: `https://wa.me/${config.whatsapp || ''}` }, { icon: <FaInstagram size={12}/>, href: config.instagram || '#' }, { icon: <FaGithub size={12}/>, href: config.github || '#' }].map((s, i) => (
                <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid rgba(200,164,85,0.1)' }} onMouseEnter={e=>{e.currentTarget.style.background='var(--accent)';e.currentTarget.style.color='#0a0a0a'}} onMouseLeave={e=>{e.currentTarget.style.background='var(--accent-dim)';e.currentTarget.style.color='var(--accent)'}}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-[.58rem] tracking-[3px] font-bold mb-4 uppercase" style={{ color: 'var(--accent)' }}>{t.footer_links}</h5>
            {['#about', '#services', '#skills', '#store', '#projects', '#contact'].map(link => (
              <a key={link} href={link} className="block text-[.8rem] py-1 transition-all duration-300 hover:text-[var(--accent)]" style={{ color: 'var(--muted)' }}>
                {link.replace('#', '').charAt(0).toUpperCase() + link.replace('#', '').slice(1)}
              </a>
            ))}
          </div>
          <div>
            <h5 className="text-[.58rem] tracking-[3px] font-bold mb-4 uppercase" style={{ color: 'var(--accent)' }}>{t.footer_services}</h5>
            {['Print & Copy', 'Job Apply', 'CV & ID Card', 'Chuktinama', 'Data Entry'].map(s => (
              <a key={s} href="#services" className="block text-[.8rem] py-1 transition-all duration-300 hover:text-[var(--accent)]" style={{ color: 'var(--muted)' }}>{s}</a>
            ))}
          </div>
          <div>
            <h5 className="text-[.58rem] tracking-[3px] font-bold mb-4 uppercase" style={{ color: 'var(--accent)' }}>{t.sec_contact}</h5>
            <div className="flex items-start gap-2 mb-3"><FaMapMarkerAlt size={9} style={{ color: 'var(--accent)', marginTop: 5 }} /><span className="text-[.78rem] leading-[1.6]" style={{ color: 'var(--muted)' }}>{address}</span></div>
            <div className="flex items-center gap-2 mb-3"><FaEnvelope size={9} style={{ color: 'var(--accent)' }} /><span className="text-[.78rem]" style={{ color: 'var(--muted)' }}>{email}</span></div>
            <div className="flex items-center gap-2"><FaPhoneAlt size={9} style={{ color: 'var(--accent)' }} /><span className="text-[.78rem]" style={{ color: 'var(--muted)' }}>{phone}</span></div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center py-5 gap-2" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-[.65rem] tracking-[1px]" style={{ color: 'rgba(255,255,255,0.15)' }}>&copy; {new Date().getFullYear()} Charmatha Digital Point.</p>
          <p className="text-[.65rem] tracking-[1px] flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.1)' }}>Built with <FaHeart size={8} style={{ color: 'var(--accent)' }} /> by Mottalib</p>
        </div>
      </div>
    </footer>
  );
}
