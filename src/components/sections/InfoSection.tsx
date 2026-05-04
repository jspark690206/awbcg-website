'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { adminStore, Notice } from '@/lib/adminStore';
import { Phone, Monitor, ChevronRight } from 'lucide-react';

export default function InfoSection() {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    setNotices(adminStore.notices.getAll().filter((n) => n.published).slice(0, 9));
  }, []);

  return (
    <section style={{ backgroundColor: '#f0e8f4' }} className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* 왼쪽: 서비스 버튼 */}
          <div className="flex flex-col gap-4">
            <Link
              href="/services"
              className="flex items-center gap-4 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: '#c8b87a', border: '2px solid #a89a60' }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#a89a60' }}>
                <Monitor size={24} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-base leading-tight" style={{ color: '#1a4a8a' }}>온라인</p>
                <p className="font-bold text-lg leading-tight" style={{ color: '#0D2B5E' }}>서비스소개</p>
                <p className="text-xs" style={{ color: '#1a4a8a' }}>(051) 343-4047</p>
              </div>
            </Link>

            <Link
              href="/support/contact"
              className="flex items-center gap-4 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: '#8ab4c8', border: '2px solid #6a94a8' }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#6a94a8' }}>
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-base leading-tight" style={{ color: '#0D2B5E' }}>온라인</p>
                <p className="font-bold text-lg leading-tight" style={{ color: '#0D2B5E' }}>서비스문의</p>
                <p className="text-xs" style={{ color: '#1a4a8a' }}>(051) 343-4047</p>
              </div>
            </Link>
          </div>

          {/* 가운데: 비전 배지 */}
          <div className="flex justify-center items-center py-4">
            <div
              className="relative flex flex-col items-center justify-center text-center rounded-full shadow-lg"
              style={{
                width: '180px',
                height: '180px',
                background: 'radial-gradient(circle, #6aad6a 0%, #3d7a3d 100%)',
                border: '4px solid #2d6a2d',
              }}
            >
              <p className="text-white font-bold text-sm leading-relaxed px-4">
                제조기업에<br />인공지능을 불어넣어<br />다크 팩토리 구축에<br />기여하자.
              </p>
              <div
                className="absolute bottom-0 translate-y-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: '#2d6a2d', letterSpacing: '0.1em' }}
              >
                VISION
              </div>
            </div>
          </div>

          {/* 오른쪽: 공지사항 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <h3 className="font-bold text-sm" style={{ color: 'var(--color-primary)' }}>공지사항</h3>
              <Link href="/support" className="text-xs text-gray-400 hover:text-blue-600 flex items-center gap-0.5">
                More <ChevronRight size={12} />
              </Link>
            </div>
            <ul className="divide-y divide-gray-50">
              {notices.length > 0 ? notices.map((n, idx) => (
                <li key={n.id}>
                  <Link
                    href="/support"
                    className="flex items-center gap-2 px-4 py-2.5 hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-xs text-gray-400 w-5 flex-shrink-0">{String(idx + 1).padStart(2, '0')}.</span>
                    <span className="text-sm text-gray-700 truncate">{n.title}</span>
                  </Link>
                </li>
              )) : (
                Array.from({ length: 9 }, (_, i) => (
                  <li key={i}>
                    <div className="flex items-center gap-2 px-4 py-2.5">
                      <span className="text-xs text-gray-400 w-5">{String(i + 1).padStart(2, '0')}.</span>
                      <span className="text-sm text-gray-300">{'─'.repeat(20)}</span>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
