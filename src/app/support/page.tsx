import Link from 'next/link';
import { MessageSquare, BookOpen, HelpCircle, Headphones, Monitor, Star, ArrowRight } from 'lucide-react';

const supports = [
  { icon: MessageSquare, title: '온라인 문의', desc: 'MES·빅데이터·AI 컨설팅 도입 문의를 온라인으로 접수합니다.', href: '/support/contact', color: '#0D2B5E' },
  { icon: BookOpen, title: '제품사용설명서', desc: 'QMS·SCM·EMAX ERP 등 9개 제품 사용설명서를 다운로드합니다.', href: '/support/manual', color: '#1A7FC4' },
  { icon: HelpCircle, title: 'Q&A', desc: '자주 묻는 질문과 답변을 확인하세요.', href: '/support/qa', color: '#00A878' },
  { icon: Headphones, title: 'HELPDESK', desc: '전화·이메일 전문 헬프데스크를 통해 신속하게 지원합니다.', href: '/support/helpdesk', color: '#F59E0B' },
  { icon: Monitor, title: '원격지원', desc: '원격 접속을 통해 즉각적인 기술 지원을 받으세요.', href: '/support/remote', color: '#8B5CF6' },
  { icon: Star, title: '고객의소리', desc: '서비스 개선을 위한 소중한 의견을 남겨주세요.', href: '/support/voice', color: '#EF4444' },
];

export default function SupportPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {supports.map((s) => {
        const Icon = s.icon;
        return (
          <Link key={s.href} href={s.href}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${s.color}12` }}>
              <Icon size={22} style={{ color: s.color }} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base mb-1" style={{ color: 'var(--color-primary)' }}>{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
            <ArrowRight size={16} className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" />
          </Link>
        );
      })}
    </div>
  );
}
