import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Settings, Zap, Droplets, Wind, Wrench, BarChart3, Factory, ShieldCheck, ChevronRight, Store, Utensils, Building2 } from 'lucide-react';
import { SectionHeading } from './CoreUI';

// Import local premium HVAC/construction assets
import commercialChillers from '../assets/images/commercial_chillers_room_1779256198807.png';
import ventilationProject from '../assets/images/ventilation_project_1779260500000_png_1779260401634.png';
import industrialHvacSystem from '../assets/images/industrial_hvac_system_1779256174803.png';
import commercialMep from '../assets/images/commercial_mep_png_1779194054275.png';

// Premium high-fidelity SVG gear matching engineering requirements
const GearIcon = ({ className, spinType }: { className?: string; spinType: 'cw' | 'ccw' }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`${className} ${spinType === 'cw' ? 'animate-[gearSpinCw_40s_linear_infinite]' : 'animate-[gearSpinCcw_30s_linear_infinite]'}`} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1"
  >
    <circle cx="50" cy="50" r="28" strokeDasharray="3 3" />
    <circle cx="50" cy="50" r="16" />
    <circle cx="50" cy="50" r="6" strokeDasharray="1 1" />
    <path d="M 50 12 L 50 22 M 50 78 L 50 88 M 12 50 L 22 50 M 78 50 L 88 50 M 23 23 L 30 30 M 70 70 L 77 77 M 23 71 L 30 64 M 70 30 L 77 23" strokeWidth="1.5" strokeLinecap="round" />
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      return (
        <g key={i} transform={`rotate(${angle} 50 50)`}>
          <path d="M 46 8 L 54 8 L 52 14 L 48 14 Z" fill="currentColor" fillOpacity="0.12" />
        </g>
      );
    })}
  </svg>
);

const Services = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isCursorHovered, setIsCursorHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(any-hover: hover)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });

    // Check if hovering over an interactive element (cards, buttons, links, navigation)
    const target = e.target as HTMLElement;
    const isOverInteractive = !!target.closest('.group') || 
                              !!target.closest('button') || 
                              !!target.closest('a') ||
                              !!target.closest('.swiper-button-next') || 
                              !!target.closest('.swiper-button-prev') || 
                              !!target.closest('.swiper-pagination-bullet');
    setIsCursorHovered(isOverInteractive);
  };

  const services = [
    {
      title: "Retail Build-Outs",
      icon: Store,
      description: "Complete HVAC installation solutions for retail spaces, shopping centers, and commercial storefront developments.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Restaurant HVAC Systems",
      icon: Utensils,
      description: "Efficient climate-control and ventilation systems engineered for restaurant operations and customer comfort.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Commercial Mechanical",
      icon: Building2,
      description: "Scalable mechanical engineering solutions for commercial facilities, mixed-use buildings, and industrial projects.",
      image: commercialMep
    },
    {
      title: "Ductwork Fabrication",
      icon: Wrench,
      description: "Precision-fabricated duct systems optimized for airflow efficiency, durability, and modern commercial standards.",
      image: ventilationProject
    },
    {
      title: "Ventilation Systems",
      icon: Wind,
      description: "Advanced ventilation and fresh-air systems designed for code compliance and energy efficiency.",
      image: industrialHvacSystem
    },
    {
      title: "Project Estimation",
      icon: BarChart3,
      description: "Precise commercial and industrial project estimations to optimize your construction budget.",
      image: "https://images.unsplash.com/photo-1454165833767-0230551178a2?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      className={`py-32 px-6 bg-[#0c122e] relative border-y border-white/5 overflow-hidden select-none transition-all duration-300 ${isInside && isDesktop ? 'cursor-none' : ''}`}
    >
      {/* Animated Blueprint Grid overlay texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none custom-blueprint-grid"
        style={{ 
          backgroundImage: 'linear-gradient(to right, #1aa7e1 1px, transparent 1px), linear-gradient(to bottom, #1aa7e1 1px, transparent 1px)',
          backgroundSize: '32px 32px' 
        }} 
      />

      {/* Background radial and glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#1aa7e1]/6 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2e3192]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#1aa7e1]/3 rounded-full blur-[160px] pointer-events-none" />

      {/* Rotating Mechanical Schematic Gears in Background */}
      <GearIcon className="absolute -bottom-20 -left-20 w-80 h-80 text-[#1aa7e1]/10 pointer-events-none z-0" spinType="cw" />
      <GearIcon className="absolute -top-16 right-10 w-64 h-64 text-[#2e3192]/10 pointer-events-none z-0" spinType="ccw" />
      <GearIcon className="absolute top-1/2 left-[40%] -translate-y-1/2 w-96 h-96 text-[#1aa7e1]/5 pointer-events-none z-0" spinType="cw" />

      {/* Fine technical blueprint lines crosshairs on section corners */}
      <div className="absolute top-8 left-8 w-12 h-[1px] bg-white/10 pointer-events-none" />
      <div className="absolute top-8 left-8 w-[1px] h-12 bg-white/10 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-12 h-[1px] bg-white/10 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-[1px] h-12 bg-white/10 pointer-events-none" />

      {/* Custom Mechanical Elegant Cursor */}
      {isInside && isDesktop && (
        <div 
          className="absolute pointer-events-none z-50 mix-blend-screen transition-all duration-100 ease-out"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Main Container */}
          <div className="relative flex items-center justify-center w-20 h-20">
            
            {/* 1. SOLID FILLED INNER GRADIENT CORE WITH SOFT GLOW */}
            <div 
              className={`absolute rounded-full bg-gradient-to-br from-[#1aa7e1] via-[#1aa7e1] to-[#2e3192] flex items-center justify-center shadow-[0_0_25px_rgba(26,167,225,0.6)] border border-white/20 transition-all duration-500 ease-out ${
                isCursorHovered 
                  ? 'w-10 h-10 shadow-[0_0_40px_rgba(26,167,225,0.9)] scale-110' 
                  : 'w-6 h-6 shadow-[0_0_18px_rgba(26,167,225,0.5)] scale-100'
              }`}
            >
              {/* Premium micro white center highlight dot */}
              <div className={`rounded-full bg-white transition-all duration-300 ${
                isCursorHovered ? 'w-2 h-2 opacity-100' : 'w-1.5 h-1.5 opacity-80'
              }`} />
            </div>

            {/* 2. SLOWLY ROTATING TECHNICAL OUTER INDICATOR RING */}
            <div 
              className={`absolute rounded-full border border-[#1aa7e1]/25 animate-[spin_12s_linear_infinite] transition-all duration-500 ease-out ${
                isCursorHovered ? 'w-16 h-16 opacity-100 scale-105' : 'w-12 h-12 opacity-60 scale-100'
              }`}
            >
              {/* Luxury indicator ticks on the outer boundary */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#1aa7e1]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#1aa7e1]/50" />
            </div>

            {/* 3. LIGHT RESILIENT CONCENTRIC DASHED BLUEPRINT RING */}
            <div 
              className={`absolute rounded-full border border-dashed border-[#1aa7e1]/15 animate-[spin_40s_linear_infinite] transition-all duration-500 ease-out ${
                isCursorHovered ? 'w-20 h-20 opacity-90' : 'w-14 h-14 opacity-30'
              }`} 
            />

            {/* 4. ACTIVE ENTRANCE EXPANDING MOTION RIPPLE WAVE */}
            <span className={`absolute rounded-full border border-[#1aa7e1]/40 animate-ping duration-[1600ms] pointer-events-none transition-opacity ${
              isCursorHovered ? 'opacity-100 w-16 h-16' : 'opacity-0 w-8 h-8'
            }`} />

          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title="Core Competencies" 
          subtitle="Specialized mechanical & HVAC solutions delivering reliable Texas-wide technical support with absolute compliance."
        />

        <Swiper
          modules={[Navigation, Pagination, Mousewheel]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          mousewheel={{ forceToAxis: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <CompetencyCard service={service} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Global Embedded Animations and Style Injector */}
      <style>{`
        @keyframes gearSpinCw {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes gearSpinCcw {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .custom-blueprint-grid {
          animation: gridPan 16s linear infinite;
        }
        @keyframes gridPan {
          0% { background-position: 0px 0px; }
          100% { background-position: 32px 32px; }
        }
        @keyframes sweep {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(100%) skewX(-15deg); }
        }
      `}</style>
    </section>
  );
};

// Isolated interactive 3D Card with local telemetry tracking
const CompetencyCard = ({ service, index }: { service: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [glowX, setGlowX] = useState(0);
  const [glowY, setGlowY] = useState(0);

  const handleCardMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Smooth magnetic tilt: normalized calculations mapped to deluxe 6-degrees cap
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    setRotateX(-(mouseY / (height / 2)) * 6);
    setRotateY((mouseX / (width / 2)) * 6);

    // Coordinate math mapping for precise localized radial glow placement
    setGlowX(e.clientX - rect.left);
    setGlowY(e.clientY - rect.top);
  };

  const handleCardMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleCardMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleCardMouseLeave}
      className="group relative h-[490px] rounded-[32px] overflow-hidden bg-[#0a102a]/85 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(26,167,225,0.18)] cursor-pointer"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.015 : 1}, ${isHovered ? 1.015 : 1}, 1)`,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {/* Dynamic Cursor Reactive Background Radial Light */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        style={{
          background: `radial-gradient(160px circle at ${glowX}px ${glowY}px, rgba(26, 167, 225, 0.18), transparent 70%)`
        }}
      />

      {/* Background Image with Layered Deep Industrial Shade */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/75 to-[#020617]/40 z-10" />
      </div>

      {/* Moving luxury metallic light sweep overlay */}
      <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:animate-[sweep_2s_ease-out_infinite] pointer-events-none z-10" />

      {/* Cybernetic HUD Corner Brackets */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-slate-700 transition-all duration-500 group-hover:border-[#1aa7e1] group-hover:w-6 group-hover:h-6 pointer-events-none z-30" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-slate-700 transition-all duration-500 group-hover:border-[#1aa7e1] group-hover:w-6 group-hover:h-6 pointer-events-none z-30" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-slate-700 transition-all duration-500 group-hover:border-[#1aa7e1] group-hover:w-6 group-hover:h-6 pointer-events-none z-30" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-slate-700 transition-all duration-500 group-hover:border-[#1aa7e1] group-hover:w-6 group-hover:h-6 pointer-events-none z-30" />

      {/* Inner Technical Grid Ring Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-[#1aa7e1]/3 rounded-full pointer-events-none scale-90 group-hover:scale-100 group-hover:border-[#1aa7e1]/8 transition-all duration-500 z-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-[#1aa7e1]/2 rounded-full pointer-events-none scale-75 group-hover:scale-100 group-hover:border-[#1aa7e1]/6 group-hover:animate-[spin_40s_linear_infinite] transition-all duration-500 z-15" />

      {/* Content Container */}
      <div className="relative h-full p-8 flex flex-col justify-end z-30" style={{ transform: 'translateZ(30px)' }}>
        {/* Top telemetry label */}
        <div className="absolute top-6 left-8 font-mono text-[9px] text-[#1aa7e1]/60 tracking-[0.22em] font-bold uppercase select-none group-hover:text-[#1aa7e1] transition-colors duration-300">
          COMPETENCY 0{index + 1} // SOLUTIONS
        </div>

        {/* Icon Frame */}
        <div className={`mb-6 w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
          index % 2 === 0 
            ? 'bg-[#1aa7e1]/10 border-[#1aa7e1]/20 text-[#1aa7e1] group-hover:bg-[#1aa7e1] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(26,167,225,0.4)]' 
            : 'bg-[#2e3192]/10 border-[#2e3192]/20 text-white/90 group-hover:bg-[#2e3192] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(46,49,146,0.4)]'
        }`}>
          <service.icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
        </div>
        
        <h3 className="text-xl font-display font-extrabold mb-3 text-white group-hover:text-[#1aa7e1] transition-colors duration-300 tracking-tight leading-tight uppercase select-none">
          {service.title}
        </h3>
        
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-medium select-none">
          {service.description}
        </p>
        
        <button className="flex items-center gap-2 text-white font-bold group/btn text-[10px] uppercase tracking-widest self-start border-b border-white/5 pb-1 group-hover:border-[#1aa7e1]/30 transition-colors">
          Explore Details
          <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-[#1aa7e1]" />
        </button>
      </div>
      
      {/* Stable Deluxe Edge Glow Overlay on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-[#1aa7e1]/30 rounded-[32px] z-40 shadow-[inset_0_0_20px_rgba(26,167,225,0.08)]" />
    </div>
  );
};

export default Services;
