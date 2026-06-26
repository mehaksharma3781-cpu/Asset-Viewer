import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import PricingSection from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <PricingSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}