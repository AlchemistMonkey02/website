"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ServicesProps {
  data?: Array<{
    title: string;
    description?: string;
    icon?: string;
    slug?: { current: string } | string;
  }> | null;
}

export const Services = ({ data }: ServicesProps) => {
  const defaultServices = [
    { title: "Agri-Preneur Cohort", slug: "agri-preneur-cohort", description: "Specialized funding and mentorship for agricultural startups.", icon: "Sprout" },
    { title: "Seed Fund", slug: "seed-fund", description: "Early-stage financial support for startups under the Startup India Seed Fund Scheme.", icon: "PiggyBank" },
    { title: "RKVY RAFTAAR", slug: "rkvy-raftaar", description: "Remunerative Approaches for Agriculture and Allied Sectors Rejuvenation.", icon: "Tractor" },
    { title: "Textile Grants", slug: "textile-grants", description: "Grants and subsidies designed specifically for the modernization of the textile industry.", icon: "Scissors" },
    { title: "CGTMSE Scheme", slug: "cgtmse-scheme", description: "Credit Guarantee Fund Trust for Micro and Small Enterprises collateral-free credit.", icon: "ShieldCheck" },
    { title: "Samridh Scheme", slug: "samridh-scheme", description: "Startup Accelerators of MeitY for Product Innovation and growth.", icon: "Rocket" },
    { title: "PMMY Scheme", slug: "pmmy-scheme", description: "Pradhan Mantri Mudra Yojana for non-corporate small/micro enterprises.", icon: "Landmark" },
    { title: "PMEGP Scheme", slug: "pmegp-scheme", description: "Prime Minister's Employment Generation Programme credit-linked subsidy.", icon: "Briefcase" },
    
    { title: "Start One Person Company", slug: "start-one-person-company", description: "Register your One Person Company (OPC) easily with our guided legal process.", icon: "User" },
    { title: "Register LLP in 15 Days", slug: "register-llp", description: "Form a Limited Liability Partnership (LLP) quickly and efficiently.", icon: "Users" },
    { title: "Section 8 Company", slug: "section-8-company", description: "Register an NGO or non-profit organization legally under Section 8.", icon: "Heart" },
    { title: "Register Private Limited", slug: "register-private-limited", description: "Incorporate a Private Limited Company - the most scalable business structure.", icon: "Building" },
    { title: "Register Partnership", slug: "register-partnership", description: "Easy and quick registration for traditional partnership firms.", icon: "Handshake" },
    { title: "Get 12A and 80G", slug: "12a-80g-registration", description: "Crucial tax exemption registrations for NGOs, Trusts, and Section 8 Companies.", icon: "FileText" },
    
    { title: "Enhance Credibility ZED", slug: "enhance-credibility-zed", description: "Zero Defect Zero Effect (ZED) certification for MSMEs.", icon: "Award", category: "legal" },
    { title: "ISO Certification", slug: "iso-certification", description: "Get ISO certified to prove your quality management standards globally.", icon: "Globe", category: "legal" },
    { title: "GST Registration", slug: "gst-registered", description: "Quick and hassle-free Goods and Services Tax (GST) registration.", icon: "Receipt", category: "legal" },
    
    { title: "Manufacturing Funding", slug: "manufacturing-funding", description: "Specific funding avenues and capital subsidies tailored for manufacturing.", icon: "Factory", category: "schemes" },
    { title: "Boost Trading Business", slug: "trading-business-boost", description: "Working capital loans and Overdraft facilities specifically designed for traders.", icon: "TrendingUp", category: "legal" },
    { title: "Labour ID Registration", slug: "labour-id-registration", description: "Ensure complete legal compliance with state and central labour laws.", icon: "HardHat", category: "legal" },

    // IT Services
    { title: "Custom Web Development", slug: "web-development", description: "Scalable, high-performance websites tailored to your specific business needs.", icon: "Code", category: "it" },
    { title: "Mobile App Development", slug: "mobile-app-development", description: "Native and cross-platform mobile applications for iOS and Android.", icon: "Smartphone", category: "it" },
    { title: "MVP Development", slug: "mvp-development", description: "Rapidly build and launch a functioning web or mobile app in 4-8 weeks to validate your idea.", icon: "Rocket", category: "it" },
    { title: "UI/UX Design & Prototyping", slug: "ui-ux-design", description: "Design clickable prototypes to pitch investors before writing a single line of code.", icon: "PenTool", category: "it" },
    { title: "Cloud Infrastructure", slug: "cloud-infrastructure", description: "Secure and scalable cloud architecture setup using AWS, Azure, or GCP.", icon: "Cloud", category: "it" },
    
    // AI Services
    { title: "Custom AI Chatbots", slug: "custom-ai-chatbots", description: "Intelligent customer service agents trained directly on your business data.", icon: "Bot", category: "ai" },
    { title: "AI Workflow Automation", slug: "ai-workflow-automation", description: "Automate repetitive tasks and accelerate business processes with AI.", icon: "Cpu", category: "ai" },
    { title: "Predictive Analytics", slug: "predictive-analytics", description: "Harness machine learning models to forecast trends and customer behavior.", icon: "LineChart", category: "ai" },
    { title: "AI Readiness Audit", slug: "ai-readiness-audit", description: "Consulting for non-tech MSMEs to identify where AI can save time and reduce costs.", icon: "Lightbulb", category: "ai" },
    { title: "Custom AI Voice Agents", slug: "custom-ai-voice-agents", description: "Deploy conversational AI voice calling agents for automated sales and inbound customer support.", icon: "Mic", category: "ai" },
    { title: "AI Powered Ads", slug: "ai-powered-ads", description: "Optimize ad creatives, spend, and targeting using advanced AI-driven algorithms.", icon: "Megaphone", category: "ai" },

    // Marketing Services
    { title: "Search Engine Optimization (SEO)", slug: "seo-services", description: "Rank higher on Google and drive organic traffic to your business.", icon: "Search", category: "marketing" },
    { title: "Social Media Management", slug: "social-media", description: "Build brand awareness and engage with your audience across platforms.", icon: "Share2", category: "marketing" },
    { title: "Performance Marketing", slug: "performance-marketing", description: "Data-driven ad campaigns designed to maximize your ROI.", icon: "Target", category: "marketing" },
    { title: "B2B Lead Generation", slug: "b2b-lead-generation", description: "Automated cold-email systems and LinkedIn outreach to fill your sales pipeline.", icon: "UserPlus", category: "marketing" },
    { title: "Brand Identity Setup", slug: "brand-identity", description: "Professional logos, brand guidelines, and corporate stationery design.", icon: "Palette", category: "marketing" },
    { title: "Influencer Marketing", slug: "influencer-marketing", description: "Leverage industry leaders to amplify your brand's reach and credibility.", icon: "Users", category: "marketing" },

    // Legal & Compliance (Additional High Value)
    { title: "DPIIT Startup India Registration", slug: "dpiit-registration", description: "The most critical registration for angel tax exemptions and government scheme eligibility.", icon: "Award", category: "legal" },
    { title: "Pitch Deck & Financial Modeling", slug: "pitch-deck-creation", description: "Professional investor pitch decks and financial runway calculations for raising VC funds.", icon: "PieChart", category: "legal" },
    { title: "Virtual CFO Services", slug: "virtual-cfo", description: "Ongoing bookkeeping, tax filing, and financial strategy for growing MSMEs.", icon: "Calculator", category: "legal" },
    { title: "Trademark & IP Registration", slug: "trademark-registration", description: "Protect your brand name, logo, and intellectual property legally.", icon: "Shield", category: "legal" }
  ];

  const displayServices = data && data.length > 0
    ? data.map(item => ({
        title: item.title,
        description: item.description || "Expert business growth strategy and registration services.",
        icon: item.icon || "Award",
        slug: typeof item.slug === "object" ? item.slug?.current : item.slug,
        category: (item as any).category || "schemes"
      }))
    : defaultServices;

  const [searchQuery, setSearchQuery] = useState("");

  if (displayServices.length === 0) return null;

  const filteredServices = displayServices.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (s.description && s.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Group services by category
  const categories = [
    { id: "schemes", title: "Govt. Schemes & Grants" },
    { id: "it", title: "IT Services" },
    { id: "ai", title: "AI Services" },
    { id: "marketing", title: "Marketing Services" },
    { id: "legal", title: "Legal & Compliance" },
  ];

  return (
    <div className="section-muted relative overflow-hidden py-12 md:py-24">
      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="Our Services"
          title="Startup Solutions"
          description="Explore our comprehensive range of startup consultancy services, from company incorporation and IT solutions to marketing and government schemes."
          centered
          className="mb-10"
        />

        <div className="max-w-2xl mx-auto mb-16 relative">
          <LucideIcons.Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder="Search all services (e.g. GST, App Development, Funding)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-4 rounded-full border border-primary/20 bg-white shadow-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-secondary font-body text-[15px]"
          />
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No services found matching "{searchQuery}". Try a different keyword.
          </div>
        )}

        {categories.map((cat) => {
          const catServices = filteredServices.filter(s => (s.category || 'schemes') === cat.id);
          if (catServices.length === 0) return null;

          return (
            <div key={cat.id} id={`${cat.id}-services`} className="mb-20 last:mb-0 scroll-mt-32">
              <h3 className="text-2xl md:text-3xl font-bold font-heading uppercase text-secondary mb-8 border-b-2 border-primary/20 pb-4">
                {cat.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catServices.map((service, index) => {
                  const IconComponent = (LucideIcons as any)[service.icon || "Award"] || LucideIcons.Zap;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 1, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                      className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-primary/20 flex flex-col items-start"
                    >
                      <div className="mb-6 p-4 bg-accent rounded-lg text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <IconComponent className="h-8 w-8" />
                      </div>

                      <h4 className="text-xl font-bold mb-3 text-secondary font-heading tracking-tight">
                        {service.title}
                      </h4>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                        {service.description}
                      </p>

                      <Link href={service.slug ? `/services/${service.slug}` : "/services"} className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary transition-all">
                        View Details <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
