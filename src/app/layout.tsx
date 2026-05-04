import type { Metadata } from 'next';
import { Noto_Sans_KR, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: '(주)올윈비시지 | 스마트공장·빅데이터·AI 구축 전문 컨설팅',
    template: '%s | (주)올윈비시지',
  },
  description:
    '영남지역 제조기업의 다크 팩토리 실현을 위한 MES·빅데이터·인공지능(AI) 구축 전문 컨설팅 그룹. 부산·경남·울산 제조기업 스마트팩토리 구축 전문.',
  keywords: ['스마트공장', 'MES 컨설팅', '빅데이터 컨설팅', 'AI 컨설팅', '스마트팩토리 부산', '올윈비시지', 'AWBCG'],
  authors: [{ name: '(주)올윈비시지' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.awbcg.co.kr',
    siteName: '(주)올윈비시지',
    title: '(주)올윈비시지 | 스마트공장·빅데이터·AI 구축 전문 컨설팅',
    description: '영남지역 제조기업의 다크 팩토리 실현을 위한 MES·빅데이터·AI 전문 컨설팅 그룹',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`h-full ${notoSansKR.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-[82px]">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
