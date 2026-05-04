'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { firestoreStore, Career } from '@/lib/firestoreStore';
import { Briefcase, Calendar } from 'lucide-react';

export default function CareerNoticePage() {
  const [careers, setCareers] = useState<Career[]>([]);

  useEffect(() => {
    firestoreStore.careers.getAll().then(data => {
      setCareers(data.filter(c => c.published));
    });
  }, []);

  return (
    <div>
      {careers.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <Briefcase size={40} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">현재 진행 중인 채용공고가 없습니다.</p>
          <p className="text-xs mt-1">수시 채용 문의: admin@awbcg.co.kr</p>
        </div>
      ) : (
        <div className="space-y-4">
          {careers.map((c) => (
            <div key={c.id} className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ backgroundColor: 'rgba(0,168,120,0.1)', color: '#00A878' }}>
                      {c.type}
                    </span>
                    {c.department && (
                      <span className="text-xs text-gray-400">{c.department}</span>
                    )}
                  </div>
                  <h3 className="font-bold text-base text-gray-800 mb-2">{c.title}</h3>
                  {c.description && (
                    <p className="text-sm text-gray-500 line-clamp-2">{c.description}</p>
                  )}
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="flex items-center gap-1 text-xs text-gray-400 justify-end">
                    <Calendar size={12} />
                    <span>마감: {c.deadline || '미정'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 p-4 rounded-lg text-sm text-gray-600" style={{ backgroundColor: '#f0f4ff' }}>
        <p className="font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>📌 채용 문의</p>
        <p>이메일: <a href="mailto:admin@awbcg.co.kr" className="text-blue-600 hover:underline">admin@awbcg.co.kr</a></p>
        <p>전화: <a href="tel:051-343-4047" className="text-blue-600 hover:underline">051-343-4047</a></p>
        <p className="text-xs text-gray-400 mt-1">
          * 수시 채용으로 공고 없이도 상시 지원 가능합니다.&nbsp;
          <Link href="/support/contact" className="text-blue-500 hover:underline">온라인 문의 바로가기 →</Link>
        </p>
      </div>
    </div>
  );
}
