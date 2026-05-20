'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';
import { useMode } from '@/components/ModeProvider';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ClockWidget from '@/components/ClockWidget';
import MapWidget from '@/components/MapWidget';
import FileRequestForm from '@/components/FileRequestForm';
import { DynamicIcon } from '@/lib/icons';
import TypeWriter from '@/components/TypeWriter';
import CountUp from '@/components/CountUp';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import PricingCards from '@/components/PricingCards';

export default function HomePage({ config }) {
  const { t } = useLanguage();
  const { mode, toggleMode } = useMode();
  
  // Project Filtering State
  const [activeCategory, setActiveCategory] = useState('All');

  // Get unique categories for the filter
  const projectCategories = ['All', ...new Set(t.projects.map(p => p.category).filter(Boolean))];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? t.projects 
    : t.projects.filter(p => p.category === activeCategory);

  return (
    <div className="relative overflow-hidden w-full pt-32 pb-32">

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
          <div className="mt-4 mb-2">
            <TypeWriter 
              words={t.hero_roles} 
              className="text-mono text-[clamp(0.9rem,1.5vw,1.2rem)] tracking-[3px] text-[var(--accent)]"
            />
          </div>
          <div className="mt-8 flex flex-col md:flex-row gap-8 justify-between items-start md:items-end">
            <div className="flex flex-col gap-8">
              <p className="sani-text text-[clamp(1.5rem,3vw,3rem)] max-w-[800px] text-[var(--text-secondary)]">
                who designs for <span className="text-[var(--text)]">clarity, utility, and impact</span>, bridging advanced code with practical local solutions.
              </p>
              
              {/* HERO BUTTONS (RESTORED) */}
              <div className="flex flex-wrap gap-4 mt-4">
                <a 
                  href="#projects" 
                  className={`px-8 py-4 text-sm tracking-[2px] font-bold uppercase transition-all duration-300 ${mode === 'cyberpunk' ? 'border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black' : 'bg-[var(--accent)] text-white shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-sm'}`}
                >
                  {t.hero_btn1[mode]}
                </a>
                <a 
                  href="#contact" 
                  className={`px-8 py-4 text-sm tracking-[2px] font-bold uppercase transition-all duration-300 ${mode === 'cyberpunk' ? 'border border-[var(--text)] text-[var(--text)] hover:bg-[var(--text)] hover:text-black' : 'bg-transparent border-2 border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] rounded-sm'}`}
                >
                  {t.hero_btn2[mode]}
                </a>
              </div>
            </div>
            
            <div className="text-mono text-sm tracking-[2px] uppercase text-[var(--muted)] border-l-2 border-[var(--accent)] pl-4">
              {t.hero_tag[mode]} <br/> {t.hero_name}
            </div>
          </div>

          {/* IMPACT STATS BAR */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[var(--border)] pt-12">
            {[
              { target: 500, suffix: '+', label: mode === 'cyberpunk' ? 'DOCS_PROCESSED' : 'Documents Processed' },
              { target: 100, suffix: '+', label: mode === 'cyberpunk' ? 'CLIENTS_SERVED' : 'Happy Customers' },
              { target: 3, suffix: '+', label: mode === 'cyberpunk' ? 'YEARS_ONLINE' : 'Years of Service' },
              { target: 95, suffix: '%', label: mode === 'cyberpunk' ? 'SATISFACTION_RATE' : 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[var(--text)] leading-none">
                  <CountUp target={stat.target} />{stat.suffix}
                </div>
                <div className="text-mono text-[0.6rem] tracking-[2px] text-[var(--muted)] mt-2 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* PROFILE / DOSSIER */}
        <AnimatedSection id="about">
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
        <AnimatedSection id="services">
          <div className="border-t-2 border-[var(--text)] pt-8">
            <h2 className="sani-heading text-[clamp(3rem,6vw,8rem)] mb-4">{t.services_title[mode]}</h2>
            <p className="sani-text text-2xl lg:text-4xl text-[var(--text-secondary)] mb-16 max-w-[900px]">
              {t.services_sub}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {t.services.map((svc, i) => (
                <div 
                  key={i} 
                  className={`p-8 flex flex-col h-full rounded-2xl border ${mode === 'corporate' ? 'bg-white shadow-sm border-[var(--border)]' : 'bg-[var(--bg2)] border-[var(--border)]'}`}
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className={`p-4 rounded-xl ${mode === 'corporate' ? 'bg-[var(--bg3)] text-[var(--accent)]' : 'bg-[var(--bg)] text-[var(--text)]'}`}>
                      <DynamicIcon name={svc.icon} size={32} />
                    </div>
                    {svc.price && (
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${mode === 'corporate' ? 'bg-[#059669]/10 text-[#059669]' : 'bg-[var(--accent-dim)] text-[var(--accent)]'}`}>
                        {svc.price}
                      </span>
                    )}
                  </div>
                  <h4 className="text-2xl font-bold mb-3 tracking-tight">{svc.title}</h4>
                  <p className="text-[var(--text-secondary)] mb-6 flex-1">{svc.desc}</p>
                </div>
              ))}
            </div>

            {/* PROCESS STEPS */}
            <div className="mb-16">
               <h3 className="text-2xl lg:text-3xl font-bold mb-8">{t.process_title}</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 relative">
                 <div className="hidden md:block absolute top-8 left-10 right-10 h-[2px] bg-[var(--border)] -z-10"></div>
                 {t.process_steps?.map((step, idx) => (
                   <div key={idx} className="relative flex flex-col items-center md:items-start text-center md:text-left bg-[var(--bg)] md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none border md:border-0 border-[var(--border)]">
                     <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0 shadow-lg ${mode === 'corporate' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg2)] border-2 border-[var(--accent)] text-[var(--accent)]'}`}>
                       {step.num}
                     </div>
                     <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                     <p className="text-[var(--text-secondary)] text-sm">{step.desc}</p>
                   </div>
                 ))}
               </div>
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
        <AnimatedSection id="skills">
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
        <AnimatedSection id="projects">
          <div className="border-t-2 border-[var(--text)] pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
              <h2 className="sani-heading text-[clamp(3rem,6vw,8rem)]">{t.projects_title[mode]}</h2>
              
              {/* Filter Controls */}
              <div className="flex flex-wrap gap-2">
                {projectCategories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? (mode === 'corporate' ? 'bg-[var(--accent)] text-white' : 'bg-[var(--text)] text-[var(--bg)]') : 'bg-[var(--bg2)] text-[var(--text-secondary)] hover:text-[var(--text)] border border-[var(--border)]'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col">
              {filteredProjects.map((proj, i) => (
                <div 
                  key={i} 
                  className="border-b border-[var(--border)] py-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8"
                >
                  <div className="flex-1">
                    <h3 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4 text-[var(--text)]">
                      {proj.title}
                    </h3>
                    <p className="text-lg text-[var(--text-secondary)] max-w-[600px] mb-6">
                      {proj.desc}
                    </p>
                    {/* Inline Links — with Coming Soon fallback */}
                    <div className="flex gap-4">
                      {proj.github && proj.github !== '#' ? (
                        <a href={proj.github} target="_blank" rel="noreferrer" className="text-mono text-sm tracking-[1px] uppercase text-[var(--accent)] hover:underline">
                          [ Source Code ]
                        </a>
                      ) : null}
                      {proj.preview && proj.preview !== '#' ? (
                        <a href={proj.preview} target="_blank" rel="noreferrer" className="text-mono text-sm tracking-[1px] uppercase text-[var(--text)] hover:underline">
                          [ Live Preview ]
                        </a>
                      ) : null}
                      {(!proj.github || proj.github === '#') && (!proj.preview || proj.preview === '#') && (
                        <span className={`text-mono text-xs tracking-[2px] uppercase px-3 py-1 rounded-full border ${mode === 'cyberpunk' ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-dim)]' : 'border-[var(--border)] text-[var(--muted)] bg-[var(--bg3)]'}`}>
                          {mode === 'cyberpunk' ? '⟡ CLASSIFIED' : '🔜 Coming Soon'}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:w-[300px] justify-start lg:justify-end">
                    {proj.tags.map(tag => (
                      <span key={tag} className="text-mono text-[0.6rem] border border-[var(--border)] px-3 py-1 rounded-full uppercase tracking-[1px] bg-[var(--bg2)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* TESTIMONIALS */}
        <TestimonialCarousel />

        {/* PRICING PACKAGES */}
        <PricingCards />

        {/* CONTACT */}
        <AnimatedSection id="contact">
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
