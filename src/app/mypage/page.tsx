'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/userAuth';
import { firestoreStore, Inquiry } from '@/lib/firestoreStore';
import { LogOut, MessageSquare, ChevronRight, Clock } from 'lucide-react';

const STATUS_OPTIONS = {
  new:        { label: '신규 접수', color: '#EF4444' },
  inProgress: { label: '처리중',   color: '#F59E0B' },
  done:       { label: '답변 완료', color: '#00A878' },
} as const;

export default function MyPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [fetching, setFetching] = useState(true);
  const [selected, setSelected] = useState<Inquiry | null>(null);

  useEffect(() => {
    if (!loading && !user) router.replace('/login?redirect=/mypage');
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      firestoreStore.inquiries.getByUser(user.uid)
        .then(data => { setInquiries(data); setFetching(false); });
    }
  }, [user]);

  const handleLogout = async () => {
    await logout();
    router.replace('/');
  };

  if (loading || !user) return null;

  return (
    <div className="container py-10 max-w-4xl">
      {/* 프로필 카드 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {user.photoURL ? (
            <Image src={user.photoURL} alt="프로필" width={52} height={52} className="rounded-full" />
          ) : (
            <div className="w-13 h-13 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: 'var(--color-primary)', width: 52, height: 52 }}>
              {user.displayName?.[0] ?? '?'}
            </div>
          )}
          <div>
            <p className="font-bold text-base" style={{ color: 'var(--color-primary)' }}>{user.displayName ?? '사용자'}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
        </div>
        <button onClick={handleLogout}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition-colors">
          <LogOut size={14} /> 로그아웃
        </button>
      </div>

      {/* 문의 내역 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <MessageSquare size={18} style={{ color: 'var(--color-primary)' }} />
            <h2 className="font-bold text-base" style={{ color: 'var(--color-primary)' }}>내 문의 내역</h2>
            <span className="text-xs text-gray-400">({inquiries.length}건)</span>
          </div>
          <Link href="/support/contact"
            className="flex items-center gap-1 text-sm font-medium text-white px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--color-secondary)' }}>
            새 문의 <ChevronRight size={14} />
          </Link>
        </div>

        {fetching ? (
          <div className="py-16 text-center text-gray-400 text-sm">불러오는 중...</div>
        ) : inquiries.length === 0 ? (
          <div className="py-16 text-center">
            <Clock size={36} className="mx-auto mb-3 text-gray-200" />
            <p className="text-gray-400 text-sm">아직 제출한 문의가 없습니다.</p>
            <Link href="/support/contact"
              className="inline-block mt-4 px-5 py-2 rounded-xl text-white text-sm font-medium hover:opacity-90"
              style={{ backgroundColor: 'var(--color-secondary)' }}>
              문의하기
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {inquiries.map(inq => {
              const s = STATUS_OPTIONS[inq.status];
              const isOpen = selected?.id === inq.id;
              return (
                <div key={inq.id}>
                  <button
                    onClick={() => setSelected(isOpen ? null : inq)}
                    className="w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{ backgroundColor: `${s.color}15`, color: s.color }}>
                            {s.label}
                          </span>
                          <span className="text-xs text-blue-500">{inq.type}</span>
                        </div>
                        <p className="text-sm text-gray-700 truncate">{inq.message}</p>
                      </div>
                      <span className="text-xs text-gray-400 flex-shrink-0">{inq.createdAt.slice(0, 10)}</span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 bg-gray-50 border-t border-gray-100 space-y-3">
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        {[['회사명', inq.company], ['담당자', inq.name], ['연락처', inq.phone], ['이메일', inq.email]].map(([k, v]) => (
                          <div key={k} className="text-sm">
                            <span className="text-gray-400 mr-2">{k}</span>
                            <span className="text-gray-700 font-medium">{v}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-gray-100 text-sm text-gray-600 leading-relaxed">
                        {inq.message}
                      </div>
                      {inq.reply && (
                        <div className="p-3 rounded-xl border text-sm leading-relaxed"
                          style={{ backgroundColor: 'rgba(0,168,120,0.05)', borderColor: 'rgba(0,168,120,0.2)', color: '#065f46' }}>
                          <p className="text-xs font-semibold mb-1" style={{ color: '#00A878' }}>담당자 답변</p>
                          {inq.reply}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
