'use client';
import { useEffect, useState } from 'react';
import AdminGuard from '@/components/admin/AdminGuard';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { DynamicIcon } from '@/lib/icons';
import { FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';

const emptyForm = { title: '', desc_en: '', desc_bn: '', icon: 'FaRocket', status: 'current', tags: [], is_active: true };
const iconOptions = ['FaStoreAlt','FaGlobe','FaRocket','FaCode','FaLaptopCode','FaStore'];

export default function AdminProjects() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [tagInput, setTagInput] = useState('');
  const [saving, setSaving] = useState(false);

  const load = async () => {
    if (!isSupabaseConfigured()) return;
    const { data } = await supabase.from('projects').select('*');
    setItems(data || []);
  };
  useEffect(() => { load(); }, []);

  const openNew = () => { setForm(emptyForm); setEditId(null); setShowModal(true); };
  const openEdit = (s) => { setForm({ ...s, tags: s.tags || [] }); setEditId(s.id); setShowModal(true); };
  const addTag = () => { if (tagInput.trim()) { setForm({...form, tags: [...form.tags, tagInput.trim()]}); setTagInput(''); } };
  const removeTag = (i) => { setForm({...form, tags: form.tags.filter((_,idx)=>idx!==i)}); };

  const save = async () => {
    setSaving(true);
    if (isSupabaseConfigured()) {
      if (editId) { const { id, created_at, ...u } = form; await supabase.from('projects').update(u).eq('id', editId); }
      else { await supabase.from('projects').insert([form]); }
      await load();
    }
    setShowModal(false); setSaving(false);
  };
  const del = async (id) => { if (!confirm('Delete?')) return; if (isSupabaseConfigured()) { await supabase.from('projects').delete().eq('id', id); await load(); } };

  return (
    <AdminGuard>
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold">Manage Projects</h1><p className="text-sm mt-1" style={{color:'var(--muted)'}}>Showcase your work and projects.</p></div>
        <button onClick={openNew} className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold border-none cursor-pointer" style={{background:'var(--accent)',color:'#0d0d0d'}}><FaPlus/> Add Project</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(p=>(
          <div key={p.id} className="rounded-2xl border overflow-hidden" style={{background:'var(--bg2)',borderColor:'var(--border)',opacity:p.status==='coming_soon'?0.6:1}}>
            <div className="h-32 flex items-center justify-center" style={{background:'var(--bg3)',color:'var(--accent)'}}><DynamicIcon name={p.icon} size={40}/></div>
            <div className="p-5">
              <span className="text-[.65rem] tracking-[2px] font-bold" style={{color:'var(--accent)'}}>{p.status?.toUpperCase().replace('_',' ')}</span>
              <h3 className="font-bold mt-1 mb-2">{p.title}</h3>
              <div className="flex flex-wrap gap-1 mb-3">{(p.tags||[]).map(t=>(<span key={t} className="px-2 py-0.5 rounded-full text-[.65rem] border" style={{borderColor:'var(--border)',color:'var(--muted)'}}>{t}</span>))}</div>
              <div className="flex gap-1">
                <button onClick={()=>openEdit(p)} className="w-8 h-8 rounded-lg flex items-center justify-center border-none cursor-pointer" style={{color:'var(--accent)'}}><FaEdit size={12}/></button>
                <button onClick={()=>del(p.id)} className="w-8 h-8 rounded-lg flex items-center justify-center border-none cursor-pointer" style={{color:'#e17055'}}><FaTrash size={12}/></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal&&(
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border p-8 max-h-[90vh] overflow-y-auto" style={{background:'var(--bg)',borderColor:'var(--border)'}}>
            <div className="flex justify-between mb-6"><h3 className="text-xl font-bold">{editId?'Edit':'Add'} Project</h3><button onClick={()=>setShowModal(false)} className="border-none cursor-pointer" style={{color:'var(--muted)'}}><FaTimes/></button></div>
            <div className="flex flex-col gap-4">
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>TITLE</label><input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} className="form-input"/></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>DESC (English)</label><textarea value={form.desc_en} onChange={e=>setForm({...form,desc_en:e.target.value})} className="form-input resize-none" rows={2}/></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>DESC (বাংলা)</label><textarea value={form.desc_bn} onChange={e=>setForm({...form,desc_bn:e.target.value})} className="form-input resize-none" rows={2}/></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>STATUS</label><select value={form.status} onChange={e=>setForm({...form,status:e.target.value})} className="form-input"><option value="current">Current</option><option value="web">Web</option><option value="coming_soon">Coming Soon</option></select></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>ICON</label><div className="flex flex-wrap gap-2">{iconOptions.map(ic=>(<button key={ic} onClick={()=>setForm({...form,icon:ic})} className="w-10 h-10 rounded-lg flex items-center justify-center border cursor-pointer" style={{background:form.icon===ic?'var(--accent)':'var(--bg2)',color:form.icon===ic?'#0d0d0d':'var(--muted)',borderColor:form.icon===ic?'var(--accent)':'var(--border)'}}><DynamicIcon name={ic} size={16}/></button>))}</div></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>TAGS</label><div className="flex gap-2 mb-2"><input value={tagInput} onChange={e=>setTagInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&(e.preventDefault(),addTag())} className="form-input flex-1" placeholder="Add tag"/><button onClick={addTag} className="px-4 rounded-xl border-none cursor-pointer" style={{background:'var(--accent)',color:'#0d0d0d'}}>+</button></div><div className="flex flex-wrap gap-1">{form.tags.map((t,i)=>(<span key={i} className="px-3 py-1 rounded-full text-xs flex items-center gap-1 border" style={{borderColor:'var(--border)',color:'var(--muted)'}}>{t}<button onClick={()=>removeTag(i)} className="border-none cursor-pointer" style={{color:'#e17055'}}><FaTimes size={8}/></button></span>))}</div></div>
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
