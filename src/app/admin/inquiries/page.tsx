'use client';

import { useEffect, useState } from 'react';
import { firestoreStore, Inquiry } from '@/lib/firestoreStore';
import { MessageSquare, ChevronDown } from 'lucide-react';

const STATUS_OPTIONS = [
  { value: 'new', label: '신규', color: '#EF4444' },
  { value: 'inProgress', label: '처리중', color: '#F59E0B' },
  { value: 'done', label: '완료', color: '#00A878' },
] as const;

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const [reply, setReply] = useState('');
  const [filter, setFilter] = useState<'all' | 'new' | 'inProgress' | 'done'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firestoreStore.inquiries.getAll().then(data => { setInquiries(data); setLoading(false); });
  }, []);

  const filtered = filter === 'all' ? inquiries : inquiries.filter(i => i.status === filter);

  const updateStatus = async (id: string, status: Inquiry['status']) => {
    await firestoreStore.inquiries.update(id, { status });
    setInquiries(prev => prev.map(i => i.id === id ? { ...i, status } : i));
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, status } : null);
  };

  const saveReply = async () => {
    if (!selected) return;
    await firestoreStore.inquiries.update(selected.id, { reply, status: 'done' });
    setInquiries(prev => prev.map(i => i.id === selected.id ? { ...i, reply, status: 'done' } : i));
    setSelected(prev => prev ? { ...prev, reply, status: 'done' } : null);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(13,43,94,0.08)' }}>
            <MessageSquare size={20} style={{ color: 'var(--color-primary)' }} />
          </div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>문의 관리</h1>
        </div>
        <div className="flex gap-2">
          {[{v:'all',l:'전체'}, {v:'new',l:'신규'}, {v:'inProgress',l:'처리중'}, {v:'done',l:'완료'}].map(f => (
            <button key={f.v} onClick={() => setFilter(f.v as typeof filter)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filter === f.v ? 'text-white' : 'bg-gray-100 text-gray-500'}`}
              style={filter === f.v ? { backgroundColor: 'var(--color-primary)' } : {}}>
              {f.l}
            </button>
          ))}
        </div>
      </div>

      {loading && <div className="text-center text-gray-400 py-12">불러오는 중...</div>}

      <div className="flex gap-5">
        <div className="flex-1 space-y-3 min-w-0">
          {!loading && filtered.length === 0 && <div className="text-center text-gray-400 py-12 bg-white rounded-2xl border border-gray-100">문의가 없습니다.</div>}
          {filtered.map((inq) => {
            const s = STATUS_OPTIONS.find(o => o.value === inq.status)!;
            return (
              <div key={inq.id}
                onClick={() => { setSelected(inq); setReply(inq.reply ?? ''); }}
                className={`bg-white rounded-2xl border p-4 cursor-pointer hover:shadow-md transition-all ${selected?.id === inq.id ? 'border-blue-400 shadow-md' : 'border-gray-100'}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>{inq.company}</span>
                      <span className="text-gray-400 text-xs">·</span>
                      <span className="text-gray-500 text-xs">{inq.name}</span>
                    </div>
                    <p className="text-xs text-blue-500 mb-1">{inq.type}</p>
                    <p className="text-sm text-gray-600 truncate">{inq.message}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{ backgroundColor: `${s.color}15`, color: s.color }}>{s.label}</span>
                    <span className="text-xs text-gray-400">{inq.createdAt.slice(0,10)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selected && (
          <div className="w-80 flex-shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4 self-start sticky top-6">
            <h3 className="font-bold text-base" style={{ color: 'var(--color-primary)' }}>문의 상세</h3>
            <div className="space-y-2 text-sm">
              {[['회사명', selected.company], ['담당자', selected.name], ['연락처', selected.phone], ['이메일', selected.email], ['문의 유형', selected.type]].map(([k,v]) => (
                <div key={k} className="flex gap-2">
                  <span className="text-gray-400 w-16 flex-shrink-0">{k}</span>
                  <span className="text-gray-700 font-medium">{v}</span>
                </div>
              ))}
            </div>
            <div className="p-3 rounded-xl bg-gray-50 text-sm text-gray-600 leading-relaxed">{selected.message}</div>
            <div>
              <label className="text-xs font-medium text-gray-500 block mb-1.5">처리 상태</label>
              <div className="relative">
                <select value={selected.status} onChange={e => updateStatus(selected.id, e.target.value as Inquiry['status'])}
                  className="w-full appearance-none px-3 py-2 rounded-xl border border-gray-200 text-sm pr-8 outline-none focus:border-blue-400">
                  {STATUS_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 block mb-1.5">답변 내용</label>
              <textarea value={reply} onChange={e => setReply(e.target.value)} rows={4}
                placeholder="고객에게 전달할 답변을 작성해 주세요."
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm resize-none outline-none focus:border-blue-400" />
              <button onClick={saveReply}
                className="w-full mt-2 py-2.5 rounded-xl text-white text-sm font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'var(--color-secondary)' }}>
                답변 저장 (완료 처리)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
