import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Header />
      <Hero />
      <About />
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