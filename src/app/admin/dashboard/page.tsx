'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Bell, Briefcase, HelpCircle, TrendingUp, Clock } from 'lucide-react';
import { firestoreStore, Inquiry, Notice, Career, QAItem } from '@/lib/firestoreStore';

export default function DashboardPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [careers, setCareers] = useState<Career[]>([]);
  const [qa, setQa] = useState<QAItem[]>([]);

  useEffect(() => {
    Promise.all([
      firestoreStore.inquiries.getAll(),
      firestoreStore.notices.getAll(),
      firestoreStore.careers.getAll(),
      firestoreStore.qa.getAll(),
    ]).then(([inqs, nots, cars, qaItems]) => {
      setInquiries(inqs);
      setNotices(nots);
      setCareers(cars);
      setQa(qaItems);
    });
  }, []);

  const newCount = inquiries.filter(i => i.status === 'new').length;
  const inProgressCount = inquiries.filter(i => i.status === 'inProgress').length;
  const doneCount = inquiries.filter(i => i.status === 'done').length;

  const stats = [
    { label: '신규 문의', value: newCount, icon: MessageSquare, color: '#EF4444', href: '/admin/inquiries' },
    { label: '처리 중 문의', value: inProgressCount, icon: Clock, color: '#F59E0B', href: '/admin/inquiries' },
    { label: '공지사항', value: notices.filter(n => n.published).length, icon: Bell, color: '#1A7FC4', href: '/admin/notices' },
    { label: '채용공고', value: careers.filter(c => c.published).length, icon: Briefcase, color: '#00A878', href: '/admin/careers' },
    { label: 'Q&A', value: qa.length, icon: HelpCircle, color: '#8B5CF6', href: '/admin/qa' },
    { label: '처리 완료', value: doneCount, icon: TrendingUp, color: '#6B7280', href: '/admin/inquiries' },
  ];

  const recentInquiries = inquiries.slice(0, 5);
  const statusLabel = { new: '신규', inProgress: '처리중', done: '완료' };
  const statusColor = { new: '#EF4444', inProgress: '#F59E0B', done: '#00A878' };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>대시보드</h1>
        <p className="text-gray-400 text-sm mt-1">{new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Link key={s.label} href={s.href}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${s.color}15` }}>
                  <Icon size={20} style={{ color: s.color }} />
                </div>
                {s.label === '신규 문의' && s.value > 0 && (
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                )}
              </div>
              <div className="text-3xl font-bold mb-0.5" style={{ color: 'var(--color-primary)' }}>{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </Link>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-base" style={{ color: 'var(--color-primary)' }}>최근 문의</h2>
          <Link href="/admin/inquiries" className="text-sm text-blue-500 hover:underline">전체 보기 →</Link>
        </div>
        {recentInquiries.length === 0
          ? <p className="text-center text-gray-400 py-8 text-sm">문의가 없습니다.</p>
          : (
            <div className="space-y-3">
              {recentInquiries.map((inq) => (
                <div key={inq.id} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-medium text-sm text-gray-800 truncate">{inq.company}</span>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="text-xs text-gray-500 truncate">{inq.type}</span>
                    </div>
                    <p className="text-xs text-gray-400 truncate">{inq.message}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0"
                    style={{ backgroundColor: `${statusColor[inq.status]}15`, color: statusColor[inq.status] }}>
                    {statusLabel[inq.status]}
                  </span>
                  <span className="text-xs text-gray-400 flex-shrink-0">{inq.createdAt.slice(0, 10)}</span>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
