import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Globe, Send, Award, Users, Briefcase, ChevronRight } from 'lucide-react';
import { SectionHeading } from './CoreUI';

interface Hub {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  specialty: string;
  engineers: number;
  projects: number;
  timezone: string;
  status: string;
  address: string;
  phone: string;
}

const Contact = () => {
  const hubs: Hub[] = [
    {
      id: "harlingen",
      name: "Harlingen (HQ)",
      coordinates: { x: 200, y: 130 },
      specialty: "Commercial & Institutional Mechanical Scopes",
      engineers: 32,
      projects: 145,
      timezone: "CST (UTC-6)",
      status: "Operational",
      address: "22045 Crossett Rd, Harlingen, TX, USA",
      phone: "+1 (956) 230-6949"
    },
    {
      id: "edinburg",
      name: "Edinburg Office",
      coordinates: { x: 390, y: 100 },
      specialty: "Ductwork Fabrication & Commercial TAB",
      engineers: 24,
      projects: 98,
      timezone: "CST (UTC-6)",
      status: "Operational",
      address: "Edinburg, TX, USA",
      phone: "+1 (956) 230-6949"
    },
    {
      id: "mission",
      name: "Mission Office",
      coordinates: { x: 640, y: 220 },
      specialty: "Heavy Rooftop Equipments & VRF Systems",
      engineers: 19,
      projects: 76,
      timezone: "CST (UTC-6)",
      status: "Operational",
      address: "Mission, TX, USA",
      phone: "+1 (956) 230-6949"
    }
  ];

  const [activeHub, setActiveHub] = useState<Hub>(hubs[0]);

  return (
    <section id="contact" className="py-24 px-6 bg-primary-navy">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="GC Partner Request" 
          subtitle="Have a project you would like us to bid on?"
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
                { icon: MapPin, title: "Our Office", content: "22045 Crossett Rd, Harlingen, TX, USA" },
                { icon: Phone, title: "Call Us", content: "956-230-6949" },
                { icon: Mail, title: "Email Us", content: "info@audwinmechanical.com" },
                { icon: Clock, title: "Working Hours", content: "09:00 AM – 05:00 PM" },
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
                 <p className="text-slate-300 text-xs font-semibold leading-relaxed max-w-md bg-white/5 p-4 rounded-xl border border-white/5">
                   Please provide project type and anticipated scope of work.
                 </p>
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

          {/* Interactive Global Presence Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 rounded-[48px] p-8 bg-[#090d1f]/40 border border-white/5 shadow-2xl overflow-hidden backdrop-blur-md min-h-[600px]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-blue">Engineering Network</span>
                <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight">Texas Offices</h3>
              </div>
              
              {/* Hub buttons */}
              <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/5 self-start sm:self-auto">
                {hubs.map((hub) => (
                  <button
                    key={hub.id}
                    onClick={() => setActiveHub(hub)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all duration-300 ${
                      activeHub.id === hub.id
                        ? 'bg-primary-blue text-white shadow-lg shadow-blue-600/25'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {hub.id === "harlingen" ? "Harlingen" : hub.id === "edinburg" ? "Edinburg" : "Mission"}
                  </button>
                ))}
              </div>
            </div>

            {/* Stylized Vector Map Viewport */}
            <div className="relative bg-[#020617] rounded-3xl border border-white/5 h-[320px] w-full overflow-hidden flex items-center justify-center">
              {/* Grid lines overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
              
              <svg 
                viewBox="0 0 800 360" 
                className="w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* World outlines stylized polygon contours */}
                {/* North America */}
                <path 
                  d="M 60 70 L 180 60 L 240 120 L 220 160 L 150 155 L 140 180 L 100 170 L 70 120 Z" 
                  fill="rgba(59, 130, 246, 0.03)" 
                  stroke="rgba(59, 130, 246, 0.12)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4"
                />
                {/* South America */}
                <path 
                  d="M 150 185 L 190 180 L 230 230 L 210 320 L 180 350 L 160 310 L 140 230 Z" 
                  fill="rgba(59, 130, 246, 0.03)" 
                  stroke="rgba(59, 130, 246, 0.12)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4"
                />
                {/* Eurasia & Africa */}
                <path 
                  d="M 320 60 L 640 50 L 740 140 L 710 220 L 590 230 L 550 280 L 500 280 L 450 330 L 400 330 L 370 210 L 320 140 Z" 
                  fill="rgba(59, 130, 246, 0.03)" 
                  stroke="rgba(59, 130, 246, 0.12)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4"
                />
                {/* Australia */}
                <path 
                  d="M 650 290 L 710 280 L 730 320 L 670 330 Z" 
                  fill="rgba(59, 130, 246, 0.03)" 
                  stroke="rgba(59, 130, 246, 0.12)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4"
                />

                {/* Connection Lane overlay */}
                {/* Lanes linking NY to London */}
                <motion.path 
                  d="M 200 130 Q 295 90 390 100" 
                  fill="none" 
                  stroke="rgba(59, 130, 246, 0.25)" 
                  strokeWidth="1.5" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                {/* Lanes linking London to Singapore */}
                <motion.path 
                  d="M 390 100 Q 515 120 640 220" 
                  fill="none" 
                  stroke="rgba(59, 130, 246, 0.25)" 
                  strokeWidth="1.5" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Hub hotspot nodes */}
                {hubs.map((hub) => {
                  const isActive = activeHub.id === hub.id;
                  return (
                    <g 
                      key={hub.id} 
                      className="cursor-pointer"
                      onClick={() => setActiveHub(hub)}
                    >
                      {/* Pulse circle */}
                      <circle
                        cx={hub.coordinates.x}
                        cy={hub.coordinates.y}
                        r={isActive ? 16 : 8}
                        className={`transition-all duration-300 fill-primary-blue/20 stroke-primary-blue/40 ${isActive ? 'animate-pulse' : ''}`}
                      />
                      {/* Interactive ring */}
                      <circle
                        cx={hub.coordinates.x}
                        cy={hub.coordinates.y}
                        r={isActive ? 6 : 4}
                        className={`transition-all duration-300 ${isActive ? 'fill-primary-blue' : 'fill-slate-600 hover:fill-primary-blue'}`}
                      />
                      {/* Hub text label */}
                      <text
                        x={hub.coordinates.x}
                        y={hub.coordinates.y - 14}
                        textAnchor="middle"
                        className={`text-[9px] font-sans font-black uppercase tracking-wider transition-all duration-300 fill-white select-none ${
                          isActive ? 'opacity-100 font-bold' : 'opacity-40'
                        }`}
                      >
                        {hub.id === "harlingen" ? "Harlingen" : hub.id === "edinburg" ? "Edinburg" : "Mission"}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Status banner */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-mono text-slate-400 font-black uppercase tracking-widest">Map Render Active</span>
              </div>
            </div>

            {/* Dashboard Display Detail Panel for Active Hub */}
            <div className="bg-[#020617]/50 rounded-3xl p-6 border border-white/5 flex flex-col justify-between gap-6 relative overflow-hidden flex-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 z-10">
                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">{activeHub.timezone}</span>
                    <h4 className="text-xl font-display font-black text-white">{activeHub.name}</h4>
                  </div>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{activeHub.specialty}</p>
                  
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-300">
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <Users className="w-4 h-4 text-primary-blue" />
                      <span>{activeHub.engineers} Specialists</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <Briefcase className="w-4 h-4 text-primary-blue" />
                      <span>{activeHub.projects}+ Projects</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">Contact Center</span>
                    <div className="flex items-start gap-2 text-xs">
                      <MapPin className="w-4 h-4 text-primary-blue shrink-0 mt-0.5" />
                      <span className="text-slate-300 font-medium">{activeHub.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Phone className="w-4 h-4 text-primary-blue" />
                      <span className="text-slate-300 font-semibold">{activeHub.phone}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#25D366] font-extrabold bg-[#25D366]/5 rounded-xl border border-[#25D366]/10 p-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                      <span>Live Consult Available</span>
                    </div>
                    <a 
                      href={`https://wa.me/19562306949?text=Hello Audwin Mech, I'd like to reach your ${activeHub.name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-[#25D366] px-3 py-1 rounded-lg hover:scale-105 active:scale-95 transition-all text-[9.5px] uppercase tracking-normal font-sans"
                    >
                      Connect
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
