"use client";

import { motion } from "framer-motion";
import { ArrowRight, Landmark } from "lucide-react";
import Link from "next/link";

const defaultSchemes = [
  {
    title: "Startup India Seed Fund",
    description: "Financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization.",
    slug: "seed-fund"
  },
  {
    title: "MUDRA Yojana",
    description: "Loans up to 10 lakhs for non-corporate, non-farm small/micro enterprises.",
    slug: "pmmy-scheme"
  },
  {
    title: "CGTMSE",
    description: "Collateral-free credit to the micro and small enterprise sector.",
    slug: "cgtmse-scheme"
  },
];

interface GovtSchemesProps {
  data?: Array<{
    title: string;
    description?: string;
    slug?: { current: string } | string;
  }> | null;
}

export const GovtSchemes = ({ data }: GovtSchemesProps) => {
  // Map dynamic services list to scheme objects
  const displaySchemes = data && data.length > 0
    ? data.map(item => ({
        title: item.title,
        description: item.description || "Expert consultation and funding grants application support.",
        slug: typeof item.slug === 'object' ? item.slug?.current : item.slug
      })).slice(0, 3) // Render top 3 schemes on homepage
    : defaultSchemes;

  return (
    <section className="py-24 bg-[#f8fafc] relative">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 1, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-primary"></span>
              <span className="text-primary font-heading font-bold uppercase tracking-widest text-[13px]">
                Top Government Schemes & Grants
              </span>
            </div>
            <h2 className="text-[32px] md:text-[44px] font-bold font-heading text-secondary leading-[1.1] tracking-tight mb-4">
              Discover Exclusive <span className="text-primary">Funding Opportunities</span>
            </h2>
            <p className="text-secondary/70 text-[16px] leading-relaxed">
              Grants, and subsidies to accelerate your startup's growth and scale globally.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 1, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link href="/services" className="btn-outline" aria-label="View all government schemes and grants">
              View all 100+ Schemes <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displaySchemes.map((scheme, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-white border border-black/5 p-8 md:p-10 rounded-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-primary/20 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                <Landmark className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-[20px] font-bold font-heading mb-4 text-secondary group-hover:text-primary transition-colors leading-tight">
                {scheme.title}
              </h3>
              <p className="text-secondary/60 text-[15px] mb-8 line-clamp-3 leading-relaxed flex-1">
                {scheme.description}
              </p>
              <Link href={scheme.slug ? `/services/${scheme.slug}` : "/services"} className="inline-flex items-center text-primary font-bold uppercase tracking-wide text-[13px] hover:text-secondary transition-colors mt-auto" aria-label={`Read more about ${scheme.title}`}>
                Read More <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
