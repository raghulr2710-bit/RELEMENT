/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import WhyRecycle from './components/WhyRecycle';
import Minerals from './components/Minerals';
import Products from './components/Products';
import Technology from './components/Technology';
import Scale from './components/Scale';
import Investors from './components/Investors';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      const sections = ['why', 'products', 'technology', 'scale', 'invest', 'faq'];

      let currentSection = 'home';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger early audit
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-ink selection:bg-g1 selection:text-g5">
      {/* Scrollspy active navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main landing sections */}
      <Hero />
      <Ticker />
      <WhyRecycle />
      <Minerals />
      <Products />
      <Technology />
      <Scale />
      <Investors />
      
      {/* Beautifully expanded custom FAQ Section */}
      <FAQ />

      {/* Beautifully expanded custom CTA Section */}
      <CTA />

      {/* Scroll-trigger footer */}
      <Footer />
    </div>
  );
}
