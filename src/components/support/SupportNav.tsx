'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: '온라인 문의', href: '/support/contact' },
  { label: '제품사용설명서', href: '/support/manual' },
  { label: 'Q&A', href: '/support/qa' },
  { label: 'HELPDESK', href: '/support/helpdesk' },
  { label: '원격지원', href: '/support/remote' },
  { label: '고객의소리', href: '/support/voice' },
];

export default function SupportNav() {
  const pathname = usePathname();
  return (
    <nav className="border-b border-gray-200 bg-white sticky top-[88px] z-30">
      <div className="container">
        <div className="flex overflow-x-auto gap-1 py-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}
                className={`whitespace-nowrap px-5 py-3 text-sm font-medium rounded-t transition-colors border-b-2 ${
                  isActive ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
