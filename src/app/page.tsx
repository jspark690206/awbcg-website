import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ContactBanner from '@/components/sections/ContactBanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AchievementsSection />
      <ContactBanner />
    </>
  );
}
