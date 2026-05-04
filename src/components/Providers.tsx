'use client';

import { AuthProvider } from '@/lib/userAuth';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
