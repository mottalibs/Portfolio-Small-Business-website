'use client';
import { useEffect, useState } from 'react';
import AdminGuard from '@/components/admin/AdminGuard';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { DynamicIcon } from '@/lib/icons';
import { FaPlus, FaEdit, FaTrash, FaTimes, FaCheck } from 'react-icons/fa';

const emptyForm = { name: '', name_bn: '', desc_en: '', desc_bn: '', icon: 'FaShoppingBasket', color: '#55efc4', is_active: true };
const iconOptions = ['FaShoppingBasket','FaCandyCane','FaBirthdayCake','FaMugHot','FaStore','FaBoxOpen'];
const colorOptions = ['#55efc4','#fd79a8','#fdcb6e','#e17055','#6c5ce7','#00cec9','#a29bfe'];

export default function AdminStore() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    if (!isSupabaseConfigured()) return;
    const { data } = await supabase.from('store_items').select('*');
    setItems(data || []);
  };
  useEffect(() => { load(); }, []);

  const openNew = () => { setForm(emptyForm); setEditId(null); setShowModal(true); };
  const openEdit = (s) => { setForm(s); setEditId(s.id); setShowModal(true); };
  const save = async () => {
    setSaving(true);
    if (isSupabaseConfigured()) {
      if (editId) { const { id, created_at, ...u } = form; await supabase.from('store_items').update(u).eq('id', editId); }
      else { await supabase.from('store_items').insert([form]); }
      await load();
    }
    setShowModal(false); setSaving(false);
  };
  const del = async (id) => { if (!confirm('Delete?')) return; if (isSupabaseConfigured()) { await supabase.from('store_items').delete().eq('id', id); await load(); } };

  return (
    <AdminGuard>
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold">Manage Store</h1><p className="text-sm mt-1" style={{color:'var(--muted)'}}>Manage store product categories.</p></div>
        <button onClick={openNew} className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold border-none cursor-pointer" style={{background:'var(--accent)',color:'#0d0d0d'}}><FaPlus/> Add Item</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item=>(
          <div key={item.id} className="rounded-2xl border p-6" style={{background:'var(--bg2)',borderColor:'var(--border)'}}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl" style={{color:item.color,background:`${item.color}20`}}><DynamicIcon name={item.icon} size={20}/></div>
              <div className="flex gap-1">
                <button onClick={()=>openEdit(item)} className="w-8 h-8 rounded-lg flex items-center justify-center border-none cursor-pointer" style={{color:'var(--accent)'}}><FaEdit size={12}/></button>
                <button onClick={()=>del(item.id)} className="w-8 h-8 rounded-lg flex items-center justify-center border-none cursor-pointer" style={{color:'#e17055'}}><FaTrash size={12}/></button>
              </div>
            </div>
            <h3 className="font-bold mb-1">{item.name}</h3>
            <p className="text-sm" style={{color:'var(--muted)'}}>{item.name_bn}</p>
          </div>
        ))}
      </div>
      {showModal&&(
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border p-8 max-h-[90vh] overflow-y-auto" style={{background:'var(--bg)',borderColor:'var(--border)'}}>
            <div className="flex justify-between mb-6"><h3 className="text-xl font-bold">{editId?'Edit':'Add'} Store Item</h3><button onClick={()=>setShowModal(false)} className="border-none cursor-pointer" style={{color:'var(--muted)'}}><FaTimes/></button></div>
            <div className="flex flex-col gap-4">
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>NAME (English)</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="form-input"/></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>NAME (বাংলা)</label><input value={form.name_bn} onChange={e=>setForm({...form,name_bn:e.target.value})} className="form-input"/></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>DESC (English)</label><textarea value={form.desc_en} onChange={e=>setForm({...form,desc_en:e.target.value})} className="form-input resize-none" rows={2}/></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>DESC (বাংলা)</label><textarea value={form.desc_bn} onChange={e=>setForm({...form,desc_bn:e.target.value})} className="form-input resize-none" rows={2}/></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>ICON</label><div className="flex flex-wrap gap-2">{iconOptions.map(ic=>(<button key={ic} onClick={()=>setForm({...form,icon:ic})} className="w-10 h-10 rounded-lg flex items-center justify-center border cursor-pointer" style={{background:form.icon===ic?'var(--accent)':'var(--bg2)',color:form.icon===ic?'#0d0d0d':'var(--muted)',borderColor:form.icon===ic?'var(--accent)':'var(--border)'}}><DynamicIcon name={ic} size={16}/></button>))}</div></div>
              <div><label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{color:'var(--muted)'}}>COLOR</label><div className="flex gap-2">{colorOptions.map(c=>(<button key={c} onClick={()=>setForm({...form,color:c})} className="w-8 h-8 rounded-full cursor-pointer border-2" style={{background:c,borderColor:form.color===c?'#fff':'transparent'}}/>))}</div></div>
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
