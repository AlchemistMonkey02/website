"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface AboutProps {
  data?: {
    subtitle?: string;
    title?: string;
    description?: string;
    experienceYears?: string;
    features?: string[];
    mainImage?: any;
  };
}

export const About = ({ data }: AboutProps) => {
  const subtitle = data?.subtitle || "About Our Company";
  const title = data?.title || "Guiding startups and MSMEs towards exponential business growth";
  const description = data?.description || "At Venture Nodes, we specialize in helping entrepreneurs register, grow, and secure institutional funding for their dream businesses. From hassle-free corporate incorporation and ISO standards compliance to securing high-value government scheme grants (like Startup India Seed Fund and RKVY RAFTAAR), we are your trusted growth partners.";
  const features = data?.features || [
    "Seamless Registrations",
    "Government Scheme Grants",
    "ISO Compliance Audit",
    "Incubation Acceleration"
  ];
  const mainImageUrl = typeof data?.mainImage === "string"
    ? data.mainImage
    : (data?.mainImage?.url || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800");


  return (
    <section id="about" className="section-white overflow-hidden py-20 md:py-28">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 1, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Image Container */}
          <div className="relative z-10 rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-[6px] border-white bg-white">
            <img 
              src={mainImageUrl} 
              alt={data?.mainImage?.alt || "About Venture Nodes"} 
              className="w-full h-auto object-cover min-h-[500px]"
            />
          </div>
          
          {/* Expert Badge */}
          <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 z-20 bg-primary p-6 md:p-8 rounded-2xl shadow-[0_15px_40px_rgba(4,147,177,0.3)] text-white flex flex-col items-center justify-center min-w-[150px] md:min-w-[180px] border border-white/20">
            <ShieldCheck className="w-10 h-10 mb-3 text-white" strokeWidth={1.5} />
            <div className="text-[16px] md:text-[18px] font-bold font-heading leading-none mb-1">Expert Team</div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-center text-white/80">Dedicated Advisors</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 1, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-primary" />
            <span className="text-primary font-heading font-bold uppercase tracking-widest text-[13px]">
              {subtitle}
            </span>
          </div>

          <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B1221] leading-[1.1] font-heading tracking-tight">
            {title}
          </h2>

          <p className="text-gray-500 text-[16px] leading-relaxed">
            {description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6 mt-2">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <span className="font-bold text-[#0B1221] text-[13px] tracking-wide leading-tight">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/about" className="btn-primary">
              Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
