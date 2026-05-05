'use client';

import { firestoreStore } from '@/lib/firestoreStore';
import { useEffect, useState } from 'react';

import { QAItem } from '@/lib/firestoreStore';
import { HelpCircle, Plus, Pencil, Trash2 } from 'lucide-react';

const CATS = ['일반', 'MES', 'AI·BigData', '지원사업', '유지보수'];
const emptyQA = (): QAItem => ({ id: '', question: '', category: '일반', answer: '', published: true, createdAt: '' });

export default function QAPage() {
  const [items, setItems] = useState<QAItem[]>([]);
  const [editing, setEditing] = useState<QAItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firestoreStore.qa.getAll().then(data => { setItems(data); setLoading(false); });
  }, []);

  const save = async () => {
    if (!editing || !editing.question.trim() || !editing.answer.trim()) return;
    const isNew = !items.find(i => i.id === editing.id);
    if (isNew) {
      const id = await firestoreStore.qa.add({ question: editing.question, category: editing.category, answer: editing.answer, published: editing.published });
      const now = new Date().toISOString();
      setItems(prev => [{ ...editing, id, createdAt: now }, ...prev]);
    } else {
      await firestoreStore.qa.update(editing.id, { question: editing.question, category: editing.category, answer: editing.answer, published: editing.published });
      setItems(prev => prev.map(i => i.id === editing.id ? { ...i, ...editing } : i));
    }
    setEditing(null);
  };

  const del = async (id: string) => {
    if (!confirm('삭제하시겠습니까?')) return;
    await firestoreStore.qa.delete(id);
    setItems(prev => prev.filter(i => i.id !== id));
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(139,92,246,0.08)' }}>
            <HelpCircle size={20} style={{ color: '#8B5CF6' }} />
          </div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>Q&A 관리</h1>
        </div>
        <button onClick={() => setEditing(emptyQA())}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-medium hover:opacity-90"
          style={{ backgroundColor: '#8B5CF6' }}>
          <Plus size={16} /> Q&A 추가
        </button>
      </div>

      {loading && <div className="text-center text-gray-400 py-12">불러오는 중...</div>}

      <div className="flex gap-5">
        <div className="flex-1 space-y-3">
          {!loading && items.length === 0 && <div className="text-center text-gray-400 py-12 bg-white rounded-2xl border border-gray-100">Q&A가 없습니다.</div>}
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: 'rgba(139,92,246,0.1)', color: '#8B5CF6' }}>{item.category}</span>
                  </div>
                  <p className="font-semibold text-sm text-gray-800 mb-1">Q. {item.question}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">A. {item.answer}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button onClick={() => setEditing(item)} className="p-1.5 rounded-lg text-gray-400 hover:bg-blue-50 hover:text-blue-500"><Pencil size={15} /></button>
                  <button onClick={() => del(item.id)} className="p-1.5 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-500"><Trash2 size={15} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {editing && (
          <div className="w-96 flex-shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4 self-start sticky top-6">
            <h3 className="font-bold text-base" style={{ color: 'var(--color-primary)' }}>Q&A {items.find(i => i.id === editing.id) ? '수정' : '추가'}</h3>
            <div>
              <label className="text-xs font-medium text-gray-500 block mb-1.5">카테고리</label>
              <select value={editing.category} onChange={e => setEditing({ ...editing, category: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-400 bg-white">
                {CATS.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 block mb-1.5">질문 *</label>
              <textarea value={editing.question} onChange={e => setEditing({ ...editing, question: e.target.value })}
                rows={3} placeholder="자주 묻는 질문 내용"
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm resize-none outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 block mb-1.5">답변 *</label>
              <textarea value={editing.answer} onChange={e => setEditing({ ...editing, answer: e.target.value })}
                rows={5} placeholder="질문에 대한 답변"
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm resize-none outline-none focus:border-blue-400" />
            </div>
            <div className="flex gap-2">
              <button onClick={() => setEditing(null)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50">취소</button>
              <button onClick={save} className="flex-1 py-2.5 rounded-xl text-white text-sm font-medium hover:opacity-90"
                style={{ backgroundColor: '#8B5CF6' }}>저장</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
