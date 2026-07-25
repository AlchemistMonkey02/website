"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fallbackPosts = [
  {
    title: "The ASEAN Market Is Open for Indian Business: VenturesNodes Leads MSMEs Toward Global Growth",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "VenturesNodes Strategic MOU with China’s Govt Officials to empower Indian Business Ecosystem",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Honoured as Global ambassador By Putalibazar MUNICIPALITY OFFICE, Nepal",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  },
];

interface BlogProps {
  data?: Array<{
    title: string;
    category?: string;
    image?: any;
  }> | null;
}

export const Blog = ({ data }: BlogProps) => {
  const displayPosts = data && data.length > 0
    ? data.map(item => ({
        title: item.title,
        category: item.category || "Insights",
        image: typeof item.image === "string"
          ? item.image
          : (item.image?.url || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800")
      }))
    : fallbackPosts;


  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-12 h-[2px] bg-primary"></span>
          <span className="text-primary font-heading font-bold uppercase tracking-widest text-sm">
            VenturesNodes Insights
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-16">
          Read Our Latest <span className="text-primary">News</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden shadow-lg border border-transparent hover:border-primary/20 transition-all duration-500 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-video">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-sm text-xs font-bold uppercase tracking-widest shadow-lg">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-secondary mb-6 group-hover:text-primary transition-colors leading-tight font-heading line-clamp-3">
                  {post.title}
                </h3>
                
                <div className="mt-auto">
                  <Link href="/about" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors" aria-label={`Read article: ${post.title}`}>
                    Read Article <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
