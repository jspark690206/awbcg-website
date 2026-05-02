import Link from 'next/link';
import Image from 'next/image';
import { Phone, Printer, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)' }} className="text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.gif"
                alt="올윈비시지 로고"
                width={70}
                height={35}
                className="object-contain brightness-0 invert"
                unoptimized
              />
              <span className="font-bold text-lg">(주)올윈비시지</span>
            </div>
            <p className="text-blue-200 text-sm mb-4 leading-relaxed">
              스마트공장 / 빅데이터 / 인공지능 구축 전문 컨설팅 그룹<br />
              영남 제조기업의 다크 팩토리 실현을 위해 함께합니다.
            </p>
            <div className="space-y-2 text-sm text-blue-100">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-blue-300" />
                <span>부산광역시 북구 덕천로 155 1F</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-blue-300" />
                <a href="tel:051-343-4047" className="hover:text-white transition-colors">051-343-4047</a>
              </div>
              <div className="flex items-center gap-2">
                <Printer size={14} className="shrink-0 text-blue-300" />
                <span>051-343-4048</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-blue-300" />
                <a href="mailto:admin@awbcg.co.kr" className="hover:text-white transition-colors">admin@awbcg.co.kr</a>
              </div>
            </div>
          </div>

          {/* 서비스 */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-blue-200 uppercase tracking-wider">서비스</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              {['MES 컨설팅', 'BigData 컨설팅', 'AI 컨설팅', '창업 컨설팅', '경영 컨설팅'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-blue-200 uppercase tracking-wider">고객지원</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              {['온라인 문의', '제품사용설명서', 'Q&A', 'HELPDESK', '원격지원'].map((s) => (
                <li key={s}>
                  <Link href="/support" className="hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-blue-300">사업자등록번호</p>
              <p className="text-sm text-blue-100">654-81-01275</p>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 바 */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-blue-300">
          <span>Copyright © 2019 AllWin BCG All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white transition-colors">회사소개</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">개인정보보호정책</Link>
            <Link href="/about/location" className="hover:text-white transition-colors">찾아오시는길</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
