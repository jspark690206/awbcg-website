import { MessageSquare, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/support/ContactForm';

export const metadata = { title: '온라인 문의' };

export default function ContactPage() {
  return (
    <div className="space-y-8">
      {/* 헤더 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(13,43,94,0.08)' }}>
            <MessageSquare size={22} style={{ color: 'var(--color-primary)' }} />
          </div>
          <div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>온라인 문의</h2>
            <p className="text-gray-400 text-sm">1~2 영업일 내 답변드립니다</p>
          </div>
        </div>
        {/* 연락처 빠른 안내 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-5 border-t border-gray-100">
          {[
            { icon: Phone, label: '전화 상담', value: '051-343-4047', sub: '평일 09:00~18:00', href: 'tel:051-343-4047' },
            { icon: Mail, label: '이메일', value: 'admin@awbcg.co.kr', sub: '24시간 접수 가능', href: 'mailto:admin@awbcg.co.kr' },
            { icon: Clock, label: '업무시간', value: '평일 09:00~18:00', sub: '토·일·공휴일 휴무', href: undefined },
          ].map(({ icon: Icon, label, value, sub, href }) => (
            <div key={label} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(13,43,94,0.06)' }}>
                <Icon size={15} style={{ color: 'var(--color-primary)' }} />
              </div>
              <div>
                <p className="text-xs text-gray-400">{label}</p>
                {href ? (
                  <a href={href} className="text-sm font-semibold hover:underline" style={{ color: 'var(--color-secondary)' }}>{value}</a>
                ) : (
                  <p className="text-sm font-semibold text-gray-700">{value}</p>
                )}
                <p className="text-xs text-gray-400">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 문의 폼 */}
      <ContactForm />
    </div>
  );
}
