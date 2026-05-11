'use client';
import { useEffect, useState } from 'react';
import AdminGuard from '@/components/admin/AdminGuard';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { FaTools, FaBoxOpen, FaEnvelopeOpenText, FaProjectDiagram, FaChartLine } from 'react-icons/fa';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ services: 0, store: 0, projects: 0, skills: 0, messages: 0, unread: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      if (!isSupabaseConfigured()) {
        setStats({ services: 6, store: 4, projects: 3, skills: 6, messages: 3, unread: 2 });
        return;
      }
      try {
        const [s, st, p, sk, m, u] = await Promise.all([
          supabase.from('services').select('id', { count: 'exact', head: true }),
          supabase.from('store_items').select('id', { count: 'exact', head: true }),
          supabase.from('projects').select('id', { count: 'exact', head: true }),
          supabase.from('skills').select('id', { count: 'exact', head: true }),
          supabase.from('messages').select('id', { count: 'exact', head: true }),
          supabase.from('messages').select('id', { count: 'exact', head: true }).eq('is_read', false),
        ]);
        setStats({
          services: s.count || 0, store: st.count || 0,
          projects: p.count || 0, skills: sk.count || 0,
          messages: m.count || 0, unread: u.count || 0,
        });
      } catch (err) {
        console.error('Stats fetch error:', err);
      }
    };
    fetchStats();
  }, []);

  const cards = [
    { label: 'Total Services', value: stats.services, icon: <FaTools size={20} />, color: '#6c5ce7' },
    { label: 'Store Items', value: stats.store, icon: <FaBoxOpen size={20} />, color: '#00cec9' },
    { label: 'Projects', value: stats.projects, icon: <FaProjectDiagram size={20} />, color: '#e17055' },
    { label: 'Skills', value: stats.skills, icon: <FaChartLine size={20} />, color: '#fdcb6e' },
    { label: 'Total Messages', value: stats.messages, icon: <FaEnvelopeOpenText size={20} />, color: '#a29bfe' },
    { label: 'Unread Messages', value: stats.unread, icon: <FaEnvelopeOpenText size={20} />, color: '#fd79a8' },
  ];

  return (
    <AdminGuard>
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Welcome, Mottalib 👋</h1>
        <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}>Manage your website content from here.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map(card => (
          <div key={card.label} className="rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1" style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold" style={{ color: 'var(--muted)' }}>{card.label}</h3>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${card.color}20`, color: card.color }}>
                {card.icon}
              </div>
            </div>
            <p className="text-4xl font-black" style={{ color: 'var(--accent)' }}>{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border p-8" style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
        <h2 className="text-xl font-bold mb-4">Quick Guide</h2>
        <div className="space-y-3 text-sm" style={{ color: 'var(--muted)' }}>
          <p>📌 Use the sidebar to navigate to different sections.</p>
          <p>📝 <strong>Services</strong> — Add, edit, or remove your digital services.</p>
          <p>🏪 <strong>Store</strong> — Manage your store product categories.</p>
          <p>🚀 <strong>Projects</strong> — Showcase your current and future projects.</p>
          <p>💡 <strong>Skills</strong> — Update your expertise and skill cards.</p>
          <p>📨 <strong>Messages</strong> — View contact form submissions.</p>
          <p>⚙️ <strong>Settings</strong> — Update phone, email, address, and social links.</p>
        </div>
      </div>
    </AdminGuard>
  );
}
