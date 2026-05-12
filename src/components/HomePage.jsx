'use client';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';
import AnimatedSection from '@/components/AnimatedSection';
import CountUp from '@/components/CountUp';
import ContactForm from '@/components/ContactForm';
import { DynamicIcon } from '@/lib/icons';
import { FaPrint, FaBriefcase, FaStore, FaCode, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaWhatsapp, FaInstagram, FaGithub, FaArrowRight, FaArrowDown } from 'react-icons/fa';

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
      <div className="gradient-mesh"><div className="orb"/><div className="orb"/><div className="orb"/></div>

      {/* ===== HERO — Forward/Slobodian Style: Centered, Massive Text ===== */}
      <header id="hero" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 lg:px-8">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-10" style={{ border: '1px solid rgba(200,164,85,0.2)', background: 'rgba(200,164,85,0.04)' }}>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }} />
            <span className="text-[.65rem] tracking-[4px] font-semibold uppercase" style={{ color: 'var(--accent)' }}>{t.hero_tag}</span>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <h1 className="sec-title mb-8 max-w-[900px]" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
            {t.hero_headline_1}{' '}
            <span className="gradient-text">{t.hero_headline_2}</span>{' '}
            {t.hero_headline_3}
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <p className="text-[1.05rem] max-w-[540px] mx-auto mb-12 leading-[1.9]" style={{ color: 'var(--muted)' }}>{t.hero_desc}</p>
        </AnimatedSection>
        <AnimatedSection delay={450}>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#services" className="btn-primary">{t.hero_btn1} <FaArrowDown size={10} /></a>
            <a href="#contact" className="btn-ghost">{t.hero_btn2}</a>
          </div>
        </AnimatedSection>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-[1px] h-12" style={{ background: 'linear-gradient(to bottom, transparent, var(--accent))' }} />
        </div>
      </header>

      {/* ===== STATS BAR ===== */}
      <div className="relative z-10 py-14 lg:py-20" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-16 lg:gap-28">
          {[{ num: statClients, label: t.stat_clients }, { num: statServices, label: t.stat_services }, { num: statYears, label: t.stat_years }].map((stat, i) => (
            <div key={i} className="stat-item text-center pr-16 lg:pr-28 last:pr-0">
              <span className="text-[3rem] lg:text-[4rem] font-display font-black tracking-[-0.04em] text-white"><CountUp target={stat.num} /></span>
              <span className="text-[2.5rem] font-black" style={{ color: 'var(--accent)' }}>+</span>
              <small className="block text-[.58rem] tracking-[4px] uppercase font-semibold mt-2" style={{ color: 'var(--muted)' }}>{stat.label}</small>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MARQUEE ===== */}
      <div className="relative z-10 py-6">
        <div className="marquee-container">
          <div className="marquee-track">
            {[0, 1].map(n => (<span key={n} className="text-[1.3rem] lg:text-[1.6rem] tracking-[6px] uppercase font-bold whitespace-nowrap px-2" style={{ color: 'rgba(255,255,255,0.03)' }}>{marqueeText}{marqueeText}</span>))}
          </div>
        </div>
      </div>

      {/* ===== ABOUT ===== */}
      <section id="about" className="relative z-10 py-24 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection direction="left">
              <div className="sec-label mb-6">{t.sec_about}</div>
              <h2 className="sec-title mb-8" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                {t.about_title_1} {t.about_title_2}{' '}
                <span className="gradient-text">{t.about_title_3}</span>
              </h2>
              <p className="leading-[1.9] text-[.95rem] mb-4" style={{ color: 'var(--muted)' }} dangerouslySetInnerHTML={{ __html: t.about_p1 }} />
              <p className="leading-[1.9] text-[.95rem]" style={{ color: 'var(--muted)' }} dangerouslySetInnerHTML={{ __html: t.about_p2 }} />
            </AnimatedSection>
            <AnimatedSection delay={100} direction="right">
              <div className="relative">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative" style={{ border: '1px solid var(--glass-border)' }}>
                  <Image src="/Me.jpg" alt="Mottalib" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 40%)' }} />
                </div>
                {/* Floating info cards on the image */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-2">
                  {[{ label: 'FOUNDER', value: 'Mottalib' }, { label: 'EST.', value: '2021' }].map(c => (
                    <div key={c.label} className="px-4 py-3 rounded-xl" style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)' }}>
                      <span className="block text-[.5rem] tracking-[2px] font-bold" style={{ color: 'var(--accent)' }}>{c.label}</span>
                      <span className="font-bold text-[.85rem] text-white">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="animated-line" style={{ background: 'var(--border)' }} />

      {/* ===== SERVICES — Slobodian Numbered Style ===== */}
      <section id="services" className="relative z-10 py-24 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="sec-label mb-8">{t.sec_svc}</div>
            <h2 className="sec-title mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              {t.svc_title_1} {t.svc_title_2} <span className="gradient-text">{t.svc_title_3}</span>
            </h2>
            <p className="max-w-[500px] mb-16 text-[.95rem] leading-[1.9]" style={{ color: 'var(--muted)' }}>{t.svc_sub}</p>
          </AnimatedSection>
          <div className="animated-line mb-2" style={{ background: 'var(--border)' }} />
          {services.map((svc, i) => (
            <AnimatedSection key={svc.id} delay={i * 60}>
              <div className="svc-row group flex items-start gap-6 py-10 cursor-default" style={{ borderBottom: '1px solid var(--border)' }}>
                <span className="svc-num text-[1.1rem] font-display font-light mt-1 min-w-[40px] transition-all duration-500" style={{ color: 'var(--accent)', opacity: 0.5 }}>{String(i + 1).padStart(2, '0')}</span>
                <div className="flex-1">
                  <h3 className="svc-title text-[1.4rem] lg:text-[1.6rem] font-bold mb-3 text-white tracking-tight transition-colors duration-500 uppercase">{svc.title}</h3>
                  <p className="text-[.92rem] leading-[1.8] max-w-[600px]" style={{ color: 'var(--muted)' }}>{lang === 'bn' ? svc.desc_bn : svc.desc_en}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <div className="animated-line" style={{ background: 'var(--border)' }} />

      {/* ===== SKILLS ===== */}
      <section id="skills" className="relative z-10 py-24 lg:py-32" style={{ background: 'var(--bg2)' }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <AnimatedSection><div className="sec-label mb-5 text-center">{t.sec_skills}</div></AnimatedSection>
          <AnimatedSection><h2 className="sec-title text-center mb-14" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>KEY <span className="gradient-text">{t.skills_accent}</span></h2></AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map(skill => (
                <div key={skill.id} className="sk-card group rounded-2xl px-7 py-8 border flex flex-col" style={{ '--sk-color': skill.color || 'var(--accent)', background: 'var(--glass)', borderColor: 'var(--glass-border)' }}>
                  <div className="w-[44px] h-[44px] rounded-xl flex items-center justify-center text-lg mb-6 transition-all duration-500 group-hover:scale-110" style={{ background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid rgba(200,164,85,0.15)' }}>
                    <DynamicIcon name={skill.icon} size={18} />
                  </div>
                  <h4 className="text-[.78rem] tracking-[2px] font-bold mb-2 text-white uppercase">{skill.title}</h4>
                  <p className="text-[.85rem] leading-[1.7]" style={{ color: 'var(--muted)' }}>{lang === 'bn' ? skill.desc_bn : skill.desc_en}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="animated-line" style={{ background: 'var(--border)' }} />

      {/* ===== STORE ===== */}
      <section id="store" className="relative z-10 py-24 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <AnimatedSection><div className="sec-label mb-5 text-center">{t.sec_store}</div></AnimatedSection>
          <AnimatedSection><h2 className="sec-title text-center mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>{t.store_title_1} <span className="gradient-text">{t.store_title_2}</span></h2></AnimatedSection>
          <AnimatedSection><p className="text-center max-w-[480px] mx-auto mb-14 text-[.92rem] leading-[1.85]" style={{ color: 'var(--muted)' }}>{t.store_sub}</p></AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {storeItems.map(item => (
                <div key={item.id} className="glass-card group text-center px-5 py-8">
                  <div className="w-[48px] h-[48px] rounded-xl flex items-center justify-center text-xl mx-auto mb-5 transition-all duration-500 group-hover:scale-110" style={{ color: 'var(--accent)', background: 'var(--accent-dim)', border: '1px solid rgba(200,164,85,0.12)' }}>
                    <DynamicIcon name={item.icon} size={20} />
                  </div>
                  <h4 className="text-[.85rem] font-bold mb-1.5 text-white uppercase tracking-wide">{lang === 'bn' ? item.name_bn : item.name}</h4>
                  <p className="text-[.8rem] leading-[1.6]" style={{ color: 'var(--muted)' }}>{lang === 'bn' ? item.desc_bn : item.desc_en}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="animated-line" style={{ background: 'var(--border)' }} />

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="relative z-10 py-24 lg:py-32" style={{ background: 'var(--bg2)' }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <AnimatedSection><div className="sec-label mb-6">{t.sec_proj}</div></AnimatedSection>
          <AnimatedSection><h2 className="sec-title mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>{t.proj_title_1} <span className="gradient-text">{t.proj_title_2}</span></h2></AnimatedSection>
          <AnimatedSection><p className="max-w-[480px] mb-14 text-[.92rem] leading-[1.85]" style={{ color: 'var(--muted)' }}>{t.proj_sub}</p></AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map(proj => {
                const statusLabel = proj.status === 'current' ? (lang === 'bn' ? 'বর্তমান' : 'CURRENT') : proj.status === 'web' ? 'WEB' : (lang === 'bn' ? 'শীঘ্রই আসছে' : 'COMING SOON');
                return (
                  <div key={proj.id} className={`glass-card group ${proj.status === 'coming_soon' ? 'opacity-40' : ''}`}>
                    <div className="relative h-[160px] flex items-center justify-center overflow-hidden rounded-t-[20px]" style={{ background: 'linear-gradient(160deg, var(--bg) 0%, var(--bg3) 100%)' }}>
                      <DynamicIcon name={proj.icon} size={44} className="transition-all duration-700 group-hover:scale-125" style={{ color: 'rgba(200,164,85,0.2)' }} />
                    </div>
                    <div className="p-6" style={{ borderTop: '1px solid var(--border)' }}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${proj.status === 'coming_soon' ? 'bg-gray-600' : 'animate-pulse'}`} style={{ background: proj.status !== 'coming_soon' ? 'var(--accent)' : undefined }} />
                        <span className="text-[.55rem] tracking-[2.5px] font-bold uppercase" style={{ color: 'var(--accent)' }}>{statusLabel}</span>
                      </div>
                      <h4 className="text-[1rem] font-bold mb-1.5 text-white tracking-tight">{proj.title}</h4>
                      <p className="text-[.82rem] mb-4 leading-[1.6]" style={{ color: 'var(--muted)' }}>{lang === 'bn' ? proj.desc_bn : proj.desc_en}</p>
                      <div className="flex flex-wrap gap-1.5">{(proj.tags || []).map(tag => (<span key={tag} className="tag-chip">{tag}</span>))}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative z-10 cta-banner py-24 lg:py-32" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[600px] mx-auto px-6 text-center relative z-10">
          <AnimatedSection><h2 className="sec-title mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>{t.cta_title}</h2></AnimatedSection>
          <AnimatedSection delay={80}><p className="text-[.95rem] mb-10 leading-[1.85]" style={{ color: 'var(--muted)' }}>{t.cta_desc}</p></AnimatedSection>
          <AnimatedSection delay={160}><a href="#contact" className="btn-primary">{t.cta_btn} <FaArrowRight size={11} /></a></AnimatedSection>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="relative z-10 py-24 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <AnimatedSection><div className="sec-label mb-5 text-center">{t.sec_contact}</div></AnimatedSection>
          <AnimatedSection><h2 className="sec-title text-center mb-14" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>{t.contact_title} <span className="gradient-text">{t.contact_accent}</span></h2></AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection direction="left">
              <p className="mb-10 leading-[1.85] text-[.92rem]" style={{ color: 'var(--muted)' }}>{t.ct_desc}</p>
              {[{ icon: <FaMapMarkerAlt/>, label: 'ADDRESS', value: address }, { icon: <FaEnvelope/>, label: 'EMAIL', value: email }, { icon: <FaPhoneAlt/>, label: 'PHONE', value: phone }].map((item, i) => (
                <div key={i} className="group flex gap-4 items-center mb-5 py-3 transition-all duration-400">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm flex-shrink-0" style={{ background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid rgba(200,164,85,0.12)' }}>{item.icon}</div>
                  <div>
                    <small className="block text-[.55rem] tracking-[2.5px] font-bold mb-0.5" style={{ color: 'var(--muted)' }}>{item.label}</small>
                    <span className="font-semibold text-[.88rem] text-white">{item.value}</span>
                  </div>
                </div>
              ))}
              <div className="flex gap-3 mt-8">
                {[{ icon: <FaFacebookF size={12}/>, href: config?.facebook || '#' }, { icon: <FaWhatsapp size={12}/>, href: `https://wa.me/${config?.whatsapp || '8801XXXXXXXXX'}` }, { icon: <FaInstagram size={12}/>, href: config?.instagram || '#' }, { icon: <FaGithub size={12}/>, href: config?.github || '#' }].map((s, i) => (
                  <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-400 hover:scale-110" style={{ borderColor: 'rgba(200,164,85,0.12)', background: 'var(--accent-dim)', color: 'var(--accent)' }} onMouseEnter={e=>{e.currentTarget.style.background='var(--accent)';e.currentTarget.style.color='#0a0a0a'}} onMouseLeave={e=>{e.currentTarget.style.background='var(--accent-dim)';e.currentTarget.style.color='var(--accent)'}}>{s.icon}</a>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100} direction="right">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
