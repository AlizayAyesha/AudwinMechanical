import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Globe, Cpu, Lightbulb } from 'lucide-react';
import { cn } from '../utils/utils';

const FutureMission = () => {
  const missions = [
    {
      title: "Sustainability Goals",
      icon: Globe,
      color: "from-green-500 to-emerald-700",
      description: "Committed to net-zero carbon construction through high-efficiency mechanical systems."
    },
    {
      title: "Smart Engineering",
      icon: Cpu,
      color: "from-blue-500 to-indigo-700",
      description: "Integrating AI and real-time IoT sensors into every electrical grid we design."
    },
    {
      title: "Continuous Innovation",
      icon: Lightbulb,
      color: "from-yellow-400 to-orange-600",
      description: "Constant R&D into pre-fabricated modular MEP installations to reduce site waste."
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-[#020617]">
      {/* Background futuristic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-glow">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" /> Discovery & Vision
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8 tracking-tighter text-white">
            Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Mechanical Tech</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Building the foundations for smart cities. Our mission is driven by net-zero sustainability, IoT intelligence, and modular efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-12 rounded-[40px] border border-white/5 relative group hover:border-blue-500/30 transition-all"
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-10 shadow-2xl transition-transform duration-700 group-hover:rotate-12",
                mission.color
              )}>
                <mission.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-display font-extrabold mb-5 text-white tracking-tight">{mission.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {mission.description}
              </p>
              
              {/* Futuristic floating shapes decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 rounded-full blur-3xl group-hover:bg-primary-blue/15 transition-all opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureMission;
