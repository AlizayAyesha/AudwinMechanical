import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

const Hero = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070',
      title: "Engineering Excellence by Audwin Mechanical",
      subtitle: "Professional Installation, Maintenance & Estimation Services for Residential, Commercial & Industrial Projects."
    },
    {
      image: 'https://images.unsplash.com/photo-1504307651254-35680f3366d4?auto=format&fit=crop&q=80&w=2070',
      title: "Smart Electrical & Power Infrastructure",
      subtitle: "Innovative electrical engineering designed for reliability, safety, and maximum energy efficiency."
    },
    {
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2070',
      title: "Advanced HVAC & Mechanical Systems",
      subtitle: "State-of-the-art climate control and mechanical installations for large-scale industrial complexes."
    }
  ];

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary-navy to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary-navy/50 to-transparent z-10 pointer-events-none" />
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background with overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] hover:scale-110"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-primary-navy/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start z-10">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-3xl"
                >
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8"
                    >
                      Next-Gen Engineering
                    </motion.span>
                    <h1 className="text-5xl md:text-8xl font-display font-extrabold leading-[1.05] mb-8 tracking-tighter text-white">
                      Engineering Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Mechanical Solutions</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-medium">
                      Professional Installation, Maintenance & Estimation Services for Residential, Commercial & Industrial Projects worldwide.
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                      <button className="bg-primary-blue hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-blue-600/30">
                        View Live Projects <ArrowRight className="w-5 h-5 shadow-sm" />
                      </button>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                          {[1,2,3].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-primary-navy bg-slate-800" />
                          ))}
                          <div className="w-10 h-10 rounded-full border-2 border-primary-navy bg-blue-900 flex items-center justify-center text-xs font-bold">+4k</div>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Trusted by</span>
                          <span className="text-sm font-extrabold text-white">500+ Enterprises</span>
                        </div>
                      </div>
                    </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-electric rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
