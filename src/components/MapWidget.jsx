'use client';
import { useMode } from './ModeProvider';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function MapWidget() {
  const { mode } = useMode();

  return (
    <div className="h-full min-h-[300px] w-full p-0 overflow-hidden relative group">
      {/* Map iframe placeholder using an inverted grayscale filter for cyberpunk mode */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.324204558509!2d89.5694!3d24.8524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc550009695629%3A0x8e826b685121c0af!2sSariakandi!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
        width="100%" 
        height="100%" 
        style={{ border: 0, filter: mode === 'cyberpunk' ? 'grayscale(100%) invert(100%) contrast(120%)' : 'grayscale(20%)' }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
      ></iframe>

      {/* Overlay Information */}
      <div className="absolute bottom-6 left-6 right-6 bg-[var(--bg)] border-2 border-[var(--text)] p-6 flex items-center gap-4 shadow-2xl">
        <FaMapMarkerAlt size={24} className="text-[var(--accent)]" />
        <div>
          <div className="text-mono text-[0.7rem] text-[var(--muted)] tracking-[2px] uppercase mb-1">
            {mode === 'cyberpunk' ? 'BASE_COORDINATES' : 'Our Location'}
          </div>
          <div className="font-bold text-lg uppercase tracking-tight">Sariakandi, Bogura</div>
        </div>
      </div>
      
      {mode === 'cyberpunk' && (
        <div className="absolute top-4 right-4 flex gap-1">
          <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-ping"></div>
          <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></div>
        </div>
      )}
    </div>
  );
}
