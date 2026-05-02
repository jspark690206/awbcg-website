'use client';

import Link from 'next/link';
import { Phone, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D2B5E 0%, #1A4A8A 50%, #1A7FC4 100%)',
      }}
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-2 border-white" />
        <div className="absolute top-32 left-32 w-40 h-40 rounded-full border border-white" />
        <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full border-2 border-white" />
        <div className="absolute bottom-32 right-40 w-48 h-48 rounded-full border border-white" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          {/* 배지 */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: 'rgba(0,168,120,0.2)', color: '#4ECCA3', border: '1px solid rgba(0,168,120,0.4)' }}
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            영남지역 스마트팩토리 구축 전문
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            스마트공장 · 빅데이터<br />
            <span style={{ color: '#4ECCA3' }}>인공지능(AI)</span> 구축<br />
            전문 컨설팅 그룹
          </h1>

          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            제조기업에 AI를 불어넣어 <strong className="text-white">다크 팩토리 구축</strong>에 기여합니다.<br />
            부산 · 경남 · 울산 제조기업의 4차 산업 혁신 파트너
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/support/contact"
              style={{ backgroundColor: 'var(--color-accent)' }}
              className="flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all hover:scale-105 shadow-lg"
            >
              <Phone size={18} />
              무료 상담 신청
            </Link>
            <Link
              href="/services"
              className="flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              서비스 소개 보기
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* 하단 통계 바 */}
      <div className="absolute bottom-0 left-0 right-0" style={{ backgroundColor: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(10px)' }}>
        <div className="container py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '2019', label: '설립' },
            { value: '9', label: '수주 프로젝트' },
            { value: '3', label: '주요 고객사' },
            { value: 'MES·BD·AI', label: '핵심 기술' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-blue-200 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
