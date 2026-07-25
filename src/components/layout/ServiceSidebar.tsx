"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Phone, Mail, ArrowRight, Search } from "lucide-react";

const services = [
    { name: "Agri-Preneur Cohort", slug: "agri-preneur-cohort" },
    { name: "Seed Fund", slug: "seed-fund" },
    { name: "RKVY RAFTAAR", slug: "rkvy-raftaar" },
    { name: "Textile Grants", slug: "textile-grants" },
    { name: "CGTMSE Scheme", slug: "cgtmse-scheme" },
    { name: "Samridh Scheme", slug: "samridh-scheme" },
    { name: "PMMY Scheme", slug: "pmmy-scheme" },
    { name: "PMEGP Scheme", slug: "pmegp-scheme" },
    
    { name: "Start One Person Company", slug: "start-one-person-company" },
    { name: "Register LLP in 15 Days", slug: "register-llp" },
    { name: "Section 8 Company", slug: "section-8-company" },
    { name: "Register Private Limited", slug: "register-private-limited" },
    { name: "Register Partnership", slug: "register-partnership" },
    { name: "Get 12A and 80G", slug: "12a-80g-registration" },
    
    { name: "Enhance Credibility ZED", slug: "enhance-credibility-zed" },
    { name: "ISO Certification", slug: "iso-certification" },
    { name: "GST Registration", slug: "gst-registered" },
    
    { name: "Manufacturing Funding", slug: "manufacturing-funding" },
    { name: "Boost Trading Business", slug: "trading-business-boost" },
    { name: "Labour ID Registration", slug: "labour-id-registration" },

    // IT Services
    { name: "Custom Web Development", slug: "web-development" },
    { name: "Mobile App Development", slug: "mobile-app-development" },
    { name: "MVP Development", slug: "mvp-development" },
    { name: "UI/UX Design & Prototyping", slug: "ui-ux-design" },
    { name: "Cloud Infrastructure", slug: "cloud-infrastructure" },
    
    // AI Services
    { name: "Custom AI Chatbots", slug: "custom-ai-chatbots" },
    { name: "AI Workflow Automation", slug: "ai-workflow-automation" },
    { name: "Predictive Analytics", slug: "predictive-analytics" },
    { name: "AI Readiness Audit", slug: "ai-readiness-audit" },
    { name: "Custom AI Voice Agents", slug: "custom-ai-voice-agents" },
    { name: "AI Powered Ads", slug: "ai-powered-ads" },

    // Marketing Services
    { name: "Search Engine Optimization (SEO)", slug: "seo-services" },
    { name: "Social Media Management", slug: "social-media" },
    { name: "Performance Marketing", slug: "performance-marketing" },
    { name: "B2B Lead Generation", slug: "b2b-lead-generation" },
    { name: "Brand Identity Setup", slug: "brand-identity" },
    { name: "Influencer Marketing", slug: "influencer-marketing" },

    // Legal & Compliance 
    { name: "DPIIT Startup India Registration", slug: "dpiit-registration" },
    { name: "Pitch Deck & Financial Modeling", slug: "pitch-deck-creation" },
    { name: "Virtual CFO Services", slug: "virtual-cfo" },
    { name: "Trademark & IP Registration", slug: "trademark-registration" }
];

export const ServiceSidebar = ({ activeSlug }: { activeSlug?: string }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 250);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  const filteredServices = services.filter((service) => 
    service.name.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <aside className="space-y-10">
      {/* Services List */}
      <div className="bg-muted p-10 rounded-md border border-black/5">
        <h3 className="font-heading text-xl font-bold uppercase text-secondary mb-6 pb-4 border-b border-black/10">All Services</h3>
        
        {/* Search Input */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Type to filter services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-md border border-black/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-all text-black"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>

        <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, idx) => {
              const isActive = activeSlug === service.slug;
              return (
                <Link 
                  key={idx} 
                  href={`/services/${service.slug}`}
                  className={`flex items-center justify-between p-3 rounded-sm font-heading font-bold uppercase tracking-tight text-xs transition-all duration-300 ${
                    isActive 
                    ? "bg-primary text-white shadow-md shadow-primary/20" 
                    : "bg-white text-secondary hover:bg-primary hover:text-white"
                  }`}
                >
                  {service.name} <ArrowRight className="w-3 h-3" />
                </Link>
              );
            })
          ) : (
            <p className="text-sm text-muted-foreground text-center py-4">No services found.</p>
          )}
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-secondary p-10 rounded-md text-white">
        <h3 className="font-heading text-xl font-bold uppercase mb-8 pb-4 border-b border-white/10">Resources</h3>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-primary transition-all rounded-sm group">
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-primary group-hover:text-white" />
              <span className="font-heading font-bold uppercase tracking-tight text-sm">Company Profile</span>
            </div>
          </button>
          <button className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-primary transition-all rounded-sm group">
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-primary group-hover:text-white" />
              <span className="font-heading font-bold uppercase tracking-tight text-sm">Service Details</span>
            </div>
          </button>
        </div>
      </div>

      {/* Support Box */}
      <div className="relative p-10 bg-primary rounded-md text-white overflow-hidden group">
        <div className="relative z-10">
          <h3 className="font-heading text-2xl font-bold uppercase mb-4">Need Help?</h3>
          <p className="text-white/80 text-xs mb-8 leading-relaxed">
            Speak with our specialist to find the right solution for your business.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Call Us</p>
              <p className="font-heading font-bold text-lg">+91 70231 49122</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
      </div>
    </aside>
  );
};
