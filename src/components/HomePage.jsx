'use client';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';
import AnimatedSection from '@/components/AnimatedSection';
import CountUp from '@/components/CountUp';
import ContactForm from '@/components/ContactForm';
import { DynamicIcon } from '@/lib/icons';
import { FaPrint, FaBriefcase, FaStore, FaCode, FaPlay, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';

export default function HomePage({ services, skills, storeItems, projects, config }) {
  const { lang, t } = useLanguage();

  const phone = config?.phone || '+880 1XXX-XXXXXX';
  const email = config?.email || 'hello@charmathadigital.com';
  const address = config?.address || 'চারমাথা ডিজিটাল পয়েন্ট, (আপনার এলাকা)';
  const statClients = parseInt(config?.stat_clients) || 50;
  const statServices = parseInt(config?.stat_services) || 10;
  const statYears = parseInt(config?.stat_years) || 3;

  return (
    <div className="relative overflow-hidden w-full">
      {/* Background Glowing Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-primary/15 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* ===== HERO ===== */}
      <header id="hero" className="relative z-10 min-h-screen px-8 max-w-[1240px] mx-auto flex flex-col justify-center" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          {/* Left */}
          <div>
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[.75rem] tracking-[3px] font-semibold uppercase text-primary">
                  {t.hero_tag}
                </span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h1 className="font-black leading-[1.05] tracking-tighter mb-8 uppercase text-white" style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)' }}>
                MOTTALIB:<br />
                {t.hero_title_2}<br />
                <span className="text-primary drop-shadow-[0_0_25px_rgba(124,255,107,0.4)]">{t.hero_title_3}</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-[1.1rem] max-w-[540px] mb-10 leading-relaxed text-muted">
                {t.hero_desc}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-5">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl text-[.85rem] font-bold tracking-[2px] transition-all duration-300 bg-primary text-black hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(124,255,107,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] uppercase"
                >
                  {t.hero_btn1} <FaPlay size={10} />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl text-[.85rem] font-bold tracking-[2px] transition-all duration-300 bg-white/5 border border-white/10 backdrop-blur-md text-white hover:border-primary hover:text-primary hover:bg-primary/5 uppercase"
                >
                  {t.hero_btn2}
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Glassmorphic Visual Ring */}
          <AnimatedSection className="hidden lg:flex items-center justify-center relative z-10">
            <div className="relative w-full aspect-square flex items-center justify-center">
              <div className="visual-ring w-[420px] h-[420px] border border-white/10 rounded-full relative bg-white/[0.02] backdrop-blur-sm">
                {/* Center Image */}
                <div className="ring-center absolute inset-0 m-auto w-[180px] h-[180px] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(124,255,107,0.5)] overflow-hidden border-[4px] border-primary z-20">
                  <Image src="/Me.jpg" alt="Mottalib" width={200} height={200} className="object-cover w-full h-full hover:scale-110 transition-transform duration-700" />
                </div>
                {/* Orbiting Items */}
                {[
                  { icon: <FaPrint />, label: 'Print', pos: 'top-[-40px] left-1/2 -translate-x-1/2' },
                  { icon: <FaBriefcase />, label: 'Jobs', pos: 'right-[-40px] top-1/2 -translate-y-1/2' },
                  { icon: <FaStore />, label: 'Store', pos: 'bottom-[-40px] left-1/2 -translate-x-1/2' },
                  { icon: <FaCode />, label: 'Tech', pos: 'left-[-40px] top-1/2 -translate-y-1/2' },
                ].map((item, i) => (
                  <div key={i} className={`ring-item absolute ${item.pos} w-[80px] h-[80px] rounded-full flex flex-col items-center justify-center text-[1rem] bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 text-primary shadow-xl`}>
                    {item.icon}
                    <small className="text-[.6rem] tracking-[1.5px] mt-1 text-muted uppercase font-bold">{item.label}</small>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <AnimatedSection className="flex flex-wrap gap-10 lg:gap-20 mt-20 pt-12 border-t border-white/10">
          {[
            { num: statClients, label: t.stat_clients },
            { num: statServices, label: t.stat_services },
            { num: statYears, label: t.stat_years },
          ].map((stat, i) => (
            <div key={i} className="flex items-baseline gap-2 flex-wrap">
              <span className="text-[3.5rem] lg:text-[4rem] font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <CountUp target={stat.num} />
              </span>
              <span className="text-[3.5rem] font-black text-primary">+</span>
              <small className="block w-full text-[.75rem] tracking-[3px] text-muted uppercase font-semibold">{stat.label}</small>
            </div>
          ))}
        </AnimatedSection>
      </header>

      {/* ===== ABOUT ===== */}
      <section id="about" className="relative z-10 py-[120px]">
        <div className="max-w-[1240px] mx-auto px-8">
          <AnimatedSection>
            <div className="text-[.75rem] tracking-[4px] font-bold mb-6 text-primary uppercase">
              {t.sec_about}
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start mt-6">
            <AnimatedSection>
              <div className="mb-8 w-40 h-40 rounded-3xl overflow-hidden border-2 border-primary/50 shadow-[0_0_30px_rgba(124,255,107,0.15)] relative">
                <Image src="/Me.jpg" alt="Mottalib" fill sizes="160px" className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <h2 className="font-extrabold leading-[1.1] mb-6 tracking-tight text-white uppercase" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                {t.about_title_1}<br />
                {t.about_title_2}<br />
                <span className="text-primary">{t.about_title_3}</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <p className="mb-5 leading-relaxed text-[1.05rem] text-muted" dangerouslySetInnerHTML={{ __html: t.about_p1 }} />
              <p className="mb-10 leading-relaxed text-[1.05rem] text-muted" dangerouslySetInnerHTML={{ __html: t.about_p2 }} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'NAME', value: 'Mottalib' },
                  { label: 'EDUCATION', value: 'Diploma Eng.' },
                  { label: 'BUSINESS', value: 'Charmatha Digital' },
                  { label: 'LOCATION', value: 'Bangladesh' },
                ].map(card => (
                  <div key={card.label} className="rounded-2xl px-6 py-5 bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-primary/50 hover:bg-white/[0.05] hover:-translate-y-1">
                    <span className="block text-[.65rem] tracking-[2px] mb-1.5 text-muted font-bold">{card.label}</span>
                    <span className="font-bold text-[1rem] text-white tracking-wide">{card.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="relative z-10 py-[140px] border-y border-white/5 bg-[#0a0a0a]/50 backdrop-blur-3xl">
        <div className="max-w-[1240px] mx-auto px-8">
          <AnimatedSection>
            <div className="text-[.75rem] tracking-[4px] font-bold mb-4 text-primary uppercase text-center">{t.sec_skills}</div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-extrabold text-center mb-16 tracking-tight text-white uppercase" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
              KEY <span className="text-primary drop-shadow-[0_0_15px_rgba(124,255,107,0.3)]">{t.skills_accent}</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map(skill => (
                <div
                  key={skill.id}
                  className="group relative overflow-hidden rounded-2xl px-8 py-10 bg-white/[0.02] backdrop-blur-xl border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04]"
                  style={{ '--sk-color': skill.color || '#7cff6b' }}
                >
                  {/* Glow behind icon */}
                  <div className="absolute top-10 left-8 w-16 h-16 rounded-full blur-[30px] opacity-20 group-hover:opacity-50 transition-opacity duration-500" style={{ background: 'var(--sk-color)' }} />
                  
                  <div className="relative z-10 w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-[1.5rem] mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" style={{ background: 'var(--sk-color)', color: '#000' }}>
                    <DynamicIcon name={skill.icon} size={26} />
                  </div>
                  <h4 className="relative z-10 text-[.9rem] tracking-[2px] font-extrabold mb-3 text-white uppercase">{skill.title}</h4>
                  <p className="relative z-10 text-[.95rem] text-muted leading-relaxed">
                    {lang === 'bn' ? skill.desc_bn : skill.desc_en}
                  </p>
                  
                  {/* Bottom Line */}
                  <div className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" style={{ background: 'var(--sk-color)', boxShadow: '0 0 10px var(--sk-color)' }} />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="relative z-10 py-[140px]">
        <div className="max-w-[1240px] mx-auto px-8">
          <AnimatedSection>
            <div className="text-[.75rem] tracking-[4px] font-bold mb-6 text-primary uppercase">{t.sec_svc}</div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-extrabold mb-6 tracking-tight text-white uppercase" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
              {t.svc_title_1}<br />{t.svc_title_2} <span className="text-primary">{t.svc_title_3}</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="max-w-[600px] mb-16 text-[1.05rem] text-muted leading-relaxed">{t.svc_sub}</p>
          </AnimatedSection>
          <div className="max-w-[1000px]">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.id} delay={i * 80}>
                <div className="group flex items-center gap-6 sm:gap-10 py-8 cursor-default border-b border-white/10 transition-all duration-300 hover:bg-white/[0.02] hover:px-6 rounded-xl">
                  <span className="text-[1rem] font-black min-w-[40px] text-white/20 group-hover:text-primary transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[1.4rem] font-extrabold mb-2 text-white tracking-tight">{svc.title}</h3>
                    <p className="text-[1rem] text-muted">
                      {lang === 'bn' ? svc.desc_bn : svc.desc_en}
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-[1.3rem] flex-shrink-0 bg-white/5 text-primary group-hover:bg-primary group-hover:text-black group-hover:shadow-[0_0_20px_rgba(124,255,107,0.4)] transition-all duration-300">
                    <DynamicIcon name={svc.icon} size={24} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STORE ===== */}
      <section id="store" className="relative z-10 py-[140px] border-y border-white/5 bg-[#0a0a0a]/50 backdrop-blur-3xl">
        <div className="max-w-[1240px] mx-auto px-8">
          <AnimatedSection>
            <div className="text-[.75rem] tracking-[4px] font-bold mb-4 text-center text-primary uppercase">{t.sec_store}</div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-extrabold text-center mb-6 tracking-tight text-white uppercase" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
              {t.store_title_1} <span className="text-primary">{t.store_title_2}</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="text-center max-w-[600px] mx-auto mb-16 text-[1.05rem] text-muted leading-relaxed">{t.store_sub}</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {storeItems.map(item => (
                <div key={item.id} className="group rounded-3xl border border-white/10 px-8 py-10 text-center bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-primary/30">
                  <div className="w-[70px] h-[70px] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 border transition-transform duration-500 group-hover:scale-110" style={{ color: item.color, background: `color-mix(in srgb, ${item.color} 10%, transparent)`, borderColor: 'rgba(255,255,255,0.05)' }}>
                    <DynamicIcon name={item.icon} size={30} />
                  </div>
                  <h4 className="text-[1.1rem] font-extrabold mb-3 tracking-wide text-white uppercase">
                    {lang === 'bn' ? item.name_bn : item.name}
                  </h4>
                  <p className="text-[.95rem] text-muted">
                    {lang === 'bn' ? item.desc_bn : item.desc_en}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="relative z-10 py-[140px]">
        <div className="max-w-[1240px] mx-auto px-8">
          <AnimatedSection>
            <div className="text-[.75rem] tracking-[4px] font-bold mb-6 text-primary uppercase">{t.sec_proj}</div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-extrabold mb-6 tracking-tight text-white uppercase" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
              {t.proj_title_1} <span className="text-primary">{t.proj_title_2}</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="max-w-[600px] mb-16 text-[1.05rem] text-muted leading-relaxed">{t.proj_sub}</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(proj => {
                const statusLabel = proj.status === 'current' ? (lang === 'bn' ? 'বর্তমান' : 'CURRENT') : proj.status === 'web' ? 'WEB' : (lang === 'bn' ? 'শীঘ্রই আসছে' : 'COMING SOON');
                return (
                  <div key={proj.id} className={`group rounded-3xl border border-white/10 overflow-hidden bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(124,255,107,0.1)] ${proj.status === 'coming_soon' ? 'opacity-50' : ''}`}>
                    <div className="relative h-[220px] flex items-center justify-center text-6xl bg-black overflow-hidden">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
                      <DynamicIcon name={proj.icon} size={56} className="text-primary/70 group-hover:text-primary transition-colors duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-8 border-t border-white/5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${proj.status === 'coming_soon' ? 'bg-muted' : 'bg-primary animate-pulse'}`} />
                        <span className="text-[.65rem] tracking-[2px] font-bold text-primary uppercase">{statusLabel}</span>
                      </div>
                      <h4 className="text-[1.3rem] font-extrabold mb-3 text-white tracking-tight">{proj.title}</h4>
                      <p className="text-[1rem] mb-6 text-muted leading-relaxed">
                        {lang === 'bn' ? proj.desc_bn : proj.desc_en}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(proj.tags || []).map(tag => (
                          <span key={tag} className="px-3 py-1.5 rounded-md text-[.7rem] font-bold tracking-[1px] bg-white/5 border border-white/10 text-muted uppercase">
                            {tag}
                          </span>
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

      {/* ===== CONTACT ===== */}
      <section id="contact" className="relative z-10 py-[140px] border-t border-white/5 bg-[#0a0a0a]/50 backdrop-blur-3xl">
        <div className="max-w-[1240px] mx-auto px-8">
          <AnimatedSection>
            <div className="text-[.75rem] tracking-[4px] font-bold mb-4 text-center text-primary uppercase">{t.sec_contact}</div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="font-extrabold text-center mb-16 tracking-tight text-white uppercase" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
              {t.contact_title} <span className="text-primary">{t.contact_accent}</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            {/* Contact Info */}
            <AnimatedSection>
              <p className="mb-12 leading-relaxed text-[1.1rem] text-muted">{t.ct_desc}</p>

              {/* Address */}
              <div className="group flex gap-5 items-center mb-8 p-4 rounded-2xl transition-colors hover:bg-white/5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 bg-white/5 text-primary border border-white/10 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <small className="block text-[.7rem] tracking-[2px] text-muted uppercase font-bold mb-1">ADDRESS</small>
                  <span className="font-bold text-[1.05rem] text-white tracking-wide">{address}</span>
                </div>
              </div>

              {/* Email */}
              <div className="group flex gap-5 items-center mb-8 p-4 rounded-2xl transition-colors hover:bg-white/5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 bg-white/5 text-primary border border-white/10 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <small className="block text-[.7rem] tracking-[2px] text-muted uppercase font-bold mb-1">EMAIL</small>
                  <span className="font-bold text-[1.05rem] text-white tracking-wide">{email}</span>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex gap-5 items-center mb-8 p-4 rounded-2xl transition-colors hover:bg-white/5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 bg-white/5 text-primary border border-white/10 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <FaPhoneAlt />
                </div>
                <div>
                  <small className="block text-[.7rem] tracking-[2px] text-muted uppercase font-bold mb-1">PHONE</small>
                  <span className="font-bold text-[1.05rem] text-white tracking-wide">{phone}</span>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4 mt-10 px-4">
                {[
                  { icon: <FaFacebookF />, href: config?.facebook || '#' },
                  { icon: <FaWhatsapp />, href: `https://wa.me/${config?.whatsapp || '8801XXXXXXXXX'}` },
                  { icon: <FaInstagram />, href: config?.instagram || '#' },
                  { icon: <FaGithub />, href: config?.github || '#' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener"
                    className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 bg-white/5 text-white hover:bg-primary hover:border-primary hover:text-black hover:scale-110 shadow-lg"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={150}>
              <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
                {/* Form internal glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
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
