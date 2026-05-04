'use client';

import { useEffect, useState } from 'react';
import { firestoreStore, Career } from '@/lib/firestoreStore';
import { Briefcase, Plus, Pencil, Trash2, Eye, EyeOff } from 'lucide-react';

const emptyCareer = (): Career => ({ id: '', title: '', department: '', type: '정규직', deadline: '', description: '', published: true, createdAt: '' });

export default function CareersPage() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [editing, setEditing] = useState<Career | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firestoreStore.careers.getAll().then(data => { setCareers(data); setLoading(false); });
  }, []);

  const save = async () => {
    if (!editing || !editing.title.trim()) return;
    const isNew = !careers.find(c => c.id === editing.id);
    if (isNew) {
      const id = await firestoreStore.careers.add({ title: editing.title, department: editing.department, type: editing.type, deadline: editing.deadline, description: editing.description, published: editing.published });
      const now = new Date().toISOString();
      setCareers(prev => [{ ...editing, id, createdAt: now }, ...prev]);
    } else {
      await firestoreStore.careers.update(editing.id, { title: editing.title, department: editing.department, type: editing.type, deadline: editing.deadline, description: editing.description, published: editing.published });
      setCareers(prev => prev.map(c => c.id === editing.id ? { ...c, ...editing } : c));
    }
    setEditing(null);
  };

  const del = async (id: string) => {
    if (!confirm('삭제하시겠습니까?')) return;
    await firestoreStore.careers.delete(id);
    setCareers(prev => prev.filter(c => c.id !== id));
  };

  const toggle = async (c: Career) => {
    await firestoreStore.careers.update(c.id, { published: !c.published });
    setCareers(prev => prev.map(item => item.id === c.id ? { ...item, published: !c.published } : item));
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(0,168,120,0.08)' }}>
            <Briefcase size={20} style={{ color: 'var(--color-accent)' }} />
          </div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>채용공고 관리</h1>
        </div>
        <button onClick={() => setEditing(emptyCareer())}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-medium hover:opacity-90"
          style={{ backgroundColor: 'var(--color-accent)' }}>
          <Plus size={16} /> 공고 등록
        </button>
      </div>

      {loading && <div className="text-center text-gray-400 py-12">불러오는 중...</div>}

      <div className="flex gap-5">
        <div className="flex-1 space-y-3">
          {!loading && careers.length === 0 && <div className="text-center text-gray-400 py-12 bg-white rounded-2xl border border-gray-100">채용공고가 없습니다.</div>}
          {careers.map(c => (
            <div key={c.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: 'rgba(0,168,120,0.1)', color: '#00A878' }}>{c.type}</span>
                  <span className="text-xs text-gray-400">{c.department}</span>
                  {!c.published && <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-400">숨김</span>}
                </div>
                <p className="font-semibold text-sm text-gray-800">{c.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">마감: {c.deadline || '미정'}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button onClick={() => toggle(c)} className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100">
                  {c.published ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
                <button onClick={() => setEditing(c)} className="p-1.5 rounded-lg text-gray-400 hover:bg-blue-50 hover:text-blue-500"><Pencil size={15} /></button>
                <button onClick={() => del(c.id)} className="p-1.5 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-500"><Trash2 size={15} /></button>
              </div>
            </div>
          ))}
        </div>

        {editing && (
          <div className="w-96 flex-shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4 self-start sticky top-6">
            <h3 className="font-bold text-base" style={{ color: 'var(--color-primary)' }}>채용공고 {careers.find(c => c.id === editing.id) ? '수정' : '등록'}</h3>
            {[
              { label: '포지션 *', key: 'title', placeholder: '예) MES 개발 엔지니어' },
              { label: '부서', key: 'department', placeholder: '예) 제조실행팀' },
              { label: '마감일', key: 'deadline', placeholder: '예) 2026-06-30' },
            ].map(({ label, key, placeholder }) => (
              <div key={key}>
                <label className="text-xs font-medium text-gray-500 block mb-1.5">{label}</label>
                <input value={(editing as unknown as Record<string, string>)[key]} onChange={e => setEditing({ ...editing, [key]: e.target.value })}
                  placeholder={placeholder} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-400" />
              </div>
            ))}
            <div>
              <label className="text-xs font-medium text-gray-500 block mb-1.5">고용 형태</label>
              <select value={editing.type} onChange={e => setEditing({ ...editing, type: e.target.value as Career['type'] })}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-400 bg-white">
                {['정규직', '계약직', '인턴'].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 block mb-1.5">상세 내용</label>
              <textarea value={editing.description} onChange={e => setEditing({ ...editing, description: e.target.value })}
                rows={5} placeholder="업무 내용, 자격 요건 등"
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm resize-none outline-none focus:border-blue-400" />
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={editing.published} onChange={e => setEditing({ ...editing, published: e.target.checked })} className="accent-blue-600" />
              <span className="text-sm text-gray-700">즉시 게시</span>
            </label>
            <div className="flex gap-2">
              <button onClick={() => setEditing(null)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50">취소</button>
              <button onClick={save} className="flex-1 py-2.5 rounded-xl text-white text-sm font-medium hover:opacity-90"
                style={{ backgroundColor: 'var(--color-accent)' }}>저장</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
