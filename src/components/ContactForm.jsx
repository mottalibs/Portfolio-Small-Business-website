'use client';
import { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { FaPaperPlane, FaSpinner, FaCheckSquare, FaExclamationTriangle } from 'react-icons/fa';

export default function ContactForm() {
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: '', msg: '' });

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      if (isSupabaseConfigured()) {
        const { error } = await supabase.from('messages').insert([{ name, email, message }]);
        if (error) throw error;
      }
      setStatus({ type: 'success', msg: t.f_success });
      e.target.reset();
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus({ type: 'error', msg: t.f_error });
    }
    setSending(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-mono">
      <div className="relative group">
        <label htmlFor="cf-name" className="block text-[0.65rem] tracking-[2px] text-[var(--muted)] mb-2 uppercase group-focus-within:text-[var(--accent)] transition-colors">
          {t.f_name}
        </label>
        <input type="text" id="cf-name" name="name" required className="form-input" autoComplete="name" />
      </div>

      <div className="relative group">
        <label htmlFor="cf-email" className="block text-[0.65rem] tracking-[2px] text-[var(--muted)] mb-2 uppercase group-focus-within:text-[var(--accent)] transition-colors">
          {t.f_email}
        </label>
        <input type="email" id="cf-email" name="email" required className="form-input" autoComplete="email" />
      </div>

      <div className="relative group">
        <label htmlFor="cf-msg" className="block text-[0.65rem] tracking-[2px] text-[var(--muted)] mb-2 uppercase group-focus-within:text-[var(--accent)] transition-colors">
          {t.f_msg}
        </label>
        <textarea id="cf-msg" name="message" rows={4} required className="form-input" />
      </div>

      {status.msg && (
        <div className={`flex items-center gap-3 text-[0.75rem] font-bold px-4 py-3 border ${
          status.type === 'success'
            ? 'text-[#00f0ff] border-[#00f0ff] bg-[rgba(0,240,255,0.05)]'
            : 'text-[var(--accent)] border-[var(--accent)] bg-[var(--accent-dim)]'
        }`}>
          {status.type === 'success' ? <FaCheckSquare /> : <FaExclamationTriangle />}
          {status.msg}
        </div>
      )}

      <button type="submit" disabled={sending} className="btn-brutalist mt-4 w-full disabled:opacity-50 disabled:cursor-not-allowed">
        {sending ? (
          <><FaSpinner className="animate-spin" /> {t.f_sending}</>
        ) : (
          <>{t.f_send} <FaPaperPlane size={12} /></>
        )}
      </button>
    </form>
  );
}
