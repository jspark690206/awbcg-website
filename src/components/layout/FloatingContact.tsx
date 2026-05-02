'use client';

import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="tel:051-343-4047"
        style={{ backgroundColor: 'var(--color-accent)' }}
        className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-all hover:scale-110"
        title="전화 상담"
      >
        <Phone size={20} />
      </a>
      <Link
        href="/support/contact"
        style={{ backgroundColor: 'var(--color-secondary)' }}
        className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-all hover:scale-110"
        title="온라인 문의"
      >
        <MessageSquare size={20} />
      </Link>
    </div>
  );
}
