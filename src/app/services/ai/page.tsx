import { Brain } from 'lucide-react';
import IndustryTabs from '@/components/services/IndustryTabs';
import ServiceCTA from '@/components/services/ServiceCTA';

const COLOR = '#00A878';

const autoData = {
  background:
    '자동차부품 제조에서 AI 기술은 품질 검사 자동화와 공정 자율제어에 핵심적으로 활용됩니다. MPC Cooler Line 품질데이터에 AI를 적용하여 불량을 사전에 예측·제거하고, 설계 검증 시뮬레이션 소요시간을 대폭 단축합니다.',
  features: [
    { title: 'AI 비전 검사', desc: '카메라 기반 딥러닝 품질 검사로 불량 자동 판정' },
    { title: '검사 지능화', desc: 'MPC Cooler Line 품질 데이터 AI 적용 품질 개선' },
    { title: '설계 지능화', desc: '설계검증 시뮬레이션 소요시간 단축 (AI 기반 가속)' },
    { title: '공정 자율 제어', desc: 'AI 기반 공정 파라미터 실시간 자동 최적화' },
    { title: 'AAS 기반 디지털트윈', desc: '자산관리셸(AAS) 기반 제조설비 디지털트윈 구축' },
    { title: '이상 감지 AI', desc: '설비·공정 이상 패턴 실시간 감지 및 자동 알림' },
  ],
  effects: [
    { label: '불량률 감소', value: '60%', unit: '↓' },
    { label: '검사 속도', value: '10배', unit: '↑' },
    { label: '설계 시간', value: '40%', unit: '↓' },
    { label: '자율제어율', value: '75%', unit: '↑' },
  ],
};

const foodData = {
  background:
    '식품 제조에서 AI는 이물질 검출, 외관 품질 자동 판정, 생산 공정 자율화에 활용됩니다. 인체에 미치는 영향이 직접적인 식품 특성상 고정밀 AI 검사 시스템 도입은 필수적입니다.',
  features: [
    { title: 'AI 이물질 검출', desc: '딥러닝 기반 X-ray·카메라 이물질 실시간 감지' },
    { title: '외관 품질 판정', desc: '형상·색상·크기 기반 AI 자동 등급 분류' },
    { title: '공정 온도 자율 제어', desc: 'AI 기반 건조·조리 온도 프로파일 자동 최적화' },
    { title: '수율 예측 모델', desc: '원료 투입량 대비 수율 AI 예측으로 손실 최소화' },
    { title: 'HACCP AI 모니터링', desc: 'CCP 데이터 이상 패턴 AI 자동 감지 및 경보' },
    { title: '수요 예측', desc: '판매 데이터 기반 AI 수요 예측으로 생산 계획 최적화' },
  ],
  effects: [
    { label: '이물질 검출률', value: '99.9%', unit: '↑' },
    { label: '품질 클레임', value: '65%', unit: '↓' },
    { label: '수율 향상', value: '12%', unit: '↑' },
    { label: '검사 인원', value: '50%', unit: '↓' },
  ],
};

export default function AiPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${COLOR}12` }}>
            <Brain size={28} style={{ color: COLOR }} />
          </div>
          <div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>인공지능(AI) 컨설팅</h2>
            <p className="text-gray-400 text-sm">Artificial Intelligence Consulting</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          인공지능 알고리즘을 제조 현장에 적용하여 불량률 감소와 수율 향상을 실현합니다.
          궁극적으로 사람의 개입 없이 자율 운영되는 <strong>다크 팩토리(Dark Factory)</strong>를 구축합니다.
        </p>
      </div>

      {/* 다크팩토리 로드맵 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h3 className="font-bold text-lg mb-5" style={{ color: 'var(--color-primary)' }}>다크 팩토리 구현 로드맵</h3>
        <div className="space-y-3">
          {[
            { step: 'Level 1', title: '데이터 수집 자동화', desc: '센서·MES 기반 공정 데이터 100% 자동 수집', done: true },
            { step: 'Level 2', title: 'AI 품질 검사', desc: '비전 AI 기반 자동 품질 판정 및 불량 분류', done: true },
            { step: 'Level 3', title: 'AI 공정 제어', desc: 'AI 기반 공정 파라미터 실시간 자율 최적화', done: false },
            { step: 'Level 4', title: '자율형 공장', desc: 'Data Lake + 디지털트윈 기반 완전 자율 운영', done: false },
          ].map((l) => (
            <div key={l.step} className="flex items-center gap-4 p-4 rounded-xl border"
              style={{ borderColor: l.done ? `${COLOR}40` : '#E5E7EB', backgroundColor: l.done ? `${COLOR}05` : 'white' }}>
              <div className="w-20 text-center">
                <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: l.done ? COLOR : '#E5E7EB', color: l.done ? 'white' : '#9CA3AF' }}>
                  {l.step}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>{l.title}</p>
                <p className="text-xs text-gray-500">{l.desc}</p>
              </div>
              <span className="text-xs" style={{ color: l.done ? COLOR : '#9CA3AF' }}>{l.done ? '✓ 구현 가능' : '구현 중'}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h3 className="font-bold text-lg mb-5" style={{ color: 'var(--color-primary)' }}>업종별 적용 사례</h3>
        <IndustryTabs auto={autoData} food={foodData} color={COLOR} />
      </div>

      <ServiceCTA serviceName="AI 컨설팅" color={COLOR} />
    </div>
  );
}
