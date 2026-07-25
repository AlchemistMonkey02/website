"use client";

import { Users, FileText, Banknote, ShieldCheck, Globe, Briefcase } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  users: Users,
  file: FileText,
  bank: Banknote,
  shield: ShieldCheck,
  globe: Globe,
  briefcase: Briefcase,
};

const stats = [
  { value: "10+", label: "Years Combined Experience", icon: "briefcase" },
  { value: "Pan-India", label: "Partner Network", icon: "globe" },
  { value: "Dedicated", label: "Support Team", icon: "users" },
  { value: "End-to-End", label: "Compliance Focus", icon: "shield" },
];

interface StatsProps {
  data?: {
    value: string;
    label: string;
    icon: string;
  }[];
}

export const Stats = ({ data }: StatsProps) => {
  const displayStats = data && data.length > 0 ? data : stats;
  return (
    <section className="bg-primary relative overflow-hidden py-20">
      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {displayStats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-4 group transition-transform hover:scale-105 duration-300"
          >
            <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center text-primary shadow-xl">
              {(() => {
                const IconComponent = ICON_MAP[stat.icon] || ShieldCheck;
                return <IconComponent className="h-10 w-10" />;
              })()}
            </div>
            <div className="flex flex-col mt-4">
              <span className="text-4xl md:text-5xl font-bold text-white font-heading leading-tight mb-2">
                {stat.value}
              </span>
              <span className="text-white/90 font-bold uppercase tracking-wide text-sm px-4">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
