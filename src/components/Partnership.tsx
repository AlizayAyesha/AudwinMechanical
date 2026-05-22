import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Handshake, Shield, CheckCircle, Clock } from 'lucide-react';

const Partnership = () => {
  const highlights = [
    {
      icon: Handshake,
      title: "Coordinated Project Delivery",
      desc: "Synchronized timelines with site supervisors and general managers to prevent structural delays."
    },
    {
      icon: HardHat,
      title: "Safety & Compliance First",
      desc: "Strict compliance with OSHA, local municipal codes, and state-wide Texas engineering standards."
    },
    {
      icon: Clock,
      title: "Accelerated Timelines",
      desc: "Engineered prefab solutions and rapid field installation to support fast-track retail build-outs."
    },
    {
      icon: Shield,
      title: "Performance Guarantee",
      desc: "Comprehensive warranty on major system installations and long-term diagnostic maintenance support."
    }
  ];

  return (
    <section id="partnership" className="py-24 px-6 bg-[#0e142e] relative overflow-hidden border-b border-white/5">
      {/* Decorative vectors */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#1aa7e1]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left side: Text Content */}
          <div className="col-span-1 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#1aa7e1] font-mono font-black text-[10px] uppercase tracking-[0.3em] block mb-4">
                Enterprise Construction Partners
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-display font-black text-white leading-tight uppercase tracking-tight mb-6">
                Partnering with General <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#1aa7e1]">Contractors</span> & Developers
              </h2>
              
              <p className="text-slate-400 text-sm md:text-base mb-6 leading-relaxed font-medium">
                Audwin Mech collaborates closely with general contractors, developers, and construction teams to deliver high-performance HVAC and mechanical systems with precision, safety, and efficiency.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-10 max-w-2xl">
                We support commercial construction projects with reliable HVAC engineering, installation, fabrication, and maintenance solutions tailored for modern development landscapes across major Texas metroplexes and beyond.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1aa7e1]/10 border border-[#1aa7e1]/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#1aa7e1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side: High-contrast Construction Project Showcase */}
          <div className="col-span-1 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-[32px] overflow-hidden p-2 bg-white/[0.02] border border-white/10 shadow-2xl hover:border-[#1aa7e1]/30 transition-colors duration-500"
            >
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-[4/5] bg-slate-950">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" 
                  alt="Commercial HVAC construction site" 
                  className="w-full h-full object-cover opacity-60 hover:opacity-75 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Cinematic overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-[#090b14]/30 to-transparent" />
                
                {/* Float Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#090b14]/95 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-4 h-4 text-[#1aa7e1] shadow-[0_0_8px_rgba(26,167,225,0.4)]" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#25D366] font-bold">Texas-Wide Licensing</span>
                  </div>
                  <h4 className="text-white text-sm sm:text-base font-black uppercase tracking-tight">Active Retail Centers</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-snug">Supporting major commercial build-out efforts with certified, fully insured union and open-shop crews.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partnership;
