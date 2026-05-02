import { Headphones, Phone, Mail, Clock, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function HelpdeskPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(245,158,11,0.08)' }}>
          <Headphones size={20} style={{ color: '#F59E0B' }} />
        </div>
        <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>HELPDESK</h2>
      </div>

      {/* 채널별 안내 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(13,43,94,0.08)' }}>
            <Phone size={20} style={{ color: 'var(--color-primary)' }} />
          </div>
          <h3 className="font-bold text-base mb-1" style={{ color: 'var(--color-primary)' }}>전화 상담</h3>
          <a href="tel:051-343-4047" className="text-2xl font-bold block mb-1 hover:underline" style={{ color: 'var(--color-secondary)' }}>
            051-343-4047
          </a>
          <p className="text-sm text-gray-500">평일 09:00 ~ 18:00</p>
          <p className="text-xs text-gray-400 mt-1">점심시간 12:00~13:00 / 토·일·공휴일 휴무</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(26,127,196,0.08)' }}>
            <Mail size={20} style={{ color: 'var(--color-secondary)' }} />
          </div>
          <h3 className="font-bold text-base mb-1" style={{ color: 'var(--color-primary)' }}>이메일 문의</h3>
          <a href="mailto:admin@awbcg.co.kr" className="text-lg font-bold block mb-1 hover:underline" style={{ color: 'var(--color-secondary)' }}>
            admin@awbcg.co.kr
          </a>
          <p className="text-sm text-gray-500">24시간 접수 / 영업일 내 답변</p>
          <p className="text-xs text-gray-400 mt-1">긴급 장애는 전화로 연락해 주세요</p>
        </div>
      </div>

      {/* SLA 안내 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-bold text-base mb-4" style={{ color: 'var(--color-primary)' }}>장애 대응 기준 (SLA)</h3>
        <div className="space-y-3">
          {[
            { level: 'Critical', desc: '서비스 전면 중단', resp: '2시간 이내', color: '#EF4444' },
            { level: 'High', desc: '주요 기능 장애', resp: '4시간 이내', color: '#F59E0B' },
            { level: 'Medium', desc: '일부 기능 오류', resp: '1 영업일 이내', color: '#1A7FC4' },
            { level: 'Low', desc: '기능 개선 요청', resp: '3 영업일 이내', color: '#6B7280' },
          ].map((r) => (
            <div key={r.level} className="flex items-center gap-4 p-3 rounded-xl border border-gray-100">
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold text-white w-20 text-center" style={{ backgroundColor: r.color }}>
                {r.level}
              </span>
              <span className="flex-1 text-sm text-gray-600">{r.desc}</span>
              <span className="text-sm font-semibold" style={{ color: r.color }}>{r.resp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 온라인 문의 유도 */}
      <div className="flex items-start gap-3 p-5 rounded-2xl border" style={{ backgroundColor: 'rgba(26,127,196,0.04)', borderColor: 'rgba(26,127,196,0.2)' }}>
        <AlertCircle size={18} style={{ color: 'var(--color-secondary)' }} className="flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-gray-700 font-medium mb-1">온라인으로 문의하시면 더 빠르게 접수됩니다</p>
          <p className="text-xs text-gray-500 mb-3">문의 내용을 상세히 작성해 주시면 담당자가 신속하게 처리합니다.</p>
          <Link href="/support/contact" className="text-sm font-semibold underline" style={{ color: 'var(--color-secondary)' }}>
            온라인 문의 바로가기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
