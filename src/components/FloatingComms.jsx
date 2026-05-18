'use client';
import { useMode } from './ModeProvider';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function FloatingComms() {
  const { mode } = useMode();
  
  // Use generic defaults or empty values since the user didn't specify.
  const phoneNumber = '+8801700000000'; // Placeholder
  const whatsappMsg = 'Hello, I am interested in your services.';

  if (mode === 'cyberpunk') {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a 
          href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMsg)}`}
          target="_blank" 
          rel="noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-sm bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] hover:border-[#25D366] hover:text-[#25D366] transition-colors relative group"
        >
          <div className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <FaWhatsapp size={20} />
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-mono text-[0.55rem] text-[#25D366] tracking-[2px] whitespace-nowrap bg-[var(--bg)] border border-[#25D366] px-2 py-1">
            SECURE_COMMS
          </div>
        </a>
        <a 
          href={`tel:${phoneNumber}`}
          className="w-12 h-12 flex items-center justify-center rounded-sm bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors relative group"
        >
          <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <FaPhoneAlt size={16} />
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-mono text-[0.55rem] text-[var(--accent)] tracking-[2px] whitespace-nowrap bg-[var(--bg)] border border-[var(--accent)] px-2 py-1">
            VOICE_CHANNEL
          </div>
        </a>
      </div>
    );
  }

  // Corporate Mode
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a 
        href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMsg)}`}
        target="_blank" 
        rel="noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-[#25D366]/40 hover:-translate-y-1 transition-all relative group"
      >
        <FaWhatsapp size={22} />
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-[0.8rem] font-medium text-[var(--text)] whitespace-nowrap bg-white shadow-sm border border-[var(--border)] px-3 py-1.5 rounded-md">
          Chat on WhatsApp
        </div>
      </a>
      <a 
        href={`tel:${phoneNumber}`}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-lg hover:shadow-[var(--accent)]/40 hover:-translate-y-1 transition-all relative group"
      >
        <FaPhoneAlt size={18} />
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-[0.8rem] font-medium text-[var(--text)] whitespace-nowrap bg-white shadow-sm border border-[var(--border)] px-3 py-1.5 rounded-md">
          Direct Call
        </div>
      </a>
    </div>
  );
}
