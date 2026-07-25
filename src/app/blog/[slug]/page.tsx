import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";

const articles = {
  "secure-startup-india-seed-fund": {
    title: "How to Secure the Startup India Seed Fund in 2026",
    excerpt: "A comprehensive guide for Indian founders to navigate the Startup India Seed Fund Scheme (SISFS) and secure up to ₹50 Lakhs.",
    date: "2026-07-15",
    content: "The Startup India Seed Fund Scheme (SISFS) aims to provide financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization. Working with a startup consultancy like VenturesNodes can significantly increase your chances of securing this non-dilutive grant."
  },
  "msme-udyam-registration-rajasthan": {
    title: "Step-by-Step Guide to MSME Udyam Registration in Rajasthan",
    excerpt: "Everything you need to know about registering your MSME in Rajasthan, finding a consultant near Jaipur, and unlocking state subsidies.",
    date: "2026-07-10",
    content: "MSME registration is crucial for businesses in Rajasthan to access various government subsidies, lower interest rates on loans, and tax exemptions. If you are looking for an MSME registration consultant near Jaipur, VenturesNodes provides end-to-end assistance."
  },
  "pitch-deck-checklist-indian-startups": {
    title: "The Ultimate Pitch Deck Checklist for Indian Startups",
    excerpt: "Learn what Indian angel investors and VCs are looking for in a pitch deck before you start your funding rounds.",
    date: "2026-07-05",
    content: "A strong pitch deck is your key to unlocking seed funding. It must clearly outline your problem statement, solution, market size, business model, and competitive advantage. At VenturesNodes, we specialize in crafting investor-ready pitch decks for Indian startups."
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | VenturesNodes Blog`,
    description: article.excerpt,
  };
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];
  
  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": "VenturesNodes"
    },
    "publisher": {
      "@type": "Organization",
      "name": "VenturesNodes",
      "logo": {
        "@type": "ImageObject",
        "url": "https://venturesnodes.com/logo.png"
      }
    },
    "url": `https://venturesnodes.com/blog/${params.slug}`
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd data={articleSchema} />
      <PageHero title={article.title} />
      <article className="py-24">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/blog" className="text-primary hover:underline mb-6 inline-block">← Back to Blog</Link>
            <p className="text-gray-500">{article.date}</p>
          </div>
          <div className="prose prose-lg max-w-none text-secondary">
            <p className="lead text-xl text-gray-600 mb-8 font-medium">{article.excerpt}</p>
            <div dangerouslySetInnerHTML={{ __html: `<p>${article.content}</p>` }} />
            
            <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <h3 className="text-xl font-bold font-heading mb-2">Need Expert Help?</h3>
              <p className="mb-4">VenturesNodes is your trusted startup consultancy for government grants and compliance.</p>
              <Link href="/contact" className="btn-primary inline-block">Contact Us Today</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
