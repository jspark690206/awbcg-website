import Link from 'next/link';
import { Map } from 'lucide-react';

export const metadata = { title: '사이트맵' };

const siteMap = [
  {
    title: '회사현황', href: '/about',
    children: [
      { label: '기업현황', href: '/about' },
      { label: 'CEO 인사말', href: '/about/ceo' },
      { label: '경영비전', href: '/about/vision' },
      { label: '조직도', href: '/about/organization' },
      { label: '사업장안내', href: '/about/location' },
    ],
  },
  {
    title: '서비스소개', href: '/services',
    children: [
      { label: 'MES 컨설팅', href: '/services/mes' },
      { label: 'BigData 컨설팅', href: '/services/bigdata' },
      { label: 'AI 컨설팅', href: '/services/ai' },
      { label: '창업 컨설팅', href: '/services/startup' },
      { label: '경영 컨설팅', href: '/services/management' },
    ],
  },
  {
    title: '기술연구소', href: '/research',
    children: [
      { label: '연구소안내', href: '/research' },
      { label: '보유기술', href: '/research/tech' },
    ],
  },
  {
    title: '채용정보', href: '/careers',
    children: [
      { label: '인재상', href: '/careers' },
      { label: '자격요건', href: '/careers/qualifications' },
      { label: '채용공지', href: '/careers/notice' },
    ],
  },
  {
    title: '고객지원', href: '/support',
    children: [
      { label: '교육장안내', href: '/support' },
      { label: '온라인 고객지원', href: '/support/contact' },
      { label: '제품사용설명서', href: '/support/manual' },
      { label: '고객의소리', href: '/support/voice' },
      { label: '원격지원', href: '/support/remote' },
      { label: 'Q&A', href: '/support/qa' },
      { label: 'HELPDESK', href: '/support/helpdesk' },
    ],
  },
  {
    title: '회사소식', href: '/news',
    children: [
      { label: '관련뉴스', href: '/news' },
      { label: '고객사이트', href: '/news/clients' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(13,43,94,0.08)' }}>
          <Map size={20} style={{ color: 'var(--color-primary)' }} />
        </div>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>사이트맵</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteMap.map((section) => (
          <div key={section.href} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <Link href={section.href}
              className="block text-base font-bold mb-3 hover:underline"
              style={{ color: 'var(--color-primary)' }}>
              {section.title}
            </Link>
            <ul className="space-y-1.5">
              {section.children.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}
                    className="text-sm text-gray-500 hover:text-blue-600 hover:underline transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
