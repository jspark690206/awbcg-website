const technologies = [
  {
    title: 'MES (제조실행시스템)',
    en: 'Manufacturing Execution System',
    color: '#0D2B5E',
    items: [
      '생산계획 수립 및 작업지시 관리',
      '실시간 생산 모니터링 (3D 디지털트윈)',
      '품질 추적 및 불량 분석',
      'SCM 협력사 통합 관리',
      'IATF16949 / HACCP 규격 대응',
    ],
  },
  {
    title: 'BigData (빅데이터 분석)',
    en: 'Big Data Analytics Platform',
    color: '#1A7FC4',
    items: [
      '제조 데이터 수집·정제·저장 (Data Lake)',
      '공정 이상 탐지 및 예측 분석',
      'KPI 대시보드 구축',
      '데이터 시각화 및 리포팅',
      '데이터바우처 지원사업 수행 경험',
    ],
  },
  {
    title: 'AI (인공지능)',
    en: 'Artificial Intelligence Solution',
    color: '#00A878',
    items: [
      '머신러닝 기반 불량 검출 (검사지능화)',
      '딥러닝 설계 최적화 (설계지능화)',
      'AI 자율제어 시스템',
      'AAS 기반 디지털트윈 연계',
      'AI 관제상황실 구축',
    ],
  },
  {
    title: 'Digital Twin (디지털트윈)',
    en: 'Digital Twin & CPS',
    color: '#8B5CF6',
    items: [
      '3D 모델기반 실시간 모니터링',
      'CPS(Cyber-Physical System) 구축',
      '가상 시뮬레이션 환경 제공',
      'IoT 센서 연동 실시간 데이터 반영',
      '원격 모니터링 및 제어',
    ],
  },
];

export default function TechPage() {
  return (
    <div className="space-y-6">
      {technologies.map((tech) => (
        <div key={tech.title} className="border border-gray-200 rounded overflow-hidden">
          <div className="px-5 py-3" style={{ backgroundColor: tech.color }}>
            <p className="text-white font-bold text-base">{tech.title}</p>
            <p className="text-white/70 text-xs">{tech.en}</p>
          </div>
          <ul className="divide-y divide-gray-50">
            {tech.items.map((item) => (
              <li key={item} className="flex items-start gap-3 px-5 py-2.5 text-sm text-gray-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: tech.color }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
