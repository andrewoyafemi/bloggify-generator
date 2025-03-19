
import { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "GhostRyt - AI Content That Doesn't Sound Like a Robot";
  }, []);

  return (
    <Layout>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
