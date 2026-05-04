'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/lib/userAuth';
import { LogIn, CheckCircle } from 'lucide-react';

export default function LoginPage() {
  const { user, loading, signIn } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState('');
  const [signingIn, setSigningIn] = useState(false);

  const redirect = searchParams.get('redirect') ?? '/mypage';

  useEffect(() => {
    if (!loading && user) router.replace(redirect);
  }, [user, loading, router, redirect]);

  const handleSignIn = async () => {
    setSigningIn(true);
    setError('');
    try {
      await signIn();
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? '';
      if (!code.includes('popup-closed') && !code.includes('popup-cancelled') && !code.includes('cancelled-popup-request')) {
        setError('로그인에 실패했습니다. 다시 시도해 주세요.');
      }
    } finally {
      setSigningIn(false);
    }
  };

  if (loading) return null;

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* 카드 */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* 헤더 */}
          <div className="px-8 pt-8 pb-6 text-center" style={{ background: 'linear-gradient(135deg, #0D2B5E 0%, #1A4A8A 100%)' }}>
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3">
              <LogIn size={26} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">로그인 / 회원가입</h1>
            <p className="text-blue-200 text-sm mt-1">Google 계정으로 간편하게 시작하세요</p>
          </div>

          {/* 혜택 안내 */}
          <div className="px-8 py-5 bg-blue-50 border-b border-blue-100">
            <ul className="space-y-2">
              {[
                '문의 신청 시 정보가 자동으로 입력됩니다',
                '제출한 문의 내역과 처리 상태를 확인할 수 있습니다',
                '담당자 답변을 마이페이지에서 확인하세요',
              ].map((text) => (
                <li key={text} className="flex items-center gap-2 text-sm text-blue-700">
                  <CheckCircle size={14} className="text-blue-500 flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* 로그인 버튼 */}
          <div className="px-8 py-6 space-y-4">
            <button
              onClick={handleSignIn}
              disabled={signingIn}
              className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all disabled:opacity-60"
            >
              {signingIn ? (
                <span className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              )}
              {signingIn ? '로그인 중...' : 'Google 계정으로 계속하기'}
            </button>

            {error && <p className="text-center text-xs text-red-500">{error}</p>}

            <p className="text-center text-xs text-gray-400">
              로그인하면 개인정보 처리방침에 동의하는 것으로 간주됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
