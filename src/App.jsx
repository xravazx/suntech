import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Services from './components/Services';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="scanlines"></div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
