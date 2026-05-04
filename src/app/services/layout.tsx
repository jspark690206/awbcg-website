'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const sidebarItems = [
  {
    label: '제조실행(MES) 컨설팅',
    href: '/services/mes',
    sub: [
      { label: '자동차부품업종', href: '/services/mes' },
      { label: '식품업종', href: '/services/mes' },
    ],
  },
  { label: '빅데이터(BD) 컨설팅', href: '/services/bigdata' },
  { label: '인공지능(AI) 컨설팅', href: '/services/ai' },
  { label: '창업 컨설팅', href: '/services/startup' },
  { label: '경영 컨설팅', href: '/services/management' },
];

const pageTitles: Record<string, string> = {
  '/services': '서비스소개',
  '/services/mes': '제조실행(MES) 컨설팅',
  '/services/bigdata': '빅데이터(BD) 컨설팅',
  '/services/ai': '인공지능(AI) 컨설팅',
  '/services/startup': '창업 컨설팅',
  '/services/management': '경영 컨설팅',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentTitle = pageTitles[pathname] ?? '서비스소개';

  return (
    <div style={{ backgroundColor: '#f5eaf2' }} className="min-h-screen py-8">
      <div className="container">
        <div className="flex gap-6 items-start">

          {/* 좌측 사이드바 */}
          <aside className="w-48 flex-shrink-0">
            <div className="text-center mb-3 py-3">
              <p className="font-black text-xl leading-tight" style={{ color: '#1a4a8a' }}>SERVICE</p>
              <p className="font-black text-xl leading-tight" style={{ color: '#1a4a8a' }}>INTRODUCT</p>
              <p className="text-sm font-medium mt-1" style={{ color: '#555' }}>제품소개</p>
            </div>

            <nav className="border border-gray-300 overflow-hidden">
              {sidebarItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      style={isActive
                        ? { backgroundColor: '#cc1111', color: '#fff' }
                        : { backgroundColor: '#fff', color: '#333' }}
                      className="flex items-center justify-between px-4 py-3 text-sm border-b border-gray-200 hover:opacity-90 transition-opacity"
                    >
                      <span className={isActive ? 'font-bold' : ''}>{item.label}</span>
                      {isActive && <ChevronRight size={14} />}
                    </Link>
                    {/* MES 서브메뉴 - MES 페이지 활성시 표시 */}
                    {isActive && item.sub && item.sub.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="flex items-center px-6 py-2 text-xs border-b border-gray-100 hover:bg-blue-50 transition-colors"
                        style={{ backgroundColor: '#f9f9f9', color: '#555' }}
                      >
                        <span className="mr-1 text-gray-400">└</span> {sub.label}
                      </Link>
                    ))}
                  </div>
                );
              })}
            </nav>
          </aside>

          {/* 우측 콘텐츠 */}
          <main className="flex-1 min-w-0 bg-white border border-gray-200 p-8">
            {/* 상단 제목 + 브레드크럼 */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-200">
              <h2 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                {currentTitle}
              </h2>
              <nav className="flex items-center gap-1 text-xs text-gray-400">
                <Link href="/" className="hover:text-blue-600">HOME</Link>
                <ChevronRight size={10} />
                <Link href="/services" className="hover:text-blue-600">서비스소개</Link>
                {pathname !== '/services' && (
                  <>
                    <ChevronRight size={10} />
                    <span style={{ color: 'var(--color-primary)' }}>{currentTitle}</span>
                  </>
                )}
              </nav>
            </div>

            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
