import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = {
  title: "Startup & MSME Blog | VenturesNodes",
  description: "Read the latest insights on startup grants in India, MSME registration, business compliance, and funding strategies from VenturesNodes.",
};

const articles = [
  {
    title: "How to Secure the Startup India Seed Fund in 2026",
    slug: "secure-startup-india-seed-fund",
    excerpt: "A comprehensive guide for Indian founders to navigate the Startup India Seed Fund Scheme (SISFS) and secure up to ₹50 Lakhs.",
    date: "2026-07-15",
  },
  {
    title: "Step-by-Step Guide to MSME Udyam Registration in Rajasthan",
    slug: "msme-udyam-registration-rajasthan",
    excerpt: "Everything you need to know about registering your MSME in Rajasthan, finding a consultant near Jaipur, and unlocking state subsidies.",
    date: "2026-07-10",
  },
  {
    title: "The Ultimate Pitch Deck Checklist for Indian Startups",
    slug: "pitch-deck-checklist-indian-startups",
    excerpt: "Learn what Indian angel investors and VCs are looking for in a pitch deck before you start your funding rounds.",
    date: "2026-07-05",
  }
];

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "VenturesNodes Startup Blog",
    "description": "Insights on government grants, MSME registration, and startup funding in India.",
    "url": "https://venturesnodes.com/blog"
  };

  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <JsonLd data={schema} />
      <PageHero title="Startup Insights & Guides" />
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.slug} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">{article.date}</p>
                  <h2 className="text-xl font-bold font-heading text-secondary mb-3">
                    <Link href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link href={`/blog/${article.slug}`} className="text-primary font-semibold text-sm flex items-center gap-1 group">
                    Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
