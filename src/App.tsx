import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import IdCardSection from './components/IdCardSection';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ui/ScrollProgressBar';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[#080808] text-[#f0f0f0] min-h-screen">
      <ScrollProgressBar />
      <Header />
      <Hero />
      <About />
      <IdCardSection />
      <Experience />
      <Projects />
      <Skills />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
