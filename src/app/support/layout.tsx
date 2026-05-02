import PageBanner from '@/components/ui/PageBanner';
import SupportNav from '@/components/support/SupportNav';

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageBanner
        title="고객지원"
        subtitle="CUSTOMER SUPPORT"
        breadcrumb={[{ label: 'HOME', href: '/' }, { label: '고객지원' }]}
      />
      <SupportNav />
      <div className="py-16" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container max-w-4xl">{children}</div>
      </div>
    </>
  );
}
