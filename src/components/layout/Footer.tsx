'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [todayCount, setTodayCount] = useState('000000');

  useEffect(() => {
    const today = new Date().toDateString();
    const stored = localStorage.getItem('visit_date');
    const count = parseInt(localStorage.getItem('visit_count') ?? '0', 10);

    if (stored === today) {
      const newCount = count + 1;
      localStorage.setItem('visit_count', String(newCount));
      setTodayCount(String(newCount).padStart(6, '0'));
    } else {
      localStorage.setItem('visit_date', today);
      localStorage.setItem('visit_count', '1');
      setTodayCount('000001');
    }
  }, []);

  return (
    <footer style={{ backgroundColor: '#f0ede8', borderTop: '2px solid #cccccc' }}>
      <div className="container py-2">
        <div className="flex items-center gap-4">

          {/* 로고 */}
          <div
            className="flex-shrink-0 flex items-center justify-center"
            style={{ width: '140px', height: '90px', backgroundColor: '#f0ede8', padding: '4px' }}
          >
            <Image
              src="/logo.gif"
              alt="올윈비시지 로고"
              width={136}
              height={82}
              style={{ objectFit: 'contain', backgroundColor: '#f0ede8' }}
              unoptimized
            />
          </div>

          {/* 회사 정보 */}
          <div className="flex-1 text-xs" style={{ color: '#333' }}>
            <div className="flex items-center gap-2 mb-1 font-semibold" style={{ color: '#222' }}>
              <Link href="/about" className="hover:underline">회사소개</Link>
              <span className="text-gray-400">/</span>
              <Link href="/privacy" className="hover:underline">개인정보보호정책</Link>
              <span className="text-gray-400">/</span>
              <Link href="/about/location" className="hover:underline">찾아오시는길</Link>
            </div>
            <p className="mb-0.5">
              법인명 : (주)올윈비시지 &nbsp;/&nbsp; 주소 : 부산광역시 북구 덕천로 155 1F
            </p>
            <p className="mb-0.5">
              Tel :{' '}
              <a href="tel:051-343-4047" className="underline" style={{ color: '#cc3300' }}>051-343-4047</a>
              {' '}/ Fax : 051-343-4048 &nbsp;/ E_mail :{' '}
              <a href="mailto:admin@awbcg.co.kr" className="underline" style={{ color: '#cc3300' }}>admin@awbcg.co.kr</a>
              {' '}/ 사업자등록번호: 654-81-01275
            </p>
            <p className="mb-0.5">Copyright© 2019 allwinbcg All right reserved.</p>
            <p style={{ color: '#555' }}>
              본 사이트내 이메일 무단수집을 거부하며, 위반시 정보통신망법에 의해 형사처벌 될 수 있습니다.
            </p>
          </div>

          {/* Today 방문자 */}
          <div className="flex-shrink-0 text-right text-xs" style={{ color: '#555' }}>
            <span>Today : </span>
            <span className="font-mono font-bold" style={{ color: '#333' }}>[{todayCount}]</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
