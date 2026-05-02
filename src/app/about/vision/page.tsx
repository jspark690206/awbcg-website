import { Target, Eye, Star, Users, Zap, Shield } from 'lucide-react';

const coreValues = [
  { icon: Eye, title: '비전', desc: '영남 제조기업의 AI·다크팩토리 실현 선도', color: '#0D2B5E' },
  { icon: Target, title: '미션', desc: 'MES·빅데이터·AI로 제조기업 경쟁력 혁신', color: '#1A7FC4' },
  { icon: Star, title: '전문성', desc: '부산대학교 그랜드 ICT 연구센터 연계 기술력', color: '#00A878' },
  { icon: Users, title: '동반성장', desc: '고객의 성장이 기업의 성장 — 함께 나아갑니다', color: '#F59E0B' },
  { icon: Zap, title: '혁신', desc: '4차 산업 기술로 제조 현장을 끊임없이 혁신', color: '#8B5CF6' },
  { icon: Shield, title: '신뢰', desc: '영남지역 No.1 스마트팩토리 전문 컨설팅 그룹', color: '#EF4444' },
];

export default function VisionPage() {
  return (
    <div className="space-y-12">
      {/* 비전 선언 */}
      <section className="text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          style={{ backgroundColor: 'rgba(13,43,94,0.08)', color: 'var(--color-primary)' }}
        >
          VISION
        </div>
        <div
          className="rounded-3xl p-12 mx-auto max-w-2xl"
          style={{ background: 'linear-gradient(135deg, #0D2B5E 0%, #1A7FC4 100%)' }}
        >
          <p className="text-blue-200 text-sm mb-4 uppercase tracking-widest">Our Vision</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
            "제조기업에 인공지능(AI)을 불어넣어<br />
            <span style={{ color: '#4ECCA3' }}>다크 팩토리 구축</span>에 기여하자"
          </h2>
          <p className="text-blue-200 mt-4 text-sm">
            Dark Factory — 사람의 개입 없이 자율 운영되는 스마트 제조환경
          </p>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section>
        <h3 className="text-xl font-bold mb-6 text-center" style={{ color: 'var(--color-primary)' }}>
          핵심 가치 (Core Values)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreValues.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>
                <h4 className="font-bold text-lg mb-2" style={{ color: 'var(--color-primary)' }}>
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 발전 방향 */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
          발전 방향
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          {[
            { step: '1단계', title: 'MES 구축', desc: '제조현장 디지털화 · 실시간 모니터링', color: '#0D2B5E' },
            { step: '2단계', title: 'BigData 분석', desc: '데이터 기반 의사결정 · 예측 모델 적용', color: '#1A7FC4' },
            { step: '3단계', title: 'AI 자율화', desc: '인공지능 자율제어 · 다크팩토리 실현', color: '#00A878' },
          ].map((phase, idx) => (
            <div key={phase.step} className="flex-1 relative">
              <div
                className="rounded-xl p-5 text-white"
                style={{ backgroundColor: phase.color }}
              >
                <span className="text-xs font-bold opacity-70 uppercase">{phase.step}</span>
                <h4 className="text-lg font-bold mt-1 mb-2">{phase.title}</h4>
                <p className="text-sm opacity-80">{phase.desc}</p>
              </div>
              {idx < 2 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold">
                    →
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
