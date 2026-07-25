"use client";

import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Pvt Ltd Startup Scale",
    category: "Company Incorporation",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2064&auto=format&fit=crop",
    slug: "company-incorporation"
  },
  {
    title: "Agri-Tech Scheme Grant",
    category: "RKVY RAFTAAR Scheme",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
    slug: "rkvy-raftaar"
  },
  {
    title: "DPIIT Seed Funding Launch",
    category: "Seed Fund Scheme",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89ba11?q=80&w=2070&auto=format&fit=crop",
    slug: "seed-fund"
  },
  {
    title: "Global Standards ISO",
    category: "Compliance & ISO",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    slug: "iso-certification"
  },
  {
    title: "NGO & Section 8 Launch",
    category: "Social Enterprise",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
    slug: "section-8-company"
  },
  {
    title: "ZED Certification Audit",
    category: "MSME Quality Standards",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
    slug: "enhance-credibility-zed"
  }
];

interface ProjectsGridProps {
  data?: {
    title: string;
    category: string;
    image: string;
    slug?: string;
  }[];
}

export const ProjectsGrid = ({ data }: ProjectsGridProps) => {
  const displayProjects = data && data.length > 0 ? data : projects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayProjects.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 1, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="group relative overflow-hidden rounded-md"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <Link href={`/services/${project.slug}`} className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Plus className="w-8 h-8" />
              </Link>
            </div>
          </div>
          
          <div className="p-8 bg-muted group-hover:bg-secondary transition-colors duration-500">
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">{project.category}</span>
            <h3 className="text-xl font-bold text-secondary font-heading uppercase tracking-tight group-hover:text-white transition-colors mb-4">
              {project.title}
            </h3>
            <Link href={`/services/${project.slug}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-all">
              Read More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
