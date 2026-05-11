'use client';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat({ number = '8801XXXXXXXXX' }) {
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener"
      className="fixed bottom-7 right-7 w-[60px] h-[60px] rounded-full flex items-center justify-center text-3xl text-white z-[900] transition-transform duration-300 hover:scale-110"
      style={{
        background: '#25D366',
        boxShadow: '0 4px 20px rgba(37,211,102,.4)',
        animation: 'waPulse 2s infinite',
      }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
