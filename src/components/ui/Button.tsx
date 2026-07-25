"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg" | "xl";
  showArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", showArrow = true, children, ...props }, ref) => {
    const variants = {
      primary: "bg-secondary text-white hover:text-white",
      secondary: "bg-primary text-white hover:text-white",
      outline: "bg-transparent border border-primary text-primary hover:text-white hover:bg-primary",
      white: "bg-white text-primary hover:text-white hover:bg-primary",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3.5 text-base",
      lg: "px-8 py-4 text-lg",
      xl: "px-10 py-5 text-xl",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "group relative flex items-center justify-center gap-2 overflow-hidden rounded-none font-heading font-bold uppercase tracking-wider transition-all duration-500",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {showArrow && (
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </span>
        
        {/* Sliding Background Animation */}
        <motion.div
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "absolute inset-0 z-0",
            variant === "primary" ? "bg-primary" : "bg-secondary"
          )}
        />
      </button>
    );
  }
);

Button.displayName = "Button";
