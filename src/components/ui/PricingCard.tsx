"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  tier: string;
  price: string;
  period: string;
  features: { text: string; included: boolean }[];
  isPopular?: boolean;
  index: number;
}

export const PricingCard = ({ tier, price, period, features, isPopular, index }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative p-10 rounded-md border transition-all duration-500 overflow-hidden flex flex-col",
        isPopular 
          ? "bg-secondary text-white border-primary shadow-2xl scale-105 z-10" 
          : "bg-white text-secondary border-black/5 hover:border-primary/20 hover:shadow-xl"
      )}
    >
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-10 rotate-45 translate-x-8 translate-y-3">
            Popular
          </div>
        </div>
      )}

      <div className="mb-10">
        <span className={cn(
          "font-heading font-bold uppercase tracking-[0.2em] text-xs mb-4 block",
          isPopular ? "text-primary" : "text-primary"
        )}>
          {tier}
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold font-heading">{price}</span>
          <span className={cn(
            "text-sm font-medium uppercase tracking-widest",
            isPopular ? "text-white/40" : "text-muted-foreground"
          )}>/{period}</span>
        </div>
      </div>

      <div className="space-y-6 mb-12 flex-grow">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center shrink-0",
              feature.included 
                ? (isPopular ? "bg-primary text-white" : "bg-primary/10 text-primary")
                : (isPopular ? "bg-white/5 text-white/20" : "bg-muted text-muted-foreground/30")
            )}>
              {feature.included ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
            </div>
            <span className={cn(
              "text-sm font-medium",
              !feature.included && "opacity-30",
              isPopular ? "text-white/80" : "text-muted-foreground"
            )}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <button className={cn(
        "btn-primary w-full !py-4 rounded-sm transition-prozen",
        isPopular ? "bg-primary text-white hover:bg-white hover:text-secondary" : "bg-secondary text-white hover:bg-primary"
      )}>
        CHOOSE THIS PLAN
      </button>
    </motion.div>
  );
};
