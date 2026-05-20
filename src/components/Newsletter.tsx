import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section id="newsletter" className="py-32 px-6 relative overflow-hidden bg-primary-navy">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-blue/10 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 glass-card p-12 md:p-24 rounded-[48px] border-white/5 text-center shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-10 border border-primary-blue/20">
            <Mail className="w-10 h-10 text-primary-blue" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 text-white tracking-tighter">Stay Engineering <span className="text-primary-blue">Smart</span></h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Join 5000+ engineers. Get insights into smart electrical grids, high-efficiency HVAC, and sustainable hydraulics.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 w-full focus:outline-none focus:border-primary-blue transition-all text-white placeholder:text-slate-600 font-medium"
            />
            <button className="bg-primary-blue hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-blue-600/30">
              Subscribe <Send className="w-4 h-4" />
            </button>
          </form>
          
          <p className="mt-8 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
            Trusted by teams at Global Tech Dynamics • Nexus Industrial • Astra Engineering
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
