"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx} 
            className={cn(
              "border border-black/5 rounded-md overflow-hidden transition-all duration-500",
              isOpen ? "bg-white shadow-xl" : "bg-muted hover:bg-white"
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full px-8 py-6 flex items-center justify-between text-left group"
            >
              <span className={cn(
                "font-heading font-bold uppercase tracking-tight text-lg transition-colors duration-300",
                isOpen ? "text-primary" : "text-secondary group-hover:text-primary"
              )}>
                {item.question}
              </span>
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                isOpen ? "bg-primary text-white" : "bg-white text-secondary group-hover:bg-primary group-hover:text-white"
              )}>
                {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 1 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="px-8 pb-8 text-muted-foreground text-sm leading-relaxed max-w-2xl">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
