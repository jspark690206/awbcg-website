import { Settings } from 'lucide-react';
import IndustryTabs from '@/components/services/IndustryTabs';
import ServiceCTA from '@/components/services/ServiceCTA';

const COLOR = '#0D2B5E';

const autoData = {
  background:
    '자동차부품 제조업체는 다품종 소량생산, 엄격한 품질기준(IATF16949), 납기 준수 압박에 시달립니다. 수작업 기반의 생산관리는 불량률 증가와 추적성 부재로 이어지며, 고객사 감사 대응이 어렵습니다. MES 시스템을 통해 생산 전 공정을 실시간으로 가시화하고 자동화합니다.',
  features: [
    { title: '공정 실시간 모니터링', desc: 'POP 단말기 기반 실시간 작업 실적 수집 및 현황판 표출' },
    { title: '불량 추적 관리', desc: '로트(LOT) 단위 불량 추적 및 원인 분석 리포트' },
    { title: 'APQP/PPAP 지원', desc: '자동차 품질 계획 문서 자동 생성 및 이력 관리' },
    { title: 'CKD/KD 관리', desc: '반완성품·완성품 출하 관리 및 고객사 포털 연동' },
    { title: '설비 OEE 관리', desc: '설비 가동률·고장·PM 이력 통합 관리' },
    { title: '납기 시뮬레이션', desc: '수주 기반 생산 계획 수립 및 납기 준수율 예측' },
  ],
  effects: [
    { label: '불량률 감소', value: '30%', unit: '↓' },
    { label: '납기 준수율', value: '98%', unit: '↑' },
    { label: '생산성 향상', value: '25%', unit: '↑' },
    { label: '데이터 수집 자동화', value: '90%', unit: '↑' },
  ],
};

const foodData = {
  background:
    '식품 제조업체는 위생 안전(HACCP), 유통기한 관리, 식품 이력 추적 의무화에 따른 관리 부담이 큽니다. 수기 기록 위주의 공정 관리는 위해요소 발생 시 신속한 원인 파악과 리콜 대응이 어렵습니다. 스마트 HACCP과 MES를 연계하여 식품 안전성과 생산 효율을 동시에 높입니다.',
  features: [
    { title: '스마트 HACCP 연동', desc: 'CCP 온도·위생 데이터 자동 수집 및 기록 관리' },
    { title: '식품 이력 추적', desc: '원료 입고부터 출하까지 LOT별 완전 추적(Traceability)' },
    { title: '유통기한 관리', desc: '선입선출(FEFO) 자동 관리 및 임박 재고 알림' },
    { title: '배합·레시피 관리', desc: '제품별 배합표 관리 및 실적 대비 분석' },
    { title: '위생 점검 디지털화', desc: '작업자 위생 체크리스트 모바일 입력 및 이력 보관' },
    { title: 'Digital Twin 관제', desc: '공장 3D 모델 기반 설비·공정 실시간 현황 시각화' },
  ],
  effects: [
    { label: 'HACCP 기록 자동화', value: '95%', unit: '↑' },
    { label: '식품 클레임 감소', value: '40%', unit: '↓' },
    { label: '폐기율 감소', value: '20%', unit: '↓' },
    { label: '검사 대응 시간', value: '70%', unit: '↓' },
  ],
};

export default function MesPage() {
  return (
    <div className="space-y-8">
      {/* 서비스 헤더 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${COLOR}12` }}>
            <Settings size={28} style={{ color: COLOR }} />
          </div>
          <div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>제조실행(MES) 컨설팅</h2>
            <p className="text-gray-400 text-sm">Manufacturing Execution System</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          제조실행시스템(MES)은 생산계획부터 완제품 출하까지 제조 전 공정을 실시간으로 연결·관리하는 핵심 시스템입니다.
          올윈비시지는 자동차부품·식품 업종에 특화된 MES 구축 경험을 바탕으로 현장에 최적화된 솔루션을 제공합니다.
        </p>
      </div>

      {/* 솔루션 구성도 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h3 className="font-bold text-lg mb-5" style={{ color: 'var(--color-primary)' }}>솔루션 구성도</h3>
        <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-center">
          {['수주/계획', 'MES 중앙 허브', '생산 실행', '품질 관리', '출하/물류'].map((item, idx, arr) => (
            <div key={item} className="flex items-center gap-2 flex-1">
              <div className="flex-1 rounded-xl py-3 px-2 font-semibold text-white text-xs"
                style={{ backgroundColor: idx === 1 ? COLOR : `${COLOR}80` }}>
                {item}
              </div>
              {idx < arr.length - 1 && <span className="text-gray-300 hidden md:block">→</span>}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center mt-3">실시간 데이터 연동 · IoT 센서 · POP 단말기 · Digital Twin</p>
      </div>

      {/* 업종별 탭 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h3 className="font-bold text-lg mb-5" style={{ color: 'var(--color-primary)' }}>업종별 적용 사례</h3>
        <IndustryTabs auto={autoData} food={foodData} color={COLOR} />
      </div>

      <ServiceCTA serviceName="MES 컨설팅" color={COLOR} />
    </div>
  );
}
