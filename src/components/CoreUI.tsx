import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, MessageSquare, ChevronRight, Zap, Target, Award, Users } from 'lucide-react';
import { cn } from '../utils/utils';

// --- Shared Components ---

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true 
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={cn("mb-12", centered && "text-center")}
  >
    <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-4 tracking-tighter text-white">
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
    <div className={cn("h-1.5 w-24 bg-gradient-to-r from-primary-blue to-primary-electric mt-8 rounded-full", centered && "mx-auto")} />
  </motion.div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Newsletter', href: '/newsletter' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path && !location.hash;
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 px-6 py-5",
      isScrolled ? "glass bg-[#020617]/80 py-4 shadow-2xl" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
            src="/src/assets/images/audwin_logo_1779196203407-1.png" 
            alt="Audwin Logo" 
            className="w-10 h-10 object-contain" 
          />
          <span className="text-2xl font-display font-extrabold tracking-tighter text-white">AUDWIN<span className="text-primary-blue">MECH</span></span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={cn(
                "relative text-[10px] font-black transition-all uppercase tracking-[0.2em] py-2 group",
                isActive(link.href) ? "text-primary-blue" : "text-slate-400 hover:text-white"
              )}
            >
              {link.name}
              {/* Hover Underline */}
              <span className={cn(
                "absolute bottom-0 left-0 h-[2px] bg-primary-blue transition-all duration-300",
                isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <Link to="/#contact">
              <button className="bg-primary-blue hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 transform hover:scale-105 active:scale-95">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <button className="lg:hidden text-white p-2 glass rounded-lg" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="lg:hidden absolute top-[calc(100%-1rem)] left-6 right-6 glass bg-[#020617]/95 border border-white/10 rounded-3xl p-8 flex flex-col gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={cn(
                  "text-lg font-bold uppercase tracking-widest flex items-center justify-between group",
                  isActive(link.href) ? "text-primary-blue" : "text-white"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                <ChevronRight className={cn("w-5 h-5 transition-transform group-hover:translate-x-2", isActive(link.href) ? "opacity-100" : "opacity-0")} />
              </Link>
            ))}
            <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full bg-primary-blue text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-blue-600/30 transition-transform active:scale-95">
                Contact Us
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#020617] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/5 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <img src="/src/assets/images/audwin_logo_1779196203407-1.png" alt="Audwin Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-display font-extrabold tracking-tighter">AUDWIN<span className="text-primary-blue">MECH</span></span>
          </div>
          <p className="text-slate-400 mb-8 leading-relaxed font-medium">
            Audwin Mechanical provides turnkey mechanical systems for general contractors, architects, city municipalities, developers, and commercial clients throughout the State of Texas.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary-blue hover:border-primary-blue transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 font-display">Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/services" className="hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-bold">HVAC Systems</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-bold">VRF / VRV Systems</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-bold">Ductwork Fabrication</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-bold">Hydronic Piping</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-bold">Maintenance Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 font-display">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/#about" className="hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-bold">About Us</Link></li>
            <li><Link to="/why-choose-us" className="hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-bold">Why Choose Us</Link></li>
            <li><Link to="/newsletter" className="hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-bold">Newsletter</Link></li>
            <li><Link to="/#contact" className="hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-bold">Contact Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-bold">Our Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 font-display">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-blue shrink-0" />
              <span>22045 Crossett Rd, Harlingen, TX, USA</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary-blue shrink-0" />
              <span>956-230-6949</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary-blue shrink-0" />
              <span>info@audwinmechanical.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Audwin Mechanical Contractors & Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export { Navbar, Footer, SectionHeading };
