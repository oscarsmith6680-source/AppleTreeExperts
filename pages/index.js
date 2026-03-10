import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SmallBusinessSolutions from '@/components/SmallBusinessSolutions';
import IndustriesSection from '@/components/IndustriesSection';
import RightWaySection from '@/components/RightWaySection';
import About from '@/components/About';
import Facts from '@/components/Facts';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Facts />
        <SmallBusinessSolutions />
        <IndustriesSection />
        <RightWaySection />
        <Testimonials />
        <FAQ subtitle="Quick answers to common questions about our business services." />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
