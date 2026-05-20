import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Globe, Send } from 'lucide-react';
import { SectionHeading } from './CoreUI';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-primary-navy">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Ready to start your next big project? Our engineering consultants are here to help you every step of the way."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {/* Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: MapPin, title: "Our Office", content: "123 Engineering Way, NY 10001" },
                { icon: Phone, title: "Call Us", content: "+1 (555) 123-4567" },
                { icon: Mail, title: "Email Us", content: "contact@meppro.com" },
                { icon: Clock, title: "Working Hours", content: "Mon-Sat: 8AM - 6PM" },
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 flex items-center justify-center shrink-0 border border-primary-blue/20">
                    <item.icon className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <h4 className="font-extrabold mb-1 font-display text-white tracking-tight leading-none">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-snug font-medium">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="glass-card p-12 rounded-[48px] border-white/5 shadow-2xl relative overflow-hidden">
               {/* Accent decoration */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/10 blur-3xl" />
               
               <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Professional Name</label>
                     <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary-blue transition-colors text-white placeholder:text-slate-700 font-medium" placeholder="John Engineering" />
                   </div>
                   <div className="space-y-3">
                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Work Email</label>
                     <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary-blue transition-all text-white placeholder:text-slate-700 font-medium" placeholder="j.e@nexus.com" />
                   </div>
                 </div>
                 
                 <div className="space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Inquiry Domain</label>
                   <select className="w-full bg-[#020617] border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary-blue transition-all text-white font-medium">
                     <option>Mechanical Installation</option>
                     <option>Electrical Systems</option>
                     <option>Plumbing Solutions</option>
                     <option>HVAC Systems</option>
                     <option>Estimation Service</option>
                   </select>
                 </div>

                 <div className="space-y-3">
                   <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Project Brief</label>
                   <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary-blue transition-all text-white placeholder:text-slate-700 font-medium" placeholder="Detailed project scope..."></textarea>
                 </div>

                 <button className="w-full bg-primary-blue hover:bg-blue-700 text-white py-5 rounded-xl font-bold flex items-center justify-center gap-4 transition-all transform hover:scale-[1.02] active:scale-95 shadow-2xl shadow-blue-600/30 uppercase tracking-widest text-xs">
                   Submit Proposal Request <Send className="w-4 h-4" />
                 </button>
               </form>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[600px] rounded-[48px] overflow-hidden group shadow-2xl border border-white/5"
          >
            <div className="absolute inset-0 bg-[#020617] flex flex-col items-center justify-center text-center p-12">
              <div className="w-20 h-20 bg-primary-blue/10 rounded-3xl flex items-center justify-center mb-10 border border-primary-blue/20 group-hover:scale-110 transition-transform duration-700 shadow-2xl">
                <Globe className="w-10 h-10 text-primary-electric animate-pulse" />
              </div>
              <h3 className="text-3xl font-display font-extrabold mb-5 text-white tracking-tight uppercase">Global Presence</h3>
              <p className="text-slate-400 mb-10 max-w-sm font-medium leading-relaxed">
                Operating engineering centers in New York, London, and Singapore to support our multinational client base.
              </p>
              <div className="p-5 glass rounded-2xl w-full max-w-xs border-white/5 text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] font-black">
                [Geospatial Render Active]
              </div>
            </div>
            
            {/* Interactive Grid overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
