"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      source: "contact",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/process.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 1, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-md shadow-2xl text-center border border-primary/10"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
          <ArrowRight className="w-10 h-10 rotate-[-45deg]" />
        </div>
        <h2 className="text-3xl font-bold text-secondary font-heading uppercase mb-4">Message Sent!</h2>
        <p className="text-muted-foreground">Thank you for reaching out. Our team will get back to you shortly.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 text-primary font-bold uppercase tracking-widest text-xs border-b border-primary pb-1"
        >
          SEND ANOTHER MESSAGE
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 1, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-12 rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5"
    >
      <div className="mb-10">
        <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Get In Touch</span>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary font-heading uppercase tracking-tight">
          Ready to Start Your <span className="text-primary">Business?</span>
        </h2>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              aria-label="Your Name"
              className="w-full px-6 py-4 bg-muted border border-transparent rounded-sm focus:border-primary focus:bg-white outline-none transition-all font-medium text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
              aria-label="Your Email"
              className="w-full px-6 py-4 bg-muted border border-transparent rounded-sm focus:border-primary focus:bg-white outline-none transition-all font-medium text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="sr-only">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              aria-label="Phone Number"
              className="w-full px-6 py-4 bg-muted border border-transparent rounded-sm focus:border-primary focus:bg-white outline-none transition-all font-medium text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="sr-only">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              aria-label="Subject"
              className="w-full px-6 py-4 bg-muted border border-transparent rounded-sm focus:border-primary focus:bg-white outline-none transition-all font-medium text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="sr-only">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            aria-label="Your Message"
            className="w-full px-6 py-4 bg-muted border border-transparent rounded-sm focus:border-primary focus:bg-white outline-none transition-all font-medium text-sm resize-none"
          />
        </div>

        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

        <button
          disabled={isSubmitting}
          className="btn-primary w-full md:w-auto mt-4 !px-12 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              SENDING...
            </>
          ) : (
            <>
              SEND MESSAGE HERE <ArrowRight className="ml-2 w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};
