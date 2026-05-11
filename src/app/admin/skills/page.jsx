'use client';
import { useEffect, useState } from 'react';
import AdminGuard from '@/components/admin/AdminGuard';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { DynamicIcon } from '@/lib/icons';
import { FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';

const emptyForm = { title: '', desc_en: '', desc_bn: '', icon: 'FaCode', color: '#6c5ce7', sort_order: 0, is_active: true };
const iconOptions = ['FaPrint','FaLaptopCode','FaFileAlt','FaIdCardAlt','FaBriefcase','FaStore','FaCode','FaGlobe'];
const colorOptions = ['#6c5ce7','#00cec9','#e17055','#fdcb6e','#a29bfe','#55efc4','#fd79a8'];

export default function AdminSkills() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    if (!isSupabaseConfigured()) return;
    const { data } = await supabase.from('skills').select('*').order('sort_order');
    setItems(data || []);
  };
  useEffect(() => { load(); }, []);

  const openNew = () => { setForm(emptyForm); setEditId(null); setShowModal(true); };
  const openEdit = (s) => { setForm(s); setEditId(s.id); setShowModal(true); };
  const save = async () => {
    setSaving(true);
    if (isSupabaseConfigured()) {
      if (editId) { const { id, created_at, ...u } = form; await supabase.from('skills').update(u).eq('id', editId); }
      else { await supabase.from('skills').insert([form]); }
      await load();
    }
    setShowModal(false); setSaving(false);
  };
  const del = async (id) => { if (!confirm('Delete?')) return; if (isSupabaseConfigured()) { await supabase.from('skills').delete().eq('id', id); await load(); } };

  return (
    <AdminGuard>
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold">Manage Skills</h1><p className="text-sm mt-1" style={{color:'var(--muted)'}}>Update your expertise cards.</p></div>
        <button onClick={openNew} className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold border-none cursor-pointer" style={{background:'var(--accent)',color:'#0d0d0d'}}><FaPlus/> Add Skill</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(s=>(
          <div key={s.id} className="rounded-2xl border p-6" style={{background:'var(--bg2)',borderColor:'var(--border)'}}>
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background:s.color,color:'#0d0d0d'}}><DynamicIcon name={s.icon} size={20}/></div>
              <div className="flex gap-1"><button onClick={()=>openEdit(s)} className="w-8 h-8 rounded-lg flex items-center justify-center border-none cursor-pointer" style={{color:'var(--accent)'}}><FaEdit size={12}/></button><button onClick={()=>del(s.id)} className="w-8 h-8 rounded-lg flex items-center justify-center border-none cursor-pointer" style={{color:'#e17055'}}><FaTrash size={12}/></button></div>
            </div>
            <h3 className="font-bold text-sm tracking-[1px] mb-1">{s.title}</h3>
            <p className="text-xs" style={{color:'var(--muted)'}}>{s.desc_bn||s.desc_en}</p>
          </div>
        ))}
      </div>
      {showModal&&(
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border p-8 max-h-[90vh] overflow-y-auto" style={{background:'var(--bg)',borderColor:'var(--border)'}}>
            <div className="flex justify-between mb-6"><h3 className="text-xl font-bold">{editId?'Edit':'Add'} Skill</h3><button onClick={()=>setShowModal(false)} className="border-none cursor-pointer" style={{color:'var(--muted)'}}><FaTimes/></button></div>
            <div className="flex flex-col gap-4">
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>TITLE</label><input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} className="form-input"/></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>DESC (English)</label><textarea value={form.desc_en} onChange={e=>setForm({...form,desc_en:e.target.value})} className="form-input resize-none" rows={2}/></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>DESC (বাংলা)</label><textarea value={form.desc_bn} onChange={e=>setForm({...form,desc_bn:e.target.value})} className="form-input resize-none" rows={2}/></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>ICON</label><div className="flex flex-wrap gap-2">{iconOptions.map(ic=>(<button key={ic} onClick={()=>setForm({...form,icon:ic})} className="w-10 h-10 rounded-lg flex items-center justify-center border cursor-pointer" style={{background:form.icon===ic?'var(--accent)':'var(--bg2)',color:form.icon===ic?'#0d0d0d':'var(--muted)',borderColor:form.icon===ic?'var(--accent)':'var(--border)'}}><DynamicIcon name={ic} size={16}/></button>))}</div></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>COLOR</label><div className="flex gap-2">{colorOptions.map(c=>(<button key={c} onClick={()=>setForm({...form,color:c})} className="w-8 h-8 rounded-full cursor-pointer border-2" style={{background:c,borderColor:form.color===c?'#fff':'transparent'}}/>))}</div></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>SORT ORDER</label><input type="number" value={form.sort_order} onChange={e=>setForm({...form,sort_order:parseInt(e.target.value)||0})} className="form-input"/></div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={save} disabled={saving} className="flex-1 py-3 rounded-xl text-sm font-bold border-none cursor-pointer disabled:opacity-60" style={{background:'var(--accent)',color:'#0d0d0d'}}>{saving?'Saving...':'Save'}</button>
              <button onClick={()=>setShowModal(false)} className="px-6 py-3 rounded-xl text-sm border cursor-pointer" style={{borderColor:'var(--border)',color:'var(--text)'}}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </AdminGuard>
  );
}
