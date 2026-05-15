'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { DynamicIcon } from '@/lib/icons';
import { FaFacebookF, FaGithub, FaEnvelope, FaArrowRight, FaArrowDown, FaLinux, FaCode, FaRobot } from 'react-icons/fa';

/* ===== CountUp hook ===== */
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const num = parseInt(end) || 0;
    if (num === 0) return;
    let start = 0;
    const increment = num / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, ref };
}

export default function HomePage({ config }) {
  const { t } = useLanguage();
  const email = config?.email || 'mottalib@example.com';

  const yearsCounter = useCountUp(t.stat_years_value, 1500);
  const clientsCounter = useCountUp(t.stat_clients_value, 2000);

  return (
    <div className="relative overflow-hidden w-full">
      {/* Gradient mesh background */}
      <div className="gradient-mesh">
        <div className="orb" />
        <div className="orb" />
        <div className="orb" />
      </div>

      {/* ===== HERO SECTION — Split Layout ===== */}
      <header id="hero" className="relative z-10 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto hero-split">
          {/* Left — Content */}
          <div className="flex flex-col justify-center py-20 lg:py-0">
            <AnimatedSection>
              <div className="social-row mb-8">
                {[
                  { icon: <FaFacebookF size={14} />, href: config?.facebook || '#' },
                  { icon: <FaGithub size={14} />, href: config?.github || '#' },
                  { icon: <FaEnvelope size={14} />, href: `mailto:${email}` },
                ].map((s, i) => (
                  <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener">
                    {s.icon}
                  </a>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="sec-title mb-4" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
                {t.hero_name}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl mb-8 max-w-[400px] leading-[1.8]" style={{ color: 'var(--muted)' }}>
                {t.hero_title}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={350}>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn-primary">
                  <span>{t.hero_btn1}</span> <FaArrowDown size={11} />
                </a>
                <a href="#contact" className="btn-ghost">
                  {t.hero_btn2}
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Image */}
          <AnimatedSection delay={200} direction="right">
            <div className="hero-image-wrap">
              <div className="hero-image-container">
                <Image
                  src="/Me.jpg"
                  alt="Mottalib"
                  fill
                  sizes="(max-width: 768px) 260px, 380px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Yellow accent dot */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full opacity-20"
                style={{ background: 'var(--accent)', filter: 'blur(30px)' }} />
            </div>
          </AnimatedSection>
        </div>
      </header>

      {/* ===== ABOUT + STATS SECTION ===== */}
      <section id="about" className="relative z-10 py-20 lg:py-28" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — Intro */}
            <AnimatedSection direction="left">
              <div className="sec-label mb-6">{t.sec_about}</div>
              <h2 className="sec-title mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
                {t.about_intro_title}
              </h2>
              <p className="text-[.95rem] leading-[1.9]" style={{ color: 'var(--muted)' }}>
                {t.about_intro_desc}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg"
                style={{ background: 'var(--accent-dim)', border: '1px solid rgba(255,204,0,0.1)' }}>
                <span className="text-[.78rem] font-semibold" style={{ color: 'var(--accent)' }}>
                  {t.about_location}
                </span>
              </div>
            </AnimatedSection>

            {/* Right — Stats */}
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

      {/* ===== SERVICES SECTION — 3 Column ===== */}
      <section id="services" className="relative z-10 py-20 lg:py-28" style={{ background: 'var(--bg2)' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="sec-label mb-5">{t.sec_services}</div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="sec-title mb-14" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
              {t.services_title_1}{' '}
              <span className="gradient-text">{t.services_title_2}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {t.services.map((svc, i) => (
                <div key={i} className={`service-card ${i === 0 ? 'active' : ''}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="service-icon">
                      <DynamicIcon name={svc.icon} size={22} />
                    </div>
                    <span className="service-num">{svc.num}</span>
                  </div>
                  <h4 className="text-[1rem] font-bold mb-3 tracking-tight" style={{ color: 'var(--text)' }}>
                    {svc.title}
                  </h4>
                  <p className="text-[.85rem] leading-[1.7]" style={{ color: 'var(--muted)' }}>
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== BRAND LOGOS ===== */}
      <div className="relative z-10 py-8" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="marquee-container">
          <div className="marquee-track">
            {[0, 1].map(n => (
              <div key={n} className="flex items-center">
                {[
                  { icon: <FaLinux size={20} />, label: 'Linux' },
                  { icon: <FaCode size={18} />, label: 'Next.js' },
                  { icon: <FaRobot size={18} />, label: 'AI Studio' },
                  { icon: <FaGithub size={18} />, label: 'GitHub' },
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>, label: 'EndeavourOS' },
                  { icon: <FaLinux size={20} />, label: 'Arch' },
                  { icon: <FaCode size={18} />, label: 'Termux' },
                  { icon: <FaRobot size={18} />, label: 'OpenClaw' },
                ].map((brand, j) => (
                  <div key={`${n}-${j}`} className="brand-logo">
                    {brand.icon}
                    <span>{brand.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== PROJECTS — Masonry Grid ===== */}
      <section id="projects" className="relative z-10 py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
              <div>
                <div className="sec-label mb-5">{t.sec_projects}</div>
                <h2 className="sec-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                  {t.projects_title_1}<br />
                  <span className="gradient-text">{t.projects_title_2}</span>
                </h2>
                <p className="max-w-[480px] mt-4 text-[.92rem] leading-[1.85]" style={{ color: 'var(--muted)' }}>
                  {t.projects_sub}
                </p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-[.85rem] font-semibold transition-all duration-300 hover:gap-3"
                style={{ color: 'var(--accent)' }}>
                {t.projects_explore} <FaArrowRight size={12} />
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <div className="masonry-grid">
              {t.projects.map((proj, i) => (
                <div key={i} className="project-card group">
                  <div className="project-icon-area relative">
                    <DynamicIcon
                      name={proj.icon}
                      size={56}
                      className="transition-all duration-700 group-hover:scale-125"
                      style={{ color: 'rgba(255, 204, 0, 0.15)' }}
                    />
                    {/* Overlay */}
                    <div className="project-overlay">
                      <div className="status-badge mb-2">
                        <span className="dot" />
                        <span>{proj.status}</span>
                      </div>
                      <h4 className="text-[1.1rem] font-bold mb-1" style={{ color: 'var(--text)' }}>
                        {proj.title}
                      </h4>
                      <span className="text-[.7rem] font-semibold tracking-[1px] uppercase" style={{ color: 'var(--accent)' }}>
                        {proj.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5" style={{ borderTop: '1px solid var(--border)' }}>
                    <p className="text-[.82rem] mb-4 leading-[1.7]" style={{ color: 'var(--muted)' }}>
                      {proj.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag, j) => (
                        <span key={j} className={`tag-chip ${j % 2 !== 0 ? 'violet' : ''}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== BLOG SECTION ===== */}
      <section className="relative z-10 py-20 lg:py-28" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <div className="sec-label mb-4">{t.sec_blog}</div>
              <h2 className="sec-title mb-2" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                {t.blog_title}
              </h2>
              <p className="text-[.92rem]" style={{ color: 'var(--muted)' }}>{t.blog_sub}</p>
            </AnimatedSection>

            <AnimatedSection delay={100} direction="right">
              <div className="flex flex-col">
                {t.blog_posts.map((post, i) => (
                  <a key={i} href="#" className="group flex items-center justify-between py-5 transition-all duration-300 hover:pl-2"
                    style={{ borderBottom: '1px solid var(--border)' }}>
                    <div>
                      <span className="block text-[.68rem] tracking-[1px] uppercase mb-1 font-semibold" style={{ color: 'var(--muted)' }}>
                        {post.date}
                      </span>
                      <span className="text-[.92rem] font-medium group-hover:text-[var(--accent)] transition-colors duration-300" style={{ color: 'var(--text)' }}>
                        {post.title}
                      </span>
                    </div>
                    <FaArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: 'var(--accent)' }} />
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

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="relative z-10 py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — CTA */}
            <AnimatedSection direction="left">
              <h2 className="sec-title mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                {t.contact_cta_title}
              </h2>
              <h2 className="sec-title mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--accent)' }}>
                {t.contact_cta_sub}
              </h2>
              <p className="text-[.92rem] leading-[1.85] mb-8 max-w-[400px]" style={{ color: 'var(--muted)' }}>
                {t.contact_desc}
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-8"
                style={{ background: 'var(--accent-dim)', border: '1px solid rgba(255,204,0,0.1)' }}>
                <span className="text-[.78rem] font-semibold" style={{ color: 'var(--accent)' }}>
                  {t.about_location}
                </span>
              </div>

              {/* Social Links */}
              <div className="social-row mt-4">
                {[
                  { icon: <FaFacebookF size={14} />, href: config?.facebook || '#' },
                  { icon: <FaGithub size={14} />, href: config?.github || '#' },
                  { icon: <FaEnvelope size={14} />, href: `mailto:${email}` },
                ].map((s, i) => (
                  <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener">
                    {s.icon}
                  </a>
                ))}
              </div>
            </AnimatedSection>

            {/* Right — Form */}
            <AnimatedSection delay={100} direction="right">
              <h3 className="text-[1.2rem] font-bold mb-1" style={{ color: 'var(--text)' }}>
                {t.contact_form_title}
              </h3>
              <p className="text-[.85rem] mb-8" style={{ color: 'var(--muted)' }}>
                {t.contact_form_sub}
              </p>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
