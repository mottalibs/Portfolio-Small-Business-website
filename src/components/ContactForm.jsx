'use client';
import { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="cf-name" className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{ color: 'var(--muted)' }}>
          {t.f_name}
        </label>
        <input
          type="text" id="cf-name" name="name"
          placeholder="আপনার নাম"
          required
          className="form-input"
        />
      </div>
      <div>
        <label htmlFor="cf-email" className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{ color: 'var(--muted)' }}>
          {t.f_email}
        </label>
        <input
          type="email" id="cf-email" name="email"
          placeholder="ইমেইল অ্যাড্রেস"
          required
          className="form-input"
        />
      </div>
      <div>
        <label htmlFor="cf-msg" className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{ color: 'var(--muted)' }}>
          {t.f_msg}
        </label>
        <textarea
          id="cf-msg" name="message"
          rows={5}
          placeholder="আপনার মেসেজ..."
          required
          className="form-input resize-none"
        />
      </div>

      {status.msg && (
        <div className={`text-sm font-semibold ${status.type === 'success' ? 'text-[#55efc4]' : 'text-[#e17055]'}`}>
          {status.msg}
        </div>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md text-[.82rem] font-bold tracking-[2px] border-none cursor-pointer transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-60"
        style={{
          background: 'var(--accent)',
          color: '#0d0d0d',
          boxShadow: '0 8px 30px rgba(106,219,79,.15)',
        }}
      >
        {sending ? (
          <><FaSpinner className="animate-spin" /> {t.f_sending}</>
        ) : (
          <><span>{t.f_send}</span> <FaPaperPlane /></>
        )}
      </button>
    </form>
  );
}
