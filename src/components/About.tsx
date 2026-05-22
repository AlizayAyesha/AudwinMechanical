import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, CheckCircle, Briefcase, Zap, Target } from 'lucide-react';
import { SectionHeading } from './CoreUI';

const About = () => {
  const stats = [
    { label: 'Projects Delivered', value: '500+', icon: Briefcase },
    { label: 'Happy Clients', value: '120+', icon: Users },
    { label: 'Years Experience', value: '15+', icon: Award },
    { label: 'Team Members', value: '80+', icon: Zap },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-[#0a0f24] relative overflow-hidden">
      {/* Top thin blue gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1aa7e1]/30 to-transparent" />

      {/* Blueprint Grid/Textured overlay for engineering theme */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #1aa7e1 1px, transparent 1px), linear-gradient(to bottom, #1aa7e1 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Left and Right blur glow behind content */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#2e3192]/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#1aa7e1]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-stretch">
          
          {/* LEFT COLUMN: Image Frame & Stats Box Grid below */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between gap-10"
          >
            {/* Image Frame */}
            <div className="relative rounded-[32px] overflow-hidden p-2 bg-white/[0.02] border border-white/10 shadow-2xl group">
              <div className="relative rounded-[24px] overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[575px] w-full bg-slate-950">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-7d15bb89a71e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Engineering Team" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent opacity-85" />
              </div>
            </div>

            {/* Statistic square boxes */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10">
              {stats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="bg-[#0b0f24]/75 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-[#1aa7e1]/35 transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_30px_rgba(26,167,225,0.12)] flex flex-col items-center text-center group/stat relative overflow-hidden"
                  >
                    {/* Subtle Tech Blueprint Grid Overlay Inside each Card */}
                    <div 
                      className="absolute inset-0 opacity-[0.015] pointer-events-none group-hover/stat:opacity-[0.03] transition-opacity duration-300" 
                      style={{ 
                        backgroundImage: 'linear-gradient(to right, #1aa7e1 1px, transparent 1px), linear-gradient(to bottom, #1aa7e1 1px, transparent 1px)',
                        backgroundSize: '12px 12px' 
                      }} 
                    />

                    {/* Soft top border active marker */}
                    <span className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#1aa7e1]/80 to-transparent scale-x-0 group-hover/stat:scale-x-100 transition-transform duration-500 origin-center" />

                    {/* Soft background glow backdrop highlight */}
                    <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#1aa7e1]/2 blur-[25px] rounded-full pointer-events-none transition-all duration-300 group-hover/stat:bg-[#1aa7e1]/5" />

                    {/* Icon Frame */}
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shrink-0 transition-all duration-350 group-hover/stat:bg-[#1aa7e1]/10 group-hover/stat:border-[#1aa7e1]/30">
                      <IconComponent className="w-5 h-5 text-[#1aa7e1]" />
                    </div>

                    {/* Stat Value */}
                    <span className="text-3xl font-display font-black text-white group-hover/stat:text-[#1aa7e1] mb-1.5 tracking-tight transition-colors duration-300 select-none">
                      {stat.value}
                    </span>

                    {/* Stat Label */}
                    <span className="text-[10px] sm:text-xs text-slate-400 font-mono font-bold uppercase tracking-[0.2em] block leading-snug select-none">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Content Headings, List, Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <SectionHeading 
              title="About Audwin Mechanical" 
              centered={false} 
            />

            <p className="text-slate-400 text-sm md:text-base mb-6 leading-relaxed font-semibold">
              Audwin Mechanical began with one mission: to deliver dependable, high-quality mechanical solutions for commercial, municipal, and multi-family construction projects throughout Texas. What started as a small, service-driven HVAC operation evolved into a full-scale mechanical contracting firm built on craftsmanship, integrity, and problem-solving.
            </p>

            <p className="text-slate-400 text-sm md:text-base mb-6 leading-relaxed">
              Over the years, we have expanded from basic HVAC installation to complete mechanical system delivery including RTUs, VRF/VRV systems, duct fabrication, hydronics, MAU/DOAS systems, exhaust systems, controls, and TAB coordination. Today, we continue to grow through strong GC relationships, technical capability, disciplined project management, and reliable field execution.
            </p>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-10 max-w-2xl border-l-2 border-[#1aa7e1] pl-4 italic">
              Audwin Mechanical was built with a clear mission: deliver dependable and high-quality mechanical solutions across Texas construction markets. We specialize in commercial, institutional, municipal, and multi-family HVAC and mechanical systems. We are trusted by general contractors, developers, municipalities, architects, and retail franchise groups across Texas, delivering complete mechanical scopes from submittals through commissioning and closeout.
            </p>
            
            <h4 className="text-[#1aa7e1] font-mono font-black text-[10px] uppercase tracking-[0.3em] block mb-5">
              Our Foundation is Built On
            </h4>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {[
                "Craftsmanship",
                "Integrity",
                "Technical execution",
                "Reliability",
                "Problem-solving"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium font-sans">
                  <CheckCircle className="w-4 h-4 text-[#1aa7e1] shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-6">
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#2e3192] hover:bg-[#252775] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-955/20 text-xs uppercase tracking-widest inline-flex items-center justify-center border border-white/5 font-sans"
              >
                View Projects
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
