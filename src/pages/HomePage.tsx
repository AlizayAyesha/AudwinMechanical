import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import FeaturedProjects from '../components/FeaturedProjects';
import FutureMission from '../components/FutureMission';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <FutureMission />
      
      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-[#020617] border-y border-white/5 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
           <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Validation</span>
           <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-16 text-white tracking-tighter">Trusted by Industry <span className="text-primary-blue">Titans</span></h2>
           
           <div className="glass-card p-16 md:p-20 rounded-[48px] max-w-4xl relative border-white/5 shadow-2xl">
              <div className="text-8xl text-primary-blue font-display absolute -top-8 -left-4 opacity-10 select-none">“</div>
              <p className="text-2xl md:text-3xl italic leading-relaxed text-slate-200 font-medium tracking-tight">
                "The Audwin Mechanical team delivered our facility's HVAC and electrical systems with unparalleled precision. Their attention to sustainability and technological integration saved us 20% in annual energy costs."
              </p>
              <div className="mt-12 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-slate-800 mb-4 border-2 border-primary-blue/30" />
                <h4 className="font-extrabold text-white text-xl">Robert Anderson</h4>
                <p className="text-blue-400 text-[10px] uppercase tracking-[0.2em] font-black mt-1">CTO, Global Tech Dynamics</p>
              </div>
           </div>
        </div>
      </section>

      <Newsletter />
      <Contact />
    </>
  );
};

export default HomePage;
