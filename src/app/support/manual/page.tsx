'use client';

import { BookOpen, Download } from 'lucide-react';

const manuals = [
  { name: 'QMS', full: '품질경영시스템', desc: '품질 관리 전 주기 — 불량 추적·검사·측정 이력 통합 관리', category: '품질' },
  { name: 'SCM', full: '공급망관리 시스템', desc: '원자재 조달부터 완제품 출하까지 공급망 전체 가시화', category: '물류' },
  { name: 'EMAX ERP', full: '자동차부품 전용 ERP', desc: '자동차부품 업종 특화 — IATF16949·APQP·PPAP 지원', category: 'ERP' },
  { name: 'COIL', full: '코일 관리 시스템', desc: '코일 원자재 입고·사용·재고·불출 전 과정 관리', category: '재고' },
  { name: '예산통제', full: '예산 관리 시스템', desc: '부서별 예산 편성·집행·분석 및 초과 알림', category: '경영' },
  { name: 'CKD MES', full: '반완성품 제조실행 시스템', desc: 'CKD/KD 라인 공정 실행 및 납품 이력 추적', category: 'MES' },
  { name: 'POP', full: '생산시점관리 시스템', desc: '작업자 단말기 기반 실시간 생산 실적 수집·현황판', category: 'MES' },
  { name: 'APQP', full: '제품품질사전계획 시스템', desc: '자동차부품 APQP 5단계 문서 자동화 및 이력 관리', category: '품질' },
  { name: '설비관리', full: '설비 유지보수 관리 시스템', desc: '설비 PM 계획·고장 이력·OEE 분석 통합 관리', category: '설비' },
];

const categoryColor: Record<string, string> = {
  '품질': '#EF4444', '물류': '#1A7FC4', 'ERP': '#0D2B5E',
  '재고': '#F59E0B', '경영': '#8B5CF6', 'MES': '#00A878', '설비': '#6B7280',
};

export default function ManualPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(26,127,196,0.08)' }}>
          <BookOpen size={20} style={{ color: 'var(--color-secondary)' }} />
        </div>
        <div>
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>제품사용설명서</h2>
          <p className="text-gray-400 text-sm">올윈비시지 솔루션 사용 가이드 다운로드</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {manuals.map((m) => {
          const color = categoryColor[m.category] ?? '#6B7280';
          return (
            <div key={m.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xs text-center leading-tight"
                style={{ backgroundColor: color }}>
                {m.name.replace(' ', '\n')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-bold text-sm" style={{ color: 'var(--color-primary)' }}>{m.name}</h3>
                  <span className="px-1.5 py-0.5 rounded text-xs font-medium" style={{ backgroundColor: `${color}15`, color }}>{m.category}</span>
                </div>
                <p className="text-xs text-gray-400 mb-0.5">{m.full}</p>
                <p className="text-sm text-gray-600">{m.desc}</p>
              </div>
              <button
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-white flex-shrink-0 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'var(--color-secondary)' }}
                onClick={() => alert('설명서 파일을 준비 중입니다. 문의 폼으로 요청해 주세요.')}
              >
                <Download size={14} /> 다운로드
              </button>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-gray-400 text-center pt-2">
        설명서 파일이 필요하신 경우{' '}
        <a href="/support/contact" className="underline" style={{ color: 'var(--color-secondary)' }}>온라인 문의</a>
        로 요청해 주시면 이메일로 발송해 드립니다.
      </p>
    </div>
  );
}
