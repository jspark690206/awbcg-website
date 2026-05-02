'use client';

import { useEffect, useState } from 'react';
import { adminStore, Notice } from '@/lib/adminStore';
import { Bell, Plus, Pencil, Trash2, Eye, EyeOff } from 'lucide-react';

const empty = (): Notice => ({ id: Date.now().toString(), title: '', content: '', published: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [editing, setEditing] = useState<Notice | null>(null);

  useEffect(() => { setNotices(adminStore.notices.getAll()); }, []);

  const save = () => {
    if (!editing || !editing.title.trim()) return;
    const updated = adminStore.notices.save({ ...editing, updatedAt: new Date().toISOString() });
    setNotices(updated);
    setEditing(null);
  };

  const del = (id: string) => {
    if (!confirm('삭제하시겠습니까?')) return;
    setNotices(adminStore.notices.delete(id));
  };

  const toggle = (n: Notice) => {
    const updated = adminStore.notices.save({ ...n, published: !n.published });
    setNotices(updated);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(26,127,196,0.08)' }}>
            <Bell size={20} style={{ color: 'var(--color-secondary)' }} />
          </div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>공지사항 관리</h1>
        </div>
        <button onClick={() => setEditing(empty())}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: 'var(--color-secondary)' }}>
          <Plus size={16} /> 새 공지 작성
        </button>
      </div>

      <div className="flex gap-5">
        {/* 목록 */}
        <div className="flex-1 space-y-3">
          {notices.map(n => (
            <div key={n.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  {n.published
                    ? <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: 'rgba(0,168,120,0.1)', color: '#00A878' }}>게시중</span>
                    : <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-gray-100 text-gray-400">숨김</span>}
                  <span className="text-xs text-gray-400">{n.updatedAt.slice(0,10)}</span>
                </div>
                <p className="font-medium text-sm text-gray-800 truncate">{n.title}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button onClick={() => toggle(n)} className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100" title={n.published ? '숨기기' : '게시'}>
                  {n.published ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
                <button onClick={() => setEditing(n)} className="p-1.5 rounded-lg text-gray-400 hover:bg-blue-50 hover:text-blue-500">
                  <Pencil size={15} />
                </button>
                <button onClick={() => del(n.id)} className="p-1.5 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-500">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
          {notices.length === 0 && <div className="text-center text-gray-400 py-12 bg-white rounded-2xl border border-gray-100">공지사항이 없습니다.</div>}
        </div>

        {/* 편집 패널 */}
        {editing && (
          <div className="w-96 flex-shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4 self-start sticky top-6">
            <h3 className="font-bold text-base" style={{ color: 'var(--color-primary)' }}>
              {editing.createdAt === editing.updatedAt && !notices.find(n=>n.id===editing.id) ? '새 공지 작성' : '공지 수정'}
            </h3>
            <div>
              <label className="text-xs font-medium text-gray-500 block mb-1.5">제목 *</label>
              <input value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })}
                placeholder="공지사항 제목" className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 block mb-1.5">내용 *</label>
              <textarea value={editing.content} onChange={e => setEditing({ ...editing, content: e.target.value })}
                rows={6} placeholder="공지사항 내용을 입력하세요."
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm resize-none outline-none focus:border-blue-400" />
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={editing.published} onChange={e => setEditing({ ...editing, published: e.target.checked })} className="accent-blue-600" />
              <span className="text-sm text-gray-700">즉시 게시</span>
            </label>
            <div className="flex gap-2">
              <button onClick={() => setEditing(null)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50">취소</button>
              <button onClick={save} className="flex-1 py-2.5 rounded-xl text-white text-sm font-medium hover:opacity-90"
                style={{ backgroundColor: 'var(--color-secondary)' }}>저장</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
