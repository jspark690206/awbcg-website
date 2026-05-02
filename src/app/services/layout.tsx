import PageBanner from '@/components/ui/PageBanner';
import ServicesNav from '@/components/services/ServicesNav';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageBanner
        title="서비스소개"
        subtitle="SERVICE INTRODUCTION"
        breadcrumb={[{ label: 'HOME', href: '/' }, { label: '서비스소개' }]}
      />
      <ServicesNav />
      <div className="py-16" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container max-w-4xl">
          {children}
        </div>
      </div>
    </>
  );
}
