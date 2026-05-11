'use client';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';
import AnimatedSection from '@/components/AnimatedSection';
import CountUp from '@/components/CountUp';
import ContactForm from '@/components/ContactForm';
import { DynamicIcon } from '@/lib/icons';
import { FaPrint, FaBriefcase, FaStore, FaCode, FaPlay, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaWhatsapp, FaInstagram, FaGithub, FaArrowRight, FaArrowDown, FaStar, FaQuoteLeft } from 'react-icons/fa';

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

      {/* ===== HERO ===== */}
      <header id="hero" className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-8 max-w-[1200px] mx-auto pt-[140px] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <AnimatedSection>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8" style={{ background: 'rgba(124,255,107,0.06)', border: '1px solid rgba(124,255,107,0.15)' }}>
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" style={{ boxShadow: '0 0 12px rgba(124,255,107,0.5)' }} />
                <span className="text-[.68rem] tracking-[3px] font-semibold uppercase" style={{ color: 'var(--accent)' }}>{t.hero_tag}</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={120}>
              <h1 className="font-display font-black leading-[0.96] tracking-[-0.04em] mb-7" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
                <span className="text-white block">{t.hero_headline_1}</span>
                <span className="gradient-text block">{t.hero_headline_2}</span>
                <span className="text-white block">{t.hero_headline_3}</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={240}>
              <p className="text-[1rem] max-w-[480px] mb-10 leading-[1.85]" style={{ color: 'var(--muted)' }}>{t.hero_desc}</p>
            </AnimatedSection>
            <AnimatedSection delay={360}>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#services" className="btn-primary">{t.hero_btn1} <FaArrowDown size={10} /></a>
                <a href="#contact" className="btn-ghost">{t.hero_btn2}</a>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection className="hidden lg:flex items-center justify-center" delay={200} direction="scale">
            <div className="relative w-full aspect-square flex items-center justify-center max-w-[360px]">
              <div className="visual-ring w-[340px] h-[340px] rounded-full relative" style={{ border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.01)' }}>
                <div className="ring-center absolute inset-0 m-auto w-[140px] h-[140px] rounded-full flex items-center justify-center overflow-hidden border-[3px] z-20" style={{ borderColor: 'var(--accent)', boxShadow: '0 0 60px rgba(124,255,107,0.2)' }}>
                  <Image src="/Me.jpg" alt="Mottalib" width={200} height={200} className="object-cover w-full h-full hover:scale-110 transition-transform duration-700" />
                </div>
                {[{ icon: <FaPrint/>, label: 'Print', pos: 'top-[-30px] left-1/2 -translate-x-1/2' }, { icon: <FaBriefcase/>, label: 'Jobs', pos: 'right-[-30px] top-1/2 -translate-y-1/2' }, { icon: <FaStore/>, label: 'Store', pos: 'bottom-[-30px] left-1/2 -translate-x-1/2' }, { icon: <FaCode/>, label: 'Tech', pos: 'left-[-30px] top-1/2 -translate-y-1/2' }].map((item, i) => (
                  <div key={i} className={`ring-item absolute ${item.pos} w-[60px] h-[60px] rounded-full flex flex-col items-center justify-center text-[.8rem]`} style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.06)', color: 'var(--accent)' }}>
                    {item.icon}
                    <small className="text-[.48rem] tracking-[1.5px] mt-1 uppercase font-bold" style={{ color: 'var(--muted)' }}>{item.label}</small>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
        {/* Stats */}
        <AnimatedSection className="flex flex-wrap gap-10 lg:gap-20 mt-16 pt-10" style={{ borderTop: '1px solid var(--border)' }}>
          {[{ num: statClients, label: t.stat_clients }, { num: statServices, label: t.stat_services }, { num: statYears, label: t.stat_years }].map((stat, i) => (
            <div key={i} className="stat-item pr-8">
              <span className="text-[3rem] lg:text-[3.5rem] font-display font-black tracking-[-0.04em] text-white"><CountUp target={stat.num} /></span>
              <span className="text-[2.5rem] font-black gradient-text">+</span>
              <small className="block text-[.58rem] tracking-[4px] uppercase font-semibold mt-1" style={{ color: 'var(--muted)' }}>{stat.label}</small>
            </div>
          ))}
        </AnimatedSection>
      </header>

      {/* ===== MARQUEE ===== */}
      <div className="relative z-10 py-8" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="marquee-container">
          <div className="marquee-track">
            {[0, 1].map(n => (<span key={n} className="text-[1.2rem] lg:text-[1.5rem] tracking-[5px] uppercase font-bold whitespace-nowrap px-2" style={{ color: 'rgba(255,255,255,0.04)' }}>{marqueeText}{marqueeText}</span>))}
          </div>
        </div>
      </div>

      {/* ===== ABOUT — Compact ===== */}
      <section id="about" className="relative z-10 py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="text-[.68rem] tracking-[5px] font-bold mb-6 uppercase" style={{ color: 'var(--accent)' }}>{t.sec_about}</div>
              <h2 className="font-display font-extrabold leading-[1.05] mb-6 tracking-[-0.02em]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
                <span className="text-white">{t.about_title_1} </span>
                <span className="text-white">{t.about_title_2} </span>
                <span className="gradient-text">{t.about_title_3}</span>
              </h2>
              <p className="leading-[1.85] text-[.92rem] mb-4" style={{ color: 'var(--muted)' }} dangerouslySetInnerHTML={{ __html: t.about_p1 }} />
              <p className="leading-[1.85] text-[.92rem]" style={{ color: 'var(--muted)' }} dangerouslySetInnerHTML={{ __html: t.about_p2 }} />
            </AnimatedSection>
            <AnimatedSection delay={100} direction="right">
              <div className="grid grid-cols-2 gap-3">
                {[{ label: 'NAME', value: 'Mottalib', emoji: '👤' }, { label: 'EDUCATION', value: 'Diploma Eng.', emoji: '🎓' }, { label: 'BUSINESS', value: 'Charmatha Digital', emoji: '🏪' }, { label: 'LOCATION', value: 'Bangladesh', emoji: '📍' }].map(card => (
                  <div key={card.label} className="glass-card px-5 py-5 group">
                    <span className="text-xl mb-2 block group-hover:scale-110 transition-transform duration-300">{card.emoji}</span>
                    <span className="block text-[.55rem] tracking-[2.5px] mb-1 font-bold" style={{ color: 'var(--muted)' }}>{card.label}</span>
                    <span className="font-bold text-[.9rem] text-white tracking-wide">{card.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== SKILLS — Bento Grid ===== */}
      <section id="skills" className="relative z-10 py-20 lg:py-28" style={{ background: 'var(--bg2)' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection><div className="text-[.68rem] tracking-[5px] font-bold mb-5 uppercase text-center" style={{ color: 'var(--accent)' }}>{t.sec_skills}</div></AnimatedSection>
          <AnimatedSection><h2 className="font-display font-extrabold text-center mb-12 tracking-[-0.02em] text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>KEY <span className="gradient-text">{t.skills_accent}</span></h2></AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[160px]">
              {skills.map((skill, idx) => {
                const span = idx === 0 ? 'lg:col-span-2 lg:row-span-2' : idx === 3 ? 'lg:col-span-2' : '';
                return (
                  <div key={skill.id} className={`sk-card group rounded-2xl px-6 py-6 border flex flex-col justify-between ${span}`} style={{ '--sk-color': skill.color || '#7cff6b', background: 'var(--glass)', borderColor: 'var(--glass-border)' }}>
                    <div className="relative z-10 w-[44px] h-[44px] rounded-xl flex items-center justify-center text-[1.1rem] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" style={{ background: 'var(--sk-color)', color: '#000', boxShadow: `0 6px 20px color-mix(in srgb, var(--sk-color) 25%, transparent)` }}>
                      <DynamicIcon name={skill.icon} size={18} />
                    </div>
                    <div className="relative z-10 mt-auto">
                      <h4 className="text-[.72rem] tracking-[2.5px] font-extrabold mb-1 text-white uppercase">{skill.title}</h4>
                      <p className="text-[.82rem] leading-[1.6]" style={{ color: 'var(--muted)' }}>{lang === 'bn' ? skill.desc_bn : skill.desc_en}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== SERVICES — Two Column ===== */}
      <section id="services" className="relative z-10 py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
            <AnimatedSection direction="left" className="lg:sticky lg:top-32 lg:self-start">
              <div className="text-[.68rem] tracking-[5px] font-bold mb-6 uppercase" style={{ color: 'var(--accent)' }}>{t.sec_svc}</div>
              <h2 className="font-display font-extrabold mb-4 tracking-[-0.02em]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
                <span className="text-white">{t.svc_title_1} {t.svc_title_2}</span><br/><span className="gradient-text">{t.svc_title_3}</span>
              </h2>
              <p className="text-[.92rem] leading-[1.85]" style={{ color: 'var(--muted)' }}>{t.svc_sub}</p>
            </AnimatedSection>
            <div>
              {services.map((svc, i) => (
                <AnimatedSection key={svc.id} delay={i * 50}>
                  <div className="svc-row group flex items-center gap-5 sm:gap-7 py-6 cursor-default" style={{ borderBottom: '1px solid var(--border)' }}>
                    <span className="svc-num text-[.8rem] font-display font-black min-w-[32px] transition-all duration-500" style={{ color: 'rgba(255,255,255,0.06)' }}>{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[1.05rem] font-bold mb-1 text-white tracking-tight">{svc.title}</h3>
                      <p className="text-[.85rem] leading-[1.6] truncate sm:whitespace-normal" style={{ color: 'var(--muted)' }}>{lang === 'bn' ? svc.desc_bn : svc.desc_en}</p>
                    </div>
                    <div className="svc-ico w-11 h-11 rounded-xl border flex items-center justify-center text-[.95rem] flex-shrink-0 transition-all duration-500" style={{ borderColor: 'var(--glass-border)', background: 'var(--glass)', color: 'var(--accent)' }}>
                      <DynamicIcon name={svc.icon} size={16} />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== STORE — Horizontal Scroll on Mobile ===== */}
      <section id="store" className="relative z-10 py-20 lg:py-28" style={{ background: 'var(--bg2)' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection><div className="text-[.68rem] tracking-[5px] font-bold mb-5 text-center uppercase" style={{ color: 'var(--accent)' }}>{t.sec_store}</div></AnimatedSection>
          <AnimatedSection><h2 className="font-display font-extrabold text-center mb-4 tracking-[-0.02em]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}><span className="text-white">{t.store_title_1} </span><span className="gradient-text">{t.store_title_2}</span></h2></AnimatedSection>
          <AnimatedSection><p className="text-center max-w-[480px] mx-auto mb-12 text-[.92rem] leading-[1.85]" style={{ color: 'var(--muted)' }}>{t.store_sub}</p></AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {storeItems.map(item => (
                <div key={item.id} className="glass-card group text-center px-5 py-8">
                  <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center text-xl mx-auto mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" style={{ color: item.color, background: `color-mix(in srgb, ${item.color} 8%, transparent)`, border: '1px solid var(--glass-border)', boxShadow: `0 6px 18px color-mix(in srgb, ${item.color} 10%, transparent)` }}>
                    <DynamicIcon name={item.icon} size={22} />
                  </div>
                  <h4 className="text-[.88rem] font-bold mb-1.5 tracking-wide text-white uppercase">{lang === 'bn' ? item.name_bn : item.name}</h4>
                  <p className="text-[.8rem] leading-[1.6]" style={{ color: 'var(--muted)' }}>{lang === 'bn' ? item.desc_bn : item.desc_en}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="relative z-10 py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection><div className="text-[.68rem] tracking-[5px] font-bold mb-6 uppercase" style={{ color: 'var(--accent)' }}>{t.sec_proj}</div></AnimatedSection>
          <AnimatedSection><h2 className="font-display font-extrabold mb-4 tracking-[-0.02em]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}><span className="text-white">{t.proj_title_1} </span><span className="gradient-text">{t.proj_title_2}</span></h2></AnimatedSection>
          <AnimatedSection><p className="max-w-[480px] mb-12 text-[.92rem] leading-[1.85]" style={{ color: 'var(--muted)' }}>{t.proj_sub}</p></AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map(proj => {
                const statusLabel = proj.status === 'current' ? (lang === 'bn' ? 'বর্তমান' : 'CURRENT') : proj.status === 'web' ? 'WEB' : (lang === 'bn' ? 'শীঘ্রই আসছে' : 'COMING SOON');
                return (
                  <div key={proj.id} className={`glass-card group ${proj.status === 'coming_soon' ? 'opacity-40' : ''}`}>
                    <div className="relative h-[160px] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(160deg, var(--bg) 0%, var(--bg2) 100%)' }}>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700" style={{ background: 'radial-gradient(circle at center, rgba(124,255,107,0.06), transparent 70%)' }} />
                      <DynamicIcon name={proj.icon} size={44} className="transition-all duration-700 group-hover:scale-125" style={{ color: 'rgba(124,255,107,0.25)' }} />
                    </div>
                    <div className="p-6" style={{ borderTop: '1px solid var(--border)' }}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${proj.status === 'coming_soon' ? 'bg-gray-600' : 'animate-pulse'}`} style={{ background: proj.status !== 'coming_soon' ? 'var(--accent)' : undefined, boxShadow: proj.status !== 'coming_soon' ? '0 0 8px rgba(124,255,107,0.5)' : undefined }} />
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

      {/* ===== CTA BANNER ===== */}
      <section className="relative z-10 cta-banner py-20 lg:py-28" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[640px] mx-auto px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection><h2 className="font-display font-extrabold mb-5 tracking-[-0.02em] text-white" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>{t.cta_title}</h2></AnimatedSection>
          <AnimatedSection delay={80}><p className="text-[.95rem] mb-10 max-w-[440px] mx-auto leading-[1.85]" style={{ color: 'var(--muted)' }}>{t.cta_desc}</p></AnimatedSection>
          <AnimatedSection delay={160}><a href="#contact" className="btn-primary animate-glow-pulse">{t.cta_btn} <FaArrowRight size={11} /></a></AnimatedSection>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="relative z-10 py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection><div className="text-[.68rem] tracking-[5px] font-bold mb-5 text-center uppercase" style={{ color: 'var(--accent)' }}>{t.sec_contact}</div></AnimatedSection>
          <AnimatedSection><h2 className="font-display font-extrabold text-center mb-12 tracking-[-0.02em]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}><span className="text-white">{t.contact_title} </span><span className="gradient-text">{t.contact_accent}</span></h2></AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
            <AnimatedSection direction="left">
              <p className="mb-8 leading-[1.85] text-[.92rem]" style={{ color: 'var(--muted)' }}>{t.ct_desc}</p>
              {[{ icon: <FaMapMarkerAlt/>, label: 'ADDRESS', value: address }, { icon: <FaEnvelope/>, label: 'EMAIL', value: email }, { icon: <FaPhoneAlt/>, label: 'PHONE', value: phone }].map((item, i) => (
                <div key={i} className="group flex gap-4 items-center mb-4 p-3 rounded-xl transition-all duration-400 hover:bg-white/[0.02]">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-base flex-shrink-0 transition-all duration-500 group-hover:scale-110" style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', color: 'var(--accent)' }}>{item.icon}</div>
                  <div>
                    <small className="block text-[.55rem] tracking-[2.5px] font-bold mb-0.5" style={{ color: 'var(--muted)' }}>{item.label}</small>
                    <span className="font-semibold text-[.88rem] text-white">{item.value}</span>
                  </div>
                </div>
              ))}
              <div className="flex gap-3 mt-6 px-3">
                {[{ icon: <FaFacebookF size={12}/>, href: config?.facebook || '#' }, { icon: <FaWhatsapp size={12}/>, href: `https://wa.me/${config?.whatsapp || '8801XXXXXXXXX'}` }, { icon: <FaInstagram size={12}/>, href: config?.instagram || '#' }, { icon: <FaGithub size={12}/>, href: config?.github || '#' }].map((s, i) => (
                  <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-400 hover:scale-110" style={{ borderColor: 'var(--glass-border)', background: 'var(--glass)', color: 'var(--muted)' }} onMouseEnter={e=>{e.currentTarget.style.background='var(--accent)';e.currentTarget.style.color='#000';e.currentTarget.style.borderColor='var(--accent)';e.currentTarget.style.boxShadow='0 0 20px rgba(124,255,107,0.2)'}} onMouseLeave={e=>{e.currentTarget.style.background='var(--glass)';e.currentTarget.style.color='var(--muted)';e.currentTarget.style.borderColor='var(--glass-border)';e.currentTarget.style.boxShadow='none'}}>{s.icon}</a>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100} direction="right">
              <div className="glass-card border-glow p-7 lg:p-9 relative overflow-hidden" style={{ borderRadius: '24px' }}>
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(124,255,107,0.04)' }} />
                <div className="relative z-10"><ContactForm /></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
