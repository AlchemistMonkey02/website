"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Phone, MapPin, Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const fallbackNavLinks = [
  { 
    name: "Home", 
    href: "/",
  },
  { 
    name: "About", 
    href: "/about",
    submenu: [
      { name: "About Us", href: "/about" },
      { name: "FAQ", href: "/faq" },
    ]
  },
  { 
    name: "Services", 
    href: "/services",
    submenu: [
      { name: "Govt. Schemes & Grants", href: "/services#schemes-services" },
      { name: "IT Services", href: "/services#it-services" },
      { name: "AI Services", href: "/services#ai-services" },
      { name: "Marketing Services", href: "/services#marketing-services" },
      { name: "Legal & Compliance", href: "/services#legal-services" },
    ]
  },
  { name: "Contact", href: "/contact" },
];


interface NavbarProps {
  settings?: {
    logoImage?: string;
    logoText?: string;
    logoTextHighlight?: string;
    address?: string;
    phone?: string;
    email?: string;
  } | null;
}

export const Navbar = ({ settings }: NavbarProps) => {
  const address = settings?.address || "312, 3rd Floor, Mansarovar Plaza, Madhyam Marg, Mansarovar, Jaipur, Rajasthan, 302020";
  const phone = settings?.phone || "+91 70231 49122";
  const email = settings?.email || "Contact@venturesnodes.com";
  const logoImage = settings?.logoImage || "/logo.png";
  const logoText = settings?.logoText || "Ventures ";
  const logoHighlight = settings?.logoTextHighlight || "Nodes";

  const navLinks = fallbackNavLinks;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 lg:px-0">
      {/* Top Bar */}
      <div className="hidden lg:block bg-secondary text-white py-3">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-medium">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>{address}</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-xs font-medium">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium border-l border-white/20 pl-8">
              <Mail className="w-3.5 h-3.5 text-primary" />
              <span>{email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Container */}
      <div className={cn(
        "transition-all duration-700 w-full z-50 fixed",
        isScrolled ? "top-2 lg:top-4" : "top-12 lg:top-16"
      )}>
        <div className="container-custom">
          <nav className={cn(
            "transition-all duration-700 mx-auto w-full",
            isScrolled 
              ? "glass-panel rounded-[30px] px-4 lg:px-8 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-white/60" 
              : "bg-white/95 backdrop-blur-md rounded-[100px] px-4 lg:px-8 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white/20"
          )}>
            <div className="flex items-center justify-between w-full">
              {/* Logo */}
            <Link href="/" className="flex items-center gap-2 pr-4">
              {logoImage && (
                <img src={logoImage} alt="VenturesNodes Logo" className="h-12 w-auto object-contain" />
              )}
              <span className="font-heading font-bold text-2xl uppercase tracking-tight text-secondary">
                {logoText}<span className="text-primary">{logoHighlight}</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (pathname === "/" && link.name === "Home");
                const isWhiteText = hoveredLink === link.name || (isActive && !hoveredLink);

                return (
                  <div 
                    key={link.name} 
                    className="relative py-2 group"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "relative z-10 flex items-center gap-1.5 font-heading text-[13px] font-bold uppercase tracking-wide px-4 py-2 rounded-full transition-all duration-300",
                        isWhiteText
                          ? "text-white bg-primary shadow-[0_4px_12px_rgba(4,147,177,0.3)]" 
                          : "text-secondary hover:text-white hover:bg-primary"
                      )}
                    >
                      {link.name}
                      {link.submenu && link.submenu.length > 0 && (
                        <ChevronDown className={cn(
                          "w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180",
                          isWhiteText ? "text-white" : ""
                        )} />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {link.submenu && link.submenu.length > 0 && (
                      <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-50">
                        <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-xl py-3 min-w-[240px] border border-black/5 overflow-hidden">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-6 py-2.5 text-secondary hover:text-primary hover:bg-muted/50 font-heading text-[13px] font-semibold transition-all duration-300"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <Link href="/contact" className="hidden sm:flex btn-primary !px-6 !py-2.5 !text-[13px] whitespace-nowrap">
                LETS GET IN TOUCH
              </Link>
              <button
                className="lg:hidden text-secondary p-2 hover:bg-muted rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 1, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 z-[60] bg-secondary text-white p-10 flex flex-col gap-10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {logoImage && (
                  <img src={logoImage} alt="VenturesNodes Logo" className="h-10 w-auto object-contain brightness-0 invert" />
                )}
                <span className="font-heading font-bold text-2xl uppercase tracking-tight text-white">
                  {logoText}<span className="text-primary">{logoHighlight}</span>
                </span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-8 w-8" />
              </button>
            </div>
            <div className="flex flex-col gap-6 overflow-y-auto pr-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  {link.submenu && link.submenu.length > 0 ? (
                    <div className="flex flex-col gap-4">
                      <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="font-heading text-2xl font-bold uppercase tracking-widest text-white/80 hover:text-white">{link.name}</Link>
                      <div className="flex flex-col gap-4 pl-6 border-l border-white/10">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="font-heading text-xl font-bold uppercase tracking-widest hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-heading text-2xl font-bold uppercase tracking-widest hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-6 pt-10 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Call Us Anytime</span>
                <span className="text-xl font-bold">{phone}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
