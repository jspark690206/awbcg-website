'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin';

  useEffect(() => {
    if (!isLoginPage) {
      const auth = sessionStorage.getItem('admin_auth');
      if (!auth) router.replace('/admin');
    }
  }, [isLoginPage, router]);

  if (isLoginPage) return <>{children}</>;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
