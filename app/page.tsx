import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Benefits from '@/components/Benefits';
import Location from '@/components/Location';
import Testimonial from '@/components/Testimonial';
import BetaClosed from '@/components/BetaClosed';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <Benefits />
        <Location />
        <Testimonial />
        <BetaClosed />
      </main>
      <Footer />
    </div>
  );
}
