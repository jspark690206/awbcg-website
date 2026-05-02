'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, MessageSquare, Bell, Briefcase, HelpCircle, BookOpen, LogOut } from 'lucide-react';

const navItems = [
  { label: '대시보드', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: '문의 관리', href: '/admin/inquiries', icon: MessageSquare },
  { label: '공지사항', href: '/admin/notices', icon: Bell },
  { label: '채용공고', href: '/admin/careers', icon: Briefcase },
  { label: 'Q&A 관리', href: '/admin/qa', icon: HelpCircle },
  { label: '제품설명서', href: '/admin/manuals', icon: BookOpen },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    sessionStorage.removeItem('admin_auth');
    router.push('/admin');
  };

  return (
    <aside className="w-56 min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-primary)' }}>
      {/* 로고 */}
      <div className="px-5 py-6 border-b border-white/10">
        <div className="text-white font-bold text-sm leading-tight">(주)올윈비시지</div>
        <div className="text-blue-300 text-xs mt-0.5">관리자 페이지</div>
      </div>

      {/* 네비게이션 */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive ? 'bg-white/15 text-white' : 'text-blue-200 hover:bg-white/10 hover:text-white'
              }`}>
              <Icon size={16} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* 로그아웃 */}
      <div className="px-3 pb-6">
        <button onClick={logout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-blue-300 hover:bg-white/10 hover:text-white transition-all">
          <LogOut size={16} />
          로그아웃
        </button>
      </div>
    </aside>
  );
}
