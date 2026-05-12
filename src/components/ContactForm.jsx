'use client';
import { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { FaPaperPlane, FaSpinner, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      {/* Name */}
      <div className="relative group">
        <label htmlFor="cf-name" className="block text-[.62rem] tracking-[3px] font-semibold mb-3 uppercase transition-colors duration-300 group-focus-within:text-[var(--accent)]" style={{ color: 'var(--muted)' }}>
          {t.f_name}
        </label>
        <input
          type="text" id="cf-name" name="name"
          placeholder={t.f_name}
          required
          className="form-input"
          autoComplete="name"
        />
      </div>

      {/* Email */}
      <div className="relative group">
        <label htmlFor="cf-email" className="block text-[.62rem] tracking-[3px] font-semibold mb-3 uppercase transition-colors duration-300 group-focus-within:text-[var(--accent)]" style={{ color: 'var(--muted)' }}>
          {t.f_email}
        </label>
        <input
          type="email" id="cf-email" name="email"
          placeholder={t.f_email}
          required
          className="form-input"
          autoComplete="email"
        />
      </div>

      {/* Message */}
      <div className="relative group">
        <label htmlFor="cf-msg" className="block text-[.62rem] tracking-[3px] font-semibold mb-3 uppercase transition-colors duration-300 group-focus-within:text-[var(--accent)]" style={{ color: 'var(--muted)' }}>
          {t.f_msg}
        </label>
        <textarea
          id="cf-msg" name="message"
          rows={4}
          placeholder={t.f_msg + '...'}
          required
          className="form-input resize-none"
        />
      </div>

      {/* Status Message */}
      {status.msg && (
        <div className={`flex items-center gap-2 text-sm font-semibold px-4 py-3 rounded-xl ${
          status.type === 'success' 
            ? 'text-emerald-400 bg-emerald-400/5 border border-emerald-400/10' 
            : 'text-red-400 bg-red-400/5 border border-red-400/10'
        }`}>
          {status.type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}
          {status.msg}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={sending}
        className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-[.78rem] font-bold tracking-[2px] uppercase border-none cursor-pointer transition-all duration-500 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
        style={{
          background: 'var(--accent)',
          color: '#0a0a0a',
          boxShadow: '0 8px 30px rgba(200,164,85,.15)',
        }}
      >
        {sending ? (
          <><FaSpinner className="animate-spin" /> {t.f_sending}</>
        ) : (
          <><span>{t.f_send}</span> <FaPaperPlane size={12} /></>
        )}
      </button>
    </form>
  );
}
