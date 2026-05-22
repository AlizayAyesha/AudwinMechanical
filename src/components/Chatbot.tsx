import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Phone } from 'lucide-react';
import { cn } from '../utils/utils';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hello! Welcome to Audwin Mechanical. How can we help you today?' }
  ]);

  const whatsappLink = "https://wa.me/19562306949?text=Hello, I would like to inquire about your mechanical HVAC services.";

  const options = [
    { label: 'Request Quote', action: () => window.open(whatsappLink, '_blank') },
    { label: 'Our Services', action: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: 'Project Inquiry', action: () => window.open(whatsappLink, '_blank') },
    { label: 'Contact Team', action: () => window.location.href = 'mailto:info@audwinmechanical.com' }
  ];

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[60]">
        {/* WhatsApp Button */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white relative group"
        >
          <Phone className="w-7 h-7 fill-white" />
          <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp Us</span>
        </motion.a>

        {/* Chatbot Toggle */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-primary-blue rounded-full flex items-center justify-center shadow-2xl text-white relative group"
        >
          {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
          {!isOpen && <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full animate-ping" />}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-24 right-6 w-[350px] md:w-[400px] glass-card rounded-3xl overflow-hidden z-[60] shadow-2xl"
          >
            {/* Header */}
            <div className="bg-primary-blue p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <MessageSquare className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-sm">Audwin Mechanical Assistant</h4>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-xs text-white/80">Active Now</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="h-[350px] overflow-y-auto p-6 flex flex-col gap-4">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "p-4 rounded-2xl max-w-[80%] text-sm",
                    m.role === 'ai' ? "bg-white/10 text-white" : "bg-primary-blue text-white self-end"
                  )}
                >
                  {m.content}
                </motion.div>
              ))}
              
              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2 mt-4">
                {options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setMessages([...messages, { role: 'user', content: opt.label }, { role: 'ai', content: 'Sure! Redirecting you now...' }]);
                      setTimeout(opt.action, 500);
                    }}
                    className="bg-white/5 hover:bg-primary-blue hover:text-white border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Overlay (Dummy) */}
            <div className="p-6 border-t border-white/10 flex items-center gap-3">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="bg-white/5 border border-white/10 w-full rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary-electric"
              />
              <button className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center shrink-0">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
