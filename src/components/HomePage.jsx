'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { DynamicIcon } from '@/lib/icons';
import { FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaGithub, FaArrowRight, FaArrowDown, FaTerminal } from 'react-icons/fa';

/* ===== Typewriter for hero roles ===== */
function RoleTypewriter({ roles }) {
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[current];
    let timeout;

    if (!isDeleting && text === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setCurrent((prev) => (prev + 1) % roles.length);
    } else {
      const delta = isDeleting ? 35 : 65;
      timeout = setTimeout(() => {
        setText(isDeleting ? role.substring(0, text.length - 1) : role.substring(0, text.length + 1));
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, current, roles]);

  return (
    <span className="inline-flex items-center">
      <span className="gradient-text font-semibold">{text}</span>
      <span className="terminal-cursor" />
    </span>
  );
}

/* ===== Progress Bar with intersection observer ===== */
function ProgressBar({ level }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="progress-bar-track mt-4">
      <div
        className="progress-bar-fill"
        style={{ width: visible ? `${level}%` : '0%' }}
      />
    </div>
  );
}

export default function HomePage({ config }) {
  const { t } = useLanguage();
  const email = config?.email || 'mottalib@example.com';
  const address = config?.address || t.contact_location || 'Sariakandi, Bogura';

  return (
    <div className="relative overflow-hidden w-full">
      {/* Gradient mesh background */}
      <div className="gradient-mesh">
        <div className="orb" />
        <div className="orb" />
        <div className="orb" />
      </div>

      {/* ===== HERO SECTION ===== */}
      <header id="hero" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 lg:px-8">
        <div className="dot-grid" />

        <AnimatedSection>
          <div className="terminal-block mb-8">
            <span className="prompt">{t.hero_terminal_prompt}</span>
            <span className="mx-2" style={{ color: 'var(--muted)' }}>→</span>
            <span className="output">{t.hero_terminal_output}</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-6"
            style={{ border: '1px solid rgba(0,212,170,0.15)', background: 'rgba(0,212,170,0.04)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full animate-dot-pulse" style={{ background: 'var(--accent)' }} />
            <span className="text-[.65rem] tracking-[3px] font-semibold uppercase font-mono" style={{ color: 'var(--accent)' }}>
              {t.hero_tag}
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h1
            className="sec-title mb-4 max-w-[800px]"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            {t.hero_name}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={350}>
          <div className="text-lg md:text-xl mb-6 h-8 flex items-center justify-center">
            <RoleTypewriter roles={t.hero_roles} />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={450}>
          <p className="text-[1rem] max-w-[520px] mx-auto mb-10 leading-[1.9]" style={{ color: 'var(--muted)' }}>
            {t.hero_desc}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={550}>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#projects" className="btn-primary">
              <span>{t.hero_btn1}</span> <FaArrowDown size={11} />
            </a>
            <a href="#contact" className="btn-ghost">
              {t.hero_btn2}
            </a>
          </div>
        </AnimatedSection>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse" />
          <span className="text-[.6rem] tracking-[2px] uppercase font-mono" style={{ color: 'var(--muted)' }}>
            Scroll
          </span>
        </div>
      </header>

      {/* ===== TECH MARQUEE ===== */}
      <div className="relative z-10 py-5" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="marquee-container">
          <div className="marquee-track">
            {[0, 1].map(n => (
              <span
                key={n}
                className="text-[1rem] lg:text-[1.2rem] tracking-[6px] uppercase font-bold whitespace-nowrap px-2 font-mono"
                style={{ color: 'rgba(255,255,255,0.03)' }}
              >
                LINUX • AI • ARCH • TERMINAL • HARDWARE • DESIGN • AUTOMATION • NEXTJS • ENTREPRENEUR • PRINT • RESTORE •{' '}
                LINUX • AI • ARCH • TERMINAL • HARDWARE • DESIGN • AUTOMATION • NEXTJS • ENTREPRENEUR • PRINT • RESTORE •{' '}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="relative z-10 py-24 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection direction="left">
              <div className="sec-label mb-6">{t.sec_about}</div>
              <h2 className="sec-title mb-8" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                {t.about_title_1} {t.about_title_2}{' '}
                <span className="gradient-text">{t.about_title_3}</span>
              </h2>

              {/* Location badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6"
                style={{ background: 'var(--accent-dim)', border: '1px solid rgba(0,212,170,0.1)' }}
              >
                <FaMapMarkerAlt size={12} style={{ color: 'var(--accent)' }} />
                <span className="text-[.78rem] font-semibold font-mono" style={{ color: 'var(--accent)' }}>
                  {t.about_location}
                </span>
              </div>

              <p className="leading-[1.9] text-[.95rem] mb-4" style={{ color: 'var(--muted)' }} dangerouslySetInnerHTML={{ __html: t.about_bio }} />
              <p className="leading-[1.9] text-[.95rem]" style={{ color: 'var(--muted)' }} dangerouslySetInnerHTML={{ __html: t.about_bio_2 }} />
            </AnimatedSection>

            <AnimatedSection delay={100} direction="right">
              <div className="relative">
                <div
                  className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative"
                  style={{ border: '1px solid var(--glass-border)' }}
                >
                  <Image
                    src="/Me.jpg"
                    alt="Mottalib"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 40%)' }} />
                </div>

                {/* Floating cards */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-2">
                  {[
                    { label: t.about_card_1_label, value: t.about_card_1_value },
                    { label: t.about_card_2_label, value: t.about_card_2_value },
                  ].map(c => (
                    <div
                      key={c.label}
                      className="px-4 py-3 rounded-xl"
                      style={{
                        background: 'rgba(10,10,15,0.85)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid var(--glass-border)',
                      }}
                    >
                      <span className="block text-[.5rem] tracking-[2px] font-bold font-mono" style={{ color: 'var(--accent)' }}>
                        {c.label}
                      </span>
                      <span className="font-bold text-[.85rem]" style={{ color: 'var(--text)' }}>
                        {c.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="animated-line" />

      {/* ===== SKILLS & EXPERTISE ===== */}
      <section id="skills" className="relative z-10 py-24 lg:py-32" style={{ background: 'var(--bg2)' }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="sec-label mb-5">{t.sec_skills}</div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="sec-title mb-14" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
              {t.skills_title_1}{' '}
              <span className="gradient-text">{t.skills_title_2}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {t.skills.map((skill, i) => (
                <div
                  key={i}
                  className="skill-card rounded-2xl px-7 py-8 border flex flex-col"
                  style={{ background: 'var(--glass)', borderColor: 'var(--glass-border)' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-[48px] h-[48px] rounded-xl flex items-center justify-center text-lg transition-all duration-500"
                      style={{ background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid rgba(0,212,170,0.1)' }}
                    >
                      <DynamicIcon name={skill.icon} size={20} />
                    </div>
                    <span className="text-[.7rem] font-bold font-mono" style={{ color: 'var(--accent)' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <h4 className="text-[.9rem] tracking-[1px] font-bold mb-2 uppercase" style={{ color: 'var(--text)' }}>
                    {skill.title}
                  </h4>
                  <p className="text-[.85rem] leading-[1.7] flex-1" style={{ color: 'var(--muted)' }}>
                    {skill.desc}
                  </p>
                  <ProgressBar level={skill.level} />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="animated-line" />

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="relative z-10 py-24 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="sec-label mb-6">{t.sec_projects}</div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="sec-title mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
              {t.projects_title_1}{' '}
              <span className="gradient-text">{t.projects_title_2}</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="max-w-[480px] mb-14 text-[.92rem] leading-[1.85]" style={{ color: 'var(--muted)' }}>
              {t.projects_sub}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.projects.map((proj, i) => (
                <div key={i} className="project-card group">
                  <div className="project-icon-area">
                    <DynamicIcon
                      name={proj.icon}
                      size={44}
                      className="transition-all duration-700 group-hover:scale-125"
                      style={{ color: 'rgba(0, 212, 170, 0.2)' }}
                    />
                  </div>
                  <div className="p-6" style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="status-badge mb-3">
                      <span className="dot" />
                      <span>{proj.status}</span>
                    </div>
                    <h4 className="text-[1rem] font-bold mb-2 tracking-tight" style={{ color: 'var(--text)' }}>
                      {proj.title}
                    </h4>
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

      {/* ===== CTA BANNER ===== */}
      <section
        className="relative z-10 cta-banner py-24 lg:py-32"
        style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-[600px] mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <div className="terminal-block mb-8 mx-auto w-fit">
              <FaTerminal size={12} style={{ color: 'var(--accent)' }} />
              <span style={{ color: 'var(--muted)' }}>echo &quot;{t.cta_title}&quot;</span>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="sec-title mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              {t.cta_title}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <p className="text-[.95rem] mb-10 leading-[1.85]" style={{ color: 'var(--muted)' }}>
              {t.cta_desc}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={160}>
            <a href="#contact" className="btn-primary">
              <span>{t.cta_btn}</span> <FaArrowRight size={11} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="relative z-10 py-24 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="sec-label mb-5 text-center">{t.sec_contact}</div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="sec-title text-center mb-14" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
              {t.contact_title}{' '}
              <span className="gradient-text">{t.contact_accent}</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection direction="left">
              <p className="mb-10 leading-[1.85] text-[.92rem]" style={{ color: 'var(--muted)' }}>
                {t.contact_desc}
              </p>

              {/* Contact Info Cards */}
              {[
                { icon: <FaMapMarkerAlt />, label: 'LOCATION', value: address, href: null },
                { icon: <FaEnvelope />, label: 'EMAIL', value: email, href: `mailto:${email}` },
              ].map((item, i) => {
                const Wrapper = item.href ? 'a' : 'div';
                return (
                  <Wrapper
                    key={i}
                    href={item.href}
                    className="group flex gap-4 items-center mb-5 py-3 transition-all duration-400 hover:translate-x-1 cursor-pointer"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid rgba(0,212,170,0.1)' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <small className="block text-[.55rem] tracking-[2.5px] font-bold font-mono mb-0.5" style={{ color: 'var(--muted)' }}>
                        {item.label}
                      </small>
                      <span className="font-semibold text-[.88rem] group-hover:text-[var(--accent)] transition-colors duration-300" style={{ color: 'var(--text)' }}>
                        {item.value}
                      </span>
                    </div>
                  </Wrapper>
                );
              })}

              {/* Social Links */}
              <div className="flex gap-3 mt-8">
                {[
                  { icon: <FaFacebookF size={13} />, href: config?.facebook || '#' },
                  { icon: <FaGithub size={13} />, href: config?.github || '#' },
                  { icon: <FaEnvelope size={13} />, href: `mailto:${email}` },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener"
                    className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-400 hover:scale-110"
                    style={{
                      borderColor: 'rgba(0,212,170,0.1)',
                      background: 'var(--accent-dim)',
                      color: 'var(--accent)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--accent)';
                      e.currentTarget.style.color = '#0a0a0f';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'var(--accent-dim)';
                      e.currentTarget.style.color = 'var(--accent)';
                    }}
                  >
                    {s.icon}
                  </a>
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
