import Link from 'next/link';
import { Settings, BarChart3, Brain, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  { icon: Settings, title: 'MES 컨설팅', desc: '제조실행시스템(MES) 구축으로 생산현장 실시간 모니터링과 생산성을 극대화합니다.', tags: ['자동차부품', '식품업종'], color: '#0D2B5E', href: '/services/mes' },
  { icon: BarChart3, title: 'BigData 컨설팅', desc: '빅데이터 분석 기반 의사결정 시스템으로 제조 경쟁력을 향상시킵니다.', tags: ['자동차부품', '식품업종'], color: '#1A7FC4', href: '/services/bigdata' },
  { icon: Brain, title: 'AI 컨설팅', desc: '인공지능 알고리즘 적용으로 불량률 감소와 수율 향상을 실현합니다.', tags: ['자동차부품', '식품업종'], color: '#00A878', href: '/services/ai' },
  { icon: Lightbulb, title: '창업 컨설팅', desc: '사업 아이디어부터 법인 설립까지 창업 전 과정을 원스톱으로 지원합니다.', tags: ['사업화 전략', '법인설립'], color: '#F59E0B', href: '/services/startup' },
  { icon: TrendingUp, title: '경영 컨설팅', desc: '경영 전반의 문제를 진단하고 맞춤형 개선 전략을 제시합니다.', tags: ['경영전략', '조직혁신'], color: '#8B5CF6', href: '/services/management' },
];

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>서비스 소개</h2>
        <p className="text-gray-500 text-sm">MES · 빅데이터 · AI 기반의 스마트 제조 전환부터 창업·경영 컨설팅까지</p>
      </div>
      {services.map((s) => {
        const Icon = s.icon;
        return (
          <Link key={s.href} href={s.href}
            className="group flex items-start gap-5 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${s.color}12` }}>
              <Icon size={28} style={{ color: s.color }} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--color-primary)' }}>{s.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{s.desc}</p>
              <div className="flex gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-xs font-medium" style={{ backgroundColor: `${s.color}10`, color: s.color }}>{t}</span>
                ))}
              </div>
            </div>
            <ArrowRight size={18} className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" />
          </Link>
        );
      })}
    </div>
  );
}
