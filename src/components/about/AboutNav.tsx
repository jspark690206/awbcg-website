'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: '기업현황', href: '/about' },
  { label: 'CEO 인사말', href: '/about/ceo' },
  { label: '경영비전', href: '/about/vision' },
  { label: '조직도', href: '/about/organization' },
  { label: '사업장안내', href: '/about/location' },
];

export default function AboutNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-[88px] z-30">
      <div className="container">
        <div className="flex overflow-x-auto gap-1 py-1 scrollbar-hide">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap px-5 py-3 text-sm font-medium rounded-t transition-colors border-b-2 ${
                  isActive
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
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
