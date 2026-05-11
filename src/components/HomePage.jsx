'use client';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';
import AnimatedSection from '@/components/AnimatedSection';
import CountUp from '@/components/CountUp';
import ContactForm from '@/components/ContactForm';
import { DynamicIcon } from '@/lib/icons';
import { FaPrint, FaBriefcase, FaStore, FaCode, FaPlay, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaWhatsapp, FaInstagram, FaGithub, FaArrowRight } from 'react-icons/fa';

export default function HomePage({ services, skills, storeItems, projects, config }) {
  const { lang, t } = useLanguage();
  const phone = config?.phone || '+880 1XXX-XXXXXX';
  const email = config?.email || 'hello@charmathadigital.com';
  const address = config?.address || 'চারমাথা ডিজিটাল পয়েন্ট';
  const statClients = parseInt(config?.stat_clients) || 50;
  const statServices = parseInt(config?.stat_services) || 10;
  const statYears = parseInt(config?.stat_years) || 3;
  const marqueeText = t.marquee_items || '';

  return (
    <div className="relative overflow-hidden w-full">
      {/* Gradient Mesh Background */}
      <div className="gradient-mesh">
        <div className="orb" />
        <div className="orb" />
        <div className="orb" />
      </div>

      {/* ===== HERO ===== */}
      <header id="hero" className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-8 max-w-[1200px] mx-auto" style={{ paddingTop: '140px', paddingBottom: '80px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <AnimatedSection>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-10" style={{ background: 'var(--glass)', borderColor: 'var(--glass-border)' }}>
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span className="text-[.7rem] tracking-[3px] font-semibold uppercase" style={{ color: 'var(--accent)' }}>{t.hero_tag}</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h1 className="font-display font-black leading-[1.02] tracking-[-0.03em] mb-8" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
                <span className="text-white">{t.hero_headline_1}</span><br />
                <span className="gradient-text">{t.hero_headline_2}</span><br />
                <span className="text-white">{t.hero_headline_3}</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-[1.05rem] max-w-[520px] mb-10 leading-[1.8]" style={{ color: 'var(--muted)' }}>{t.hero_desc}</p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="btn-primary">{t.hero_btn1} <FaPlay size={9} /></a>
                <a href="#contact" className="btn-ghost">{t.hero_btn2}</a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Visual Ring */}
          <AnimatedSection className="hidden lg:flex items-center justify-center" delay={200} direction="scale">
            <div className="relative w-full aspect-square flex items-center justify-center max-w-[400px]">
              <div className="visual-ring w-[380px] h-[380px] border rounded-full relative" style={{ borderColor: 'var(--glass-border)', background: 'var(--glass)' }}>
                <div className="ring-center absolute inset-0 m-auto w-[160px] h-[160px] rounded-full flex items-center justify-center overflow-hidden border-[3px] z-20" style={{ borderColor: 'var(--accent)', boxShadow: '0 0 50px rgba(124,255,107,0.3)' }}>
                  <Image src="/Me.jpg" alt="Mottalib" width={200} height={200} className="object-cover w-full h-full hover:scale-110 transition-transform duration-700" />
                </div>
                {[
                  { icon: <FaPrint />, label: 'Print', pos: 'top-[-35px] left-1/2 -translate-x-1/2' },
                  { icon: <FaBriefcase />, label: 'Jobs', pos: 'right-[-35px] top-1/2 -translate-y-1/2' },
                  { icon: <FaStore />, label: 'Store', pos: 'bottom-[-35px] left-1/2 -translate-x-1/2' },
                  { icon: <FaCode />, label: 'Tech', pos: 'left-[-35px] top-1/2 -translate-y-1/2' },
                ].map((item, i) => (
                  <div key={i} className={`ring-item absolute ${item.pos} w-[70px] h-[70px] rounded-full flex flex-col items-center justify-center text-[.9rem]`} style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', color: 'var(--accent)' }}>
                    {item.icon}
                    <small className="text-[.55rem] tracking-[1.5px] mt-1 uppercase font-bold" style={{ color: 'var(--muted)' }}>{item.label}</small>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Bar */}
        <AnimatedSection className="flex flex-wrap gap-10 lg:gap-20 mt-20 pt-10" style={{ borderTop: '1px solid var(--border)' }}>
          {[
            { num: statClients, label: t.stat_clients },
            { num: statServices, label: t.stat_services },
            { num: statYears, label: t.stat_years },
          ].map((stat, i) => (
            <div key={i} className="flex items-baseline gap-2 flex-wrap">
              <span className="text-[3rem] lg:text-[3.5rem] font-display font-black tracking-tighter text-white"><CountUp target={stat.num} /></span>
              <span className="text-[3rem] font-black" style={{ color: 'var(--accent)' }}>+</span>
              <small className="block w-full text-[.65rem] tracking-[3px] uppercase font-semibold" style={{ color: 'var(--muted)' }}>{stat.label}</small>
            </div>
          ))}
        </AnimatedSection>
      </header>

      {/* ===== MARQUEE ===== */}
      <div className="relative z-10 py-8" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="marquee-container">
          <div className="marquee-track">
            {[0, 1].map(n => (
              <span key={n} className="text-[1rem] lg:text-[1.2rem] tracking-[3px] uppercase font-semibold whitespace-nowrap px-2" style={{ color: 'rgba(255,255,255,0.15)' }}>
                {marqueeText}{marqueeText}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== ABOUT ===== */}
      <section id="about" className="relative z-10 py-[120px] lg:py-[160px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-[.7rem] tracking-[4px] font-bold mb-6 uppercase" style={{ color: 'var(--accent)' }}>{t.sec_about}</div>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start mt-4">
            <AnimatedSection direction="left">
              <div className="mb-8 w-36 h-36 rounded-2xl overflow-hidden border-2 relative" style={{ borderColor: 'rgba(124,255,107,0.3)', boxShadow: '0 0 30px rgba(124,255,107,0.1)' }}>
                <Image src="/Me.jpg" alt="Mottalib" fill sizes="144px" className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <h2 className="font-display font-extrabold leading-[1.08] mb-6 tracking-tight" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
                <span className="text-white">{t.about_title_1}</span><br />
                <span className="text-white">{t.about_title_2}</span><br />
                <span className="gradient-text">{t.about_title_3}</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={150} direction="right">
              <p className="mb-5 leading-relaxed text-[1rem]" style={{ color: 'var(--muted)' }} dangerouslySetInnerHTML={{ __html: t.about_p1 }} />
              <p className="mb-10 leading-relaxed text-[1rem]" style={{ color: 'var(--muted)' }} dangerouslySetInnerHTML={{ __html: t.about_p2 }} />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'NAME', value: 'Mottalib' },
                  { label: 'EDUCATION', value: 'Diploma Eng.' },
                  { label: 'BUSINESS', value: 'Charmatha Digital' },
                  { label: 'LOCATION', value: 'Bangladesh' },
                ].map(card => (
                  <div key={card.label} className="glass-card px-5 py-4">
                    <span className="block text-[.6rem] tracking-[2px] mb-1 font-bold" style={{ color: 'var(--muted)' }}>{card.label}</span>
                    <span className="font-bold text-[.95rem] text-white tracking-wide">{card.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== SKILLS ===== */}
      <section id="skills" className="relative z-10 py-[120px] lg:py-[160px]" style={{ background: 'var(--bg2)' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-[.7rem] tracking-[4px] font-bold mb-4 uppercase text-center" style={{ color: 'var(--accent)' }}>{t.sec_skills}</div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-display font-extrabold text-center mb-14 tracking-tight text-white uppercase" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
              KEY <span className="gradient-text">{t.skills_accent}</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {skills.map(skill => (
                <div key={skill.id} className="sk-card group rounded-2xl px-7 py-9 border transition-all duration-500" style={{ '--sk-color': skill.color || '#7cff6b', background: 'var(--glass)', borderColor: 'var(--glass-border)' }}>
                  <div className="absolute top-8 left-7 w-14 h-14 rounded-full blur-[25px] opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ background: 'var(--sk-color)' }} />
                  <div className="relative z-10 w-[52px] h-[52px] rounded-xl flex items-center justify-center text-[1.3rem] mb-5 shadow-lg transition-transform duration-500 group-hover:scale-110" style={{ background: 'var(--sk-color)', color: '#000' }}>
                    <DynamicIcon name={skill.icon} size={22} />
                  </div>
                  <h4 className="relative z-10 text-[.82rem] tracking-[2px] font-extrabold mb-2 text-white uppercase">{skill.title}</h4>
                  <p className="relative z-10 text-[.9rem] leading-relaxed" style={{ color: 'var(--muted)' }}>{lang === 'bn' ? skill.desc_bn : skill.desc_en}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== SERVICES ===== */}
      <section id="services" className="relative z-10 py-[120px] lg:py-[160px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-[.7rem] tracking-[4px] font-bold mb-6 uppercase" style={{ color: 'var(--accent)' }}>{t.sec_svc}</div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-display font-extrabold mb-4 tracking-tight" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
              <span className="text-white">{t.svc_title_1} {t.svc_title_2}</span> <span className="gradient-text">{t.svc_title_3}</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="max-w-[550px] mb-14 text-[1rem] leading-relaxed" style={{ color: 'var(--muted)' }}>{t.svc_sub}</p>
          </AnimatedSection>
          <div className="max-w-[900px]">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.id} delay={i * 60}>
                <div className="svc-row group flex items-center gap-6 sm:gap-8 py-7 cursor-default rounded-xl" style={{ borderBottom: '1px solid var(--border)' }}>
                  <span className="svc-num text-[.9rem] font-display font-black min-w-[36px]" style={{ color: 'rgba(255,255,255,0.15)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex-1">
                    <h3 className="text-[1.2rem] font-bold mb-1 text-white tracking-tight">{svc.title}</h3>
                    <p className="text-[.9rem]" style={{ color: 'var(--muted)' }}>{lang === 'bn' ? svc.desc_bn : svc.desc_en}</p>
                  </div>
                  <div className="svc-ico w-12 h-12 rounded-xl border flex items-center justify-center text-[1.1rem] flex-shrink-0 transition-all duration-300" style={{ borderColor: 'var(--glass-border)', background: 'var(--glass)', color: 'var(--accent)' }}>
                    <DynamicIcon name={svc.icon} size={20} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== STORE ===== */}
      <section id="store" className="relative z-10 py-[120px] lg:py-[160px]" style={{ background: 'var(--bg2)' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-[.7rem] tracking-[4px] font-bold mb-4 text-center uppercase" style={{ color: 'var(--accent)' }}>{t.sec_store}</div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-display font-extrabold text-center mb-4 tracking-tight" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
              <span className="text-white">{t.store_title_1}</span> <span className="gradient-text">{t.store_title_2}</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="text-center max-w-[550px] mx-auto mb-14 text-[1rem] leading-relaxed" style={{ color: 'var(--muted)' }}>{t.store_sub}</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {storeItems.map(item => (
                <div key={item.id} className="glass-card group text-center px-6 py-9">
                  <div className="w-[60px] h-[60px] rounded-xl flex items-center justify-center text-2xl mx-auto mb-5 border transition-transform duration-500 group-hover:scale-110" style={{ color: item.color, background: `color-mix(in srgb, ${item.color} 8%, transparent)`, borderColor: 'var(--glass-border)' }}>
                    <DynamicIcon name={item.icon} size={26} />
                  </div>
                  <h4 className="text-[1rem] font-bold mb-2 tracking-wide text-white uppercase">{lang === 'bn' ? item.name_bn : item.name}</h4>
                  <p className="text-[.88rem]" style={{ color: 'var(--muted)' }}>{lang === 'bn' ? item.desc_bn : item.desc_en}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="relative z-10 py-[120px] lg:py-[160px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-[.7rem] tracking-[4px] font-bold mb-6 uppercase" style={{ color: 'var(--accent)' }}>{t.sec_proj}</div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-display font-extrabold mb-4 tracking-tight" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
              <span className="text-white">{t.proj_title_1}</span> <span className="gradient-text">{t.proj_title_2}</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="max-w-[550px] mb-14 text-[1rem] leading-relaxed" style={{ color: 'var(--muted)' }}>{t.proj_sub}</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(proj => {
                const statusLabel = proj.status === 'current' ? (lang === 'bn' ? 'বর্তমান' : 'CURRENT') : proj.status === 'web' ? 'WEB' : (lang === 'bn' ? 'শীঘ্রই আসছে' : 'COMING SOON');
                return (
                  <div key={proj.id} className={`glass-card group overflow-hidden ${proj.status === 'coming_soon' ? 'opacity-50' : ''}`}>
                    <div className="relative h-[200px] flex items-center justify-center text-5xl overflow-hidden" style={{ background: 'var(--bg)' }}>
                      <div className="absolute inset-0 transition-colors duration-500" style={{ background: 'rgba(124,255,107,0.03)' }} />
                      <DynamicIcon name={proj.icon} size={50} className="transition-all duration-500 group-hover:scale-110" style={{ color: 'rgba(124,255,107,0.5)' }} />
                    </div>
                    <div className="p-7" style={{ borderTop: '1px solid var(--border)' }}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${proj.status === 'coming_soon' ? 'bg-gray-500' : 'animate-pulse'}`} style={{ background: proj.status !== 'coming_soon' ? 'var(--accent)' : undefined }} />
                        <span className="text-[.6rem] tracking-[2px] font-bold uppercase" style={{ color: 'var(--accent)' }}>{statusLabel}</span>
                      </div>
                      <h4 className="text-[1.15rem] font-bold mb-2 text-white tracking-tight">{proj.title}</h4>
                      <p className="text-[.9rem] mb-5 leading-relaxed" style={{ color: 'var(--muted)' }}>{lang === 'bn' ? proj.desc_bn : proj.desc_en}</p>
                      <div className="flex flex-wrap gap-2">
                        {(proj.tags || []).map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-md text-[.65rem] font-bold tracking-[1px] uppercase" style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', color: 'var(--muted)' }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative z-10 cta-banner py-[100px]" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-display font-extrabold mb-5 tracking-tight text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{t.cta_title}</h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-[1.05rem] mb-10 max-w-[500px] mx-auto leading-relaxed" style={{ color: 'var(--muted)' }}>{t.cta_desc}</p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <a href="#contact" className="btn-primary animate-glow-pulse">{t.cta_btn} <FaArrowRight size={12} /></a>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="relative z-10 py-[120px] lg:py-[160px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-[.7rem] tracking-[4px] font-bold mb-4 text-center uppercase" style={{ color: 'var(--accent)' }}>{t.sec_contact}</div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-display font-extrabold text-center mb-14 tracking-tight" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
              <span className="text-white">{t.contact_title}</span> <span className="gradient-text">{t.contact_accent}</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
            <AnimatedSection direction="left">
              <p className="mb-10 leading-relaxed text-[1rem]" style={{ color: 'var(--muted)' }}>{t.ct_desc}</p>
              {[
                { icon: <FaMapMarkerAlt />, label: 'ADDRESS', value: address },
                { icon: <FaEnvelope />, label: 'EMAIL', value: email },
                { icon: <FaPhoneAlt />, label: 'PHONE', value: phone },
              ].map((item, i) => (
                <div key={i} className="group flex gap-4 items-center mb-5 p-4 rounded-xl transition-all duration-300 hover:bg-white/[0.02]">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300 group-hover:shadow-lg" style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', color: 'var(--accent)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <small className="block text-[.6rem] tracking-[2px] font-bold mb-0.5" style={{ color: 'var(--muted)' }}>{item.label}</small>
                    <span className="font-semibold text-[.95rem] text-white">{item.value}</span>
                  </div>
                </div>
              ))}
              <div className="flex gap-3 mt-8 px-4">
                {[
                  { icon: <FaFacebookF />, href: config?.facebook || '#' },
                  { icon: <FaWhatsapp />, href: `https://wa.me/${config?.whatsapp || '8801XXXXXXXXX'}` },
                  { icon: <FaInstagram />, href: config?.instagram || '#' },
                  { icon: <FaGithub />, href: config?.github || '#' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="w-10 h-10 border rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ borderColor: 'var(--glass-border)', background: 'var(--glass)', color: 'var(--muted)' }} onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = 'var(--accent)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'var(--glass)'; e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150} direction="right">
              <div className="glass-card p-7 lg:p-9 relative overflow-hidden" style={{ borderRadius: '24px' }}>
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full blur-[80px] pointer-events-none" style={{ background: 'rgba(124,255,107,0.06)' }} />
                <div className="relative z-10">
                  <ContactForm />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
