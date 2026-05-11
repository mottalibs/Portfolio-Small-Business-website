'use client';
import { useEffect, useState } from 'react';
import AdminGuard from '@/components/admin/AdminGuard';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { FaCheck } from 'react-icons/fa';

const configFields = [
  { key: 'phone', label: 'PHONE NUMBER', placeholder: '+880 1XXX-XXXXXX' },
  { key: 'email', label: 'EMAIL', placeholder: 'hello@charmathadigital.com' },
  { key: 'address', label: 'ADDRESS', placeholder: 'চারমাথা ডিজিটাল পয়েন্ট, আপনার এলাকা' },
  { key: 'whatsapp', label: 'WHATSAPP NUMBER', placeholder: '8801XXXXXXXXX' },
  { key: 'facebook', label: 'FACEBOOK URL', placeholder: 'https://facebook.com/...' },
  { key: 'instagram', label: 'INSTAGRAM URL', placeholder: 'https://instagram.com/...' },
  { key: 'github', label: 'GITHUB URL', placeholder: 'https://github.com/...' },
  { key: 'stat_clients', label: 'STAT: HAPPY CLIENTS', placeholder: '50' },
  { key: 'stat_services', label: 'STAT: SERVICES', placeholder: '10' },
  { key: 'stat_years', label: 'STAT: YEARS', placeholder: '3' },
];

export default function AdminSettings() {
  const [config, setConfig] = useState({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const load = async () => {
      if (!isSupabaseConfigured()) {
        const defaults = {};
        configFields.forEach(f => { defaults[f.key] = f.placeholder; });
        setConfig(defaults);
        return;
      }
      const { data } = await supabase.from('site_config').select('*');
      const obj = {};
      (data || []).forEach(c => { obj[c.key] = c.value; });
      setConfig(obj);
    };
    load();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    if (isSupabaseConfigured()) {
      const promises = Object.entries(config).map(([key, value]) =>
        supabase.from('site_config').upsert({ key, value, updated_at: new Date().toISOString() })
      );
      await Promise.all(promises);
    }
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <AdminGuard>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm mt-1" style={{color:'var(--muted)'}}>Update contact info, social links, and stats.</p>
      </div>
      <div className="max-w-2xl">
        <div className="rounded-2xl border p-8" style={{background:'var(--bg2)',borderColor:'var(--border)'}}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {configFields.map(field => (
              <div key={field.key} className={field.key === 'address' ? 'sm:col-span-2' : ''}>
                <label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>{field.label}</label>
                <input
                  value={config[field.key] || ''}
                  onChange={e => setConfig({ ...config, [field.key]: e.target.value })}
                  className="form-input"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold border-none cursor-pointer transition-all duration-300 hover:brightness-110 disabled:opacity-60"
              style={{background:'var(--accent)',color:'#0d0d0d'}}
            >
              {saving ? 'Saving...' : saved ? <><FaCheck/> Saved!</> : 'Save Settings'}
            </button>
            {saved && <span className="text-sm font-semibold" style={{color:'#55efc4'}}>✅ Settings updated successfully!</span>}
          </div>
        </div>
      </div>
    </AdminGuard>
  );
}
