'use client';

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import InstagramShowcase from './components/InstagramShowcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <InstagramShowcase />
      <Testimonials />
      <Contact />
    </>
  );
}
