import { PageHero } from "@/components/layout/PageHero";
import { PricingCard } from "@/components/ui/PricingCard";

import { getPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata() {
  return await getPageMetadata("pricing");
}

const fallbackPlans = [
  {
    tier: "Basic Plan",
    price: "$49",
    period: "Month",
    features: [
      { text: "Business Consulting", included: true },
      { text: "Market Research", included: true },
      { text: "Strategic Planning", included: true },
      { text: "Project Analysis", included: false },
      { text: "Technical Support", included: false },
    ],
    isPopular: false,
  },
  {
    tier: "Standard Plan",
    price: "$99",
    period: "Month",
    features: [
      { text: "Business Consulting", included: true },
      { text: "Market Research", included: true },
      { text: "Strategic Planning", included: true },
      { text: "Project Analysis", included: true },
      { text: "Technical Support", included: false },
    ],
    isPopular: true,
  },
  {
    tier: "Premium Plan",
    price: "$149",
    period: "Month",
    features: [
      { text: "Business Consulting", included: true },
      { text: "Market Research", included: true },
      { text: "Strategic Planning", included: true },
      { text: "Project Analysis", included: true },
      { text: "Technical Support", included: true },
    ],
    isPopular: false,
  },
];

export default async function PricingPage() {
  const plans = fallbackPlans;

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "VenturesNodes Pricing",
    "description": "Affordable and transparent pricing plans for startup consultation and services.",
    "url": "https://venturesnodes.com/pricing"
  };

  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={pricingSchema} />
      <PageHero title="Pricing Plans" />
      
      <section className="section-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Pricing Tables</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary font-heading uppercase tracking-tight mb-8">
              Affordable <span className="text-primary">Pricing</span> Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer transparent and flexible pricing models designed to meet the unique needs of startups, established enterprises, and everywhere in between.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 py-10">
            {plans.map((plan: any, idx: number) => (
              <PricingCard key={idx} {...plan} index={idx} />
            ))}
          </div>

          <div className="mt-24 p-12 bg-muted rounded-md flex flex-col md:flex-row items-center justify-between gap-8 border border-black/5">
            <div className="max-w-2xl">
              <h3 className="font-heading text-2xl font-bold uppercase text-secondary mb-4">Custom Enterprise Solutions?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Need a tailored package for your large-scale organization? Our experts can design a custom infrastructure and advisory plan that perfectly fits your enterprise requirements.
              </p>
            </div>
            <a href="/contact" className="btn-secondary whitespace-nowrap">
              REQUEST CUSTOM QUOTE
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
