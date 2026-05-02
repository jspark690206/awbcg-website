'use client';

import { useState } from 'react';
import { BookOpen, ExternalLink, Save } from 'lucide-react';

const DEFAULT_MANUALS = [
  { name: 'QMS', full: '품질경영시스템', url: '' },
  { name: 'SCM', full: '공급망관리 시스템', url: '' },
  { name: 'EMAX ERP', full: '자동차부품 전용 ERP', url: '' },
  { name: 'COIL', full: '코일 관리 시스템', url: '' },
  { name: '예산통제', full: '예산 관리 시스템', url: '' },
  { name: 'CKD MES', full: '반완성품 제조실행 시스템', url: '' },
  { name: 'POP', full: '생산시점관리 시스템', url: '' },
  { name: 'APQP', full: '제품품질사전계획 시스템', url: '' },
  { name: '설비관리', full: '설비 유지보수 관리 시스템', url: '' },
];

export default function ManualsPage() {
  const stored = typeof window !== 'undefined' ? localStorage.getItem('admin_manuals') : null;
  const [manuals, setManuals] = useState<{name:string;full:string;url:string}[]>(
    stored ? JSON.parse(stored) : DEFAULT_MANUALS
  );
  const [saved, setSaved] = useState(false);

  const update = (idx: number, url: string) => {
    setManuals(prev => prev.map((m, i) => i === idx ? { ...m, url } : m));
    setSaved(false);
  };

  const saveAll = () => {
    localStorage.setItem('admin_manuals', JSON.stringify(manuals));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(26,127,196,0.08)' }}>
            <BookOpen size={20} style={{ color: 'var(--color-secondary)' }} />
          </div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>제품설명서 관리</h1>
        </div>
        <button onClick={saveAll}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-medium hover:opacity-90"
          style={{ backgroundColor: saved ? '#00A878' : 'var(--color-secondary)' }}>
          <Save size={16} /> {saved ? '저장됨 ✓' : '전체 저장'}
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center gap-4 text-xs font-semibold text-gray-400">
          <span className="w-28">제품명</span>
          <span className="flex-1">PDF/다운로드 URL</span>
          <span className="w-20">미리보기</span>
        </div>
        {manuals.map((m, idx) => (
          <div key={m.name} className="px-5 py-3.5 flex items-center gap-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
            <div className="w-28 flex-shrink-0">
              <p className="font-semibold text-sm text-gray-800">{m.name}</p>
              <p className="text-xs text-gray-400">{m.full}</p>
            </div>
            <input value={m.url} onChange={e => update(idx, e.target.value)}
              placeholder="https://... (PDF URL 또는 구글 드라이브 공유 링크)"
              className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-blue-400" />
            <div className="w-20 flex justify-center">
              {m.url ? (
                <a href={m.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-blue-500 hover:underline">
                  <ExternalLink size={13} /> 열기
                </a>
              ) : (
                <span className="text-xs text-gray-300">미설정</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-3">
        💡 PDF 파일은 Google Drive, Dropbox 등 클라우드에 업로드 후 공유 링크를 입력하세요.
      </p>
    </div>
  );
}
