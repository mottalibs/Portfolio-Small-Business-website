'use client';
import { useEffect, useState } from 'react';
import AdminGuard from '@/components/admin/AdminGuard';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { FaEnvelope, FaTrash, FaCheck, FaEye } from 'react-icons/fa';

export default function AdminMessages() {
  const [msgs, setMsgs] = useState([]);
  const [selected, setSelected] = useState(null);

  const load = async () => {
    if (!isSupabaseConfigured()) {
      setMsgs([
        { id: '1', name: 'Demo User', email: 'demo@example.com', message: 'This is a demo message.', is_read: false, created_at: new Date().toISOString() },
      ]);
      return;
    }
    const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: false });
    setMsgs(data || []);
  };
  useEffect(() => { load(); }, []);

  const markRead = async (id) => {
    if (isSupabaseConfigured()) { await supabase.from('messages').update({ is_read: true }).eq('id', id); await load(); }
  };
  const del = async (id) => {
    if (!confirm('Delete this message?')) return;
    if (isSupabaseConfigured()) { await supabase.from('messages').delete().eq('id', id); await load(); }
    if (selected?.id === id) setSelected(null);
  };

  return (
    <AdminGuard>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Messages</h1>
        <p className="text-sm mt-1" style={{color:'var(--muted)'}}>Contact form submissions from your website.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
        {/* List */}
        <div className="rounded-2xl border overflow-hidden" style={{background:'var(--bg2)',borderColor:'var(--border)'}}>
          {msgs.length === 0 && <div className="p-8 text-center" style={{color:'var(--muted)'}}>No messages yet.</div>}
          {msgs.map(m=>(
            <div key={m.id} onClick={()=>{setSelected(m);markRead(m.id);}} className="flex items-center gap-4 px-5 py-4 cursor-pointer transition-colors duration-200 hover:bg-white/[0.03]" style={{borderBottom:'1px solid var(--border)',background:selected?.id===m.id?'rgba(106,219,79,.05)':'transparent'}}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold" style={{background:m.is_read?'var(--bg3)':'var(--accent)',color:m.is_read?'var(--muted)':'#0d0d0d'}}>{m.name?.[0]?.toUpperCase()}</div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center"><span className={`text-sm ${m.is_read?'':'font-bold'}`}>{m.name}</span><span className="text-[.65rem]" style={{color:'var(--muted)'}}>{new Date(m.created_at).toLocaleDateString()}</span></div>
                <p className="text-xs truncate" style={{color:'var(--muted)'}}>{m.message}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Detail */}
        <div className="rounded-2xl border p-6" style={{background:'var(--bg2)',borderColor:'var(--border)'}}>
          {!selected ? (
            <div className="flex flex-col items-center justify-center h-64" style={{color:'var(--muted)'}}><FaEnvelope size={32} className="mb-3"/><p>Select a message to read</p></div>
          ) : (
            <>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold">{selected.name}</h3>
                  <a href={`mailto:${selected.email}`} className="text-sm hover:text-[var(--accent)]" style={{color:'var(--accent)'}}>{selected.email}</a>
                  <p className="text-[.65rem] mt-1" style={{color:'var(--muted)'}}>{new Date(selected.created_at).toLocaleString()}</p>
                </div>
                <button onClick={()=>del(selected.id)} className="w-8 h-8 rounded-lg flex items-center justify-center border-none cursor-pointer" style={{color:'#e17055'}}><FaTrash size={14}/></button>
              </div>
              <div className="rounded-xl p-5 text-sm leading-relaxed" style={{background:'var(--bg)',border:'1px solid var(--border)'}}>{selected.message}</div>
              <a href={`mailto:${selected.email}?subject=Re: Message from Charmatha Digital Point`} className="inline-flex items-center gap-2 mt-4 px-5 py-3 rounded-xl text-sm font-bold border-none cursor-pointer" style={{background:'var(--accent)',color:'#0d0d0d'}}>
                <FaEnvelope/> Reply via Email
              </a>
            </>
          )}
        </div>
      </div>
    </AdminGuard>
  );
}
