import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb: { label: string; href?: string }[];
}

export default function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <div
      className="py-14"
      style={{ background: 'linear-gradient(135deg, #0D2B5E 0%, #1A4A8A 100%)' }}
    >
      <div className="container">
        {/* 브레드크럼 */}
        <nav className="flex items-center gap-1.5 text-xs text-blue-300 mb-4">
          {breadcrumb.map((item, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              {idx > 0 && <ChevronRight size={12} />}
              {item.href ? (
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
        {subtitle && <p className="text-blue-200 mt-2 text-sm">{subtitle}</p>}
      </div>
    </div>
  );
}
