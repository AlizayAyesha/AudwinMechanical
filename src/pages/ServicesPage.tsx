import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Wind, 
  Settings, 
  Zap, 
  Droplets, 
  Cpu, 
  BarChart3, 
  Trash2, 
  Anchor, 
  Wrench,
  ChevronRight,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Timer,
  Award,
  HardHat,
  MonitorCheck,
  Truck,
  ArrowUpRight,
  Clock,
  Target,
  MapPin
} from 'lucide-react';
import { SectionHeading } from '../components/CoreUI';
import { cn } from '../utils/utils';

// --- Hero Section ---
const ServicesHero = () => (
  <section className="relative h-[90vh] min-h-[700px] w-full flex items-center overflow-hidden">
    {/* Cinematic Background */}
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
      style={{ backgroundImage: 'url(/src/assets/images/industrial_hvac_system_1779256174803.png)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-primary-navy/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/40 via-transparent to-primary-navy" />
    </div>

    {/* Moving blueprint/grid pattern */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

    <div className="relative max-w-7xl mx-auto px-6 z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Engineering Precision
        </motion.div>
        
        <h1 className="text-2xl sm:text-3.5xl md:text-[36px] xl:text-[40px] font-display font-black leading-[1.12] tracking-tight text-white mb-4 uppercase">
          Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Mechanical Solutions</span>
        </h1>
        
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl font-medium">
          Precision-driven commercial HVAC, ventilation, piping, controls, and industrial mechanical systems engineered for performance, reliability, and long-term efficiency.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <button className="bg-primary-blue hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-blue-600/30">
            Request Consultation <ArrowRight className="w-5 h-5" />
          </button>
          <button className="glass hover:bg-white/10 text-white px-10 py-5 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 border-white/10">
            Contact Team
          </button>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-white/5 pt-10">
          {[
            { label: 'Uptime Guarantee', val: '99.9%' },
            { label: 'Energy Savings', val: '25%+' },
            { label: 'Certified Staff', val: '80+' },
            { label: 'Service Coverage', val: 'Global' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl font-display font-extrabold text-white">{stat.val}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Services Grid Section ---
const ServicesGrid = () => {
  const services = [
    {
      title: "Packaged Rooftop Units (RTUs)",
      icon: Building2,
      desc: "Installation of 5–50 ton commercial RTUs including curb adapters, rigging, crane lifts, gas piping, controls reconnection, economizers, sensors, start-up, and commissioning.",
      img: "https://images.unsplash.com/photo-1517420812314-8549b17939df?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "VRF / VRV Systems",
      icon: Wind,
      desc: "Complete VRF system installation including fan coils, branch selectors, condensing units, refrigerant piping, insulation, controls integration, leak testing, vacuum, charging, and start-up.",
      divider: true,
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Ductwork Fabrication & Installation",
      icon: Settings,
      desc: "Spiral duct, rectangular duct, ductboard systems, insulated duct (R6/R8), SMACNA compliant hangers, supports, and fire/smoke damper installation.",
      img: "/src/assets/images/ductwork_installation_1779256219811.png"
    },
    {
      title: "DOAS / MAU & Ventilation Systems",
      icon: Zap,
      desc: "Make-up air units, dedicated outdoor air systems, exhaust systems, smoke evacuation systems, rooftop curbs, and structural coordination.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f3366d4?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Hydronic Piping",
      icon: Droplets,
      desc: "Chilled water and hot water systems including pumps, valves, strainers, gauges, coil tie-ins, flushing, filling, and testing.",
      img: "/src/assets/images/commercial_chillers_room_1779256198807.png"
    },
    {
      title: "Controls Integration",
      icon: Cpu,
      desc: "BACnet integration, thermostats, VRF controls, VFDs, sensors, commissioning, and point-to-point testing.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "TAB Coordination",
      icon: MonitorCheck,
      desc: "Third-party certified testing, airflow balancing, hydronic balancing, and closeout reporting.",
      img: "https://images.unsplash.com/photo-1581093583449-84d79d5f75e7?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Demolition & Replacement",
      icon: Trash2,
      desc: "Equipment removal, roof drop coordination, disposal, duct modifications, and temporary cooling support.",
      img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Crane & Rigging",
      icon: Anchor,
      desc: "Crane planning, lift coordination, rigging plans, street closures, and safety supervision.",
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Maintenance Services",
      icon: Wrench,
      desc: "Preventive maintenance programs, filter replacement, coil cleaning, emergency repairs, and multi-unit HVAC management.",
      img: "https://images.unsplash.com/photo-1581092288338-2314dddb7ec3?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Industrial Capabilities" 
          subtitle="From precision fabrication to massive-scale installation, we provide a holistic suite of mechanical engineering services tailored for the modern enterprise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[480px] rounded-[40px] overflow-hidden glass-card border-white/5 transition-all duration-500"
            >
              {/* Background with Zoom Effect */}
              <div className="absolute inset-0">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 opacity-40"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full p-10 flex flex-col justify-end">
                <div className="mb-8 w-14 h-14 rounded-2xl bg-primary-blue/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-primary-blue transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary-blue group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-display font-extrabold mb-4 text-white tracking-tight leading-tight group-hover:text-primary-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-10 font-medium">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/btn">
                    Learn More
                    <ChevronRight className="w-4 h-4 text-primary-electric group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-primary-blue transition-colors" />
                </div>
              </div>

              {/* Gradient Border Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-primary-blue/30 rounded-[40px] shadow-[inset_0_0_50px_rgba(59,130,246,0.1)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Process Section ---
const ProcessSection = () => {
  const steps = [
    { title: "Consultation", desc: "Expert assessment of your infrastructure needs." },
    { title: "Engineering", desc: "Detailed CAD/BIM planning & strategic design." },
    { title: "Fabrication", desc: "Precision custom manufacturing in our centers." },
    { title: "Installation", desc: "Professional high-spec site implementation." },
    { title: "Commissioning", desc: "Rigorous testing & system optimization." },
    { title: "Support", desc: "24/7 dedicated maintenance & oversight." }
  ];

  return (
    <section className="py-32 px-6 bg-[#020617] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title="Engineering Workflow" 
          subtitle="Our systematic approach ensures flawless execution from initial concept to long-term lifecycle management."
        />

        <div className="relative mt-24">
          {/* Timeline Line */}
          <div className="absolute top-12 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 w-24 h-24 rounded-3xl glass flex items-center justify-center mb-8 border-white/5 group-hover:border-primary-blue/50 transition-all shadow-2xl">
                  <div className="w-12 h-12 rounded-2xl bg-primary-blue/10 flex items-center justify-center text-primary-blue font-display font-extrabold text-2xl group-hover:bg-primary-blue group-hover:text-white transition-all">
                    {i + 1}
                  </div>
                  {/* Glowing Connector Node */}
                  <div className="absolute -bottom-2 translate-y-1/2 w-4 h-4 bg-primary-blue rounded-full shadow-[0_0_15px_rgba(59,130,246,1)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-xl font-display font-extrabold text-white mb-3 tracking-tight">{step.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Why Choose Section ---
const WhyChoose = () => {
  const perks = [
    { icon: ShieldCheck, title: "Safety First", desc: "Rigorous ISO safety protocols on every project site." },
    { icon: Timer, title: "Fast Delivery", desc: "Efficient project management meeting strict deadlines." },
    { icon: Award, title: "Expert Team", desc: "Highly certified engineers with decades of experience." },
    { icon: Clock, title: "24/7 Support", desc: "Emergency mechanical assistance ready around the clock." }
  ];

  return (
    <section className="py-32 px-6 bg-primary-navy">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:w-1/2"
        >
          <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-6 inline-block">The Advantage</span>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter text-white">Why Industry Leaders <span className="text-primary-blue">Trust Audwin</span></h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
            We don't just fix pipes and vents; we build high-performance systems that drive your business's operational continuity and energy efficiency.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            {[
              { label: 'Successful Projects', val: '1.2k+' },
              { label: 'Energy Savings', val: '20% Avg' }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border-white/5">
                <div className="text-4xl font-display font-extrabold text-white mb-1 tracking-tighter">{stat.val}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black leading-none">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-[32px] border-white/5 hover:border-primary-blue/30 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:scale-110 transition-all shadow-xl">
                <perk.icon className="w-7 h-7 text-primary-blue group-hover:text-white" />
              </div>
              <h4 className="text-lg font-display font-extrabold text-white mb-3 tracking-tight">{perk.title}</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Industries Served Section ---
const IndustriesServed = () => {
  const industries = [
    { title: "Healthcare", desc: "Infection control & critical air systems.", icon: ShieldCheck },
    { title: "Industrial", desc: "Process cooling & large-scale vents.", icon: Settings },
    { title: "Corporate", desc: "Smart office climate & occupancy control.", icon: Building2 },
    { title: "Warehousing", desc: "Energy-efficient high-volume airflow.", icon: Truck },
    { title: "Retail Centers", desc: "Seamless multi-brand temperature regulation.", icon: Target },
    { title: "Residences", desc: "Premium high-rise MEP distribution.", icon: MapPin }
  ];

  return (
    <section className="py-32 px-6 bg-[#020617] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary-blue)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-white">Sectors We <span className="text-primary-blue">Electrify</span></h2>
          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto font-medium">Custom engineering for high-stakes environments where precision is non-negotiable.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-primary-blue/20 transition-all text-center group cursor-default"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ind.icon className="w-6 h-6 text-primary-blue" />
              </div>
              <h5 className="text-white font-bold mb-2 font-display text-sm uppercase tracking-widest">{ind.title}</h5>
              <p className="text-slate-600 text-[10px] leading-relaxed uppercase tracking-tighter font-bold">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CTA Section ---
const ServicesCTA = () => (
  <section className="py-32 px-6 relative overflow-hidden">
     <div className="absolute inset-0 bg-[#020617]">
        {/* Cinematic Industrial Visual Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/src/assets/images/industrial_mep_png_1779194033005.png)' }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary-blue)_0%,_transparent_70%)] opacity-20" />
     </div>

     <div className="max-w-5xl mx-auto relative z-10 glass-card p-16 md:p-24 rounded-[48px] border-white/5 text-center shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="w-20 h-20 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-10 border border-primary-blue/20 shadow-2xl">
            <Settings className="w-10 h-10 text-primary-blue animate-spin-slow" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 text-white tracking-tighter leading-tight">Need Reliable <span className="text-primary-blue">Mechanical Solutions?</span></h2>
          <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Partner with Audwin Mech for high-performance engineering, installation, and maintenance services.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-primary-blue hover:bg-blue-700 text-white px-12 py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/40 uppercase tracking-widest text-xs">
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </button>
            <a 
              href="https://wa.me/19562306949?text=Hello Audwin Mech, I would like to discuss your HVAC and mechanical engineering services."
              target="_blank"
              className="glass hover:bg-white/10 text-white px-12 py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 border-white/10 uppercase tracking-widest text-xs"
            >
              WhatsApp Consultation
            </a>
          </div>
        </motion.div>
     </div>
  </section>
);

const ServicesPage = () => {
  return (
    <div className="pt-20"> {/* Offset for navbar */}
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <WhyChoose />
      <IndustriesServed />
      <ServicesCTA />
    </div>
  );
};

export default ServicesPage;
