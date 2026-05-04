'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail, LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from '@/lib/userAuth';

const navItems = [
  { label: '회사현황', href: '/about', sub: [
    { label: '기업현황', href: '/about' },
    { label: 'CEO 인사말', href: '/about/ceo' },
    { label: '경영비전', href: '/about/vision' },
    { label: '조직도', href: '/about/organization' },
    { label: '사업장안내', href: '/about/location' },
  ]},
  { label: '서비스소개', href: '/services', sub: [
    { label: 'MES 컨설팅', href: '/services/mes' },
    { label: 'BigData 컨설팅', href: '/services/bigdata' },
    { label: 'AI 컨설팅', href: '/services/ai' },
    { label: '창업 컨설팅', href: '/services/startup' },
    { label: '경영 컨설팅', href: '/services/management' },
  ]},
  { label: '기술연구소', href: '/research', sub: [
    { label: '연구소안내', href: '/research' },
    { label: '보유기술', href: '/research/tech' },
  ]},
  { label: '채용정보', href: '/careers', sub: [
    { label: '인재상', href: '/careers' },
    { label: '자격요건', href: '/careers/qualifications' },
    { label: '채용공지', href: '/careers/notice' },
  ]},
  { label: '고객지원', href: '/support', sub: [
    { label: '교육장안내', href: '/support' },
    { label: '온라인 고객지원', href: '/support/contact' },
    { label: '제품사용설명서', href: '/support/manual' },
    { label: '고객의소리', href: '/support/voice' },
    { label: '원격지원', href: '/support/remote' },
    { label: 'Q&A', href: '/support/qa' },
    { label: 'HELPDESK', href: '/support/helpdesk' },
  ]},
  { label: '회사소식', href: '/news', sub: [
    { label: '관련뉴스', href: '/news' },
    { label: '고객사이트', href: '/news/clients' },
  ]},
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'
      }`}
    >
      {/* 유틸리티 바 */}
      <div style={{ backgroundColor: 'var(--color-primary)' }} className="text-white text-xs">
        <div className="container flex justify-between items-center py-1">
          <span className="font-semibold tracking-wide">AWBCG — All Winner Brilliant Consulting Group</span>
          <div className="flex items-center gap-4">
            <a href="tel:051-343-4047" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Phone size={11} /> 051-343-4047
            </a>
            <a href="mailto:admin@awbcg.co.kr" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Mail size={11} /> admin@awbcg.co.kr
            </a>
            <span className="text-white/40">|</span>
            <Link href="/sitemap" className="hover:text-blue-200 transition-colors">SITEMAP</Link>
            <Link href="/admin" className="hover:text-blue-200 transition-colors">ADMIN</Link>
            <Link href="/en" className="hover:text-blue-200 transition-colors">ENGLISH</Link>
            <span className="text-white/40">|</span>
            {user ? (
              <div className="flex items-center gap-2">
                <Link href="/mypage" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                  <User size={11} />
                  <span className="max-w-[80px] truncate">{user.displayName ?? '마이페이지'}</span>
                </Link>
                <button onClick={handleLogout} className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                  <LogOut size={11} /> 로그아웃
                </button>
              </div>
            ) : (
              <Link href="/login" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                <LogIn size={11} /> 로그인
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className="container flex items-center justify-between py-3">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.gif"
            alt="올윈비시지 로고"
            width={80}
            height={40}
            className="object-contain"
            unoptimized
          />
          <div style={{ color: 'var(--color-primary)', fontSize: '40px', lineHeight: '40px' }} className="font-bold">
            (주)올윈비시지
          </div>
        </Link>

        {/* PC 네비게이션 */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative group"
              onMouseEnter={() => setActiveMenu(item.href)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors block"
                style={{
                  color: pathname.startsWith(item.href) ? 'var(--color-secondary)' : '#374151',
                  borderTop: pathname.startsWith(item.href) || activeMenu === item.href
                    ? '3px solid var(--color-secondary)'
                    : '3px solid transparent',
                }}
              >
                {item.label}
              </Link>
              {activeMenu === item.href && (
                <div className="absolute top-full left-0 mt-1 w-44 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                  {item.sub.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* 문의 버튼 */}
        <Link
          href="/support/contact"
          style={{ backgroundColor: 'var(--color-secondary)' }}
          className="hidden lg:flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          <Phone size={14} />
          온라인 문의
        </Link>

        {/* 모바일 햄버거 */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block px-6 py-3 text-sm font-medium text-gray-700 border-b border-gray-50 hover:bg-blue-50"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            </div>
          ))}
          <div className="p-4">
            <Link
              href="/support/contact"
              style={{ backgroundColor: 'var(--color-secondary)' }}
              className="flex items-center justify-center gap-2 text-white text-sm font-medium px-4 py-3 rounded-lg w-full"
              onClick={() => setIsMobileOpen(false)}
            >
              <Phone size={14} />
              온라인 문의하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
