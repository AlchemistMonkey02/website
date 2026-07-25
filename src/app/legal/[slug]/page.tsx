import { PageHero } from "@/components/layout/PageHero";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { getLegalPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return await getLegalPageMetadata(slug);
}

export async function generateStaticParams() {
  return [
    { slug: 'privacy-policy' },
    { slug: 'terms-and-conditions' }
  ];
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const legalContent: Record<string, any> = {
    'privacy-policy': {
      title: 'Privacy Policy',
      lastUpdated: 'October 15, 2023',
      content: [
        { type: 'h2', text: '1. Information We Collect' },
        { type: 'p', text: 'We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.' },
        { type: 'h2', text: '2. Use of Information' },
        { type: 'p', text: 'We may use the information we collect about you to provide, maintain, and improve our services, including to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support, develop safety features, authenticate users, and send product updates and administrative messages.' },
        { type: 'h2', text: '3. Sharing of Information' },
        { type: 'p', text: 'We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing.' }
      ]
    },
    'terms-and-conditions': {
      title: 'Terms & Conditions',
      lastUpdated: 'October 15, 2023',
      content: [
        { type: 'h2', text: '1. Contractual Relationship' },
        { type: 'p', text: 'These Terms of Use ("Terms") govern the access or use by you, an individual, from within India of applications, websites, content, products, and services made available by VenturesNodes.' },
        { type: 'h2', text: '2. The Services' },
        { type: 'p', text: 'The Services constitute a technology platform that enables users of VenturesNodes mobile applications or websites to arrange and schedule consultation and/or logistics services with independent third party providers of such services.' },
        { type: 'h2', text: '3. Use of the Services' },
        { type: 'p', text: 'You must be at least 18 years of age, or the age of legal majority in your jurisdiction (if different than 18), to obtain an Account.' }
      ]
    }
  };

  const legalData = legalContent[slug];

  if (!legalData) {
    notFound();
  }

  const legalSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": legalData.title,
    "url": `https://venturesnodes.com/legal/${slug}`,
    "dateModified": new Date(legalData.lastUpdated).toISOString()
  };

  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={legalSchema} />
      
      <PageHero 
        title={legalData.title} 
        breadcrumb={[
          { name: "Legal", href: "#" },
          { name: legalData.title }
        ]}
      />

      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-10">
              Last Updated: {legalData.lastUpdated}
            </p>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              {legalData.content.map((block: any, idx: number) => {
                if (block.type === 'h2') {
                  return <h2 key={idx} className="text-2xl font-bold font-heading text-secondary mt-8 mb-4">{block.text}</h2>;
                }
                if (block.type === 'p') {
                  return <p key={idx} className="mb-4 leading-relaxed">{block.text}</p>;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
