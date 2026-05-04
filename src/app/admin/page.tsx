'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Eye, EyeOff, Shield } from 'lucide-react';

const ADMIN_PW = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? 'awbcg2019!';

export default function AdminLoginPage() {
  const router = useRouter();
  const [pw, setPw] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (pw === ADMIN_PW) {
      sessionStorage.setItem('admin_auth', 'true');
      router.push('/admin/dashboard');
    } else {
      setError('비밀번호가 올바르지 않습니다.');
      setPw('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0D2B5E 0%, #1A4A8A 100%)' }}>
      <div className="w-full max-w-sm mx-4">
        {/* 로고 */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
            <Shield size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold" style={{ color: '#FFD700' }}>(주)올윈비시지</h1>
          <p className="text-blue-200 text-sm mt-1">관리자 페이지</p>
        </div>

        {/* 로그인 카드 */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">관리자 비밀번호</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={show ? 'text' : 'password'}
                  value={pw}
                  onChange={e => { setPw(e.target.value); setError(''); }}
                  placeholder="비밀번호 입력"
                  autoFocus
                  className="w-full pl-9 pr-10 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50"
                />
                <button type="button" onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button type="submit"
              className="w-full py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--color-secondary)' }}>
              로그인
            </button>
          </form>
        </div>

        <p className="text-center text-blue-300 text-xs mt-6">
          © 2019 AllWin BCG. 관리자 전용 페이지입니다.
        </p>
      </div>
    </div>
  );
}
