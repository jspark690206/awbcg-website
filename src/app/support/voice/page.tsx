import { Star } from 'lucide-react';
import Link from 'next/link';

export default function VoicePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(239,68,68,0.08)' }}>
          <Star size={20} style={{ color: '#EF4444' }} />
        </div>
        <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>고객의소리</h2>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(239,68,68,0.08)' }}>
          <Star size={28} style={{ color: '#EF4444' }} />
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>소중한 의견을 남겨주세요</h3>
        <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto leading-relaxed">
          올윈비시지 서비스에 대한 칭찬, 건의사항, 불편사항을 자유롭게 남겨주세요.
          모든 의견은 서비스 개선에 반영됩니다.
        </p>
        <Link href="/support/contact?type=기타"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-white font-semibold"
          style={{ backgroundColor: '#EF4444' }}>
          <Star size={16} /> 의견 남기기
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-bold text-base mb-4" style={{ color: 'var(--color-primary)' }}>처리 절차</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          {['의견 접수', '담당자 검토', '개선 조치', '결과 안내'].map((step, idx, arr) => (
            <div key={step} className="flex items-center gap-2 flex-1">
              <div className="flex-1 text-center py-3 rounded-xl text-sm font-medium text-white"
                style={{ backgroundColor: idx === 0 ? '#EF4444' : `rgba(239,68,68,${0.5 - idx * 0.1})` }}>
                {step}
              </div>
              {idx < arr.length - 1 && <span className="text-gray-300 hidden sm:block">→</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
