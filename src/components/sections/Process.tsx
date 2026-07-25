"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Search, Settings, Rocket, Zap } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Market Analysis",
    description: "Deep-dive into protocol metrics and infrastructure requirements.",
    icon: Search,
  },
  {
    num: "02",
    title: "Project Strategy",
    description: "Scaling high-availability infrastructure across global regions.",
    icon: Settings,
  },
  {
    num: "03",
    title: "Final Execution",
    description: "Injecting strategic venture funding to accelerate ecosystem growth.",
    icon: Rocket,
  },
];

interface ProcessProps {
  data?: {
    num: string;
    title: string;
    description: string;
    icon: string;
  }[];
}

const ICON_MAP: Record<string, any> = {
  search: Search,
  settings: Settings,
  rocket: Rocket,
  zap: Zap,
};

export const Process = ({ data }: ProcessProps) => {
  const displaySteps = data && data.length > 0 ? data : steps;

  return (
    <section id="process" className="section-muted relative overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="How We Work"
          title="Our Professional Process"
          centered
          className="mb-16 md:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 relative">
          {/* Connector line for desktop */}
          <div className="absolute top-[40px] left-[10%] w-[80%] h-[2px] bg-primary/20 hidden md:block -z-10" />
          
          {displaySteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-10">
                <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center text-primary shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {(() => {
                    const IconComponent = typeof step.icon === 'string' ? (ICON_MAP[step.icon] || Search) : (step.icon || Search);
                    return <IconComponent className="h-10 w-10" />;
                  })()}
                </div>
                <div className="absolute -top-2 -right-2 h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold font-heading">
                  {step.num}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-secondary uppercase font-heading group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
