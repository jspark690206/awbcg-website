import Link from 'next/link';
import { Settings, BarChart3, Brain, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'MES 컨설팅',
    description: '제조실행시스템 구축으로 생산현장을 실시간 모니터링하고 생산성을 극대화합니다.',
    tags: ['자동차부품', '식품업종'],
    color: '#0D2B5E',
    href: '/services/mes',
  },
  {
    icon: BarChart3,
    title: 'BigData 컨설팅',
    description: '빅데이터 분석 기반 의사결정으로 제조 경쟁력을 향상시킵니다.',
    tags: ['데이터 분석', '예측 모델'],
    color: '#1A7FC4',
    href: '/services/bigdata',
  },
  {
    icon: Brain,
    title: 'AI 컨설팅',
    description: '인공지능 알고리즘 적용으로 불량률 감소와 수율 향상을 실현합니다.',
    tags: ['머신러닝', '품질개선'],
    color: '#00A878',
    href: '/services/ai',
  },
  {
    icon: Lightbulb,
    title: '창업 컨설팅',
    description: '사업 아이디어부터 법인 설립까지 창업 전 과정을 원스톱으로 지원합니다.',
    tags: ['사업화', '법인설립'],
    color: '#F59E0B',
    href: '/services/startup',
  },
  {
    icon: TrendingUp,
    title: '경영 컨설팅',
    description: '경영 전반의 문제를 진단하고 맞춤형 개선 전략을 제시합니다.',
    tags: ['경영전략', '조직혁신'],
    color: '#8B5CF6',
    href: '/services/management',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
            style={{ backgroundColor: 'rgba(26,127,196,0.1)', color: 'var(--color-secondary)' }}
          >
            SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            핵심 서비스
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            MES · 빅데이터 · AI 기반의 스마트 제조 전환부터 창업·경영 컨설팅까지, 올윈비시지가 함께합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <Icon size={24} style={{ color: service.color }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs font-medium"
                        style={{ backgroundColor: `${service.color}10`, color: service.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            style={{ borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)' }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border font-medium text-sm hover:bg-blue-50 transition-colors"
          >
            전체 서비스 보기 <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
