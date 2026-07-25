"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  label: string;
  percentage: number;
}

export const SkillBar = ({ label, percentage }: SkillBarProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-heading font-bold uppercase tracking-tight text-secondary text-sm">{label}</span>
        <span className="font-heading font-bold text-primary text-sm">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-primary"
        />
      </div>
    </div>
  );
};
