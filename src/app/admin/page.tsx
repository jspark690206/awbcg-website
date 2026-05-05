'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Eye, EyeOff, Shield, Loader2 } from 'lucide-react';
import { signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';

const ADMIN_PW = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? 'awbcg2019!';
const ALLOWED_EMAILS = (process.env.NEXT_PUBLIC_ADMIN_EMAILS ?? 'jspark6926@gmail.com').split(',').map(e => e.trim());

export default function AdminLoginPage() {
  const router = useRouter();
  const [pw, setPw] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [googleLoading, setGoogleLoading] = useState(false);
  const [checkingRedirect, setCheckingRedirect] = useState(true);

  // 구글 리다이렉트 후 결과 처리
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          const email = result.user.email ?? '';
          if (ALLOWED_EMAILS.includes(email)) {
            sessionStorage.setItem('admin_auth', 'true');
            sessionStorage.setItem('admin_email', email);
            router.push('/admin/dashboard');
          } else {
            setError(`접근 권한이 없습니다. (${email})`);
            auth.signOut();
          }
        }
      })
      .catch((err) => {
        const code = (err as { code?: string }).code ?? '';
        if (code && !code.includes('cancelled')) {
          setError(`Google 로그인 오류: ${code}`);
        }
      })
      .finally(() => {
        setCheckingRedirect(false);
      });
  }, [router]);

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
    setGoogleLoading(true);
    setError('');
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (err: unknown) {
      setError(`오류: ${(err as { message?: string }).message ?? '알 수 없는 오류'}`);
      setGoogleLoading(false);
    }
  };

  // 리다이렉트 결과 확인 중
  if (checkingRedirect) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0D2B5E 0%, #1A4A8A 100%)' }}>
        <div className="text-center text-white">
          <Loader2 size={36} className="animate-spin mx-auto mb-3 opacity-70" />
          <p className="text-blue-200 text-sm">로그인 확인 중...</p>
        </div>
      </div>
    );
  }

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

          {/* Google 로그인 */}
          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all disabled:opacity-60"
          >
            {googleLoading ? (
              <Loader2 size={18} className="animate-spin text-gray-400" />
            ) : (
              <svg width="20" height="20" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
            )}
            {googleLoading ? 'Google로 이동 중...' : 'Google 계정으로 로그인'}
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
