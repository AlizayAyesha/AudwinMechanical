import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Settings, 
  ShieldCheck, 
  Timer, 
  Zap, 
  Cpu, 
  Wrench, 
  BarChart3, 
  ArrowRight, 
  ExternalLink,
  Star,
  Quote,
  MessageSquare,
  Building2,
  Construction,
  Sparkles,
  LayoutGrid,
  Filter,
  MapPin,
  ArrowUpRight
} from 'lucide-react';
import { SectionHeading } from '../components/CoreUI';
import { cn } from '../utils/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const WhyChooseUsPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  const valueProps = [
    {
      title: "Licensed and Insured",
      desc: "State-compliant HVAC license & comprehensive liability coverage to protect every project site and GC partner.",
      icon: ShieldCheck,
      color: "blue"
    },
    {
      title: "Strong GC collaboration experience",
      desc: "Seamless alignment, proactive scheduling, and active coordinate-level communication with site managers.",
      icon: Users,
      color: "cyan"
    },
    {
      title: "Turnkey project execution",
      desc: "Supporting your development from detailed submittals through pre-fabrication, setting, and closeout.",
      icon: Wrench,
      color: "indigo"
    },
    {
      title: "Scheduling discipline",
      desc: "Meticulous timeline management and rapid field execution to guarantee deadlines are met without structural delays.",
      icon: Timer,
      color: "blue"
    },
    {
      title: "Multi-unit project expertise",
      desc: "Deep engineering and setting experience for multi-family, institutional, and large retail locations.",
      icon: Building2,
      color: "cyan"
    },
    {
      title: "Crane and rigging capability",
      desc: "Professional crane lift diagrams, rigging coordination, safety supervision, and precise equipment setting.",
      icon: Construction,
      color: "indigo"
    },
    {
      title: "Safety and QA protocols",
      desc: "Daily on-site safety safety hazard analysis combined with robust, strict QA guidelines implementation.",
      icon: Settings,
      color: "blue"
    },
    {
      title: "Commissioning and start-up support",
      desc: "Comprehensive startup support, point-to-point BACnet controls connection, and TAB airflow balancing validation.",
      icon: Cpu,
      color: "cyan"
    }
  ];

  const partners = [
    "Carrier", "Trane", "Daikin", "York", "Mitsubishi Electric", "Lennox", "Johnson Controls", "Honeywell"
  ];

  const contractors = [
    { name: "Global Build Group", logo: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=100", desc: "Partners in high-rise MEP distribution across the tristate area." },
    { name: "Nexus Industrial", logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=100", desc: "Lead mechanical subcontractor for industrial warehouse automation projects." },
    { name: "Astra Construction", logo: "https://images.unsplash.com/photo-1577733966973-d680bdeb2c17?auto=format&fit=crop&q=80&w=100", desc: "Collaborating on futuristic green-tech corporate headquarters." }
  ];

  const categories = ['All', 'Commercial', 'Mechanical'];

  const allProjects = [
    {
      title: "Spikes Ford Service Shop Expansion",
      category: "Mechanical",
      location: "Mission, TX",
      type: "Commercial HVAC",
      status: "In Progress",
      img: "/src/assets/images/industrial_hvac_system_1779256174803.png",
      desc: "Comprehensive shop expansion project. Value: $197,200. Targeted completion: June 2026."
    },
    {
      title: "dd’s Discount Retail Build-Out",
      category: "Commercial",
      location: "Edinburg, TX",
      type: "Retail Centers",
      status: "In Progress",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
      desc: "Full turnkey retail HVAC and ductwork fabrication system. Value: $302,000. Targeted completion: June 2026."
    },
    {
      title: "Michael Kors Outlet Store",
      category: "Commercial",
      location: "Mercedes, TX",
      type: "Retail Stores",
      status: "In Progress",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
      desc: "High-spec retail environment cooling and zone balancing setup. Value: $31,500. Targeted completion: June 2026."
    },
    {
      title: "Foot Locker Store Setup",
      category: "Commercial",
      location: "Brownsville, TX",
      type: "Retail Stores",
      status: "In Progress",
      img: "https://images.unsplash.com/photo-1517420812314-8549b17939df?auto=format&fit=crop&q=80&w=800",
      desc: "Rooftop unit installation, controls integration, and air-distribution. Value: $51,000. Targeted completion: June 2026."
    },
    {
      title: "Marine Military Academy Repair",
      category: "Mechanical",
      location: "Harlingen, TX",
      type: "Institutional",
      status: "Completed",
      img: "/src/assets/images/ventilation_project_1779260500000_png_1779260401634.png",
      desc: "Full HVAC insulation rehabilitation and system mechanical repair scope completed in Summer 2025."
    },
    {
      title: "O’Reilly Auto Parts New System",
      category: "Commercial",
      location: "Texas",
      type: "Automotive Retail",
      status: "Completed",
      img: "/src/assets/images/commercial_chillers_room_1779256198807.png",
      desc: "Complete mechanical installation project delivering energy-efficient turnkey HVAC operation."
    },
    {
      title: "Crystal City Housing Authority Units",
      category: "Mechanical",
      location: "Crystal City, TX",
      type: "Multi-Family",
      status: "Completed",
      img: "/src/assets/images/plumbing_infrastructure_1779260400000_png_1779260379501.png",
      desc: "Complete mechanical installation of ten high-performance 2-ton climate systems in coordination with JR Construction."
    }
  ];

  const testimonials = [
    {
      name: "Marcus Thorne",
      company: "Nexus Industrial",
      text: "Audwin Mech delivered exceptional HVAC installation with outstanding professionalism and efficiency. Their attention to detail in the industrial sector is unmatched.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
    },
    {
      name: "Sarah Jenkins",
      company: "Global Build Group",
      text: "Their engineering team exceeded expectations in project execution and maintenance support. A truly reliable partner for high-stakes commercial developments.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      name: "David Chen",
      company: "Astra Construction",
      text: "Highly impressed with their focus on energy-efficient solutions. They helped our project achieve its LEED Gold certification ahead of schedule.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    }
  ];

  const filteredProjects = activeTab === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeTab);

  return (
    <div className="pt-24 bg-[#020617] text-white">
      {/* ━━━━━━━━━━━━━━━━━━━━ HERO SECTION ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_30%_30%,_rgba(59,130,246,0.1),_transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <Sparkles className="w-3.5 h-3.5" /> Excellence Guaranteed
            </span>
            <h1 className="text-2xl sm:text-3.5xl md:text-[36px] xl:text-[40px] font-display font-black leading-[1.12] tracking-tight text-white mb-4 uppercase">
              WHY CHOOSE AUDWIN MECHANICAL FOR YOUR CONTRACTOR / GC NEEDS?
            </h1>
            <h3 className="text-lg font-bold text-primary-blue uppercase tracking-widest mb-6">
              Turnkey HVAC & Mechanical Solutions for Contractors
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
              Audwin Mechanical specializes in complete mechanical scopes for commercial, institutional, municipal, and multi-family construction projects across Texas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ WHY AUDWIN MECH ━━━━━━━━━━━━━━━━━━━━ */}
      <section id="why-audwin" className="py-32 px-6 bg-[#0a0a0f] relative overflow-hidden">
        {/* Minimal Blueprint Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #1aa7e1 1px, transparent 1px), linear-gradient(to bottom, #1aa7e1 1px, transparent 1px)',
            backgroundSize: '45px 45px' 
          }} 
        />
        
        {/* Glowing backdrop circle */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-[#1aa7e1]/5 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            title="Turnkey HVAC & Mechanical Solutions" 
            subtitle="We provide full system installation, demolition, duct fabrication, equipment setting, controls, start-up, and TAB coordination. Audwin Mechanical specializes in complete mechanical scopes for commercial, institutional, municipal, and multi-family construction projects across Texas."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {valueProps.map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/[0.02] backdrop-blur-md p-8 rounded-[32px] border border-white/10 hover:border-[#1aa7e1]/30 transition-all duration-500 group relative overflow-hidden shadow-2xl hover:shadow-[0_15px_40px_rgba(26,167,225,0.15)]"
              >
                {/* Top Animated Color Bar Gradient Line */}
                <span className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#2e3192] to-[#1aa7e1] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Animated Background Glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#1aa7e1]/5 blur-[40px] group-hover:bg-[#1aa7e1]/10 transition-colors" />

                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-[#2e3192] group-hover:to-[#1aa7e1] group-hover:scale-110 transition-all duration-500 shadow-2xl border border-white/5">
                  <prop.icon className="w-6 h-6 text-[#1aa7e1] group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-lg font-display font-extrabold mb-4 tracking-tight group-hover:text-[#1aa7e1] transition-colors duration-300 uppercase leading-snug">
                  {prop.title}
                </h3>
                
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors duration-300">
                  {prop.desc}
                </p>

                {/* Corner Accents */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                  <ArrowRight className="w-4 h-4 text-[#1aa7e1]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ OUR PARTNERS ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 px-6 bg-[#0d132c] relative overflow-hidden">
        {/* Top/Bottom premium thin glowing borders */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1aa7e1]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1aa7e1]/25 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#1aa7e1] font-mono font-black text-[10px] uppercase tracking-[0.3em] block mb-3">AUTHORIZED CERTIFICATIONS</span>
            <h2 className="text-2xl md:text-4xl font-display font-extrabold tracking-tighter text-white uppercase">
              Trusted Industry <span className="text-[#1aa7e1]">Partners</span>
            </h2>
          </div>

          <div className="relative overflow-hidden group">
            {/* Logo Slider Track */}
            <div className="flex gap-16 py-6 animate-infinite-scroll group-hover:pause">
              {[...partners, ...partners].map((partner, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 w-44 h-20 bg-[#0a0f24]/60 backdrop-blur-md flex items-center justify-center rounded-2xl border border-white/10 hover:border-[#1aa7e1]/40 grayscale hover:grayscale-0 transition-all duration-300 relative group/logo shadow-lg hover:shadow-[0_0_25px_rgba(26,167,225,0.15)]"
                >
                  <span className="text-base font-display font-black text-slate-500 group-hover/logo:text-white transition-colors tracking-tight select-none">
                    {partner}
                  </span>
                  
                  {/* Subtle highlight glow under active logos */}
                  <span className="absolute bottom-2 w-8 h-[2px] bg-[#1aa7e1]/80 rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#1aa7e1]" />
                </div>
              ))}
            </div>
            
            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0d132c] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#0d132c] to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ GENERAL CONTRACTORS ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 bg-[#0e142e] relative overflow-hidden">
        {/* Cinematic grid lines in background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2e3192]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20 mb-12">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="lg:w-1/2"
             >
                <div className="w-16 h-1 bg-[#1aa7e1] mb-8 rounded-full shadow-[0_0_12px_#1aa7e1]" />
                <span className="text-[#1aa7e1] font-mono font-black text-[10px] uppercase tracking-[0.3em] block mb-3">COLLABORATIVE SYNERGY</span>
                <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight uppercase tracking-tight mb-6">
                  Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1aa7e1] to-white/90">Contractor Collaboration</span>
                </h2>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium mb-10">
                  We collaborate with Texas's leading general contractors to deliver high-performance mechanical and HVAC solutions across commercial and industrial projects. Our focus is on absolute technical compliance, safety, and project synergy.
                </p>
                
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0e142e] bg-slate-800 overflow-hidden shadow-xl shadow-black/50">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=gc-${i}`} alt="Partner avatar" />
                      </div>
                    ))}
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">50+ Active Partnerships</div>
                </div>
             </motion.div>

             <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                {contractors.map((gc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-white/[0.01] backdrop-blur-md p-6 rounded-[24px] border border-white/5 hover:border-[#1aa7e1]/30 transition-all duration-300 flex items-center gap-6 group hover:bg-white/[0.02]"
                  >
                    <div className="w-16 h-16 rounded-xl bg-slate-900 overflow-hidden border border-white/10 shrink-0 group-hover:scale-105 transition-all duration-300 relative">
                      <img src={gc.logo} alt={gc.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                      {/* Deep cinematic overlay */}
                      <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-base font-display font-extrabold text-white mb-1 tracking-tight group-hover:text-[#1aa7e1] transition-colors duration-300 uppercase">{gc.name}</h4>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">{gc.desc}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-slate-600 group-hover:text-[#1aa7e1] transition-colors duration-300 shrink-0" />
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ ALL PROJECTS ━━━━━━━━━━━━━━━━━━━━ */}
      <section id="projects" className="py-32 px-6 bg-[#090b14] relative overflow-hidden">
        {/* Soft radial aura */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#2e3192]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            title="Project Portfolio" 
            subtitle="A comprehensive showcase of our engineering feats. Explore our diverse range of successful mechanical installations across multiple sectors."
          />

          {/* Filtering Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border cursor-pointer",
                  activeTab === cat 
                    ? "bg-[#1aa7e1] border-[#1aa7e1] text-white shadow-lg shadow-blue-500/20" 
                    : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:border-[#1aa7e1]/40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative h-[480px] rounded-[32px] overflow-hidden bg-[#0c0e1a] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:border-[#1aa7e1]/40 transition-all duration-500"
                >
                  {/* Photo frame */}
                  <div className="absolute inset-0">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-[1800ms] group-hover:scale-105 opacity-30 group-hover:opacity-45"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-[#090b14]/80 to-transparent" />
                  </div>

                  {/* Corner frame visual ornament */}
                  <span className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/10 group-hover:border-[#1aa7e1]/40 transition-colors" />

                  <div className="relative h-full p-8 flex flex-col justify-end z-10">
                    <div className="flex items-center gap-2.5 mb-4">
                      <span className="px-2.5 py-1 rounded-md bg-[#1aa7e1]/10 text-[#1aa7e1] text-[8px] font-black uppercase tracking-widest border border-[#1aa7e1]/20">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1 text-[8px] font-black uppercase tracking-widest text-[#22d3ee]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" /> {project.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-display font-black mb-2 tracking-tight text-white group-hover:text-[#1aa7e1] transition-colors uppercase leading-none">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                       <MapPin className="w-3 h-3 text-[#1aa7e1]" /> {project.location}
                    </div>
                    
                    <p className="text-slate-400 text-xs leading-relaxed mb-6 block font-medium opacity-90 transition-all duration-500">
                      {project.desc}
                    </p>
                    
                    <button className="flex items-center gap-2.5 text-white font-black text-[9px] uppercase tracking-[0.2em] group/btn self-start">
                      View Project Details 
                      <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center group-hover/btn:bg-[#1aa7e1] transition-colors group-hover/btn:translate-x-1 duration-300">
                        <ArrowUpRight className="w-3 w-3" />
                      </div>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ TESTIMONIALS ━━━━━━━━━━━━━━━━━━━━ */}
      <section id="testimonials" className="py-32 px-6 bg-[#0c122e] relative overflow-hidden">
        {/* Glowing visual backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1aa7e1]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            title="Industry Validation" 
            subtitle="Don't just take our word for it—listen to the industry giants who rely on Audwin Mech for their most complex mechanical requirements."
          />

          <div className="mt-16">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 }
              }}
              autoplay={{ delay: 6000 }}
              pagination={{ clickable: true }}
              className="testimonials-swiper !pb-20"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-[#0a0f24]/75 backdrop-blur-md p-10 md:p-14 rounded-[32px] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(26,167,225,0.15)] hover:border-[#1aa7e1]/40 transition-all duration-500 relative group h-full flex flex-col justify-between">
                    <Quote className="absolute top-10 right-10 w-12 h-12 text-[#1aa7e1] opacity-[0.06] group-hover:opacity-15 transition-opacity duration-300" />
                    
                    <div>
                      <div className="flex gap-1 mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.3)]" />
                        ))}
                      </div>

                      <p className="text-base md:text-lg text-slate-300 font-medium italic leading-relaxed mb-8">
                        "{t.text}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-[#1aa7e1]/30 overflow-hidden shadow-xl shrink-0">
                        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-base font-display font-extrabold text-white tracking-tight uppercase">{t.name}</h4>
                        <p className="text-[#1aa7e1] text-[9px] font-black uppercase tracking-[0.2em] mt-0.5">{t.company}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ CTA SECTION ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#01040f]">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_70%)]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 glass-card p-16 md:p-24 rounded-[60px] border-white/10 text-center shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden">
           {/* Floating engineering shapes */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute -top-20 -right-20 w-80 h-80 border-[40px] border-primary-blue/5 rounded-full" 
           />
           <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="absolute -bottom-20 -left-20 w-60 h-60 border-[20px] border-primary-blue/5 rounded-full" 
           />

           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
           >
             <div className="w-24 h-24 bg-primary-blue/20 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-primary-blue/30 shadow-2xl relative group">
               <div className="absolute inset-0 bg-primary-blue/20 blur-[20px] rounded-full animate-pulse" />
               <Sparkles className="w-10 h-10 text-primary-blue" />
             </div>
             
             <h2 className="text-4xl md:text-7xl font-display font-extrabold mb-10 text-white tracking-tighter leading-tight">
               Let's Build High-Performance <span className="text-primary-blue">Solutions Together</span>
             </h2>
             
             <p className="text-slate-400 text-xl mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
               Partner with Audwin Mech for enterprise-grade engineering, precision installation, and unmatched maintenance support.
             </p>

             <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
               <button className="w-full md:w-auto bg-primary-blue hover:bg-blue-700 text-white px-16 py-6 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(59,130,246,0.3)] text-xs">
                 Contact Us <ArrowRight className="w-5 h-5" />
               </button>
               <a 
                 href="https://wa.me/19562306949?text=Hello Audwin Mech, I would like to discuss your engineering and HVAC services."
                 target="_blank"
                 className="w-full md:w-auto glass hover:bg-white/10 text-white px-16 py-6 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all transform hover:scale-105 border-white/10 text-xs"
               >
                 WhatsApp Consultation <MessageSquare className="w-5 h-5 text-green-400" />
               </a>
             </div>
           </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ WHATSAPP FLOATING ━━━━━━━━━━━━━━━━━━━━ */}
      <a 
        href="https://wa.me/19562306949?text=Hello Audwin Mech, I would like to discuss your engineering and HVAC services."
        target="_blank"
        className="fixed bottom-10 right-10 z-[60] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <div className="absolute inset-0 bg-[#25D366] blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity animate-pulse" />
        <MessageSquare className="w-8 h-8 text-white relative z-10" />
      </a>
    </div>
  );
};

// Sub-components as local items for simplified structure
const Target = ({ className }: { className?: string }) => <div className={cn("w-4 h-4 bg-white rotate-45", className)} />;

export default WhyChooseUsPage;
