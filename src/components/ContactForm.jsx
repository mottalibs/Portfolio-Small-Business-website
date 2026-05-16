'use client';
import { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { FaPaperPlane, FaSpinner, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function ContactForm() {
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [focused, setFocused] = useState({});

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

  const fields = [
    { id: 'cf-name', name: 'name', type: 'text', label: t.f_name, placeholder: t.f_name, autoComplete: 'name' },
    { id: 'cf-email', name: 'email', type: 'email', label: t.f_email, placeholder: t.f_email, autoComplete: 'email' },
  ];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {fields.map(f => (
        <div key={f.id} className="relative group">
          <label htmlFor={f.id}
            className="block text-[.62rem] tracking-[3px] font-semibold mb-2.5 uppercase transition-colors duration-300 group-focus-within:text-[var(--accent)] font-mono"
            style={{ color: 'var(--muted)' }}>
            {f.label}
          </label>
          <input type={f.type} id={f.id} name={f.name} placeholder={f.placeholder} required
            className="form-input" autoComplete={f.autoComplete}
            onFocus={() => setFocused(p => ({ ...p, [f.id]: true }))}
            onBlur={() => setFocused(p => ({ ...p, [f.id]: false }))} />
        </div>
      ))}

      {/* Message */}
      <div className="relative group">
        <label htmlFor="cf-msg"
          className="block text-[.62rem] tracking-[3px] font-semibold mb-2.5 uppercase transition-colors duration-300 group-focus-within:text-[var(--accent)] font-mono"
          style={{ color: 'var(--muted)' }}>
          {t.f_msg}
        </label>
        <textarea id="cf-msg" name="message" rows={4}
          placeholder={t.f_msg + '...'} required className="form-input" />
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
      <button type="submit" disabled={sending}
        className="w-full mt-2 py-4 rounded-2xl font-semibold text-[.9rem] cursor-pointer transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{
          background: 'var(--gradient-accent)',
          color: '#0a0a0f',
          border: 'none',
          boxShadow: '0 0 30px rgba(0,212,170,0.2)',
        }}
        onMouseEnter={(e) => { if (!sending) e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 0 50px rgba(0,212,170,0.35)'; }}
        onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0 30px rgba(0,212,170,0.2)'; }}>
        {sending ? (
          <><FaSpinner className="animate-spin" /> <span>{t.f_sending}</span></>
        ) : (
          <><span>{t.f_send}</span> <FaPaperPlane size={12} /></>
        )}
      </button>
    </form>
  );
}
