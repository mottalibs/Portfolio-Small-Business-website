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

export default function HomePage({ config }) {
  const { t } = useLanguage();
  const { mode, toggleMode } = useMode();
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  return (
    <div className="relative overflow-hidden w-full pt-32 pb-32">
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} data={modalData} />

      {/* Mode Switcher Control */}
      <div className="fixed top-24 right-6 z-[100] pointer-events-none">
        <div className="pointer-events-auto flex items-center bg-[var(--bg)]/80 backdrop-blur p-2 rounded-[30px] border border-[var(--border)] shadow-lg">
          <span className="text-mono text-[0.6rem] text-[var(--muted)] mr-3 ml-2">INTERFACE:</span>
          <div className="mode-toggle" onClick={toggleMode}>
            <div className={`mode-toggle-pill ${mode === 'cyberpunk' ? 'active' : ''}`}>CYBER</div>
            <div className={`mode-toggle-pill ${mode === 'corporate' ? 'active' : ''}`}>CORP</div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col gap-32">
        
        {/* HERO SECTION */}
        <AnimatedSection className="min-h-[80vh] flex flex-col justify-center">
          <h1 className="sani-heading text-[clamp(3rem,8vw,10rem)] tracking-tighter leading-[0.9] uppercase">
            A DIGITAL <br /> PROFESSIONAL
          </h1>
          <div className="mt-8 flex flex-col md:flex-row gap-8 justify-between items-start md:items-end">
            <p className="sani-text text-[clamp(1.5rem,3vw,3rem)] max-w-[800px] text-[var(--text-secondary)]">
              who designs for <span className="text-[var(--text)]">clarity, utility, and impact</span>, bridging advanced code with practical local solutions.
            </p>
            <div className="text-mono text-sm tracking-[2px] uppercase text-[var(--muted)] border-l-2 border-[var(--accent)] pl-4">
              {t.hero_tag[mode]} <br/> {t.hero_name}
            </div>
          </div>
        </AnimatedSection>

        {/* PROFILE / DOSSIER */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[3/4] relative w-full max-w-[500px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image src="/Me.jpg" alt="Mottalib" fill className="object-cover" />
              {mode === 'cyberpunk' && (
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent opacity-80"></div>
              )}
            </div>
            <div>
              <h2 className="sani-heading text-[clamp(2.5rem,5vw,6rem)] mb-8">
                {mode === 'cyberpunk' ? 'FILE_01: DOSSIER' : 'MY STORY.'}
              </h2>
              <div className="text-[1.2rem] lg:text-[1.5rem] font-medium leading-[1.6] text-[var(--text-secondary)] space-y-6">
                <p dangerouslySetInnerHTML={{ __html: t.about_bio }}></p>
                <p dangerouslySetInnerHTML={{ __html: t.about_bio_2 }}></p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* SERVICES / DIGITAL HUB */}
        <AnimatedSection>
          <div className="border-t-2 border-[var(--text)] pt-8">
            <h2 className="sani-heading text-[clamp(3rem,6vw,8rem)] mb-4">{t.services_title[mode]}</h2>
            <p className="sani-text text-2xl lg:text-4xl text-[var(--text-secondary)] mb-16 max-w-[900px]">
              {t.services_sub}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {t.services.map((svc, i) => (
                <div 
                  key={i} 
                  onClick={() => openModal(svc)}
                  className="group cursor-pointer p-8 bg-[var(--bg2)] hover:bg-[var(--text)] hover:text-[var(--bg)] transition-colors duration-500 flex flex-col h-full"
                >
                  <div className="mb-12 opacity-50 group-hover:opacity-100 transition-opacity">
                    <DynamicIcon name={svc.icon} size={48} />
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight">{svc.title}</h4>
                  <p className="text-sm lg:text-base opacity-70 mb-8">{svc.desc}</p>
                  <div className="mt-auto text-mono text-[0.65rem] tracking-[2px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    [ View Details ]
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <FileRequestForm />
               <div className="flex flex-col gap-8">
                 <ClockWidget />
                 <MapWidget />
               </div>
            </div>
          </div>
        </AnimatedSection>

        {/* SKILLS MATRIX */}
        <AnimatedSection>
          <div className="border-t-2 border-[var(--text)] pt-8">
             <h2 className="sani-heading text-[clamp(3rem,6vw,8rem)] mb-16">{t.sec_skills[mode]}</h2>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               {t.skills.map((skillGroup, i) => (
                 <div key={i}>
                   <h4 className="text-mono text-[1rem] uppercase tracking-[3px] mb-8 text-[var(--accent)]">
                     {skillGroup.category}
                   </h4>
                   <div className="space-y-8">
                     {skillGroup.items.map((skill, j) => (
                       <div key={j} className="group">
                         <div className="flex justify-between text-xl lg:text-3xl font-bold mb-4 tracking-tight">
                           <span>{skill.title}</span>
                           <span className="text-[var(--text-secondary)]">{skill.level}%</span>
                         </div>
                         <div className="w-full h-1 bg-[var(--border)] overflow-hidden">
                            <div className="h-full bg-[var(--text)] transform origin-left transition-transform duration-1000" style={{ width: `${skill.level}%` }}></div>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </AnimatedSection>

        {/* EVIDENCE BOARD / PROJECTS */}
        <AnimatedSection>
          <div className="border-t-2 border-[var(--text)] pt-8">
            <h2 className="sani-heading text-[clamp(3rem,6vw,8rem)] mb-16">{t.projects_title[mode]}</h2>
            
            <div className="flex flex-col">
              {t.projects.map((proj, i) => (
                <div 
                  key={i} 
                  onClick={() => openModal(proj)}
                  className="group cursor-pointer border-b border-[var(--border)] py-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 hover:px-8 hover:bg-[var(--bg2)] transition-all duration-500"
                >
                  <div className="flex-1">
                    <h3 className="text-3xl lg:text-6xl font-bold tracking-tight mb-4 group-hover:text-[var(--accent)] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-lg text-[var(--text-secondary)] max-w-[600px]">
                      {proj.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:w-[300px] justify-start lg:justify-end">
                    {proj.tags.map(tag => (
                      <span key={tag} className="text-mono text-[0.6rem] border border-[var(--border)] px-3 py-1 rounded-full uppercase tracking-[1px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CONTACT */}
        <AnimatedSection>
          <div className="border-t-2 border-[var(--text)] pt-8 pb-16">
            <h2 className="sani-heading text-[clamp(3rem,8vw,10rem)] mb-16 break-words leading-[0.9]">
              LET'S CREATE <br/> SOMETHING.
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="text-xl lg:text-3xl text-[var(--text-secondary)] font-medium leading-[1.5]">
                If you need digital solutions that turn complexity into clarity and ideas into measurable growth, this is where the next chapter starts.
                <br/><br/>
                <span className="text-[var(--text)] text-mono text-lg">{config?.email || t.about_location}</span>
              </div>
              <div className="bg-[var(--bg2)] p-8 lg:p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
