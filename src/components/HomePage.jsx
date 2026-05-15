'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { DynamicIcon } from '@/lib/icons';
import { FaFacebookF, FaGithub, FaEnvelope, FaArrowRight, FaArrowDown, FaPrint, FaRocket, FaLaptopCode, FaMobileAlt, FaPalette, FaSearch } from 'react-icons/fa';

/* CountUp */
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    const num = parseInt(end) || 0;
    if (!num) return;
    let s = 0;
    const inc = num / (duration / 16);
    const t = setInterval(() => { s += inc; if (s >= num) { setCount(num); clearInterval(t); } else setCount(Math.floor(s)); }, 16);
    return () => clearInterval(t);
  }, [started, end, duration]);
  return { count, ref };
}

export default function HomePage({ config }) {
  const { t } = useLanguage();
  const email = config?.email || 'mottalib@example.com';
  const yearsCounter = useCountUp(t.stat_years_value, 1500);
  const clientsCounter = useCountUp(t.stat_clients_value, 2000);

  const servicePills = [
    { icon: <FaPrint size={12} />, label: 'IT Services', color: '#D4622B' },
    { icon: <FaLaptopCode size={12} />, label: 'Linux Admin', color: '#E8783F' },
    { icon: <FaRocket size={12} />, label: 'AI Automation', color: '#FF8C42' },
    { icon: <FaPalette size={12} />, label: 'Graphic Design', color: '#D4622B' },
    { icon: <FaSearch size={12} />, label: 'Hardware Expert', color: '#E8783F' },
    { icon: <FaMobileAlt size={12} />, label: 'Digital Solutions', color: '#FF8C42' },
  ];

  return (
    <div className="relative overflow-hidden w-full">

      {/* ===== HERO — Cinematic with Background Name ===== */}
      <header className="hero-section">
        {/* Massive Name Behind */}
        <div className="hero-bg-name" aria-hidden="true">MOTTALIB</div>

        {/* Hero Photo */}
        <div className="hero-image-wrap">
          <Image src="/Me.jpg" alt="Mottalib" fill sizes="(max-width:768px) 300px, 600px" className="object-cover object-top" priority />
          <div className="hero-image-gradient" />
        </div>

        {/* Content overlay */}
        <div className="hero-content px-6 lg:px-20">
          {/* Left text */}
          <div className="absolute left-6 lg:left-20 top-1/2 -translate-y-1/2 max-w-[320px] pointer-events-auto z-10 hidden md:block">
            <AnimatedSection direction="left">
              <p className="text-[1.05rem] leading-[1.8] text-[var(--text-secondary)] font-light">
                {t.hero_desc || "I create clean, modern interfaces and seamless experiences that turn user needs into business growth."}
              </p>
            </AnimatedSection>
          </div>

          {/* Right CTA */}
          <div className="absolute right-6 lg:right-20 top-1/2 -translate-y-1/2 pointer-events-auto z-10 hidden md:block">
            <AnimatedSection direction="right" delay={200}>
              <a href="#contact" className="btn-primary">
                <span>Book a free call</span>
              </a>
            </AnimatedSection>
          </div>
          
          {/* Mobile Text & CTA (Visible only on small screens) */}
          <div className="absolute bottom-32 left-0 right-0 flex flex-col items-center gap-6 md:hidden px-6 text-center pointer-events-auto z-10">
             <p className="text-[.95rem] leading-[1.7] text-[var(--text-secondary)] font-light max-w-[300px]">
                {t.hero_desc || "I create clean, modern interfaces and seamless experiences that turn user needs into business growth."}
             </p>
             <a href="#contact" className="btn-primary">
               <span>Book a free call</span>
             </a>
          </div>
        </div>

        {/* Bottom Service Pills */}
        <div className="hero-bottom-row">
          <div className="max-w-[1400px] mx-auto flex justify-center">
            <div className="service-pills pb-4 px-4 w-full justify-start md:justify-center">
              {servicePills.map((pill, i) => (
                <div key={i} className="service-pill" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="pill-icon" style={{ color: pill.color }}>
                    {pill.icon}
                  </div>
                  <span className="text-[.85rem] font-medium text-[var(--text-secondary)]">{pill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ===== ABOUT + STATS ===== */}
      <section id="about" className="relative z-10 py-20 lg:py-28" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedSection direction="left">
              <div className="sec-label mb-6">{t.sec_about}</div>
              <h2 className="sec-title mb-4" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>{t.about_intro_title}</h2>
              <p className="text-[.95rem] leading-[1.9]" style={{ color: 'var(--muted)' }}>{t.about_intro_desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: 'var(--accent-dim)', border: '1px solid rgba(212,98,43,0.15)' }}>
                <span className="text-[.78rem] font-semibold" style={{ color: 'var(--accent)' }}>{t.about_location}</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100} direction="right">
              <div className="flex gap-12 lg:gap-16 items-start pt-4 lg:pt-8">
                <div className="stat-block" ref={yearsCounter.ref}>
                  <span className="stat-number count-up">{yearsCounter.count}+</span>
                  <span className="stat-label">{t.stat_years}</span>
                </div>
                <div className="stat-block" ref={clientsCounter.ref}>
                  <span className="stat-number count-up">{clientsCounter.count}+</span>
                  <span className="stat-label">{t.stat_clients}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="animated-line" />

      {/* ===== SERVICES ===== */}
      <section id="services" className="relative z-10 py-20 lg:py-28" style={{ background: 'var(--bg2)' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection><div className="sec-label mb-5">{t.sec_services}</div></AnimatedSection>
          <AnimatedSection>
            <h2 className="sec-title mb-14" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
              {t.services_title_1} <span className="gradient-text">{t.services_title_2}</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {t.services.map((svc, i) => (
                <div key={i} className={`service-card ${i === 0 ? 'active' : ''}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="service-icon"><DynamicIcon name={svc.icon} size={22} /></div>
                    <span className="service-num">{svc.num}</span>
                  </div>
                  <h4 className="text-[1rem] font-bold mb-3 tracking-tight" style={{ color: 'var(--text)' }}>{svc.title}</h4>
                  <p className="text-[.85rem] leading-[1.7]" style={{ color: 'var(--muted)' }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="relative z-10 py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
              <div>
                <div className="sec-label mb-5">{t.sec_projects}</div>
                <h2 className="sec-title" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
                  {t.projects_title_1}<br /><span className="gradient-text">{t.projects_title_2}</span>
                </h2>
                <p className="max-w-[480px] mt-4 text-[.92rem] leading-[1.85]" style={{ color: 'var(--muted)' }}>{t.projects_sub}</p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-[.85rem] font-semibold hover:gap-3 transition-all" style={{ color: 'var(--accent)' }}>
                {t.projects_explore} <FaArrowRight size={12} />
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="masonry-grid">
              {t.projects.map((proj, i) => (
                <div key={i} className="project-card group">
                  <div className="project-icon-area relative">
                    <DynamicIcon name={proj.icon} size={56} className="transition-all duration-700 group-hover:scale-125" style={{ color: 'rgba(212,98,43,0.15)' }} />
                    <div className="project-overlay">
                      <div className="status-badge mb-2"><span className="dot" /><span>{proj.status}</span></div>
                      <h4 className="text-[1.1rem] font-bold mb-1" style={{ color: 'var(--text)' }}>{proj.title}</h4>
                      <span className="text-[.7rem] font-semibold tracking-[1px] uppercase" style={{ color: 'var(--accent)' }}>{proj.category}</span>
                    </div>
                  </div>
                  <div className="p-5" style={{ borderTop: '1px solid var(--border)' }}>
                    <p className="text-[.82rem] mb-4 leading-[1.7]" style={{ color: 'var(--muted)' }}>{proj.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag, j) => (<span key={j} className="tag-chip">{tag}</span>))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="relative z-10 py-20 lg:py-28" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <div className="sec-label mb-4">{t.sec_blog}</div>
              <h2 className="sec-title mb-2" style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)' }}>{t.blog_title}</h2>
              <p className="text-[.92rem]" style={{ color: 'var(--muted)' }}>{t.blog_sub}</p>
            </AnimatedSection>
            <AnimatedSection delay={100} direction="right">
              <div className="flex flex-col">
                {t.blog_posts.map((post, i) => (
                  <a key={i} href="#" className="group flex items-center justify-between py-5 transition-all hover:pl-2" style={{ borderBottom: '1px solid var(--border)' }}>
                    <div>
                      <span className="block text-[.68rem] tracking-[1px] uppercase mb-1 font-semibold" style={{ color: 'var(--muted)' }}>{post.date}</span>
                      <span className="text-[.92rem] font-medium group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text)' }}>{post.title}</span>
                    </div>
                    <FaArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" style={{ color: 'var(--accent)' }} />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <TestimonialCarousel />
      <div className="animated-line" />

      {/* ===== CONTACT ===== */}
      <section id="contact" className="relative z-10 py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedSection direction="left">
              <h2 className="sec-title mb-2" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>{t.contact_cta_title}</h2>
              <h2 className="sec-title mb-8" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--accent)' }}>{t.contact_cta_sub}</h2>
              <p className="text-[.92rem] leading-[1.85] mb-8 max-w-[400px]" style={{ color: 'var(--muted)' }}>{t.contact_desc}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-8" style={{ background: 'var(--accent-dim)', border: '1px solid rgba(212,98,43,0.15)' }}>
                <span className="text-[.78rem] font-semibold" style={{ color: 'var(--accent)' }}>{t.about_location}</span>
              </div>
              <div className="social-row mt-4">
                {[
                  { icon: <FaFacebookF size={14} />, href: config?.facebook || '#' },
                  { icon: <FaGithub size={14} />, href: config?.github || '#' },
                  { icon: <FaEnvelope size={14} />, href: `mailto:${email}` },
                ].map((s, i) => (
                  <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener">{s.icon}</a>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100} direction="right">
              <h3 className="text-[1.2rem] font-bold mb-1" style={{ color: 'var(--text)' }}>{t.contact_form_title}</h3>
              <p className="text-[.85rem] mb-8" style={{ color: 'var(--muted)' }}>{t.contact_form_sub}</p>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
