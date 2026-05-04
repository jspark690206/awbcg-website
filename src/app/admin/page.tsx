'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Eye, EyeOff, Shield } from 'lucide-react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';

const ADMIN_PW = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? 'awbcg2019!';
const ALLOWED_EMAILS = (process.env.NEXT_PUBLIC_ADMIN_EMAILS ?? 'jspark6926@gmail.com').split(',').map(e => e.trim());

export default function AdminLoginPage() {
  const router = useRouter();
  const [pw, setPw] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const email = result.user.email ?? '';
      if (ALLOWED_EMAILS.includes(email)) {
        sessionStorage.setItem('admin_auth', 'true');
        sessionStorage.setItem('admin_email', email);
        router.push('/admin/dashboard');
      } else {
        setError(`접근 권한이 없습니다. (${email})`);
        await auth.signOut();
      }
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? '';
      const msg = (err as { message?: string }).message ?? '';
      if (code.includes('popup-closed') || code.includes('popup-cancelled') || code.includes('cancelled-popup-request')) {
        setError('');
      } else if (code.includes('popup-blocked')) {
        setError('팝업이 차단되었습니다. 브라우저에서 팝업 허용 후 다시 시도해 주세요.');
      } else if (code.includes('unauthorized-domain')) {
        setError('승인되지 않은 도메인입니다. Firebase 콘솔에서 도메인을 추가해 주세요.');
      } else if (code.includes('operation-not-allowed')) {
        setError('Google 로그인이 활성화되지 않았습니다. Firebase 콘솔을 확인해 주세요.');
      } else if (code.includes('invalid-api-key')) {
        setError('Firebase 설정 오류입니다. 환경변수를 확인해 주세요.');
      } else {
        setError(`로그인 실패: ${code || msg || '알 수 없는 오류'}`);
      }
    } finally {
      setLoading(false);
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
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-5">

          {/* 구글 로그인 버튼 */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all disabled:opacity-60"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
            ) : (
              <svg width="20" height="20" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
            )}
            {loading ? '로그인 중...' : 'Google 계정으로 로그인'}
          </button>

          {/* 구분선 */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">또는</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* 비밀번호 로그인 */}
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
              비밀번호로 로그인
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
