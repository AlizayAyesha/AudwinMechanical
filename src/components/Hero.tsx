import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { ArrowRight, Phone, Target, Zap, ShieldCheck } from 'lucide-react';

// Import high-quality local assets with Unsplash fallbacks
import mepHeroMain from '../assets/images/mep_hero_main_png_1779193989270.png';
import commercialChillers from '../assets/images/commercial_chillers_room_1779256198807.png';
import ventilationProject from '../assets/images/ventilation_project_1779260500000_png_1779260401634.png';
import industrialHvacSystem from '../assets/images/industrial_hvac_system_1779256174803.png';

const Hero = () => {
  const slides = [
    {
      image: mepHeroMain,
      fallback: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200',
      tag: "Texas Retail Projects",
      title: "Commercial Retail Build-Outs",
      subtitle: "Complete HVAC rooftop setups and flexible duct distribution engineered for retail giants."
    },
    {
      image: commercialChillers,
      fallback: 'https://images.unsplash.com/photo-1504307651254-35680f3366d4?auto=format&fit=crop&q=80&w=1200',
      tag: "Restaurant Climate",
      title: "High-Efficiency Kitchen & Dining Systems",
      subtitle: "Enterprise climate control, premium fresh air ventilation, and code-compliant hoods."
    },
    {
      image: ventilationProject,
      fallback: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200',
      tag: "Architectural Airflow",
      title: "Precision Ductwork Fabrication",
      subtitle: "Advanced structural mechanical airflow installations built to rigid commercial specifications."
    },
    {
      image: industrialHvacSystem,
      fallback: 'https://images.unsplash.com/photo-1504307651254-35680f3366d4?auto=format&fit=crop&q=80&w=1200',
      tag: "Mechanical Construction",
      title: "Advanced Heavy Systems",
      subtitle: "Industrial Chiller rooms, critical cooling systems, and multi-zone distribution layouts."
    }
  ];

  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=120&h=120'
  ];

  const stats = [
    { value: "15+", label: "Years Experience", icon: ShieldCheck, color: "text-emerald-400" },
    { value: "500+", label: "Commercial Sites", icon: Target, color: "text-blue-400" },
    { value: "25%", label: "Average Efficiency Boost", icon: Zap, color: "text-amber-400" }
  ];

  const brands = [
    "RTUs",
    "VRF Systems",
    "Ductwork Fabrication",
    "MAU/DOAS",
    "Exhaust Systems",
    "Controls",
    "TAB Coordination",
    "Complete Mechanical Scopes"
  ];

  return (
    <>
      <section 
        id="home" 
        className="relative min-h-screen bg-[#020617] flex flex-col lg:flex-row items-stretch overflow-hidden z-[5]"
      >
        {/* Ambient background glow behind the left column only */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />

        {/* ━━━━━━━━━━━━━━━━━━━━ LEFT PANEL: PREMIUM EDITORIAL TEXT CONTENT (50% WIDTH) ━━━━━━━━━━━━━━━━━━━━ */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-14 xl:px-20 pt-24 pb-12 lg:py-16 lg:min-h-screen relative z-10 overflow-visible">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col text-left justify-center h-full max-w-2xl lg:max-w-none"
          >
            {/* Tagline */}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.25em] mb-4 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-blue animate-pulse" />
              Texas Mechanical Contractor
            </span>

            {/* Main Heading (Slightly more compact for flawless premium layout and no overflow) */}
            <h1 className="text-2xl sm:text-3.5xl md:text-[36px] xl:text-[40px] font-display font-black leading-[1.12] tracking-tight text-white mb-4 uppercase">
              TEXAS MECHANICAL CONTRACTOR FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary-blue to-cyan-400">COMMERCIAL</span>, INSTITUTIONAL & MULTI-FAMILY PROJECTS
            </h1>

            {/* Subheadline */}
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl font-medium">
              Audwin Mechanical provides turnkey mechanical systems for general contractors, architects, city municipalities, developers, and commercial clients throughout the State of Texas.
            </p>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary-blue hover:bg-blue-600 text-white px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-[1.03] active:scale-95 shadow-xl shadow-blue-500/20 text-[11px] uppercase tracking-widest whitespace-nowrap"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </a>

              <a 
                href="tel:9562306949"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-[1.03] active:scale-95 text-[11px] uppercase tracking-widest whitespace-nowrap"
              >
                <span>Call 956-230-6949</span>
                <Phone className="w-3.5 h-3.5 text-slate-400 animate-pulse" />
              </a>
            </div>

            {/* Trusted By Area */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-4 border-t border-white/5 mb-6">
              <div className="flex -space-x-2.5 shrink-0">
                {avatars.map((url, i) => (
                  <img 
                    key={i} 
                    src={url} 
                    alt={`Audwin client ${i + 1}`} 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-9 h-9 rounded-full border-2 border-[#020617] object-cover" 
                  />
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-[#020617] bg-primary-blue/20 flex items-center justify-center text-[9px] font-black text-blue-400 border-dashed">+4K</div>
              </div>
              <div className="flex flex-col">
                <span className="text-[9.5px] text-primary-blue font-extrabold uppercase tracking-widest leading-none mb-1">
                  Trusted for HVAC Installations
                </span>
                <span className="text-xs font-bold text-slate-300 leading-tight">
                  Across Commercial Retail & Restaurant Projects
                </span>
              </div>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-3 gap-2.5">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col gap-0.5 transition-all hover:bg-white/[0.04]">
                  <div className="flex items-center gap-1">
                    <stat.icon className={`w-3.5 h-3.5 ${stat.color} shrink-0`} />
                    <span className="text-sm font-black text-white">{stat.value}</span>
                  </div>
                  <span className="text-[8px] font-semibold text-slate-500 uppercase tracking-tight leading-tight mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━ RIGHT PANEL: IMMERSIVE FULL-HEIGHT SLIDER VIEWPORT (50% WIDTH) ━━━━━━━━━━━━━━━━━━━━ */}
        <div className="w-full lg:w-1/2 h-[400px] sm:h-[480px] lg:min-h-screen relative overflow-hidden flex-1 select-none">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              autoplay={{ delay: 6500, disableOnInteraction: false }}
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              loop={true}
              className="h-full w-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative w-full h-full">
                  {/* Zoom Animation Layer */}
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                    initial={{ scale: 1.05 }}
                    animate={{ scale: [1.05, 1.12, 1.05] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    {/* Silent error handling callback to ensure image stays fully visible */}
                    <img 
                      src={slide.image} 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = slide.fallback;
                      }}
                      className="hidden" 
                      alt=""
                    />
                  </motion.div>

                  {/* High contrast luxury vignette overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                  <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent hidden lg:block" />

                  {/* Project Tag & Title Card positioned in the bottom area */}
                  <div className="absolute bottom-12 left-6 right-6 sm:left-12 sm:right-12 z-20">
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="bg-[#020617]/85 backdrop-blur-md p-6 rounded-2xl border border-white/5 max-w-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                    >
                      <span className="text-[9px] font-black uppercase text-primary-blue tracking-widest bg-primary-blue/10 px-2.5 py-1 rounded-full border border-primary-blue/20">
                        {slide.tag}
                      </span>
                      <h4 className="text-white font-extrabold text-base sm:text-lg uppercase tracking-tight mt-3 leading-snug">
                        {slide.title}
                      </h4>
                      <p className="text-slate-400 text-xs mt-2 font-medium leading-relaxed">
                        {slide.subtitle}
                      </p>
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━ TRUSTED BRANDS SCROLLING MARQUEE ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#05081b] border-y border-white/5 py-10 w-full overflow-hidden relative z-10 select-none">
        {/* Edge highlight lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 mb-5">
          <div className="flex items-center gap-3 justify-center text-center">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-blue animate-pulse" />
            <h4 className="text-[11px] font-mono font-black uppercase tracking-[0.25em] text-slate-400">
              Turnkey HVAC & Mechanical Services
            </h4>
          </div>
        </div>

        {/* Outer scrolling container */}
        <div className="relative w-full flex overflow-x-hidden pt-1">
          {/* Cinematic gradient fade masks */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

          {/* Endless scrolling marquee with Framer Motion */}
          <motion.div 
            className="flex gap-20 whitespace-nowrap min-w-full shrink-0"
            animate={{ x: [0, "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity
            }}
          >
            {/* Render twice for seamless looping */}
            {[...brands, ...brands].map((brand, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 text-white text-base sm:text-lg font-bold uppercase tracking-widest font-display transition-all duration-300"
              >
                {/* Tech hex dot */}
                <span className="w-2.5 h-2.5 rotate-45 bg-primary-blue shadow-[0_0_10px_rgba(59,130,246,0.8)] shrink-0" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 font-extrabold tracking-widest">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
