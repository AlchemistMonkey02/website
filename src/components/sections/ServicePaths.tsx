"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lightbulb } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "../ui/SectionHeading";

const pathsData = [
  {
    id: "incorporation",
    title: "Company Setup & Compliance",
    icon: Lightbulb,
    iconColor: "text-[#4b7bec]",
    dotColor: "bg-[#4b7bec]",
    description: "Launch your business correctly with zero compliance headaches.",
    services: [
      { title: "Startup India Registration", slug: "startup-india" },
      { title: "MSME Udyam Registration", slug: "udyam-registration" },
      { title: "Private Limited Company", slug: "register-private-limited" },
      { title: "GST & Tax Advisory", slug: "gst-registered" },
      { title: "ISO Certifications", slug: "iso-certification" },
    ]
  },
  {
    id: "grants",
    title: "Government Grants & Funds",
    icon: Lightbulb,
    iconColor: "text-[#26de81]",
    dotColor: "bg-[#26de81]",
    description: "Unlock seed funding and non-dilutive capital for your venture.",
    services: [
      { title: "Startup India Seed Fund", slug: "seed-fund" },
      { title: "RKVY RAFTAAR Grant", slug: "rkvy-raftaar" },
      { title: "Textile & Manufacturing Grants", slug: "textile-grants" },
      { title: "PMEGP Scheme", slug: "pmegp-scheme" },
      { title: "Samridh Scheme", slug: "samridh-scheme" },
    ]
  },
  {
    id: "strategy",
    title: "Strategic Consultancy",
    icon: Lightbulb,
    iconColor: "text-[#a55eea]",
    dotColor: "bg-[#a55eea]",
    description: "Expert guidance for pitch decks and scalable business models.",
    services: [
      { title: "Pitch Deck Preparation", slug: "pitch-deck" },
      { title: "Financial Modeling", slug: "financial-modeling" },
      { title: "Business Plan Strategy", slug: "business-plan" },
      { title: "DPIIT Recognition Support", slug: "dpiit-recognition" },
      { title: "Valuation Certificates", slug: "valuation" },
    ]
  },
  {
    id: "growth",
    title: "Digital Ecosystem & Scale",
    icon: Lightbulb,
    iconColor: "text-[#fd9644]",
    dotColor: "bg-[#fd9644]",
    description: "Accelerate your market reach with digital transformation.",
    services: [
      { title: "WhatsApp Green Tick", slug: "whatsapp-green-tick" },
      { title: "Digital Marketing Growth", slug: "digital-marketing" },
      { title: "Sales & Leadership Training", slug: "sales-training" },
      { title: "Agri-Preneur Cohort", slug: "agri-preneur-cohort" },
      { title: "Boost Trading Business", slug: "trading-business-boost" },
    ]
  }
];

interface ServicePathsProps {
  data?: any;
  services?: any[];
}

export const ServicePaths = ({ data, services }: ServicePathsProps) => {
  // Ignore old Sanity data that doesn't match our new business model
  const isOldData = data && data.length > 0 && data[0]?.title?.toLowerCase().includes("market");

  const displayPaths = data && data.length > 0 && !isOldData ? data.map((d: any, i: number) => ({
    id: d._id || `path-${i}`,
    title: d.title,
    icon: Lightbulb,
    iconColor: pathsData[i % pathsData.length].iconColor,
    dotColor: pathsData[i % pathsData.length].dotColor,
    description: d.description,
    services: services && services.length > 0 ? services.slice(i * 5, (i + 1) * 5) : pathsData[i % pathsData.length].services
  })) : pathsData;

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1221] uppercase font-heading mb-4 md:mb-6">
            The Complete MSME & Startup Ecosystem
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Navigate your entrepreneurial journey through our specialized pathways. From securing government grants to global scaling, we provide complete compliance and financial support.
          </p>
        </div>

        {/* The 4 Path Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {displayPaths.map((path: any, idx: number) => {
            const Icon = path.icon || Lightbulb;
            return (
              <motion.div
                key={path.id}
                initial={{ opacity: 1, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.7, ease: "easeOut" }}
                className="group relative p-8 rounded-[30px] border border-gray-100/80 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(5,165,199,0.12)] hover:-translate-y-2 hover:border-primary/30 transition-all duration-500 flex flex-col overflow-hidden z-10"
              >
                {/* Subtle colored glow blob behind icon */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none ${path.dotColor} -translate-y-1/2 translate-x-1/2`} />

                <div className="mb-8 relative z-10 p-3 bg-gray-50/50 rounded-2xl w-max border border-gray-100 group-hover:bg-primary/5 transition-colors duration-500">
                  <Icon className={`w-8 h-8 ${path.iconColor} group-hover:scale-110 transition-transform duration-500`} />
                </div>
                
                <h3 className="text-xl font-bold text-secondary font-heading tracking-wide leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
                  {idx + 1}. {path.title}
                </h3>
                
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-10 flex-grow font-body">
                  {path.description}
                </p>
                
                <ul className="space-y-4">
                  {path.services.map((service: any, sIdx: number) => (
                    <li key={sIdx} className="flex items-center gap-3 group/item">
                      <div className={`w-1.5 h-1.5 rounded-full ${path.dotColor} shrink-0 group-hover/item:scale-150 transition-transform duration-300`} />
                      <Link 
                        href={`/services/${service.slug}`}
                        className="text-[14px] text-gray-600 group-hover/item:text-secondary group-hover/item:font-medium transition-all duration-300 leading-tight flex-1 flex justify-between items-center"
                      >
                        {service.title}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-primary" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center hidden">
          <Link href="/services" className="btn-primary inline-flex items-center">
            Explore All Services <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
