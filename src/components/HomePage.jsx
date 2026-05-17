'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';
import { useMode } from '@/components/ModeProvider';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import Modal from '@/components/Modal';
import ClockWidget from '@/components/ClockWidget';
import MapWidget from '@/components/MapWidget';
import FileRequestForm from '@/components/FileRequestForm';
import { DynamicIcon } from '@/lib/icons';
import { FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaGithub, FaAngleRight, FaTerminal, FaBriefcase, FaCode, FaExternalLinkAlt } from 'react-icons/fa';

export default function HomePage({ config }) {
  const { t } = useLanguage();
  const { mode, toggleMode } = useMode();
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
    <div className="relative overflow-hidden w-full pt-24 pb-32">
      <div className="viewport-frame"></div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} data={modalData} />

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Mode Switcher Control */}
        <div className="flex justify-end mb-8 sticky top-24 z-[100] pointer-events-none">
          <div className="pointer-events-auto flex items-center bg-[var(--bg)]/80 backdrop-blur p-2 rounded-[30px] border border-[var(--border)] shadow-lg" style={{ boxShadow: mode === 'corporate' ? '0 4px 15px rgba(0,0,0,0.05)' : 'none' }}>
            <span className="text-mono text-[0.6rem] text-[var(--muted)] mr-3 ml-2">INTERFACE:</span>
            <div className="mode-toggle" onClick={toggleMode}>
              <div className={`mode-toggle-pill ${mode === 'cyberpunk' ? 'active' : ''}`}>CYBER</div>
              <div className={`mode-toggle-pill ${mode === 'corporate' ? 'active' : ''}`}>CORP</div>
            </div>
          </div>
        </div>

        {/* ===== BENTO GRID START ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">

          {/* 1. HERO BOX (Spans 8 cols) */}
          <AnimatedSection className="md:col-span-12 lg:col-span-8">
            <div className="bento-card h-full p-8 lg:p-12 flex flex-col justify-between bg-gradient-to-br from-[var(--bg2)] to-[var(--bg)]">
              <div className="flex items-center gap-3 px-4 py-1 border border-[var(--accent)] bg-[var(--accent-dim)] w-fit mb-8 rounded-[var(--r)]">
                {mode === 'cyberpunk' ? <FaTerminal size={14} className="text-[var(--accent)]" /> : <FaBriefcase size={14} className="text-[var(--accent)]" />}
                <span className="text-mono text-[0.65rem] text-[var(--accent)] font-bold tracking-[2px] uppercase">
                  {t.hero_tag[mode]}
                </span>
              </div>

              <h1 className="heading-serif text-4xl lg:text-6xl uppercase leading-[1.1] mb-6">
                {mode === 'cyberpunk' ? t.hero_name : t.hero_headline}
              </h1>

              <p className="text-[1.1rem] max-w-[600px] leading-[1.8] text-[var(--text-secondary)] font-mono mb-10">
                {t.hero_desc}
              </p>

              <div className="flex flex-wrap gap-4 mt-auto">
                <a href="#projects" className="btn-brutalist">{t.hero_btn1[mode]}</a>
                <a href="#contact" className="btn-brutalist !bg-transparent !text-[var(--text)] !border-[var(--border)]">{t.hero_btn2[mode]}</a>
              </div>
            </div>
          </AnimatedSection>

          {/* 2. PROFILE IMAGE BOX (Spans 4 cols) */}
          <AnimatedSection delay={100} className="md:col-span-6 lg:col-span-4">
            <div className="bento-card p-0 aspect-square lg:aspect-auto lg:h-full relative overflow-hidden group">
              <Image src="/Me.jpg" alt="Mottalib" fill className={`object-cover transition-transform duration-700 group-hover:scale-105 ${mode === 'cyberpunk' ? 'filter grayscale group-hover:grayscale-0' : ''}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="heading-serif text-2xl mb-1">{t.hero_name}</h3>
                <p className="text-mono text-[0.7rem] text-[var(--accent)] uppercase tracking-[1px]">{t.hero_roles[0]}</p>
              </div>
              {mode === 'cyberpunk' && (
                <div className="rec-badge"><span className="dot"></span> REC</div>
              )}
            </div>
          </AnimatedSection>

          {/* 3. CLOCK WIDGET (Spans 3 cols) */}
          <AnimatedSection delay={150} className="md:col-span-6 lg:col-span-3">
             <ClockWidget />
          </AnimatedSection>

          {/* 4. SHOP INTRO BOX (Spans 5 cols) */}
          <AnimatedSection delay={200} className="md:col-span-6 lg:col-span-5">
            <div className="bento-card h-full bg-[var(--bg)] border-[var(--accent)] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent-dim)] -rotate-45 translate-x-12 -translate-y-12"></div>
               <h3 className="heading-serif text-2xl mb-2">{t.services_title[mode]}</h3>
               <p className="text-[0.9rem] text-[var(--text-secondary)] mb-6">{t.services_sub}</p>
               
               <div className="mt-auto bg-[var(--bg2)] border border-[var(--border)] p-3 rounded-[var(--r)] flex items-start gap-3">
                 <FaMapMarkerAlt className="text-[var(--accent)] mt-1 flex-shrink-0" />
                 <p className="text-mono text-[0.65rem] text-[var(--text-secondary)] leading-[1.6]">
                   {t.retail_badge}
                 </p>
               </div>
            </div>
          </AnimatedSection>

          {/* 5. MAP WIDGET (Spans 4 cols) */}
          <AnimatedSection delay={250} className="md:col-span-6 lg:col-span-4">
             <MapWidget />
          </AnimatedSection>

          {/* ===== SERVICES GRID (Inside Bento) ===== */}
          <div id="services" className="md:col-span-12 lg:col-span-12 mt-8 mb-4">
            <div className="sec-label mb-6">{t.sec_services[mode]}</div>
          </div>

          {t.services.map((svc, i) => (
             <AnimatedSection key={i} delay={i * 100} className="md:col-span-6 lg:col-span-4">
                <div 
                  onClick={() => openModal(svc)}
                  className="bento-card h-full cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-[var(--r)] bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)]">
                      <DynamicIcon name={svc.icon} size={20} />
                    </div>
                    <span className="text-mono text-[0.65rem] text-[var(--muted)]">{svc.id}</span>
                  </div>
                  <h4 className="heading-serif text-xl mb-3">{svc.title}</h4>
                  <p className="text-[0.85rem] text-[var(--text-secondary)] mb-6 flex-1">{svc.desc}</p>
                  
                  <div className="mt-auto pt-4 border-t border-[var(--border)] text-mono text-[0.65rem] text-[var(--accent)] flex items-center gap-2 group-hover:gap-3 transition-all">
                    READ MORE <FaAngleRight />
                  </div>
                </div>
             </AnimatedSection>
          ))}

          {/* 6. FILE REQUEST WIDGET (Spans 4 cols, fits alongside services if layout allows, or pushes down) */}
          <AnimatedSection delay={300} className="md:col-span-12 lg:col-span-12">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                <div className="lg:col-span-8 bento-card p-0 overflow-hidden bg-[url('/grid-bg.png')] bg-cover bg-center">
                   {/* Decorative spacer/banner for shop */}
                   <div className="w-full h-full min-h-[200px] bg-[var(--bg)]/80 backdrop-blur flex flex-col justify-center p-8 lg:p-12">
                      <h3 className="heading-serif text-3xl mb-4">{t.sec_about[mode]}</h3>
                      <p className="text-[1rem] max-w-[600px] text-[var(--text-secondary)]" dangerouslySetInnerHTML={{ __html: t.about_bio }}></p>
                   </div>
                </div>
                <div className="lg:col-span-4">
                   <FileRequestForm />
                </div>
             </div>
          </AnimatedSection>

          {/* ===== SKILLS MATRIX ===== */}
          <div className="md:col-span-12 lg:col-span-12 mt-8 mb-4">
            <div className="sec-label mb-6">{t.sec_skills[mode]}</div>
          </div>
          
          {t.skills.map((skillGroup, i) => (
            <AnimatedSection key={i} delay={i * 150} className="md:col-span-6 lg:col-span-6">
              <div className="bento-card h-full">
                <h4 className="text-mono text-[0.8rem] text-[var(--muted)] uppercase tracking-[2px] mb-8 border-b border-[var(--border)] pb-2">
                  {skillGroup.category}
                </h4>
                <div className="space-y-6">
                  {skillGroup.items.map((skill, j) => (
                    <div key={j}>
                      <div className="flex justify-between text-[0.85rem] mb-2 font-mono">
                        <span>{skill.title}</span>
                        <span className="text-[var(--accent)]">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1 bg-[var(--bg)] rounded-full overflow-hidden">
                         <div className="h-full bg-[var(--accent)]" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* ===== EVIDENCE BOARD (PROJECTS) ===== */}
          <div id="projects" className="md:col-span-12 lg:col-span-12 mt-8 mb-4 flex justify-between items-end">
            <div className="sec-label">{t.sec_projects[mode]}</div>
            {mode === 'cyberpunk' && <div className="text-mono text-[0.6rem] text-[var(--accent)]">ROOT_ACCESS_GRANTED</div>}
          </div>

          {t.projects.map((proj, i) => (
            <AnimatedSection key={i} delay={i * 150} className="md:col-span-12 lg:col-span-4">
              <div className="bento-card h-full p-0 flex flex-col group cursor-pointer overflow-hidden" onClick={() => openModal(proj)}>
                {/* Project Header/Image Area */}
                <div className="h-48 bg-[var(--bg)] border-b border-[var(--border)] relative flex items-center justify-center">
                   <DynamicIcon name={proj.icon} size={48} className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-500" />
                   <div className="bento-hover-reveal">
                     [ {mode === 'cyberpunk' ? 'DECRYPT FILE' : 'VIEW CASE STUDY'} ]
                   </div>
                </div>
                
                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="heading-serif text-xl">{proj.title}</h4>
                  </div>
                  <p className="text-[0.85rem] text-[var(--text-secondary)] mb-6 flex-1 leading-[1.6]">
                    {proj.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                     <div className="flex gap-2">
                       {proj.tags.slice(0,2).map(tag => (
                         <span key={tag} className="text-mono text-[0.55rem] bg-[var(--bg)] border border-[var(--border)] px-2 py-1 rounded-[var(--r)] text-[var(--muted)]">
                           {tag}
                         </span>
                       ))}
                     </div>
                     <div className="flex gap-3">
                        <a href={proj.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                          <FaGithub size={16} />
                        </a>
                        <a href={proj.preview} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                          <FaExternalLinkAlt size={14} />
                        </a>
                     </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* ===== TRANSMISSION (CONTACT) ===== */}
          <div id="contact" className="md:col-span-12 lg:col-span-12 mt-16">
            <AnimatedSection>
              <div className="bento-card p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                  
                  <div>
                    <div className="sec-label mb-8">{t.sec_contact[mode]}</div>
                    <h2 className="heading-serif text-4xl lg:text-5xl uppercase leading-[1.1] mb-6">
                      {t.contact_title[mode]}
                    </h2>
                    <p className="text-[1rem] text-[var(--text-secondary)] mb-10">
                      {t.contact_desc}
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-[var(--r)] bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)]">
                          <FaMapMarkerAlt />
                        </div>
                        <div>
                          <div className="text-mono text-[0.65rem] text-[var(--muted)] uppercase tracking-[1px] mb-1">
                            {mode === 'cyberpunk' ? 'LOCATION_DATA' : 'Address'}
                          </div>
                          <div className="font-bold text-[0.9rem]">{address}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-[var(--r)] bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)]">
                          <FaEnvelope />
                        </div>
                        <div>
                          <div className="text-mono text-[0.65rem] text-[var(--muted)] uppercase tracking-[1px] mb-1">
                            {mode === 'cyberpunk' ? 'SECURE_COMMS' : 'Email'}
                          </div>
                          <div className="font-bold text-[0.9rem]">{email}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[var(--bg)] border border-[var(--border)] p-8 rounded-[var(--r)]">
                    <ContactForm />
                  </div>

                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
        {/* ===== BENTO GRID END ===== */}
      </div>
    </div>
  );
}
