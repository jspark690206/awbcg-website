import HeroSection from '@/components/sections/HeroSection';
import InfoSection from '@/components/sections/InfoSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactBanner from '@/components/sections/ContactBanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <ServicesSection />
      <ContactBanner />
    </>
  );
}
