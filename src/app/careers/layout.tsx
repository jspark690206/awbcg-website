'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const sidebarItems = [
  { label: '인재상', href: '/careers' },
  { label: '자격요건', href: '/careers/qualifications' },
  { label: '채용공지', href: '/careers/notice' },
];

const pageTitles: Record<string, string> = {
  '/careers': '인재상',
  '/careers/qualifications': '자격요건',
  '/careers/notice': '채용공지',
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentTitle = pageTitles[pathname] ?? '채용정보';

  return (
    <div style={{ backgroundColor: '#f5eaf2' }} className="min-h-screen py-8">
      <div className="container">
        <div className="flex gap-6 items-start">

          {/* 좌측 사이드바 */}
          <aside className="w-48 flex-shrink-0">
            <div className="text-center mb-3 py-3">
              <p className="font-black text-2xl leading-tight" style={{ color: '#1a4a8a' }}>GLOBAL</p>
              <p className="font-black text-2xl leading-tight" style={{ color: '#1a4a8a' }}>HR</p>
              <p className="text-sm font-medium mt-1" style={{ color: '#555' }}>채용정보</p>
            </div>

            <nav className="border border-gray-300 overflow-hidden">
              {sidebarItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={isActive
                      ? { backgroundColor: '#cc1111', color: '#fff' }
                      : { backgroundColor: '#fff', color: '#333' }}
                    className="flex items-center justify-between px-4 py-3 text-sm border-b border-gray-200 last:border-0 hover:opacity-90 transition-opacity"
                  >
                    <span className={isActive ? 'font-bold' : ''}>{item.label}</span>
                    {isActive && <ChevronRight size={14} />}
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* 우측 콘텐츠 */}
          <main className="flex-1 min-w-0 bg-white border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-200">
              <h2 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                {currentTitle}
              </h2>
              <nav className="flex items-center gap-1 text-xs text-gray-400">
                <Link href="/" className="hover:text-blue-600">HOME</Link>
                <ChevronRight size={10} />
                <Link href="/careers" className="hover:text-blue-600">채용정보</Link>
                {pathname !== '/careers' && (
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
