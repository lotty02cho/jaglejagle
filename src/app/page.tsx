import Link from 'next/link';
import CreativeLogo from '../components/CreativeLogo';
import LandingHero from '../components/LandingHero';
import LandingFeatures from '../components/LandingFeatures';
import LandingTutorial from '../components/LandingTutorial';

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <LandingHero />
      <LandingFeatures />
      <LandingTutorial />
    </main>
  );
}
