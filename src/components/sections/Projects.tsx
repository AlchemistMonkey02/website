"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    title: "Pvt Ltd Startup Scale",
    category: "Company Incorporation",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Agri-Tech Scheme Grant",
    category: "RKVY RAFTAAR Scheme",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "DPIIT Seed Funding Launch",
    category: "Seed Fund Scheme",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89ba11?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Global Standards ISO",
    category: "Compliance & ISO",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "NGO & Section 8 Launch",
    category: "Social Enterprise",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800",
  },
];

interface ProjectsProps {
  data?: {
    title: string;
    category: string;
    image: string;
  }[];
}

export const Projects = ({ data }: ProjectsProps) => {
  const displayProjects = data && data.length > 0 ? data : projects;
  
  if (displayProjects.length === 0) return null;

  return (
    <section id="projects" className="section-white overflow-hidden relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
          <SectionHeading
            subtitle="Our Portfolio"
            title="Projects We Power"
            description="Our selective portfolio of category-defining protocols and high-performance infrastructure networks."
          />
          <div className="flex gap-4">
             <button className="project-prev h-12 w-12 rounded-sm bg-secondary flex items-center justify-center text-white hover:bg-primary transition-all duration-500">
                <ArrowLeft className="h-5 w-5" />
             </button>
             <button className="project-next h-12 w-12 rounded-sm bg-secondary flex items-center justify-center text-white hover:bg-primary transition-all duration-500">
                <ArrowRight className="h-5 w-5" />
             </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            prevEl: ".project-prev",
            nextEl: ".project-next",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="project-swiper"
        >
          {displayProjects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 1, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-md h-[500px]"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-10">
                  <span className="text-primary font-heading font-bold uppercase tracking-[0.2em] text-xs mb-4">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-8 font-heading uppercase tracking-tight">{project.title}</h3>
                  
                  <Link href="/projects" aria-label="View all projects" className="h-14 w-14 bg-primary text-white flex items-center justify-center rounded-sm hover:bg-white hover:text-primary transition-all duration-500">
                    <ArrowUpRight className="h-6 w-6" />
                  </Link>
                </div>

                {/* Bottom Label (Visible when not hovered) */}
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-secondary/80 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                   <span className="text-primary font-heading font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">{project.category}</span>
                   <h3 className="text-xl font-bold text-white font-heading uppercase tracking-tight">{project.title}</h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
