"use client";

import { useState } from "react";

export const AssessmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      source: "assessment",
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      companyStage: formData.get("companyStage"),
      goals: formData.getAll("goals"),
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
        setSuccess(true);
      } else {
        setError(result.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 p-8 rounded-lg text-center border border-green-200">
        <h3 className="text-2xl font-bold text-green-800 mb-2">Assessment Submitted!</h3>
        <p className="text-green-700">
          Thank you for reaching out. A consultant will review your profile and contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-secondary">First Name</label>
          <input required name="firstName" type="text" className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-secondary">Last Name</label>
          <input required name="lastName" type="text" className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Doe" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-secondary">Email</label>
          <input required name="email" type="email" className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="john@startup.com" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-secondary">Phone Number / WhatsApp</label>
          <input required name="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="+91" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-secondary">Company Stage</label>
        <select name="companyStage" className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary outline-none transition-all bg-white">
          <option value="Idea Stage">Idea Stage</option>
          <option value="Prototype Ready">Prototype Ready</option>
          <option value="Early Revenue">Early Revenue</option>
          <option value="Scaling">Scaling</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-secondary">What are your main goals? (Select all that apply)</label>
        <div className="space-y-2">
          <label className="flex items-center gap-3"><input name="goals" value="Startup India Certificate" type="checkbox" className="w-4 h-4 text-primary" /> Startup India Certificate</label>
          <label className="flex items-center gap-3"><input name="goals" value="Seed Funding / Grants" type="checkbox" className="w-4 h-4 text-primary" /> Seed Funding / Grants</label>
          <label className="flex items-center gap-3"><input name="goals" value="Incubation Support" type="checkbox" className="w-4 h-4 text-primary" /> Incubation Support</label>
          <label className="flex items-center gap-3"><input name="goals" value="Compliance & Registration" type="checkbox" className="w-4 h-4 text-primary" /> Compliance & Registration</label>
        </div>
      </div>

      <button disabled={isSubmitting} type="submit" className="btn-primary w-full py-4 text-lg mt-8 disabled:opacity-70 disabled:cursor-not-allowed">
        {isSubmitting ? "Submitting..." : "Submit & Request Free Consultation"}
      </button>
      <p className="text-xs text-muted-foreground text-center mt-4">
        Your data is secure. We will contact you within 24 hours to review your eligibility.
      </p>
    </form>
  );
};
