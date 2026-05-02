import PageBanner from '@/components/ui/PageBanner';
import AboutNav from '@/components/about/AboutNav';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageBanner
        title="회사현황"
        subtitle="ABOUT COMPANY"
        breadcrumb={[{ label: 'HOME', href: '/' }, { label: '회사현황' }]}
      />
      <AboutNav />
      <div className="py-16" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          {children}
        </div>
      </div>
    </>
  );
}
