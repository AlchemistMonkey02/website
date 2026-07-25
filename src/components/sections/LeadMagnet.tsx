"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const LeadMagnet = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 1, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-secondary/95 backdrop-blur-3xl text-white rounded-[40px] p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto relative overflow-hidden shadow-[0_40px_80px_rgba(8,16,36,0.2)] border border-white/10"
        >
          {/* Decorative animated background glowing orbs */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-[30%] -left-[10%] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" 
          />

          {/* Premium border highlight on top edge */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="flex-1 text-center md:text-left relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-white/10 shadow-inner"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-heading font-bold text-white uppercase tracking-widest">Limited Weekly Consultation Slots</span>
            </motion.div>
            
            <h2 className="text-[32px] md:text-[42px] lg:text-[52px] font-bold font-heading leading-[1.1] mb-6 text-white tracking-tight">
              Is Your Startup Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Government Funding?</span>
            </h2>
            
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-body font-light">
              Take our Free Startup Eligibility Check to discover which grants, incubators, and schemes you qualify for right now. No commitments, just pure value.
            </p>
            
            <Link href="/assessment" className="btn-primary inline-flex items-center text-sm md:text-[15px] px-10 py-4 w-full sm:w-auto justify-center">
              Start Free Assessment <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
