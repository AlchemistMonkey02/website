"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Globe, Zap, Briefcase, Camera } from "lucide-react";
import Link from "next/link";

const fallbackTeam = [
  {
    name: "Kaushal",
    role: "CEO & Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    slug: "kaushal"
  },
  {
    name: "Ravi",
    role: "SALES & CMO",
    image: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&q=80&w=400",
    slug: "ravi"
  },
  {
    name: "Vinod",
    role: "CTO & CFO",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    slug: "vinod"
  },
  {
    name: "Priya",
    role: "Head of Government Schemes",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    slug: "priya"
  },
];

interface TeamProps {
  data?: Array<{
    name: string;
    role: string;
    image: string;
    slug?: { current: string } | string;
  }> | null;
}

export const Team = ({ data }: TeamProps) => {
  return null;
  /*
  const displayTeam = data && data.length > 0
    ? data.map(member => ({
        name: member.name,
        role: member.role,
        image: member.image,
        slug: typeof member.slug === "object" ? member.slug?.current : member.slug
      }))
    : fallbackTeam;

  if (displayTeam.length === 0) return null;

  return (
    <section id="team" className="bg-[#f8fafc] relative overflow-hidden py-20 md:py-28">
      <div className="container-custom">
        <SectionHeading
          subtitle="Our Expert Team"
          title="The Leadership Advisory Team"
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayTeam.map((member, idx) => {
            const slugPath = member.slug || "kaushal";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 1, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex flex-col"
              >
                <div className="relative overflow-hidden aspect-[4/5] w-full">
                  <div className="block w-full h-full">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className="p-6 md:p-8 text-center bg-white flex flex-col justify-center flex-grow">
                  <h3 className="text-[18px] font-bold text-[#0B1221] group-hover:text-primary transition-colors uppercase tracking-wide">
                    <span>
                      {member.name}
                    </span>
                  </h3>
                  <p className="text-gray-500 font-bold uppercase tracking-wider text-[11px] mt-2">{member.role}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
  */
};

