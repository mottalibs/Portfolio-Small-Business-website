'use client';
import { useEffect, useState } from 'react';
import AdminGuard from '@/components/admin/AdminGuard';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { DynamicIcon } from '@/lib/icons';
import { FaPlus, FaEdit, FaTrash, FaTimes, FaCheck } from 'react-icons/fa';

const emptyForm = { title: '', title_bn: '', desc_en: '', desc_bn: '', icon: 'FaPrint', sort_order: 0, is_active: true };
const iconOptions = ['FaPrint','FaBriefcase','FaIdCard','FaKeyboard','FaFileContract','FaQrcode','FaLaptopCode','FaFileAlt','FaStore','FaCode','FaGlobe'];

export default function AdminServices() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    if (!isSupabaseConfigured()) return;
    const { data } = await supabase.from('services').select('*').order('sort_order');
    setItems(data || []);
  };
  useEffect(() => { load(); }, []);

  const openNew = () => { setForm(emptyForm); setEditId(null); setShowModal(true); };
  const openEdit = (s) => { setForm(s); setEditId(s.id); setShowModal(true); };

  const save = async () => {
    setSaving(true);
    if (isSupabaseConfigured()) {
      if (editId) {
        const { id, created_at, ...u } = form;
        await supabase.from('services').update(u).eq('id', editId);
      } else {
        await supabase.from('services').insert([form]);
      }
      await load();
    }
    setShowModal(false); setSaving(false);
  };

  const del = async (id) => {
    if (!confirm('Delete this service?')) return;
    if (isSupabaseConfigured()) { await supabase.from('services').delete().eq('id', id); await load(); }
  };

  const toggle = async (id, val) => {
    if (isSupabaseConfigured()) { await supabase.from('services').update({ is_active: !val }).eq('id', id); await load(); }
  };

  return (
    <AdminGuard>
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold">Manage Services</h1><p className="text-sm mt-1" style={{color:'var(--muted)'}}>Add, edit, or remove your digital services.</p></div>
        <button onClick={openNew} className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold border-none cursor-pointer" style={{background:'var(--accent)',color:'#0d0d0d'}}><FaPlus /> Add Service</button>
      </div>
      <div className="rounded-2xl border overflow-hidden" style={{background:'var(--bg2)',borderColor:'var(--border)'}}>
        <table className="w-full">
          <thead><tr style={{borderBottom:'1px solid var(--border)'}}><th className="text-left px-6 py-4 text-[.7rem] tracking-[2px]" style={{color:'var(--muted)'}}>ICON</th><th className="text-left px-6 py-4 text-[.7rem] tracking-[2px]" style={{color:'var(--muted)'}}>TITLE</th><th className="text-center px-6 py-4 text-[.7rem] tracking-[2px]" style={{color:'var(--muted)'}}>ACTIVE</th><th className="text-right px-6 py-4 text-[.7rem] tracking-[2px]" style={{color:'var(--muted)'}}>ACTIONS</th></tr></thead>
          <tbody>
            {items.map(s=>(
              <tr key={s.id} style={{borderBottom:'1px solid var(--border)'}}>
                <td className="px-6 py-4"><div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{background:'var(--accent)',color:'#0d0d0d'}}><DynamicIcon name={s.icon} size={16}/></div></td>
                <td className="px-6 py-4"><div className="font-semibold">{s.title}</div><div className="text-xs" style={{color:'var(--muted)'}}>{s.title_bn}</div></td>
                <td className="px-6 py-4 text-center"><button onClick={()=>toggle(s.id,s.is_active)} className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto border-none cursor-pointer" style={{background:s.is_active?'rgba(106,219,79,.15)':'rgba(225,112,85,.15)',color:s.is_active?'#6adb4f':'#e17055'}}>{s.is_active?<FaCheck size={12}/>:<FaTimes size={12}/>}</button></td>
                <td className="px-6 py-4"><div className="flex items-center justify-end gap-2"><button onClick={()=>openEdit(s)} className="w-8 h-8 rounded-lg flex items-center justify-center border-none cursor-pointer" style={{color:'var(--accent)'}}><FaEdit size={14}/></button><button onClick={()=>del(s.id)} className="w-8 h-8 rounded-lg flex items-center justify-center border-none cursor-pointer" style={{color:'#e17055'}}><FaTrash size={14}/></button></div></td>
              </tr>
            ))}
            {items.length===0&&<tr><td colSpan={4} className="px-6 py-12 text-center" style={{color:'var(--muted)'}}>No services yet.</td></tr>}
          </tbody>
        </table>
      </div>
      {showModal&&(
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border p-8 max-h-[90vh] overflow-y-auto" style={{background:'var(--bg)',borderColor:'var(--border)'}}>
            <div className="flex justify-between mb-6"><h3 className="text-xl font-bold">{editId?'Edit':'Add'} Service</h3><button onClick={()=>setShowModal(false)} className="border-none cursor-pointer" style={{color:'var(--muted)'}}><FaTimes/></button></div>
            <div className="flex flex-col gap-4">
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>TITLE (English)</label><input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} className="form-input"/></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>TITLE (বাংলা)</label><input value={form.title_bn} onChange={e=>setForm({...form,title_bn:e.target.value})} className="form-input"/></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>DESC (English)</label><textarea value={form.desc_en} onChange={e=>setForm({...form,desc_en:e.target.value})} className="form-input resize-none" rows={2}/></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>DESC (বাংলা)</label><textarea value={form.desc_bn} onChange={e=>setForm({...form,desc_bn:e.target.value})} className="form-input resize-none" rows={2}/></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>ICON</label><div className="flex flex-wrap gap-2">{iconOptions.map(ic=>(<button key={ic} onClick={()=>setForm({...form,icon:ic})} className="w-10 h-10 rounded-lg flex items-center justify-center border cursor-pointer" style={{background:form.icon===ic?'var(--accent)':'var(--bg2)',color:form.icon===ic?'#0d0d0d':'var(--muted)',borderColor:form.icon===ic?'var(--accent)':'var(--border)'}}><DynamicIcon name={ic} size={16}/></button>))}</div></div>
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
