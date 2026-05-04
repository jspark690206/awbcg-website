'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { Send, CheckCircle, AlertCircle, Loader2, LogIn } from 'lucide-react';
import { useAuth } from '@/lib/userAuth';
import { firestoreStore } from '@/lib/firestoreStore';

const schema = z.object({
  company: z.string().min(1, '회사명을 입력해 주세요.'),
  name: z.string().min(1, '담당자명을 입력해 주세요.'),
  phone: z.string().min(9, '올바른 연락처를 입력해 주세요.').regex(/^[0-9\-]+$/, '숫자와 하이픈(-)만 입력해 주세요.'),
  email: z.string().email('올바른 이메일 주소를 입력해 주세요.'),
  type: z.string().min(1, '문의 유형을 선택해 주세요.'),
  message: z.string().min(10, '문의 내용을 10자 이상 입력해 주세요.'),
  agree: z.boolean().refine((v) => v === true, '개인정보 수집·이용에 동의해 주세요.'),
});

type FormData = z.infer<typeof schema>;

const INQUIRY_TYPES = [
  'MES 컨설팅 문의',
  'BigData 컨설팅 문의',
  'AI 컨설팅 문의',
  '창업·경영 컨설팅 문의',
  '제품 기술 지원',
  '채용 문의',
  '기타',
];

export default function ContactForm() {
  const { user } = useAuth();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { type: '', agree: false },
  });

  useEffect(() => {
    if (user) {
      if (user.displayName) setValue('name', user.displayName);
      if (user.email) setValue('email', user.email);
    }
  }, [user, setValue]);

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    setErrorMsg('');
    try {
      await firestoreStore.inquiries.add({
        company: data.company,
        name: data.name,
        phone: data.phone,
        email: data.email,
        type: data.type,
        message: data.message,
        status: 'new',
        userId: user?.uid ?? '',
        userEmail: user?.email ?? '',
      });

      // 이메일 알림 (설정 시 동작, 실패해도 무시)
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(() => {});

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
      setErrorMsg('오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(0,168,120,0.1)' }}>
          <CheckCircle size={32} style={{ color: 'var(--color-accent)' }} />
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>문의가 접수되었습니다</h3>
        <p className="text-gray-500 text-sm mb-2">담당자 확인 후 1~2 영업일 내 연락드리겠습니다.</p>
        {user && (
          <p className="text-gray-400 text-xs mb-6">
            처리 현황은{' '}
            <Link href="/mypage" className="text-blue-500 hover:underline">마이페이지</Link>
            에서 확인하실 수 있습니다.
          </p>
        )}
        <button onClick={() => setStatus('idle')}
          className="px-6 py-2.5 rounded-xl text-sm font-medium text-white"
          style={{ backgroundColor: 'var(--color-secondary)' }}>
          새 문의 작성
        </button>
      </div>
    );
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:ring-2 ${
      hasError ? 'border-red-300 focus:ring-red-100' : 'border-gray-200 focus:border-blue-400 focus:ring-blue-50'
    }`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-5">
      {/* 로그인 유도 배너 (비로그인 시) */}
      {!user && (
        <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl border border-blue-100 bg-blue-50">
          <p className="text-sm text-blue-700">
            <span className="font-semibold">로그인</span>하면 정보가 자동 입력되고 문의 내역을 관리할 수 있습니다.
          </p>
          <Link href="/login?redirect=/support/contact"
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-xs font-medium flex-shrink-0 hover:opacity-90"
            style={{ backgroundColor: 'var(--color-secondary)' }}>
            <LogIn size={12} /> 로그인
          </Link>
        </div>
      )}

      {/* 로그인 상태 표시 */}
      {user && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-green-50 border border-green-100">
          <CheckCircle size={15} className="text-green-500" />
          <p className="text-sm text-green-700">
            <span className="font-semibold">{user.displayName ?? user.email}</span>으로 로그인됨 — 이름·이메일이 자동 입력되었습니다.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">회사명 <span className="text-red-500">*</span></label>
          <input {...register('company')} placeholder="(주)올윈비시지" className={inputClass(!!errors.company)} />
          {errors.company && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.company.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">담당자명 <span className="text-red-500">*</span></label>
          <input {...register('name')} placeholder="홍길동" className={inputClass(!!errors.name)} />
          {errors.name && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">연락처 <span className="text-red-500">*</span></label>
          <input {...register('phone')} placeholder="051-343-4047" className={inputClass(!!errors.phone)} />
          {errors.phone && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">이메일 <span className="text-red-500">*</span></label>
          <input {...register('email')} type="email" placeholder="example@company.com" className={inputClass(!!errors.email)} />
          {errors.email && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">문의 유형 <span className="text-red-500">*</span></label>
        <select {...register('type')} className={inputClass(!!errors.type) + ' bg-white'}>
          <option value="">문의 유형을 선택해 주세요</option>
          {INQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.type && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.type.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">문의 내용 <span className="text-red-500">*</span></label>
        <textarea {...register('message')} rows={6}
          placeholder="도입을 검토 중인 시스템, 현재 운영 환경, 문의 사항 등을 자유롭게 작성해 주세요."
          className={inputClass(!!errors.message) + ' resize-none'} />
        {errors.message && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.message.message}</p>}
      </div>

      <div className="rounded-xl border border-gray-200 p-4 bg-gray-50">
        <p className="text-xs text-gray-500 mb-3 leading-relaxed">
          <strong className="text-gray-700">[개인정보 수집·이용 동의]</strong><br />
          수집 항목: 회사명, 담당자명, 연락처, 이메일, 문의 내용<br />
          수집 목적: 문의 접수 및 상담 처리<br />
          보유 기간: 문의 처리 완료 후 1년
        </p>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" {...register('agree')} className="w-4 h-4 rounded border-gray-300 accent-blue-600" />
          <span className="text-sm font-medium text-gray-700">
            개인정보 수집·이용에 동의합니다 <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.agree && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} />{errors.agree.message}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
          <AlertCircle size={16} />{errorMsg}
        </div>
      )}

      <button type="submit" disabled={status === 'loading'}
        style={{ backgroundColor: 'var(--color-secondary)' }}
        className="w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60">
        {status === 'loading' ? (
          <><Loader2 size={18} className="animate-spin" />전송 중...</>
        ) : (
          <><Send size={18} />문의 접수하기</>
        )}
      </button>
    </form>
  );
}
