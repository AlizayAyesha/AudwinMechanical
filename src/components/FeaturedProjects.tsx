import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './CoreUI';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Spikes Ford Service Shop Expansion",
      category: "Commercial HVAC",
      image: "/src/assets/images/industrial_hvac_system_1779256174803.png",
      description: "Full turnkey shop expansion and industrial mechanical installations in Mission, TX. Value: $197,200.",
      location: "Mission, TX",
      status: "In Progress"
    },
    {
      title: "dd’s Discount Retail Build-Out",
      category: "Ductwork & Controls",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
      description: "High-volume retail ventilation installation and automated building environment configuration. Value: $302,000.",
      location: "Edinburg, TX",
      status: "In Progress"
    },
    {
      title: "Marine Military Academy",
      category: "Institutional",
      image: "/src/assets/images/ventilation_project_1779260500000_png_1779260401634.png",
      description: "Comprehensive HVAC insulation rehabilitation and system mechanical repair scope completed in Summer 2025.",
      location: "Harlingen, TX",
      status: "Completed"
    },
    {
      title: "Crystal City Housing Authority",
      category: "Multi-Family",
      image: "/src/assets/images/plumbing_infrastructure_1779260400000_png_1779260379501.png",
      description: "Turnkey installation of ten high-performance 2-ton thermal units in collaboration with JR Construction.",
      location: "Crystal City, TX",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#090b14] relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-[#1aa7e1]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Discover our successful turnkey mechanical deliveries across municipal, multi-family, institutional, and commercial projects throughout Texas."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[480px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 active:scale-[0.99] transition-transform duration-300 bg-[#0c0e1a]"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1800ms] group-hover:scale-105 opacity-40 group-hover:opacity-55"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-[#090b14]/75 to-transparent" />
              
              {/* Corner accent border */}
              <span className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/10 group-hover:border-[#1aa7e1]/40 transition-colors" />

              <div className="absolute inset-x-0 bottom-0 p-8 z-10">
                <div className="flex justify-between items-end">
                  <div className="flex-1">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#1aa7e1]/10 backdrop-blur-md border border-[#1aa7e1]/20 text-[#1aa7e1] text-[8px] font-black uppercase tracking-widest mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black mb-3 text-white tracking-tight uppercase leading-tight group-hover:text-[#1aa7e1] transition-colors duration-300">{project.title}</h3>
                    <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
                      <MapPin className="w-4 h-4 text-[#1aa7e1]" />
                      <span>{project.location}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      <span className="text-[#22d3ee] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-[#1aa7e1] flex items-center justify-center shadow-lg shadow-[#1aa7e1]/20 shrink-0 mb-1 ml-4"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Seamless architectural overlay on hover */}
              <div className="absolute inset-0 bg-[#0c0e1a]/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-10 text-center backdrop-blur-md z-20">
                <span className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#1aa7e1]/40" />
                <div className="w-14 h-14 bg-[#1aa7e1]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#1aa7e1]/30">
                   <ArrowUpRight className="w-6 h-6 text-[#1aa7e1]" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-display font-black mb-4 text-white tracking-tight uppercase">{project.title}</h4>
                <p className="text-slate-400 text-xs sm:text-sm mb-8 leading-relaxed font-medium max-w-md">{project.description}</p>
                <button className="bg-white hover:bg-[#1aa7e1] hover:text-white text-slate-900 px-8 py-3.5 rounded-xl font-black shadow-lg transition-colors cursor-pointer uppercase text-[9px] tracking-widest">
                  View Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/why-choose-us#projects" 
            className="px-10 py-4 inline-flex rounded-xl border border-white/10 hover:border-[#1aa7e1] hover:bg-gradient-to-r hover:from-[#2e3192]/10 hover:to-[#1aa7e1]/10 text-white font-black text-[10px] uppercase tracking-[0.2em] items-center gap-4 mx-auto transition-all cursor-pointer shadow-md"
          >
            Explore All Projects 
            <ArrowUpRight className="w-4 h-4 text-[#1aa7e1]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
