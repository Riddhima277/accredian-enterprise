import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Partners from '../components/Partners';
import Programs from '../components/Programs';
import Features from '../components/Features';
import AIChat from '../components/AIChat';
import Testimonials from '../components/Testimonials';
import LeadForm from '../components/LeadForm';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <Programs />
      <Features />
      <AIChat />
      <Testimonials />
      <LeadForm />
      <CTABanner />
      <Footer />
    </main>
  );
}
