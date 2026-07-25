"use client";

import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

interface PageHeroProps {
  title: string;
  breadcrumb?: { name: string; href?: string }[];
  image?: string;
}

export const PageHero = ({ title, breadcrumb, image }: PageHeroProps) => {
  // Convert standard breadcrumbs to the SEO Breadcrumb component items structure
  const breadcrumbItems = breadcrumb
    ? breadcrumb.map((item) => ({
        name: item.name,
        item: item.href || "",
      }))
    : [{ name: title, item: "#" }];

  const bgImage = image || "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative pt-56 pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute inset-0 z-0 bg-secondary/85 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 rounded-l-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent/20 rounded-r-full blur-[100px] pointer-events-none z-0" />
      
      <div className="container-custom relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading uppercase tracking-tight"
        >
          {title}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <Breadcrumb items={breadcrumbItems} />
        </motion.div>
      </div>
    </section>
  );
};
