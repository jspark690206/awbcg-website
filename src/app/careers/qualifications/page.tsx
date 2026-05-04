const positions = [
  {
    title: 'MES 개발 엔지니어',
    type: '정규직',
    color: '#0D2B5E',
    requirements: [
      'Java / C# 또는 Python 개발 경력 2년 이상',
      '제조업 MES 시스템 구축 경험 우대',
      '데이터베이스(MSSQL, MySQL) 활용 능력',
      'PLC / SCADA 시스템 이해도 우대',
      '관련 학과(컴퓨터공학, 전기·전자, 산업공학) 졸업자',
    ],
    preferred: ['자동차부품 / 식품 업종 MES 경험', 'IATF16949 / HACCP 관련 지식'],
  },
  {
    title: '빅데이터 / AI 엔지니어',
    type: '정규직',
    color: '#1A7FC4',
    requirements: [
      'Python 기반 데이터 분석 경력 2년 이상',
      '머신러닝 / 딥러닝 모델 개발 경험',
      '데이터 파이프라인 구축 경험 (ETL, Data Lake)',
      'SQL 및 NoSQL 데이터베이스 활용 능력',
      '관련 학과 졸업 또는 동등 이상의 실무 경험',
    ],
    preferred: ['TensorFlow / PyTorch 실무 경험', 'Azure / AWS 클라우드 서비스 활용 경험'],
  },
  {
    title: '컨설턴트 (스마트팩토리)',
    type: '정규직',
    color: '#00A878',
    requirements: [
      '제조업 현장 경력 3년 이상',
      '스마트공장 구축 사업 참여 경험 우대',
      '고객 커뮤니케이션 및 제안서 작성 능력',
      '프로젝트 관리(PM) 역량 보유자 우대',
      '관련 자격증(PMP, 스마트팩토리 전문가 등) 우대',
    ],
    preferred: ['정부 지원사업 수행 경험', '영남권 제조기업 네트워크 보유자'],
  },
];

export default function QualificationsPage() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500 mb-4">
        올윈비시지는 스마트공장·빅데이터·AI 분야의 전문 인재를 모집합니다.
        아래 자격요건을 갖춘 분의 많은 지원 바랍니다.
      </p>
      {positions.map((pos) => (
        <div key={pos.title} className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-5 py-3 flex items-center justify-between" style={{ backgroundColor: pos.color }}>
            <h3 className="text-white font-bold text-base">{pos.title}</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white">{pos.type}</span>
          </div>
          <div className="p-5">
            <p className="text-xs font-semibold text-gray-500 mb-2">자격요건</p>
            <ul className="space-y-1.5 mb-4">
              {pos.requirements.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: pos.color }} />
                  {r}
                </li>
              ))}
            </ul>
            <p className="text-xs font-semibold text-gray-500 mb-2">우대사항</p>
            <ul className="space-y-1.5">
              {pos.preferred.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-gray-500">
                  <span className="mt-1 text-gray-400">└</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
