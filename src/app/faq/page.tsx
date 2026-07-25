import { PageHero } from "@/components/layout/PageHero";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import Image from "next/image";

import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("faq");
}

const fallbackFaqs = [
  {
    question: "What types of business structures can I register with Venture Nodes?",
    answer: "We provide end-to-end registration services for Private Limited Companies (Pvt Ltd), Limited Liability Partnerships (LLP), One Person Companies (OPC), Section 8 Companies (NGOs), Partnership Firms, and Sole Proprietorships. Our expert consultants handle all DSC, DIN, name approvals, and SPICe+ Ministry filings."
  },
  {
    question: "How does Venture Nodes help in securing startup government funding like the Seed Fund Scheme?",
    answer: "We assist startups in obtaining DPIIT Recognition, drafting detailed project reports (DPRs), preparing pitch decks, choosing appropriate government schemes (like the Startup India Seed Fund, RKVY RAFTAAR, or Samridh Scheme), and navigating incubator presentation rounds successfully."
  },
  {
    question: "What is the RKVY RAFTAAR scheme, and is my agribusiness eligible?",
    answer: "RKVY RAFTAAR is a flagship government grant offering up to ₹20 Lakhs to ₹50 Lakhs for agribusinesses, agricultural startups, and allied activities. If your startup introduces innovation, smart farming, food tech, or post-harvest value addition, you are highly eligible! We guide you step-by-step from screening to grant sanction."
  },
  {
    question: "How long does it typically take to incorporate a Private Limited Company?",
    answer: "The entire incorporation process typically takes between 10 to 15 business days. This timeframe includes obtaining digital signatures (DSC), securing name approval via the MCA, and receiving the official Certificate of Incorporation (COI) along with PAN and TAN."
  },
  {
    question: "What are ZED and ISO Certifications, and why does my business need them?",
    answer: "ZED (Zero Defect Zero Effect) is an MSME rating certification indicating high manufacturing standards with minimal environmental footprint, unlocking substantial capital subsidies. ISO Certifications (like ISO 9001, 14001) demonstrate global operational quality. Both are crucial for bidding on government tenders and earning customer trust."
  },
  {
    question: "Do I need a commercial physical office address to register a company in India?",
    answer: "Yes, you must declare a registered office address during incorporation. However, it does not have to be commercial; you can legally use a residential address (like your home) with a recent utility bill and NOC, or set up a virtual office space with our assistance."
  }
];

import { JsonLd } from "@/components/seo/JsonLd";

export default async function FAQPage() {
  const faqs = fallbackFaqs;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f: any) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={faqSchema} />
      <PageHero title="FAQ" />
      
      <section className="section-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image Side */}
            <div className="relative">
              <div className="relative z-10 rounded-md overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="FAQ Background" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative shapes */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full -z-10 blur-2xl opacity-50" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full -z-10 blur-2xl opacity-30" />
              
              <div className="mt-12 p-10 bg-secondary rounded-md text-white">
                <h3 className="font-heading text-2xl font-bold uppercase mb-4">Still Have Questions?</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  Our dedicated support team is available 24/7 to assist you with any technical or business inquiries.
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
                  Contact Support <span>→</span>
                </a>
              </div>
            </div>

            {/* Accordion Side */}
            <div>
              <div className="mb-12">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">
                  Common Questions
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-secondary font-heading uppercase tracking-tight mb-8">
                  Find Your Answers Here
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We've compiled a list of our most frequently asked questions to help you understand our process, services, and commitment to excellence.
                </p>
              </div>
              
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
