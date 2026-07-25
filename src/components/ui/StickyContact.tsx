"use client";

import { MessageCircle, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export const StickyContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-4">
      <div className="group relative flex items-center justify-end">
        <a 
          href="tel:+917023149122" 
          className="relative z-10 w-14 h-14 bg-white/90 backdrop-blur-sm text-primary rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-black/5 hover:bg-primary hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          aria-label="Call Us"
        >
          <PhoneCall className="w-6 h-6" strokeWidth={1.5} />
        </a>
        <span className="absolute right-[120%] bg-secondary text-white text-sm font-bold font-heading px-4 py-2 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 whitespace-nowrap shadow-lg">
          Call Us
        </span>
      </div>
      
      <div className="group relative flex items-center justify-end">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Subtle pulse ring - Add pointer-events-none so it doesn't block clicks! */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30 pointer-events-none" />
          
          <a 
            href="https://wa.me/917023149122?text=Hi%20VenturesNodes%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative z-10 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 border-[3px] border-white"
            aria-label="WhatsApp Us"
          >
            <MessageCircle className="w-6 h-6" strokeWidth={2} />
          </a>
        </motion.div>
        
        <span className="absolute right-[120%] bg-secondary text-white text-sm font-bold font-heading px-4 py-2 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 whitespace-nowrap shadow-lg">
          Connect to experts on Whatsapp
        </span>
      </div>
    </div>
  );
};
