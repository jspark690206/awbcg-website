import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';

interface ServiceCTAProps {
  serviceName: string;
  color: string;
}

export default function ServiceCTA({ serviceName, color }: ServiceCTAProps) {
  return (
    <div
      className="rounded-2xl p-8 text-center mt-10"
      style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
    >
      <h3 className="text-xl font-bold mb-2" style={{ color: '#FFD700' }}>
        {serviceName} 도입을 검토 중이신가요?
      </h3>
      <p className="text-white/80 text-sm mb-6">
        올윈비시지 전문 컨설턴트가 무료로 초기 상담을 도와드립니다.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <a
          href="tel:051-343-4047"
          className="flex items-center justify-center gap-2 bg-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm"
          style={{ color }}
        >
          <Phone size={16} />
          051-343-4047 전화 상담
        </a>
        <Link
          href="/support/contact"
          className="flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-xl border border-white/40 hover:bg-white/10 transition-colors text-sm"
        >
          <MessageSquare size={16} />
          온라인 문의하기
        </Link>
      </div>
    </div>
  );
}
