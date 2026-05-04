import Link from 'next/link';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function ContactBanner() {
  return (
    <section
      className="py-16"
      style={{ background: 'linear-gradient(135deg, #0D2B5E 0%, #1A7FC4 100%)' }}
    >
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#FFD700' }}>
          스마트팩토리 구축, 지금 바로 상담받으세요
        </h2>
        <p className="text-blue-200 mb-8">
          부산 · 경남 · 울산 지역 제조기업 전문 — 무료 초기 상담 제공
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:051-343-4047"
            className="flex items-center justify-center gap-2 bg-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
            style={{ color: 'var(--color-primary)' }}
          >
            <Phone size={18} />
            051-343-4047
          </a>
          <Link
            href="/support/contact"
            style={{ backgroundColor: 'var(--color-accent)' }}
            className="flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            온라인 문의하기
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
