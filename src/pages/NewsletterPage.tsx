import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Zap, 
  Settings, 
  Droplets, 
  Lightbulb, 
  ArrowUpRight, 
  MapPin, 
  Factory, 
  Cpu, 
  Globe, 
  Leaf,
  CheckCircle2,
  Construction,
  MessageSquare
} from 'lucide-react';
import { SectionHeading } from '../components/CoreUI';
import { cn } from '../utils/utils';

// --- Data ---
const BENEFITS = [
  {
    title: "Project Updates",
    desc: "Get real-time updates on ongoing and completed MEP projects across commercial and industrial sectors.",
    icon: Construction,
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    title: "Engineering Insights",
    desc: "Deep dives into high-performance HVAC system design, VRF optimization, and smart building integration.",
    icon: Lightbulb,
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    title: "Maintenance Tips",
    desc: "Preventative maintenance strategies to extend equipment life and ensure maximum operational efficiency.",
    icon: Settings,
    color: "from-cyan-500/20 to-cyan-600/20"
  },
  {
    title: "Industry Innovations",
    desc: "Stay ahead with news on sustainable engineering, AI-driven controls, and low-GWP refrigerant tech.",
    icon: Zap,
    color: "from-emerald-500/20 to-emerald-600/20"
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "Tech-Core Data Center",
    category: "Mechanical",
    location: "Manhattan, NY",
    desc: "Precision cooling infrastructure for mission-critical server environments.",
    img: "/src/assets/images/industrial_hvac_system_1779256174803.png"
  },
  {
    id: 2,
    title: "Skyline Corporate Hub",
    category: "HVAC",
    location: "Jersey City, NJ",
    desc: "High-efficiency VRF system implementation for premium commercial office space.",
    img: "/src/assets/images/commercial_chillers_room_1779256198807.png"
  },
  {
    id: 3,
    title: "Industrial Logistics Park",
    category: "Mechanical",
    location: "Newark, DE",
    desc: "Advanced ventilation and exhaust systems for large-scale automation facilities.",
    img: "/src/assets/images/ductwork_installation_1779256219811.png"
  },
  {
    id: 4,
    title: "Metropolitan Life Plaza",
    category: "Plumbing",
    location: "Brooklyn, NY",
    desc: "Full-scale plumbing infrastructure and high-pressure water systems.",
    img: "/src/assets/images/plumbing_infrastructure_1779260400000_png_1779260379501.png"
  },
  {
    id: 5,
    title: "Solaris Research Lab",
    category: "Electrical",
    location: "Stamford, CT",
    desc: "Smart electrical grid integration and backup power systems for research bio-labs.",
    img: "/src/assets/images/commercial_mep_png_1779194054275.png"
  },
  {
    id: 6,
    title: "Apex Manufacturing Plant",
    category: "HVAC",
    location: "Allentown, PA",
    desc: "Large-tonnage chiller plant and process cooling loop for industrial production.",
    img: "/src/assets/images/industrial_mep_png_1779194033005.png"
  }
];

const ASPIRATIONS = [
  {
    title: "Smart Engineering Systems",
    desc: "Expansion into ultra-integrated smart building automation and regenerative power cycles.",
    icon: Cpu,
    points: ["Building Operating Systems", "IoT Integration", "Cloud Monitoring"]
  },
  {
    title: "Sustainable Energy",
    desc: "Leading the shift towards Net Zero MEP design with renewable thermal integration.",
    icon: Leaf,
    points: ["Geothermal Exchange", "Solar Thermal", "Heat Recovery"]
  },
  {
    title: "AI-Based Control",
    desc: "AI-powered HVAC monitoring systems that predict failures before they happen.",
    icon: Zap,
    points: ["Predictive Analytics", "Machine Learning Controls", "Energy Optimization"]
  },
  {
    title: "Industrial Expansion",
    desc: "Global engineering partnerships to bring Audwin Mech expertise to international markets.",
    icon: Globe,
    points: ["Global Logistics Support", "Intl. Standards Compliance", "Remote Mgmt"]
  }
];

// --- Components ---

const NewsletterHero = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>
      
      {/* Glowing Accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-blue/5 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-electric/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary-blue animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-electric">Engineering Insights 2026</span>
          </div>
          
          <h1 className="text-2xl sm:text-3.5xl md:text-[36px] xl:text-[40px] font-display font-black leading-[1.12] tracking-tight text-white mb-4 uppercase">
            Stay Updated with <br />
            <span className="text-primary-blue">Audwin Mech</span> Insights
          </h1>
          
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl mx-auto font-medium">
            Subscribe to receive project updates, engineering innovations, maintenance insights, and company news directly to your inbox.
          </p>

          <form 
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row items-center gap-4 max-w-xl mx-auto p-2 glass-card rounded-2xl border-white/10"
          >
            <div className="relative flex-1 w-full">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your professional email..." 
                className="w-full bg-transparent border-none px-14 py-5 text-white placeholder:text-slate-600 focus:ring-0 font-medium text-lg"
                required
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "w-full md:w-auto px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3",
                subscribed 
                  ? "bg-emerald-500 text-white" 
                  : "bg-primary-blue hover:bg-blue-600 text-white shadow-2xl shadow-blue-500/30"
              )}
            >
              {subscribed ? (
                <>Success <CheckCircle2 className="w-4 h-4" /></>
              ) : (
                <>Subscribe <Send className="w-4 h-4 ml-1" /></>
              )}
            </motion.button>
          </form>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-40">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Join 5,000+ Decision Makers</span>
            <div className="h-4 w-px bg-white/20 hidden md:block" />
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/5"><Factory className="w-4 h-4" /></div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/5"><Construction className="w-4 h-4" /></div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/5"><Settings className="w-4 h-4" /></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Mechanical Shapes */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[10%] opacity-10 hidden lg:block"
      >
        <Settings className="w-32 h-32 text-primary-blue" />
      </motion.div>
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-[10%] opacity-10 hidden lg:block"
      >
        <Cpu className="w-40 h-40 text-primary-electric" />
      </motion.div>
    </section>
  );
};

const BenefitsSection = () => {
  return (
    <section className="py-24 px-6 bg-primary-navy">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Subscriber Benefits" 
          subtitle="Enterprise-grade insights tailored for facility managers, developers, and industry professionals."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-3xl border-white/5 group hover:border-primary-blue/30 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br", benefit.color)}>
                <benefit.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-white mb-4 tracking-tighter">{benefit.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {benefit.desc}
              </p>
              <div className="mt-8 h-1 w-0 group-hover:w-16 bg-primary-blue transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'HVAC', 'Mechanical', 'Electrical', 'Plumbing'];

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === filter);
  }, [filter]);

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary-blue)_0%,_transparent_70%)] opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <SectionHeading 
            title="Project Milestone Registry" 
            subtitle="Explore our recent engineering triumphs and infrastructure deliveries."
            centered={false}
          />
          
          <div className="flex flex-wrap gap-2 p-1.5 glass-card rounded-2xl border-white/10 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                  filter === cat 
                    ? "bg-primary-blue text-white shadow-lg shadow-blue-500/20" 
                    : "text-slate-400 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass-card rounded-3xl overflow-hidden border-white/5 hover:border-primary-blue/50 transition-all shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/20 to-transparent opacity-60" />
                  <div className="absolute top-6 left-6 px-4 py-1.5 glass rounded-full flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-blue" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">{project.category}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 text-primary-electric text-[10px] font-black uppercase tracking-widest mb-3">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-white mb-4 tracking-tighter">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium line-clamp-2">
                    {project.desc}
                  </p>
                  <button className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest group/btn border-b border-white/10 pb-1 hover:text-primary-blue hover:border-primary-blue transition-colors">
                    View Details <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const AspirationSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-navy/50" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary-blue)_0%,_transparent_60%)] opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title="Future Aspirations" 
          subtitle="Building the engineering foundations for the post-digital age of high-efficiency infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {ASPIRATIONS.map((asp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 rounded-[40px] border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <asp.icon className="w-48 h-48 text-white rotate-12" />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary-blue/10 flex items-center justify-center border border-primary-blue/20">
                  <asp.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-3xl font-display font-extrabold text-white tracking-tighter">{asp.title}</h3>
              </div>
              
              <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium">
                {asp.desc}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {asp.points.map((p, pi) => (
                  <li key={pi} className="flex items-center gap-3 text-white/70 text-sm font-bold tracking-tight">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    </div>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsletterPage = () => {
  const whatsappLink = "https://wa.me/19562306949?text=Hello%20Audwin%20Mech,%20I%20would%20like%20to%20subscribe%20or%20inquire%20about%20your%20services.";

  return (
    <div className="bg-[#020617] text-white">
      <NewsletterHero />
      <BenefitsSection />
      <ProjectsSection />
      <AspirationSection />

      {/* CTA Section */}
      <section className="py-24 px-6 mb-20">
        <div className="max-w-5xl mx-auto glass-card p-16 md:p-24 rounded-[60px] border-white/10 text-center relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
           <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 via-transparent to-primary-electric/20 opacity-30" />
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative z-10"
           >
              <h2 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tighter leading-tight">
                Join the Future of <br />
                <span className="text-primary-blue italic">Engineering Innovation</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                Connect with the leaders in MEP excellence. Get exclusive access to technical whitepapers and project field reports.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto bg-primary-blue hover:bg-blue-600 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-blue-500/30 transition-all hover:scale-105 active:scale-95">
                  Subscribe Now
                </button>
                <button 
                  onClick={() => window.location.href = 'mailto:contact@audwinmech.com'}
                  className="w-full sm:w-auto glass-card border-white/10 hover:bg-white/5 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95"
                >
                  Contact Audwin Mech
                </button>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-[60] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-colors hover:bg-[#20bd5a]"
      >
        <MessageSquare className="w-8 h-8 text-white fill-current" />
      </motion.a>
    </div>
  );
};

export default NewsletterPage;
