import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Settings, Zap, Droplets, Wind, Wrench, BarChart3, Factory, ShieldCheck, ChevronRight } from 'lucide-react';
import { SectionHeading } from './CoreUI';

const Services = () => {
  const services = [
    {
      title: "Mechanical Installation",
      icon: Settings,
      description: "Comprehensive mechanical plant room setups and piping infrastructure for industrial facilities.",
      image: "https://images.unsplash.com/photo-1517420812314-8549b17939df?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Electrical Systems",
      icon: Zap,
      description: "High and low voltage power distribution, substation installation, and smart lighting controls.",
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Plumbing Solutions",
      icon: Droplets,
      description: "Full-scale plumbing networks, water treatment systems, and sustainable drainage solutions.",
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "HVAC Installation",
      icon: Wind,
      description: "Advanced environmental control systems including VRF, central chillers, and precision cooling.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "System Maintenance",
      icon: Wrench,
      description: "Preventative and reactive maintenance services to ensure peak operational reliability.",
      image: "https://images.unsplash.com/photo-1581093583449-84d79d5f75e7?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Project Estimation",
      icon: BarChart3,
      description: "Precise commercial and industrial project estimations to optimize your construction budget.",
      image: "https://images.unsplash.com/photo-1454165833767-0230551178a2?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Industrial Construction",
      icon: Factory,
      description: "Turnkey mechanical solutions for refineries, power plants, and manufacturing facilities.",
      image: "/src/assets/images/industrial_mep_png_1779194033005.png"
    },
    {
      title: "Facility Management",
      icon: ShieldCheck,
      description: "Smart building management and long-term facility oversight for operational excellence.",
      image: "/src/assets/images/commercial_mep_png_1779194054275.png"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-primary-navy relative border-y border-white/5">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--color-primary-blue)_0%,_transparent_70%)] opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title="Core Competencies" 
          subtitle="Specialized engineering across multiple disciplines, delivering technical excellence with every installation."
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
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative h-[480px] rounded-[32px] overflow-hidden glass-card border-white/5 shadow-2xl transition-all duration-500"
              >
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full p-10 flex flex-col justify-end">
                  <div className="mb-8 w-12 h-12 rounded-xl bg-primary-blue/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-primary-blue transition-all duration-500">
                    <service.icon className="w-6 h-6 text-primary-electric group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-extrabold mb-4 text-white group-hover:text-primary-blue transition-colors tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-white font-bold group/btn text-xs uppercase tracking-widest">
                    Explore Details
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-primary-blue" />
                  </button>
                </div>
                
                {/* Glowing Border on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-primary-blue/30 rounded-[32px]" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
