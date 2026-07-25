import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { JsonLd } from './JsonLd';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://venturesnodes.com";

  // Prepend Home entry
  const fullItems = [
    { name: 'Home', item: '/' },
    ...items.map(item => ({
      name: item.name,
      item: item.item.startsWith('/') ? item.item : `/${item.item}`
    }))
  ];

  // Generate Google Schema JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fullItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.item === '/' ? '' : item.item}`
    }))
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <nav aria-label="breadcrumb" className="flex items-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-widest my-4">
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;

          return (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-white/30" />}
              {isLast ? (
                <span className="text-primary active">{item.name}</span>
              ) : (
                <Link href={item.item} className="hover:text-white transition-colors">
                  {item.name}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
};
