"use client";

import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface IncubationProps {
  data?: {
    title?: string;
    subtitle?: string;
    description?: string;
    centersCount?: string;
    presenceText?: string;
    image?: any;
    trustedText?: string;
  } | null;
}

export const Incubation = ({ data }: IncubationProps) => {
  const subtitle = data?.subtitle || "Ecosystem Support";
  const title = data?.title || "The Strongest Support Ecosystem for Startups & MSMEs";
  const description = data?.description || "Providing pan-India guidance. Connect with institutional support, receive expert training, and nurture your startup from idea to scale.";
  const centersCount = data?.centersCount || "Pan-India";
  const presenceText = data?.presenceText || "Pan-India Reach";
  const trustedText = data?.trustedText || "Empowering MSMEs";

  const imageUrl = data?.image && typeof data.image === 'string'
    ? data.image
    : "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80";

  return (
    <section className="py-16 md:py-24 bg-accent relative overflow-hidden">

      
      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 1, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 md:gap-8"
        >
          <div className="flex items-center gap-4">
            <span className="w-8 md:w-10 h-[2px] bg-primary"></span>
            <span className="text-primary font-heading font-bold uppercase tracking-widest text-[12px] md:text-[13px]">
              {subtitle}
            </span>
          </div>
          
          <h2 className="text-[28px] sm:text-[32px] md:text-[44px] font-bold font-heading text-secondary leading-[1.1] tracking-tight">
            {title}
          </h2>
          
          <p className="text-secondary/80 text-[15px] md:text-[16px] max-w-xl leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-2">
            <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white/40 flex-1 sm:flex-none">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold font-heading text-secondary leading-none mb-1">{centersCount}</span>
                <span className="text-[10px] md:text-[11px] font-bold text-secondary/70 uppercase tracking-widest">Centers</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white/40 flex-1 sm:flex-none">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold font-heading text-secondary leading-none mb-1">{presenceText}</span>
                <span className="text-[10px] md:text-[11px] font-bold text-secondary/70 uppercase tracking-widest">Presence</span>
              </div>
            </div>
          </div>

          <div className="mt-2 md:mt-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto" aria-label="Share Your Business Plan with VenturesNodes">
              Share Your Business Plan <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden premium-shadow border-[4px] md:border-[8px] border-white bg-white w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <Image 
              src={imageUrl} 
              alt={data?.image?.alt || "Modern incubation center office"} 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          
          <div
            className="absolute -bottom-6 -right-6 md:-bottom-10 md:-left-10 z-20 glass-dark text-white p-6 md:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center min-w-[150px] md:min-w-[180px] border-t border-l border-white/20"
          >
            <div className="text-[16px] md:text-[18px] font-bold font-heading leading-none mb-1 text-center">
              {trustedText}
            </div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-center text-white/80">
              Partner Network
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
