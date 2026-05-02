import { TrendingUp, CheckCircle } from 'lucide-react';
import ServiceCTA from '@/components/services/ServiceCTA';

const COLOR = '#8B5CF6';

const areas = [
  { title: '경영 진단', desc: '재무·인사·운영·마케팅 전 영역을 객관적으로 진단하고 문제점을 파악합니다.' },
  { title: '전략 수립', desc: '시장 분석과 내부 역량 평가를 바탕으로 단·중기 경영 전략을 수립합니다.' },
  { title: '조직 혁신', desc: '업무 프로세스 개선, 조직 구조 최적화, 인재 육성 체계를 구축합니다.' },
  { title: '생산성 향상', desc: '낭비 제거(Lean), 표준화, 자동화를 통해 현장 생산성을 높입니다.' },
  { title: '재무 관리', desc: '원가 구조 분석, 손익 개선, 자금 계획 수립으로 재무 건전성을 강화합니다.' },
  { title: '정부 지원사업', desc: '중소기업 경쟁력 강화 관련 정부·지자체 지원사업 발굴 및 신청을 지원합니다.' },
];

const process = [
  { step: '1단계', name: '현황 진단', detail: '경영 전반 인터뷰 및 자료 분석 (약 2주)' },
  { step: '2단계', name: '문제 도출', detail: '핵심 문제점 및 개선 우선순위 도출' },
  { step: '3단계', name: '전략 수립', detail: '맞춤형 개선 전략 및 실행 계획 수립' },
  { step: '4단계', name: '실행 지원', detail: '개선 과제 실행 지원 및 진도 관리' },
  { step: '5단계', name: '성과 검증', detail: '개선 성과 측정 및 지속 관리 체계 구축' },
];

export default function ManagementPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${COLOR}12` }}>
            <TrendingUp size={28} style={{ color: COLOR }} />
          </div>
          <div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>경영 컨설팅</h2>
            <p className="text-gray-400 text-sm">Management Consulting</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          경영 전반의 문제를 진단하고 맞춤형 개선 전략을 제시합니다.
          부산·경남 지역 중소 제조기업의 지속 성장을 위한 실질적인 경영 혁신을 지원합니다.
        </p>
      </div>

      {/* 컨설팅 영역 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h3 className="font-bold text-lg mb-5" style={{ color: 'var(--color-primary)' }}>컨설팅 영역</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {areas.map((area) => (
            <div key={area.title} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-purple-200 transition-colors">
              <CheckCircle size={18} style={{ color: COLOR }} className="flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>{area.title}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 컨설팅 프로세스 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h3 className="font-bold text-lg mb-6" style={{ color: 'var(--color-primary)' }}>컨설팅 프로세스</h3>
        <div className="flex flex-col md:flex-row gap-3">
          {process.map((p, idx) => (
            <div key={p.step} className="flex-1 relative">
              <div className="rounded-xl p-4 text-center border border-gray-100 hover:shadow-sm transition-shadow bg-gray-50">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white mb-2 inline-block" style={{ backgroundColor: COLOR }}>
                  {p.step}
                </span>
                <p className="font-bold text-sm mt-1" style={{ color: 'var(--color-primary)' }}>{p.name}</p>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{p.detail}</p>
              </div>
              {idx < process.length - 1 && (
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-gray-300 text-lg">→</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <ServiceCTA serviceName="경영 컨설팅" color={COLOR} />
    </div>
  );
}
