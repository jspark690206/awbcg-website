import { Boxes } from 'lucide-react';

const departments = [
  { name: '기술연구소', desc: '부산대학교 그랜드 ICT 연구센터 연계\n빅데이터 분석 · 인공지능 알고리즘', color: '#1A7FC4', sub: ['빅데이터 분석', 'AI 알고리즘'] },
  { name: '관리기획팀', desc: '경영 기획 · 인사 · 총무', color: '#6B7280', sub: [] },
  { name: '제조실행팀 (MES)', desc: '제조실행시스템 구축 · 컨설팅', color: '#0D2B5E', sub: [] },
  { name: '빅데이터팀', desc: '빅데이터 수집 · 분석 · 시각화', color: '#8B5CF6', sub: [] },
  { name: '인공지능팀 (AI)', desc: 'AI 모델 개발 · 자율제어 구현', color: '#00A878', sub: [] },
  { name: '마케팅팀', desc: '영업 · 마케팅 · 고객 관리', color: '#F59E0B', sub: [] },
];

export default function OrganizationPage() {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: 'rgba(13,43,94,0.08)' }}
        >
          <Boxes size={20} style={{ color: 'var(--color-primary)' }} />
        </div>
        <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>조직도</h2>
      </div>

      {/* 대표이사 */}
      <div className="flex flex-col items-center">
        <div
          className="px-10 py-4 rounded-2xl text-white text-center font-bold text-lg shadow-lg"
          style={{ background: 'linear-gradient(135deg, #0D2B5E, #1A4A8A)', minWidth: '200px' }}
        >
          대표이사
          <div className="text-blue-200 text-sm font-normal mt-0.5">박제선</div>
        </div>

        {/* 연결선 */}
        <div className="w-0.5 h-10" style={{ backgroundColor: 'var(--color-secondary)', opacity: 0.4 }} />

        {/* 팀 그리드 */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow"
            >
              <div
                className="w-2 h-2 rounded-full mb-3"
                style={{ backgroundColor: dept.color }}
              />
              <h4 className="font-bold text-sm mb-1.5" style={{ color: 'var(--color-primary)' }}>
                {dept.name}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed whitespace-pre-line">{dept.desc}</p>
              {dept.sub.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {dept.sub.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-xs"
                      style={{ backgroundColor: `${dept.color}10`, color: dept.color }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 연구소 협력 */}
      <div
        className="rounded-2xl p-6 border"
        style={{ backgroundColor: 'rgba(26,127,196,0.05)', borderColor: 'rgba(26,127,196,0.2)' }}
      >
        <h3 className="font-bold text-base mb-2" style={{ color: 'var(--color-secondary)' }}>
          산학 협력
        </h3>
        <p className="text-sm text-gray-600">
          기술연구소는 <strong>부산대학교 그랜드 ICT 연구센터</strong>와 산학 협력을 통해 빅데이터 분석 및 인공지능 알고리즘 연구를 공동 수행합니다.
        </p>
      </div>
    </div>
  );
}
