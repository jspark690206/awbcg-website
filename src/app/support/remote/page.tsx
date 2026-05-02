'use client';

import { Monitor, Download, Shield, Clock } from 'lucide-react';

export default function RemotePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(139,92,246,0.08)' }}>
          <Monitor size={20} style={{ color: '#8B5CF6' }} />
        </div>
        <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>원격지원</h2>
      </div>

      {/* 이용 안내 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h3 className="font-bold text-lg mb-5" style={{ color: 'var(--color-primary)' }}>원격지원 이용 방법</h3>
        <div className="space-y-4">
          {[
            { step: '1', title: '전화 상담 요청', desc: '051-343-4047 로 연락하여 원격 지원을 요청합니다.' },
            { step: '2', title: '원격 프로그램 실행', desc: '담당자 안내에 따라 아래 원격지원 프로그램을 다운로드하고 실행합니다.' },
            { step: '3', title: '연결 코드 공유', desc: '프로그램 실행 후 표시되는 ID와 비밀번호를 담당자에게 알려줍니다.' },
            { step: '4', title: '원격 지원 진행', desc: '담당자가 원격으로 접속하여 문제를 진단하고 해결합니다.' },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: '#8B5CF6' }}>{s.step}</div>
              <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                <p className="font-semibold text-sm mb-0.5" style={{ color: 'var(--color-primary)' }}>{s.title}</p>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm"
            style={{ backgroundColor: '#8B5CF6' }}
            onClick={() => alert('원격지원 프로그램을 준비 중입니다. 전화(051-343-4047)로 연락해 주세요.')}
          >
            <Download size={16} /> 원격지원 프로그램 다운로드
          </button>
          <a href="tel:051-343-4047"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm border border-gray-200 text-gray-700 hover:bg-gray-50">
            📞 051-343-4047 전화 먼저 하기
          </a>
        </div>
      </div>

      {/* 안내 사항 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { icon: Shield, title: '보안 안내', desc: '원격지원은 담당자 요청 시에만 진행되며, 세션 종료 후 연결이 자동으로 차단됩니다.', color: '#00A878' },
          { icon: Clock, title: '지원 시간', desc: '평일 09:00~18:00. 긴급 장애의 경우 유지보수 계약 고객은 24시간 지원합니다.', color: '#1A7FC4' },
        ].map(({ icon: Icon, title, desc, color }) => (
          <div key={title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}10` }}>
              <Icon size={18} style={{ color }} />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1" style={{ color: 'var(--color-primary)' }}>{title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
