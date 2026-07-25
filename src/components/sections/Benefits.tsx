"use client";

import { motion } from "framer-motion";
import { Shield, Settings, CreditCard, RotateCcw } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    title: "MONEY-BACK GUARANTEE",
    description: "Our approach ensures that every project undertake is strategically crafted.",
    icon: RotateCcw,
  },
  {
    title: "CANCELLATION POLICY",
    description: "Our approach ensures that every project undertake is strategically crafted.",
    icon: CreditCard,
  },
  {
    title: "HIGH-END SECURITY",
    description: "Our approach ensures that every project undertake is strategically crafted.",
    icon: Shield,
  },
  {
    title: "PERSONALIZED STRATEGY",
    description: "Our approach ensures that every project undertake is strategically crafted.",
    icon: Settings,
  },
];

const ICON_MAP: Record<string, any> = {
  Shield,
  Settings,
  CreditCard,
  RotateCcw
};

interface BenefitsProps {
  data?: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const Benefits = ({ data }: BenefitsProps) => {
  const displayBenefits = data && data.length > 0 ? data : benefits;
  if (displayBenefits.length === 0) return null;

  return (
    <section className="bg-secondary py-24 md:py-32 overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content Left */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-12 bg-primary" />
              <span className="text-primary font-heading font-bold uppercase tracking-[0.2em] text-xs">
                Our Benefits
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] uppercase font-heading tracking-tight">
              Benefits of Scalable <br/> 
              <span className="text-primary">Node Infrastructure</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              We specialize in helping founders and protocol teams gain control of their network performance by deploying and managing high-performance nodes across multiple ecosystems.
            </p>

            <div className="mt-4">
              <Link href="/contact" className="btn-primary">
                GET STARTED NOW
              </Link>
            </div>

            <div className="mt-12 rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 relative group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Business Meeting" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
            </div>
          </div>

          {/* Cards Right */}
          <div className="flex flex-col gap-6">
            {displayBenefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 1, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="group bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/[0.08] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-white/20"
              >
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary transition-all duration-300 shadow-inner">
                    {(() => {
                      const IconComponent = typeof item.icon === 'string' ? (ICON_MAP[item.icon] || Shield) : (item.icon || Shield);
                      return <IconComponent className="h-8 w-8" strokeWidth={1.5} />;
                    })()}
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-[16px] md:text-lg font-bold text-white font-heading uppercase tracking-wide group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-white/60 text-[14px] leading-relaxed group-hover:text-white/80 transition-colors">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
