'use client';
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { DynamicIcon } from '@/lib/icons';

export default function Modal({ isOpen, onClose, data }) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRender(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      const timer = setTimeout(() => setRender(false), 400); // Wait for transition
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!render) return null;

  return (
    <div className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 lg:p-12 transition-all duration-400 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-crosshair"
        onClick={onClose}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px',
          opacity: 0.8
        }}
      ></div>

      {/* Modal Container */}
      <div 
        className={`relative w-full max-w-4xl bg-[var(--bg2)] border border-[var(--accent)] max-h-[90vh] overflow-y-auto brutalist-scrollbar transition-all duration-500 transform ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'}`}
        style={{ boxShadow: 'var(--accent-glow)' }}
      >
        
        {/* Header */}
        <div className="sticky top-0 bg-[var(--bg2)] border-b border-[var(--border)] p-4 flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[var(--accent)] animate-pulse"></span>
            <span className="text-mono text-[0.65rem] tracking-[2px] text-[var(--accent)]">DECRYPTED_FILE</span>
          </div>
          <button 
            onClick={onClose}
            className="text-mono text-[0.65rem] tracking-[2px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors flex items-center gap-2 border border-transparent hover:border-[var(--accent)] p-2"
          >
            [ CLOSE ] <FaTimes />
          </button>
        </div>

        {/* Content */}
        {data && (
          <div className="p-8 lg:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
              {data.icon && (
                <div className="w-24 h-24 border border-[var(--border)] bg-[var(--bg3)] flex items-center justify-center flex-shrink-0" style={{ color: data.color || 'var(--accent)' }}>
                  <DynamicIcon name={data.icon} size={40} />
                </div>
              )}
              <div>
                <h2 className="heading-serif text-3xl lg:text-5xl uppercase leading-tight mb-4 text-white">
                  {data.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {data.id && <span className="text-mono text-[0.65rem] border border-[var(--accent)] bg-[var(--accent-dim)] text-[var(--accent)] px-2 py-1">{data.id}</span>}
                  {data.status && <span className="text-mono text-[0.65rem] border border-[var(--border)] px-2 py-1" style={{ color: data.color || 'var(--text)' }}>STATUS: {data.status}</span>}
                  {data.tags && data.tags.map((tag, i) => (
                    <span key={i} className="text-mono text-[0.65rem] border border-[var(--border)] text-[var(--muted)] px-2 py-1">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <div className="text-mono text-[0.7rem] text-[var(--muted)] tracking-[2px] mb-4 border-b border-[var(--border)] pb-2">EXECUTIVE_SUMMARY</div>
                <p className="text-[0.95rem] leading-[1.8] text-[var(--text-secondary)] mb-8">
                  {data.longDesc || data.desc}
                </p>
                
                {data.features && (
                  <>
                    <div className="text-mono text-[0.7rem] text-[var(--muted)] tracking-[2px] mb-4 border-b border-[var(--border)] pb-2">KEY_FEATURES</div>
                    <ul className="list-none space-y-3 mb-8">
                      {data.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3 text-[0.9rem] text-[var(--text-secondary)] leading-[1.6]">
                          <span className="text-[var(--accent)] mt-1">▹</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div className="md:col-span-1">
                 <div className="border border-[var(--border)] bg-[var(--bg3)] p-6">
                   <div className="text-mono text-[0.65rem] text-[var(--muted)] tracking-[2px] mb-4">SYSTEM_DATA</div>
                   <div className="space-y-4">
                     <div>
                       <div className="text-mono text-[0.55rem] text-[var(--muted)]">CLASSIFICATION</div>
                       <div className="text-white text-sm font-bold uppercase">{data.id ? 'Operation' : 'Evidence'}</div>
                     </div>
                     <div>
                       <div className="text-mono text-[0.55rem] text-[var(--muted)]">DATE_ACCESSED</div>
                       <div className="text-white text-sm font-bold">{new Date().toLocaleDateString()}</div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        )}
      </div>
      
      <style jsx global>{`
        .brutalist-scrollbar::-webkit-scrollbar { width: 4px; }
        .brutalist-scrollbar::-webkit-scrollbar-track { background: var(--bg2); }
        .brutalist-scrollbar::-webkit-scrollbar-thumb { background: var(--border-hover); }
      `}</style>
    </div>
  );
}
