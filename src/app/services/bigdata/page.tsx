import { BarChart3 } from 'lucide-react';
import IndustryTabs from '@/components/services/IndustryTabs';
import ServiceCTA from '@/components/services/ServiceCTA';

const COLOR = '#1A7FC4';

const autoData = {
  background:
    '자동차부품 제조에서 발생하는 방대한 생산·품질·설비 데이터는 대부분 활용되지 못하고 사장됩니다. 빅데이터 분석을 통해 불량 발생 패턴 예측, 공정 파라미터 최적화, 설비 예지 보전을 실현하여 품질과 생산성을 동시에 향상시킵니다.',
  features: [
    { title: '불량 예측 분석', desc: '공정 데이터 기반 불량 발생 패턴 사전 감지 및 알림' },
    { title: '공정 파라미터 최적화', desc: '수백 개 공정 변수 상관관계 분석으로 최적 조건 도출' },
    { title: '설비 예지 보전', desc: '진동·온도·전류 데이터 분석으로 고장 전 조기 경보' },
    { title: '품질 원인 분석', desc: '불량 발생 시 관련 공정 데이터 자동 수집 및 원인 탐색' },
    { title: '생산 실적 대시보드', desc: '경영진·현장 맞춤 KPI 대시보드 실시간 제공' },
    { title: '협력사 SCM 분석', desc: '8개 협력사 납품 실적·품질 통합 분석 및 리포트' },
  ],
  effects: [
    { label: '품질 비용 절감', value: '35%', unit: '↓' },
    { label: '설비 다운타임', value: '45%', unit: '↓' },
    { label: '분석 리드타임', value: '80%', unit: '↓' },
    { label: '데이터 활용률', value: '5배', unit: '↑' },
  ],
};

const foodData = {
  background:
    '식품 제조에서의 빅데이터는 원료 품질 편차 관리, 생산 수율 최적화, 유통 예측에 특히 효과적입니다. 조제·건조·내포장·외포장 전 공정의 데이터를 통합 분석하여 품질 일관성과 생산 효율을 높입니다.',
  features: [
    { title: '원료 품질 편차 분석', desc: '입고 원료 품질 데이터와 완제품 품질 상관관계 분석' },
    { title: '수율 최적화', desc: '공정 조건별 수율 데이터 분석으로 최적 생산 조건 도출' },
    { title: '에너지 사용 최적화', desc: '건조·조리 공정 에너지 소비 패턴 분석 및 절감 방안 도출' },
    { title: '유통기한 예측', desc: '환경 조건별 제품 품질 변화 예측 모델 개발' },
    { title: '클레임 패턴 분석', desc: '고객 클레임 데이터 분석으로 재발 방지 체계 수립' },
    { title: '생산 계획 최적화', desc: '수요 예측 기반 생산 계획 수립으로 재고 최소화' },
  ],
  effects: [
    { label: '수율 향상', value: '15%', unit: '↑' },
    { label: '에너지 비용', value: '20%', unit: '↓' },
    { label: '클레임 감소', value: '50%', unit: '↓' },
    { label: '재고 회전율', value: '30%', unit: '↑' },
  ],
};

export default function BigDataPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${COLOR}12` }}>
            <BarChart3 size={28} style={{ color: COLOR }} />
          </div>
          <div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>빅데이터(BigData) 컨설팅</h2>
            <p className="text-gray-400 text-sm">Big Data Analytics Consulting</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          제조 현장에서 발생하는 방대한 데이터를 수집·분석·시각화하여 데이터 기반 의사결정을 실현합니다.
          올윈비시지 기술연구소(부산대학교 그랜드 ICT 연구센터 연계)의 빅데이터 분석 기술을 현장에 적용합니다.
        </p>
      </div>

      {/* 분석 파이프라인 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h3 className="font-bold text-lg mb-5" style={{ color: 'var(--color-primary)' }}>빅데이터 분석 파이프라인</h3>
        <div className="flex flex-col md:flex-row items-center gap-2 text-xs text-center">
          {['데이터 수집\n(IoT·MES·ERP)', '데이터 정제\n(ETL·전처리)', '분석·모델링\n(ML·통계)', '시각화\n(대시보드)', '의사결정\n(인사이트)'].map((step, idx, arr) => (
            <div key={idx} className="flex items-center gap-2 flex-1">
              <div className="flex-1 rounded-xl py-3 px-2 font-semibold text-white whitespace-pre-line leading-snug"
                style={{ backgroundColor: idx === 2 ? COLOR : `${COLOR}80` }}>
                {step}
              </div>
              {idx < arr.length - 1 && <span className="text-gray-300 hidden md:block text-base">→</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h3 className="font-bold text-lg mb-5" style={{ color: 'var(--color-primary)' }}>업종별 적용 사례</h3>
        <IndustryTabs auto={autoData} food={foodData} color={COLOR} />
      </div>

      <ServiceCTA serviceName="BigData 컨설팅" color={COLOR} />
    </div>
  );
}
