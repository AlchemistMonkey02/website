"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const fadeUpVariant: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const Hero = ({ data }: { data?: any }) => {
  const title = data?.heroTitle || "A Focused Startup Consultancy";
  const description = data?.heroDescription || "Helping Indian founders navigate registrations, grants, incubation, and growth opportunities with expert precision.";

  // Split title into words for individual animation
  const titleWords = title.split(' ');

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full bg-secondary flex items-center pt-32 pb-20 overflow-hidden">
      {/* Professional Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-secondary to-[#040812] opacity-100 z-0"></div>
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* Left Content Area */}
        <motion.div 
          variants={staggerContainer}
          initial="visible"
          animate="visible"
          className="flex flex-col gap-6 md:gap-8 max-w-2xl"
        >
          <motion.div variants={fadeUpVariant} className="flex items-center gap-4">
            <span className="w-12 h-[2px] bg-primary"></span>
            <span className="text-primary font-heading font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Welcome to VenturesNodes</span>
          </motion.div>

          <motion.h1 variants={fadeUpVariant} className="text-[40px] sm:text-[50px] md:text-[64px] lg:text-[72px] font-bold text-white leading-[1.05] tracking-tight font-heading">
            {titleWords.map((word: string, i: number, arr: string[]) => (
              <span key={i} className={i >= arr.length - 2 ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          <motion.div variants={fadeUpVariant} className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed font-body">
            <p>{description}</p>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mt-4">
            <Link href="/services" className="btn-primary group inline-flex justify-center items-center">
              Explore Our Services
              <ArrowRight className="inline-block w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="btn-outline group border-white/20 text-white hover:border-white hover:bg-white/10 inline-flex justify-center items-center">
              Book Free Consultation
            </Link>
          </motion.div>
          

        </motion.div>

        {/* Right Image Area */}
        <motion.div 
          initial={{ opacity: 1, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="relative lg:h-[600px] hidden lg:block"
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-secondary/50">
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent z-10 mix-blend-multiply pointer-events-none"></div>
            <Image 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
              alt="Premium Startup Consulting"
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          
          {/* Floating Glass UI Element */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-12 bottom-12 glass-panel-dark p-6 rounded-xl flex items-center gap-4 z-20"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <ChevronRight className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-white font-bold font-heading text-lg">Fast-Track Approvals</div>
              <div className="text-white/60 text-sm font-body">DPIIT & Grants</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
