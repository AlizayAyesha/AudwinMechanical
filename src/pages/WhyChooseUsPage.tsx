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
      title: "Experienced Engineering Team",
      desc: "Our team consists of senior mechanical and HVAC engineers with over 20 years of collective site expertise.",
      icon: Users,
      color: "blue"
    },
    {
      title: "Commercial & Industrial Expertise",
      desc: "Specializing in large-scale infrastructure, from high-rise corporate offices to heavy manufacturing plants.",
      icon: Building2,
      color: "cyan"
    },
    {
      title: "High Quality Installation Standards",
      desc: "Adhering to strict international engineering codes to ensure your systems perform flawlessly for decades.",
      icon: Settings,
      color: "indigo"
    },
    {
      title: "Fast Project Delivery",
      desc: "Methodical planning and agile site management allow us to meet aggressive construction timelines without compromise.",
      icon: Timer,
      color: "blue"
    },
    {
      title: "Safety & Compliance Focus",
      desc: "OSHA-certified safety protocols integrated into every phase of our mechanical and ventilation operations.",
      icon: ShieldCheck,
      color: "cyan"
    },
    {
      title: "Energy Efficient Solutions",
      desc: "Implementing the latest DOAS and VRF technologies to significantly reduce your facility's operational carbon footprint.",
      icon: Zap,
      color: "indigo"
    },
    {
      title: "Advanced HVAC Technologies",
      desc: "Utilizing smart building automation and IoT integration for real-time climate monitoring and management.",
      icon: Cpu,
      color: "blue"
    },
    {
      title: "24/7 Maintenance Support",
      desc: "Dedicated rapid-response teams available around the clock to handle emergency repairs and critical system failures.",
      icon: Wrench,
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

  const categories = ['All', 'HVAC', 'Commercial', 'Industrial', 'Ventilation', 'Plumbing', 'Mechanical'];

  const allProjects = [
    {
      title: "Skyline Tower HVAC",
      category: "HVAC",
      location: "New York, NY",
      type: "High-Rise Commercial",
      status: "Completed",
      img: "https://images.unsplash.com/photo-1517420812314-8549b17939df?auto=format&fit=crop&q=80&w=800",
      desc: "Full installation of multi-zone VRF systems for a 60-story luxury residence."
    },
    {
      title: "BioTech Cleanroom Ventilation",
      category: "Ventilation",
      location: "Boston, MA",
      type: "Laboratory",
      status: "Completed",
      img: "/src/assets/images/ventilation_project_1779260500000_png_1779260401634.png",
      desc: "Precision HEPA filtration and pressure-balanced air systems for pharmaceutical labs."
    },
    {
      title: "Industrial Chillers Hub",
      category: "Industrial",
      location: "Chicago, IL",
      type: "Manufacturing Plant",
      status: "In Progress",
      img: "/src/assets/images/industrial_hvac_system_1779256174803.png",
      desc: "Custom water-cooled chiller plant installation for large-scale production cooling."
    },
    {
      title: "Nexus Mall Mechanical Plant",
      category: "Mechanical",
      location: "Dallas, TX",
      type: "Retail Center",
      status: "Completed",
      img: "/src/assets/images/commercial_chillers_room_1779256198807.png",
      desc: "Comprehensive mechanical room design including pumps, boilers, and controls."
    },
    {
      title: "Grand Plaza Plumbing",
      category: "Plumbing",
      location: "Miami, FL",
      type: "Hospitality",
      status: "Completed",
      img: "/src/assets/images/plumbing_infrastructure_1779260400000_png_1779260379501.png",
      desc: "High-capacity hot and chilled water distribution systems for a 5-star hotel."
    },
    {
      title: "Oracle Office Complex",
      category: "Commercial",
      location: "Austin, TX",
      type: "Corporate Headquarters",
      status: "Completed",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
      desc: "Smart building HVAC integration with real-time occupancy-based climate control."
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
            <h1 className="text-5xl md:text-8xl font-display font-extrabold tracking-tighter mb-8 leading-[1.05]">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Audwin Advantage</span>
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              We redefine mechanical engineering through precision, innovation, and an unwavering commitment to operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ WHY AUDWIN MECH ━━━━━━━━━━━━━━━━━━━━ */}
      <section id="why-audwin" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Premium Value Propositions" 
            subtitle="Engineered for efficiency, safety, and longevity. Discover how our holistic approach sets a new benchmark in industrial mechanical solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-[40px] border-white/5 hover:border-primary-blue/30 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Animated Background Glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-blue/5 blur-[50px] group-hover:bg-primary-blue/10 transition-colors" />

                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-primary-blue group-hover:scale-110 transition-all shadow-2xl">
                  <prop.icon className="w-7 h-7 text-primary-blue group-hover:text-white" />
                </div>
                <h3 className="text-xl font-display font-extrabold mb-4 tracking-tight group-hover:text-primary-blue transition-colors">{prop.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                  {prop.desc}
                </p>

                {/* Corner Accents */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                  <ArrowRight className="w-4 h-4 text-primary-blue" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ OUR PARTNERS ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 bg-[#01040f] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tighter text-white">Trusted Industry <span className="text-primary-blue">Partners</span></h2>
          </div>

          <div className="relative overflow-hidden group">
            {/* Logo Slider Track */}
            <div className="flex gap-20 py-10 animate-infinite-scroll group-hover:pause">
              {[...partners, ...partners].map((partner, i) => (
                <div key={i} className="flex-shrink-0 w-48 h-24 glass flex items-center justify-center rounded-2xl border-white/5 hover:border-primary-blue/30 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="text-lg font-display font-black text-slate-500 hover:text-white transition-colors">{partner}</span>
                </div>
              ))}
            </div>
            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-60 bg-gradient-to-r from-[#01040f] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-60 bg-gradient-to-l from-[#01040f] to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ GENERAL CONTRACTORS ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20 mb-24">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="lg:w-1/2"
             >
                <div className="w-16 h-1 w bg-primary-blue mb-8 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter mb-8">Seamless <span className="text-primary-blue">Contractor Collaboration</span></h2>
                <p className="text-slate-400 text-lg leading-relaxed font-medium mb-10">
                  We collaborate with leading general contractors to deliver high-performance mechanical and HVAC solutions across commercial and industrial projects. Our focus is on technical synergy and site safety.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-[#020617] bg-slate-800 overflow-hidden shadow-xl shadow-black/50">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Partner" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">50+ Global Partnerships</div>
                </div>
             </motion.div>

             <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                {contractors.map((gc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="glass p-8 rounded-[32px] border-white/5 hover:border-primary-blue/20 transition-all flex items-center gap-8 group"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-white/5 overflow-hidden border border-white/10 shrink-0 group-hover:scale-110 transition-transform">
                      <img src={gc.logo} alt={gc.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-extrabold text-white mb-2 tracking-tight group-hover:text-primary-blue transition-colors">{gc.name}</h4>
                      <p className="text-slate-500 text-sm font-medium">{gc.desc}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 ml-auto text-white/20 group-hover:text-primary-blue transition-colors" />
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ ALL PROJECTS ━━━━━━━━━━━━━━━━━━━━ */}
      <section id="projects" className="py-32 px-6 bg-[#01040f]/50 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Project Portfolio" 
            subtitle="A comprehensive showcase of our engineering feats. Explore our diverse range of successful mechanical installations across multiple sectors."
          />

          {/* Filtering Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border",
                  activeTab === cat 
                    ? "bg-primary-blue border-primary-blue text-white shadow-xl shadow-blue-600/30" 
                    : "bg-white/5 border-white/5 text-slate-500 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative h-[520px] rounded-[48px] overflow-hidden glass-card border-white/5"
                >
                  <div className="absolute inset-0">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-50"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent" />
                  </div>

                  <div className="relative h-full p-12 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 rounded-full bg-primary-blue/20 text-primary-blue text-[8px] font-black uppercase tracking-widest border border-primary-blue/30">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest text-green-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> {project.status}
                      </span>
                    </div>
                    <h3 className="text-3xl font-display font-extrabold mb-3 tracking-tighter text-white leading-tight group-hover:text-primary-blue transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">
                       <MapPin className="w-3.5 h-3.5 text-primary-blue" /> {project.location}
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {project.desc}
                    </p>
                    <button className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.2em] group/btn">
                      View Project Details 
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-primary-blue transition-colors group-hover/btn:translate-x-1 duration-300">
                        <ArrowUpRight className="w-4 h-4" />
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
      <section id="testimonials" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary-blue/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            title="Industry Validation" 
            subtitle="Don't just take our word for it—listen to the industry giants who rely on Audwin Mech for their most complex mechanical requirements."
          />

          <div className="mt-20">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={40}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 }
              }}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              className="testimonials-swiper !pb-20"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="glass-card p-12 md:p-16 rounded-[48px] border-white/5 shadow-2xl relative group h-full">
                    <Quote className="absolute top-10 right-10 w-16 h-16 text-primary-blue opacity-[0.05] group-hover:opacity-10 transition-opacity" />
                    
                    <div className="flex gap-1 mb-8">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-slate-200 font-medium italic leading-relaxed mb-12">
                      "{t.text}"
                    </p>

                    <div className="flex items-center gap-6 pt-10 border-t border-white/5">
                      <div className="w-16 h-16 rounded-3xl bg-slate-800 border border-primary-blue/30 overflow-hidden shadow-xl">
                        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-xl font-display font-extrabold text-white tracking-tight">{t.name}</h4>
                        <p className="text-primary-blue text-[10px] font-black uppercase tracking-[0.2em] mt-1">{t.company}</p>
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
                 href="https://wa.me/15551234567?text=Hello Audwin Mech, I would like to discuss your engineering and HVAC services."
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
        href="https://wa.me/15551234567?text=Hello Audwin Mech, I would like to discuss your engineering and HVAC services."
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
