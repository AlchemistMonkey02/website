"use client";

import React, { useState, useEffect } from "react";
import { Code, Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EmbedWidgetProps {
  title: string;
  category?: string;
}

export const EmbedWidget = ({ title, category }: EmbedWidgetProps) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const embedCode = `<iframe src="${currentUrl}" title="${title}" width="100%" height="500" style="border:1px solid #eee;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.05);" loading="lazy"></iframe>\n<p style="text-align:center;font-size:12px;color:#888;">Embedded via <a href="${currentUrl}" target="_blank" rel="noopener">${title}</a> by <a href="${currentUrl.split('/services')[0] || 'https://venturesnodes.com'}" target="_blank" rel="noopener">VenturesNodes</a></p>`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Embed code copy failed:", err);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-8 bg-secondary text-white rounded-xl shadow-xl my-8 relative overflow-hidden">
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <Code className="w-5 h-5 text-primary" />
          <h4 className="font-heading font-bold uppercase tracking-wider text-sm">
            Feature this {category || "Service"} (Build Backlinks)
          </h4>
        </div>
        <span className="text-[10px] bg-primary text-white font-bold px-2.5 py-1 rounded uppercase tracking-wider shadow-md">
          Embed Code
        </span>
      </div>

      <div className="relative z-10">
        <p className="text-white/60 text-xs leading-relaxed mb-4">
          Want to share our expert details, calculators, or programs on your business blog? Copy the HTML snippet below to embed a live interactive window with an authoritative backlink citation.
        </p>

        <div className="relative bg-black/40 rounded-lg p-4 font-mono text-[11px] text-white/80 overflow-x-auto border border-white/5 max-h-[120px] whitespace-pre select-all">
          {embedCode}
        </div>

        <button
          onClick={handleCopy}
          className="mt-4 w-full bg-primary hover:bg-primary/90 text-white font-heading text-xs font-bold uppercase tracking-wider py-3 px-6 rounded flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ opacity: 1, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 1, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <Check className="w-4 h-4 text-green-400" />
                <span>Copied Code Successfully!</span>
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ opacity: 1, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 1, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                <span>Copy Embed HTML Snippet</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};
