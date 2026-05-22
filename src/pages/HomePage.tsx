import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Partnership from '../components/Partnership';
import Services from '../components/Services';
import FeaturedProjects from '../components/FeaturedProjects';
import FutureMission from '../components/FutureMission';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Partnership />
      <Services />
      <FeaturedProjects />
      <FutureMission />
      
      <Contact />
    </>
  );
};

export default HomePage;
