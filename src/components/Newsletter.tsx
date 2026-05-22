import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, HardHat } from 'lucide-react';

const Newsletter = () => {
  return (
    <section id="cta-section" className="py-32 px-6 relative overflow-hidden bg-[#030712]">
      {/* Visual neon ambient gradients */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-blue/15 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 glass-card p-12 md:p-24 rounded-[48px] border-white/5 text-center shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 bg-[#0c132d] rounded-2xl flex items-center justify-center mx-auto mb-8 border border-primary-blue/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <HardHat className="w-8 h-8 text-primary-blue" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6 text-white tracking-tighter leading-none uppercase">
            Building High-Performance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary-blue to-cyan-400">
              Commercial HVAC Systems
            </span>
          </h2>
          
          <p className="text-slate-400 text-base md:text-lg mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Partner with Audwin Mech for reliable mechanical engineering, HVAC installation, and commercial construction support.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-md mx-auto">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-primary-blue hover:bg-blue-600 text-white px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-[1.03] active:scale-95 shadow-xl shadow-blue-500/20 text-xs uppercase tracking-widest"
            >
              Request Consultation <ArrowRight className="w-4 h-4" />
            </a>
            
            <a 
              href="tel:9562306949"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-[1.03] active:scale-95 text-xs uppercase tracking-widest"
            >
              Contact Our Team <Phone className="w-4 h-4 text-slate-400" />
            </a>
          </div>
          
          <p className="mt-12 text-slate-600 text-[10px] font-bold uppercase tracking-[0.25em]">
            Texas HVAC License • Commercial Retail • Advanced Build-Outs • 24/7 Priority Crew Dispatch
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
