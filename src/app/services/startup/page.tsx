import { Lightbulb, CheckCircle } from 'lucide-react';
import ServiceCTA from '@/components/services/ServiceCTA';

const COLOR = '#F59E0B';

const steps = [
  { no: '01', title: '사업 아이디어 검증', desc: '시장 조사, 경쟁사 분석, 사업성 검토를 통해 아이디어의 실현 가능성을 검증합니다.' },
  { no: '02', title: '사업계획서 작성', desc: '투자 유치 및 정부 지원사업 신청에 적합한 전문 사업계획서를 작성합니다.' },
  { no: '03', title: '정부 지원사업 연계', desc: '창업 관련 정부·지자체 지원사업(예비창업패키지, 초기창업패키지 등) 신청을 지원합니다.' },
  { no: '04', title: '법인 설립', desc: '법인 유형 선택, 정관 작성, 등기 절차까지 원스톱으로 대행합니다.' },
  { no: '05', title: '사업자 등록 및 세무', desc: '사업자 등록, 세금계산서 발행, 초기 세무 신고 지원으로 창업 후 행정 부담을 최소화합니다.' },
  { no: '06', title: '사후 멘토링', desc: '창업 후 3~6개월 경영 멘토링으로 초기 사업 안착을 돕습니다.' },
];

const checkList = [
  '제조업 창업을 준비 중인 예비 창업자',
  '스마트팩토리 기반 창업을 계획 중인 분',
  '기존 사업의 법인 전환을 검토 중인 개인사업자',
  '정부 창업 지원사업 신청을 원하는 분',
  '부산·경남 지역 제조업 창업 희망자',
];

export default function StartupPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${COLOR}12` }}>
            <Lightbulb size={28} style={{ color: COLOR }} />
          </div>
          <div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>창업 컨설팅</h2>
            <p className="text-gray-400 text-sm">Startup Consulting</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          사업 아이디어 발굴부터 법인 설립, 정부 지원사업 연계까지 창업의 모든 단계를 원스톱으로 지원합니다.
          특히 제조업과 스마트팩토리 기반 창업에 특화된 전문 컨설팅을 제공합니다.
        </p>
      </div>

      {/* 진행 단계 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h3 className="font-bold text-lg mb-6" style={{ color: 'var(--color-primary)' }}>창업 컨설팅 진행 단계</h3>
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={step.no} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: COLOR }}>
                {step.no}
              </div>
              <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                <h4 className="font-semibold text-sm mb-1" style={{ color: 'var(--color-primary)' }}>{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 이런 분께 추천 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h3 className="font-bold text-lg mb-5" style={{ color: 'var(--color-primary)' }}>이런 분께 추천합니다</h3>
        <div className="space-y-3">
          {checkList.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle size={18} style={{ color: COLOR }} className="flex-shrink-0" />
              <span className="text-gray-600 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <ServiceCTA serviceName="창업 컨설팅" color={COLOR} />
    </div>
  );
}
