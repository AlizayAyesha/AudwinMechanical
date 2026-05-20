import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './CoreUI';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Commercial Hub Tower",
      category: "HVAC & Electrical",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      description: "Full MEP design and execution for a 50-story commercial landmark.",
      location: "New York, USA",
      status: "Completed"
    },
    {
      title: "Nexus Industrial Park",
      category: "Mechanical & Piping",
      image: "/src/assets/images/industrial_mep_png_1779194033005.png",
      description: "Complex industrial piping and mechanical plant room installation.",
      location: "Houston, TX",
      status: "Operational"
    },
    {
      title: "Greenwood Smart Hospital",
      category: "Smart Systems",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      description: "Advanced smart electricals and hygiene-critical plumbing solutions.",
      location: "San Francisco, CA",
      status: "In Progress"
    },
    {
      title: "Astra Data Center",
      category: "Cooling & Power",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
      description: "Mission-critical electrical redundancy and precision cooling systems.",
      location: "Ashburn, VA",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-primary-navy">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Iconic Developments" 
          subtitle="A showcase of our most ambitious engineering feats across global commercial and industrial sectors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[500px] rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 active:scale-[0.98] transition-transform"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-10">
                <div className="flex justify-between items-end">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-lg bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-display font-extrabold mb-3 text-white tracking-tight leading-tight">{project.title}</h3>
                    <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
                      <MapPin className="w-4 h-4 text-primary-blue" />
                      <span>{project.location}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      <span className="text-green-400">{project.status}</span>
                    </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-16 h-16 rounded-2xl bg-primary-blue flex items-center justify-center shadow-2xl shadow-blue-600/40 shrink-0 mb-2 ml-4"
                  >
                    <ArrowUpRight className="w-8 h-8 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Overlay with more info on hover */}
              <div className="absolute inset-0 bg-primary-blue/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-12 text-center backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                   <ArrowUpRight className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-extrabold mb-4 font-display text-white tracking-tight">{project.title}</h4>
                <p className="text-white/80 mb-10 leading-relaxed font-medium">{project.description}</p>
                <button className="bg-white text-primary-navy px-12 py-4 rounded-xl font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 uppercase text-xs tracking-widest">
                  View Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="px-12 py-5 rounded-2xl border border-white/10 hover:border-primary-blue hover:bg-primary-blue/5 text-white font-bold flex items-center gap-4 mx-auto transition-all group">
            Explore All Projects 
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
