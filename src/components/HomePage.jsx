'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import Modal from '@/components/Modal';
import { DynamicIcon } from '@/lib/icons';
import { FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaGithub, FaFingerprint, FaCrosshairs, FaRegFolderOpen, FaAngleRight } from 'react-icons/fa';

/* ===== Progress Bar Telemetry ===== */
function TelemetryBar({ level }) {
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
    <div ref={ref} className="telemetry-bar-wrap">
      <div className="telemetry-track">
        <div
          className="telemetry-fill"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function HomePage({ config }) {
  const { t } = useLanguage();
  const email = config?.email || 'mottalib@example.com';
  const address = config?.address || t.about_location;

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div className="viewport-frame"></div>
      
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} data={modalData} />
      
      {/* ===== HERO SECTION ===== */}
      <header id="hero" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 lg:px-8 pt-20">
        
        <AnimatedSection>
          <div className="terminal-block mb-10">
            <span className="prompt">{t.hero_terminal_prompt}</span>
            <span className="output ml-3">{t.hero_terminal_output}</span>
            <span className="terminal-cursor"></span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="flex items-center gap-3 px-4 py-1 border border-[var(--accent)] bg-[var(--accent-dim)] mb-8">
            <FaFingerprint size={14} className="text-[var(--accent)]" />
            <span className="text-mono text-[0.65rem] text-[var(--accent)] font-bold tracking-[2px]">
              {t.hero_tag}
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h1 className="heading-serif mb-6 uppercase text-[clamp(4rem,10vw,8rem)] leading-[0.9] text-white tracking-tighter" style={{ textShadow: '0 0 40px rgba(255,255,255,0.1)' }}>
            {t.hero_name}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={350}>
           <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-[800px]">
             {t.hero_roles.map((role, idx) => (
                <span key={idx} className="text-mono text-[0.75rem] text-[var(--accent)] border border-[var(--border)] px-3 py-1 bg-[var(--bg2)] hover:border-[var(--accent)] transition-all cursor-crosshair">
                  {role}
                </span>
             ))}
           </div>
        </AnimatedSection>

        <AnimatedSection delay={450}>
          <p className="text-[0.95rem] max-w-[600px] mx-auto mb-14 leading-[1.8] text-[var(--text-secondary)] font-mono">
            {t.hero_desc}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={550}>
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="#about" className="btn-brutalist">
              <FaCrosshairs size={14} /> {t.hero_btn1}
            </a>
          </div>
        </AnimatedSection>

        <div className="absolute top-[20%] left-[-5%] text-[15vw] font-bold text-white opacity-[0.02] pointer-events-none heading-serif select-none whitespace-nowrap overflow-hidden">
          DOSSIER
        </div>
      </header>

      {/* ===== ABOUT / DOSSIER ===== */}
      <section id="about" className="relative z-10 py-24 lg:py-32 bg-[var(--bg2)] border-t border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="sec-label mb-10">{t.sec_about}</div>
            <h2 className="heading-serif text-[clamp(3rem,6vw,5rem)] mb-16 uppercase leading-[1.1]">
              {t.about_title_1} <span className="text-[var(--accent)] italic">{t.about_title_2}</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            <div className="lg:col-span-4 relative">
              <AnimatedSection direction="left">
                <div className="glitch-wrapper border border-[var(--border)] aspect-[3/4] w-full max-w-[400px] mx-auto relative filter grayscale hover:grayscale-0 transition-all duration-700">
                  <Image src="/Me.jpg" alt="Mottalib" fill className="object-cover" />
                  <div className="rec-badge">
                    <span className="dot"></span> REC_ACTIVE
                  </div>
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[var(--accent)]"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[var(--accent)]"></div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimatedSection delay={100}>
                <div className="border border-[var(--border)] p-8 bg-[var(--bg)] h-full relative group hover:border-[var(--accent)] transition-all duration-500">
                  <div className="absolute top-0 right-0 p-3 bg-[var(--border)] text-mono text-[0.55rem] text-[var(--muted)]">CLASSIFIED</div>
                  <div className="text-mono text-[0.65rem] text-[var(--accent)] mb-6 tracking-[2px] uppercase">
                    <FaMapMarkerAlt className="inline mr-2" /> {t.about_location}
                  </div>
                  <p className="text-[0.95rem] leading-[1.8] text-[var(--text-secondary)] mb-6" dangerouslySetInnerHTML={{ __html: t.about_bio }} />
                  <p className="text-[0.95rem] leading-[1.8] text-[var(--text-secondary)]" dangerouslySetInnerHTML={{ __html: t.about_bio_2 }} />
                  
                  <div className="mt-8 pt-6 border-t border-[var(--border)] flex gap-8">
                    <div>
                      <div className="text-mono text-[0.6rem] text-[var(--muted)] mb-1">{t.about_card_1_label}</div>
                      <div className="font-bold text-[0.9rem]">{t.about_card_1_value}</div>
                    </div>
                    <div>
                      <div className="text-mono text-[0.6rem] text-[var(--muted)] mb-1">{t.about_card_2_label}</div>
                      <div className="font-bold text-[0.9rem] text-[var(--accent)]">{t.about_card_2_value}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200} direction="right">
                <div className="border border-[var(--border)] p-8 bg-[var(--bg)] h-full">
                  <div className="text-mono text-[0.65rem] text-[var(--muted)] mb-8 tracking-[2px] uppercase flex justify-between">
                    <span>{t.sec_skills}</span>
                    <span className="text-[var(--accent)]">SCAN_COMPLETE</span>
                  </div>
                  
                  <div className="flex flex-col gap-6">
                    {t.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="telemetry-header">
                          <span>{skill.title}</span>
                          <span className="text-[var(--accent)]">[{skill.level}%]</span>
                        </div>
                        <TelemetryBar level={skill.level} />
                        <p className="text-mono text-[0.65rem] text-[var(--muted)] mt-2 leading-[1.5]">
                          &gt; {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* ===== ACTIVE OPERATIONS (BUSINESS SERVICES) ===== */}
      <section id="services" className="relative z-10 py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="sec-label mb-10">{t.sec_services}</div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <h2 className="heading-serif text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[1.1]">
                {t.services_title_1} <br/> <span className="text-[var(--accent)] italic">{t.services_title_2}</span>
              </h2>
              <p className="max-w-[400px] text-[0.9rem] text-[var(--text-secondary)] font-mono leading-[1.7] border-l-2 border-[var(--accent)] pl-4">
                {t.services_sub}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.services.map((svc, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div 
                  onClick={() => openModal(svc)}
                  className="border border-[var(--border)] bg-[var(--bg2)] p-8 group hover:border-[var(--accent)] transition-all duration-400 relative overflow-hidden h-full cursor-crosshair flex flex-col"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--accent-dim)] -rotate-45 translate-x-8 -translate-y-8 group-hover:bg-[var(--accent)] transition-colors"></div>
                  
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-mono text-[0.7rem] text-[var(--accent)] font-bold">{svc.id}</span>
                    <DynamicIcon name={svc.icon} size={24} className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
                  </div>
                  
                  <h3 className="text-mono text-[1.1rem] font-bold mb-4 tracking-[1px]">{svc.title}</h3>
                  <p className="text-[0.9rem] text-[var(--text-secondary)] leading-[1.7] mb-8 flex-1">
                    {svc.desc}
                  </p>

                  <div className="flex items-center gap-2 text-mono text-[0.65rem] text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors mt-auto pt-4 border-t border-[var(--border)]">
                    <FaAngleRight /> [ CLICK FOR DETAILS ]
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="animated-line" />

      {/* ===== EVIDENCE BOARD (PROJECTS) ===== */}
      <section id="projects" className="relative z-10 py-24 lg:py-32 bg-[var(--bg2)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="sec-label mb-10">{t.sec_projects}</div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <h2 className="heading-serif text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[1.1]">
                {t.projects_title_1} <br/> <span className="text-[var(--accent)] italic">{t.projects_title_2}</span>
              </h2>
              <div className="terminal-block">
                <span className="prompt">&gt; ls -la ./evidence/</span>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.map((proj, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div 
                  onClick={() => openModal(proj)}
                  className="evidence-card h-full flex flex-col cursor-crosshair"
                >
                  <div className="preview-area group">
                    <DynamicIcon name={proj.icon} size={60} style={{ color: proj.color }} />
                    <div className="absolute top-4 left-4 text-mono text-[0.6rem] text-[var(--muted)]">FILE_ID: 00{i+1}</div>
                    
                    <div className="hover-reveal flex-col gap-2">
                      <FaRegFolderOpen size={24} />
                      <span>[ CLICK TO DECRYPT ]</span>
                    </div>
                  </div>
                  
                  <div className="content-area flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-mono text-[0.9rem] font-bold" style={{ color: proj.color }}>{proj.title}</h4>
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: proj.color }}></div>
                    </div>
                    
                    <p className="text-[0.85rem] text-[var(--text-secondary)] leading-[1.6] mb-6 flex-1">
                      {proj.desc}
                    </p>
                    
                    <div className="flex justify-between items-end border-t border-[var(--border)] pt-4 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {proj.tags.map((tag, j) => (
                          <span key={j} className="text-mono text-[0.55rem] tracking-[1px] text-[var(--muted)] border border-[var(--border)] px-2 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-mono text-[0.6rem] font-bold tracking-[1px]" style={{ color: proj.color }}>
                        [{proj.status}]
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRANSMISSION (CONTACT) ===== */}
      <section id="contact" className="relative z-10 py-24 lg:py-32 border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="sec-label mb-10">{t.sec_contact}</div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection direction="left">
              <h2 className="heading-serif text-[clamp(2.5rem,5vw,4rem)] uppercase leading-[1.1] mb-8">
                {t.contact_title} <br/> <span className="text-[var(--accent)] italic">{t.contact_accent}</span>
              </h2>
              
              <div className="border-l-2 border-[var(--accent)] pl-6 mb-12">
                <p className="text-[0.95rem] text-[var(--text-secondary)] font-mono leading-[1.8]">
                  {t.contact_desc}
                </p>
              </div>

              <div className="flex flex-col gap-6 font-mono text-[0.8rem]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[var(--border)] bg-[var(--bg2)] flex items-center justify-center text-[var(--accent)]">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div className="text-[var(--muted)] text-[0.65rem] tracking-[2px] mb-1">LOCATION_DATA</div>
                    <div className="text-white">{address}</div>
                  </div>
                </div>
                
                <a href={`mailto:${email}`} className="flex items-center gap-4 group cursor-crosshair">
                  <div className="w-10 h-10 border border-[var(--border)] bg-[var(--bg2)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[#000] transition-colors">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="text-[var(--muted)] text-[0.65rem] tracking-[2px] mb-1">SECURE_COMMS</div>
                    <div className="text-white group-hover:text-[var(--accent)] transition-colors">{email}</div>
                  </div>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-[var(--border)]">
                <div className="text-mono text-[0.65rem] text-[var(--muted)] tracking-[2px] mb-4">EXTERNAL_LINKS</div>
                <div className="flex gap-4">
                  {[
                    { icon: <FaFacebookF size={14} />, href: config?.facebook || '#' },
                    { icon: <FaGithub size={14} />, href: config?.github || '#' },
                  ].map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-[var(--border)] bg-[var(--bg2)] flex items-center justify-center text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100} direction="right">
              <div className="border border-[var(--border)] bg-[var(--bg2)] p-8 lg:p-10 relative">
                <div className="absolute top-0 right-0 p-3 flex gap-2">
                  <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse"></span>
                  <span className="text-mono text-[0.55rem] text-[var(--accent)] tracking-[2px]">CHANNEL_OPEN</span>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-mono text-[1.2rem] font-bold mb-2">SEND_TRANSMISSION</h3>
                  <p className="text-mono text-[0.7rem] text-[var(--muted)]">All data is end-to-end encrypted.</p>
                </div>

                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </div>
  );
}
