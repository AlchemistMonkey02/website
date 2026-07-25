"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Building, ArrowRight } from "lucide-react";

interface FooterProps {
  settings?: {
    logoImage?: string;
    logoText?: string;
    logoTextHighlight?: string;
    address?: string;
    phone?: string;
    email?: string;
    footerDescription?: string;
    copyrightText?: string;
    disclaimer?: string;
    footerQuickLinks?: Array<{ name: string; href: string }>;
    footerOffices?: string[];
  } | null;
}

const fallbackQuickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

export const Footer = ({ settings }: FooterProps) => {
  const address = settings?.address || "312, 3rd Floor, Mansarovar Plaza, Madhyam Marg, Mansarovar, Jaipur, Rajasthan, 302020";
  const phone = settings?.phone || "+91 70231 49122";
  const email = settings?.email || "Contact@venturesnodes.com";
  const logoImage = settings?.logoImage || "/logo.png";
  const logoText = settings?.logoText || "Ventures ";
  const logoHighlight = settings?.logoTextHighlight || "Nodes";
  const description = settings?.footerDescription || "We guide and consult Indian startups and MSMEs to build an Atmanirbhar Bharat.";
  const copyright = settings?.copyrightText || `© ${new Date().getFullYear()} VenturesNodes. All rights reserved.`;
  const disclaimer = settings?.disclaimer || "VenturesNodes is a consultancy service provider specializing in startup consultation. We are not associated or in collaboration with any Government/Non-Government Agency / Institutions / Organisation / Department. For service payments, please ensure all transactions are made directly to our official company account.";

  const quickLinks = settings?.footerQuickLinks && settings.footerQuickLinks.length > 0
    ? settings.footerQuickLinks
    : fallbackQuickLinks;

  const offices = settings?.footerOffices && settings.footerOffices.length > 0
    ? settings.footerOffices
    : ["Jaipur"];

  return (
    <footer className="bg-secondary text-white pt-20 pb-8 overflow-hidden relative border-t border-white/10">
      {/* Deep Luxury Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-secondary via-secondary to-[#040812] opacity-90 z-0"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              {logoImage && (
                <img src={logoImage} alt="VenturesNodes Logo" className="h-10 w-auto object-contain brightness-0 invert" />
              )}
              <span className="font-heading font-bold text-2xl uppercase tracking-tight text-white">
                {logoText}<span className="text-primary">{logoHighlight}</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed text-[14px]">
              {description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[15px] font-bold font-heading uppercase tracking-wider text-white border-b border-white/10 pb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-white/70 text-[14px]">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[15px] font-bold font-heading uppercase tracking-wider text-white border-b border-white/10 pb-4">Contact Us</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0 transition-colors hover:bg-primary/20">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-bold text-[13px] uppercase tracking-wide">Head Office</span>
                  <span className="text-white/70 text-[14px] leading-relaxed">{address}</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-0.5 h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0 transition-colors hover:bg-primary/20">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-bold text-[13px] uppercase tracking-wide">Email</span>
                  <span className="text-white/70 text-[14px]">{email}</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-0.5 h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0 transition-colors hover:bg-primary/20">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-bold text-[13px] uppercase tracking-wide">Phone</span>
                  <span className="text-white/70 text-[14px]">{phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Offices */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[15px] font-bold font-heading uppercase tracking-wider text-white border-b border-white/10 pb-4">Our Offices</h3>
            <div className="flex flex-col gap-4">
              {offices.map((office, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Building className="h-4 w-4 text-primary" />
                  <span className="text-white/70 text-[14px]">{office}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-8 p-6 bg-white/[0.02] border border-white/5 rounded-xl text-white/50 text-[12px] leading-relaxed flex flex-col gap-2">
          <p><strong>Disclaimer:</strong> {disclaimer}</p>
          <p><strong>GSTIN:</strong> 08IVOPK8634K1ZN (Ventures Nodes Business Solution)</p>
        </div>

        {/* Bottom copyright & socials */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-white/40">
          <p>{copyright}</p>
          <div className="flex flex-wrap justify-center gap-6 font-medium tracking-wide">
            <Link href="/legal/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link href="/legal/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
