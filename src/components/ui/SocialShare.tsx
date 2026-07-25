"use client";

import React, { useState, useEffect } from "react";
import { Link as LinkIcon, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SocialShareProps {
  title: string;
  urlPath?: string; // Optional path, if omitted uses current location
}

export const SocialShare = ({ title, urlPath }: SocialShareProps) => {
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const origin = window.location.origin;
    const path = urlPath || window.location.pathname;
    setShareUrl(`${origin}${path.startsWith('/') ? path : '/' + path}`);
  }, [urlPath]);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        // Fallback for non-secure HTTP connections (like local Wi-Fi testing)
        const textArea = document.createElement("textarea");
        textArea.value = shareUrl;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
        } catch (err) {
          console.error('Fallback copy failed', err);
        }
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "X / Twitter",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "bg-black hover:bg-neutral-800",
    },
    {
      name: "LinkedIn",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "bg-[#0077b5] hover:bg-[#005582]",
    },
    {
      name: "Facebook",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "bg-[#1877f2] hover:bg-[#0c5bc6]",
    },
    {
      name: "WhatsApp",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 2.519 1.492 4.412 1.493 5.485.002 9.948-4.46 9.95-9.95.002-2.659-1.03-5.158-2.902-7.03C16.236 1.794 13.738.767 11.08.767c-5.486 0-9.95 4.46-9.952 9.952-.001 1.9.497 2.87 1.437 4.473L1.58 21.08l5.067-1.926zm12.316-5.834c-.3-.15-1.774-.875-2.048-.975-.274-.1-.474-.15-.674.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.266-.467-2.41-1.487-.89-.794-1.49-1.775-1.665-2.075-.175-.3-.019-.462.13-.612.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C11.158 8.04 10.5 6.425 10.225 5.76c-.267-.643-.54-.537-.742-.547-.19-.01-.41-.01-.63-.01-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73s1.175 3.17 1.34 3.39c.165.22 2.316 3.538 5.613 4.96.784.338 1.396.54 1.872.69.788.25 1.5.215 2.066.13.63-.095 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
        </svg>
      ),
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      color: "bg-[#25d366] hover:bg-[#1db854]",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-8 bg-white border border-gray-100 rounded-xl shadow-md my-8">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <h4 className="font-heading font-bold text-secondary uppercase tracking-wider text-sm">
          Spread the Word
        </h4>
        <span className="text-[10px] bg-primary/10 text-primary font-bold px-2 py-1 rounded uppercase tracking-wider">
          Share
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${link.name}`}
            className={`w-10 h-10 ${link.color} text-white rounded-full flex items-center justify-center transition-all shadow-md hover:scale-105 duration-300`}
            title={`Share on ${link.name}`}
          >
            {link.svg}
          </a>
        ))}

        <button
          onClick={handleCopy}
          className="relative w-10 h-10 bg-secondary hover:bg-secondary/90 text-white rounded-full flex items-center justify-center transition-all shadow-md hover:scale-105 duration-300"
          title="Copy Page URL"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Check className="w-4 h-4 text-primary" />
              </motion.div>
            ) : (
              <motion.div
                key="link"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <LinkIcon className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {copied && (
          <span className="text-primary text-xs font-bold uppercase tracking-widest animate-pulse ml-2">
            URL Copied!
          </span>
        )}
      </div>
    </div>
  );
};
