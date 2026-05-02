'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: '컨설팅 도입 전 현장 방문이 필요한가요?', a: '네, 정확한 현장 진단을 위해 초기 상담 후 현장 방문 일정을 협의합니다. 첫 방문 상담은 무료로 진행됩니다.', cat: '일반' },
  { q: 'MES 구축 기간은 얼마나 걸리나요?', a: '기업 규모와 공정 복잡도에 따라 다르나, 일반적으로 소규모(10인 이하 라인) 3~4개월, 중규모 5~8개월 정도 소요됩니다. 올윈비시지는 ㈜코렌스 시범공장 구축 경험을 바탕으로 최적화된 일정을 제시합니다.', cat: 'MES' },
  { q: '정부 스마트공장 지원사업과 연계 가능한가요?', a: '네, 중소벤처기업부 스마트공장 보급·확산사업, AI 융합 지역특화사업 등 정부 지원사업과 연계한 구축이 가능합니다. 실제 ㈜코렌스 AI 융합 지역특화사업(2022~2023)을 성공적으로 수행한 경험이 있습니다.', cat: '지원사업' },
  { q: '자동차부품이 아닌 다른 업종도 가능한가요?', a: '네, 자동차부품과 식품업종을 주력으로 하지만, 다른 제조업종도 현장 진단 후 맞춤형 솔루션을 제공합니다. ㈜희창유업(식품), ㈜에이치씨글로벌 등 다양한 업종 구축 경험을 보유하고 있습니다.', cat: 'MES' },
  { q: '기존 ERP 시스템과 연동이 되나요?', a: 'SAP, 더존, 영림원 등 주요 ERP 시스템과의 연동 경험이 있습니다. MES-ERP 연동은 API 또는 DB 직접 연동 방식으로 구현하며, 프로젝트 착수 전 연동 범위와 방식을 협의합니다.', cat: 'MES' },
  { q: 'Digital Twin 구축에는 무엇이 필요한가요?', a: '3D 모델링 데이터(CAD 도면 또는 현장 3D 스캔), 센서/IoT 인프라, 데이터 수집 서버가 필요합니다. ㈜코렌스 BMW 라인부터 자율형 공장까지 다단계 Digital Twin 구축 경험을 보유하고 있습니다.', cat: 'AI·BigData' },
  { q: 'AI 컨설팅 비용은 어느 정도인가요?', a: '프로젝트 범위, 데이터 규모, AI 모델 복잡도에 따라 다릅니다. 정부 지원사업 연계 시 기업 자부담을 크게 줄일 수 있습니다. 온라인 문의 또는 전화(051-343-4047)로 무료 초기 상담 후 견적을 안내드립니다.', cat: 'AI·BigData' },
  { q: '유지보수 서비스도 제공하나요?', a: '네, 구축 완료 후 시스템 유지보수 계약을 통해 장애 대응, 기능 개선, 원격 지원 서비스를 제공합니다. 유지보수 조건은 프로젝트 계약 시 함께 협의합니다.', cat: '유지보수' },
];

const categories = ['전체', '일반', 'MES', 'AI·BigData', '지원사업', '유지보수'];

export default function QAPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [cat, setCat] = useState('전체');

  const filtered = cat === '전체' ? faqs : faqs.filter((f) => f.cat === cat);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(0,168,120,0.08)' }}>
          <HelpCircle size={20} style={{ color: 'var(--color-accent)' }} />
        </div>
        <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>자주 묻는 질문 (Q&A)</h2>
      </div>

      {/* 카테고리 필터 */}
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${cat === c ? 'text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            style={cat === c ? { backgroundColor: 'var(--color-primary)' } : {}}
          >
            {c}
          </button>
        ))}
      </div>

      {/* FAQ 아코디언 */}
      <div className="space-y-3">
        {filtered.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <button className="w-full text-left px-6 py-5 flex items-start gap-4"
              onClick={() => setOpen(open === idx ? null : idx)}>
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'var(--color-secondary)' }}>Q</span>
              <span className="flex-1 font-medium text-gray-800 text-sm">{faq.q}</span>
              <span className="text-gray-400 flex-shrink-0">
                {open === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </button>
            {open === idx && (
              <div className="px-6 pb-5 flex gap-4 border-t border-gray-100">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-3"
                  style={{ backgroundColor: 'rgba(0,168,120,0.1)', color: 'var(--color-accent)' }}>A</span>
                <p className="text-sm text-gray-600 leading-relaxed pt-3">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
        <p className="text-gray-500 text-sm mb-3">찾으시는 답변이 없으신가요?</p>
        <a href="/support/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-medium"
          style={{ backgroundColor: 'var(--color-secondary)' }}>
          온라인 문의하기
        </a>
      </div>
    </div>
  );
}
