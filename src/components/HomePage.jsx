'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';

export default function HomePage({ config }) {
  const { t } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const techStack = [
    'Linux', 'Python', 'Node.js', 'React', 'Docker', 'Database',
    'Shell', 'Automation', 'Cloud', 'Security', 'AI/ML', 'Web Dev'
  ];

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden text-white font-mono">
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" style={{
        backgroundImage: 'linear-gradient(var(--tactical-grey) 1px, transparent 1px), linear-gradient(90deg, var(--tactical-grey) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-10">
        
        {/* Corner Tracking Markers */}
        <div className="absolute top-24 left-6 md:left-12 opacity-50 text-[10px] uppercase tracking-[3px]">
          [ REC ] <span className="text-red-500 animate-pulse">●</span><br/>
          CAM_04<br/>
          ISO 800
        </div>
        <div className="absolute top-24 right-6 md:right-12 opacity-50 text-[10px] uppercase tracking-[3px] text-right">
          SYS.ONLINE<br/>
          TGT.LOCKED<br/>
          {new Date().toISOString().split('T')[0]}
        </div>
        <div className="absolute bottom-10 left-6 md:left-12 opacity-50 text-[10px] uppercase tracking-[3px]">
          POS X:{Math.round(mousePos.x)}<br/>
          POS Y:{Math.round(mousePos.y)}
        </div>
        <div className="absolute bottom-10 right-6 md:right-12 opacity-50 text-[10px] uppercase tracking-[3px] text-right">
          DB_ACCESS: GRANTED<br/>
          V 2.0.4
        </div>

        {/* Center Title */}
        <div className="text-center relative z-20" style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)`, transition: 'transform 0.1s ease-out' }}>
          <h1 className="font-display font-black leading-none tracking-tighter mix-blend-difference" style={{ fontSize: 'clamp(5rem, 15vw, 12rem)' }}>
            MOTTALIB
          </h1>
          <div className="mt-4 text-xs md:text-sm tracking-[5px] uppercase text-gray-400">
            Tech Entrepreneur <span className="text-[var(--accent)] mx-2">///</span> Sys.Admin <span className="text-[var(--accent)] mx-2">///</span> AI Automation
          </div>
        </div>
      </section>

      {/* DOSSIER SECTION (About & Skills) */}
      <section id="about" className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-20 border-t border-[var(--tactical-grey)]">
        <div className="mb-12">
          <h2 className="text-[10px] tracking-[5px] uppercase text-[var(--accent)] mb-2">[ SUBJECT_PROFILE ]</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold">Dossier</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Left: Scanner Portrait */}
          <div className="md:col-span-4 relative border border-[var(--tactical-grey)] bg-[#050505] overflow-hidden group h-[500px]">
            <Image src="/Me.jpg" alt="Mottalib" fill className="object-cover object-top grayscale contrast-125 opacity-80" />
            
            {/* Laser Sweep Overlay */}
            <div className="absolute left-0 w-full h-[2px] bg-[var(--accent)] opacity-70 animate-laser-sweep shadow-[0_0_15px_rgba(255,42,42,0.8)]" />
            
            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[var(--accent)]" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[var(--accent)]" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[var(--accent)]" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[var(--accent)]" />
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] bg-black/60 py-1 tracking-[2px] text-[var(--accent)]">
              ID: MT-89 // VERIFIED
            </div>
          </div>

          {/* Center: Biography Log */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="bg-[#050505] border border-[var(--tactical-grey)] p-6 md:p-8 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-20" />
              
              <h4 className="text-[10px] tracking-[2px] uppercase text-gray-500 mb-6">&gt;&gt; DECRYPTING_LOG...</h4>
              <p className="text-sm md:text-base leading-relaxed text-gray-300 font-sans mb-6">
                {t.about_intro_desc || "Building digital solutions at the grassroots level. Operating out of Sariakandi, Bogura, I specialize in robust Linux server administration, AI workflow automation, and custom web development. Known for diagnosing hardware and software anomalies with precision."}
              </p>
              
              <div className="grid grid-cols-2 gap-4 border-t border-[var(--tactical-grey)] pt-6">
                <div>
                  <span className="block text-[10px] text-gray-500 mb-1">OPERATING_BASE</span>
                  <span className="text-xs">{t.about_location || "BOGURA, BD"}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 mb-1">STATUS</span>
                  <span className="text-xs text-[var(--accent)] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"/> ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Tech Stack Equipment */}
          <div className="md:col-span-3">
            <div className="border border-[var(--tactical-grey)] p-5 h-full bg-[#050505]">
              <h4 className="text-[10px] tracking-[2px] uppercase text-gray-500 mb-6 border-b border-[var(--tactical-grey)] pb-2">[ EQUIPMENT_LOADOUT ]</h4>
              
              <div className="flex flex-col gap-2">
                {techStack.map((tech, i) => (
                  <div key={i} className="flex items-center justify-between text-xs border border-transparent hover:border-[var(--accent)] p-2 transition-colors cursor-default bg-[#0A0A0A]">
                    <span className="text-gray-300">&gt; {tech}</span>
                    <span className="text-[10px] text-[var(--accent)]">[ OK ]</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* EVIDENCE BOARD (Projects) */}
      <section id="projects" className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-20 border-t border-[var(--tactical-grey)]">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-[10px] tracking-[5px] uppercase text-[var(--accent)] mb-2">[ EVIDENCE_BOARD ]</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold">Classified Projects</h3>
          </div>
          <span className="text-[10px] text-gray-500 tracking-[2px]">FILE_COUNT: {t.projects?.length || 0}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {t.projects?.map((proj, i) => (
            <a key={i} href="#" className="block border border-[var(--tactical-grey)] bg-[#050505] p-6 hover:border-[var(--accent)] transition-all group clickable relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3">
                <span className="text-[9px] bg-[var(--accent)] text-black px-2 py-1 font-bold">{proj.category || 'OPERATION'}</span>
              </div>
              
              <h4 className="text-xl font-bold mb-3 font-display group-hover:text-[var(--accent)] transition-colors">{proj.title}</h4>
              <p className="text-sm text-gray-400 font-sans mb-6 line-clamp-2">{proj.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {proj.tags?.map((tag, j) => (
                  <span key={j} className="text-[10px] border border-gray-800 px-2 py-1 text-gray-500 group-hover:border-[var(--accent)]/30">{tag}</span>
                ))}
              </div>
              
              {/* Scanline hover effect */}
              <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-20 border-t border-[var(--tactical-grey)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[10px] tracking-[5px] uppercase text-[var(--accent)] mb-2">[ COMM_LINK ]</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">Initiate Contact</h3>
            <p className="text-sm text-gray-400 font-sans mb-8">
              {t.contact_desc || "Secure channel open. Send transmission for collaboration or inquiries."}
            </p>
            <a href={`mailto:${config?.email || 'mottalib@example.com'}`} className="inline-flex items-center gap-3 border border-[var(--accent)] px-6 py-3 text-sm text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition-all clickable">
              [ TRANSMIT_MESSAGE ]
            </a>
          </div>
          
          {/* Decorative Radar/Terminal block */}
          <div className="border border-[var(--tactical-grey)] bg-[#050505] p-6 relative overflow-hidden flex items-center justify-center min-h-[300px]">
            <div className="w-48 h-48 border border-[var(--accent)] rounded-full opacity-20 flex items-center justify-center relative">
              <div className="w-32 h-32 border border-[var(--accent)] rounded-full" />
              <div className="w-16 h-16 border border-[var(--accent)] rounded-full absolute" />
              <div className="w-full h-[1px] bg-[var(--accent)] absolute top-1/2 left-0" />
              <div className="h-full w-[1px] bg-[var(--accent)] absolute top-0 left-1/2" />
              
              {/* Radar sweep */}
              <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(255,42,42,0.4) 100%)', animation: 'spin 4s linear infinite' }} />
            </div>
            <div className="absolute top-4 left-4 text-[10px] text-[var(--accent)] tracking-[2px]">
              SCANNING_FREQUENCIES...
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
