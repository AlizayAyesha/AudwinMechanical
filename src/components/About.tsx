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
    <section id="about" className="py-32 px-6 bg-primary-navy relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
         <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-primary-blue)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading 
            title="Audwin Mechanical: Engineering the Future" 
            centered={false} 
          />
          <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
            With over 15 years of industry leadership, Audwin Mechanical has been at the forefront of delivering complex mechanical, electrical, and plumbing solutions. Our approach combines traditional engineering excellence with cutting-edge smart technology.
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {[
              "Experienced Engineering Team",
              "Quality Assurance (ISO Certified)",
              "Timely Project Delivery",
              "Industrial & Commercial Expertise",
              "Sustainable Building Practices",
              "Innovative Smart Systems"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                <CheckCircle className="w-5 h-5 text-primary-blue shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-6">
            <button className="bg-primary-blue hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-600/30">
              View Projects
            </button>
            <div className="flex items-center gap-3 group cursor-pointer">
              <span className="font-bold text-slate-200 group-hover:text-primary-blue transition-colors uppercase text-xs tracking-widest">Learn More</span>
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-primary-blue transition-all group-hover:scale-110">
                <Target className="w-5 h-5" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Interactive Image & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1581092921461-7d15bb89a71e?auto=format&fit=crop&q=80&w=1000" 
              alt="Engineering Team" 
              className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 to-transparent" />
          </div>

          {/* Floating Stats Grid */}
          <div className="absolute -bottom-10 -left-10 lg:left-0 right-0 lg:right-10 grid grid-cols-2 gap-4 z-20">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group/stat hover:border-primary-blue/50 transition-all border-white/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-blue/10 flex items-center justify-center mb-4 group-hover/stat:bg-primary-blue transition-all">
                  <stat.icon className="w-6 h-6 text-primary-blue group-hover/stat:text-white" />
                </div>
                <span className="text-3xl font-display font-extrabold text-white mb-1 tracking-tighter">{stat.value}</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
