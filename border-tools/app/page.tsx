import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Analysis from '@/components/Analysis';
import Competitors from '@/components/Competitors';
import Combos from '@/components/Combos';
import Infrastructure from '@/components/Infrastructure';
import WebsiteStrategy from '@/components/WebsiteStrategy';
import MarketStrategy from '@/components/MarketStrategy';
import AdsAndContent from '@/components/AdsAndContent';
import Costs from '@/components/Costs';
import Collaboration from '@/components/Collaboration';
import FinalVision from '@/components/FinalVision';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Analysis />
      <Competitors />
      <Combos />
      <Infrastructure />
      <WebsiteStrategy />
      <MarketStrategy />
      <AdsAndContent />
      <Costs />
      <Collaboration />
      <FinalVision />
    </main>
  );
}
