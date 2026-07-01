import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import LifestyleBand from "@/components/LifestyleBand";
import SeriesShowcase from "@/components/SeriesShowcase";
import WhyGetah from "@/components/WhyGetah";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <SeriesShowcase />
        <LifestyleBand />
        <WhyGetah />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
