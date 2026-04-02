import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
