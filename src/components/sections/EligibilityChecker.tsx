"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Building, Zap, Rocket, IndianRupee } from "lucide-react";
import Link from "next/link";



type Step = 1 | 2 | 3 | 4;

export const EligibilityChecker = () => {
  const [step, setStep] = useState<Step>(1);
  const [answers, setAnswers] = useState({
    sector: "",
    stage: "",
    revenue: "",
  });
  const [allSchemes, setAllSchemes] = useState<any[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Hardcoded static schemes data
    const data = [
      {
        id: "1",
        title: "Startup India Seed Fund",
        description: "Up to ₹25 Lakhs for early-stage prototype development.",
        url: "/services/seed-fund",
        conditions: { sectors: ["All"], stages: ["Prototype", "Early Traction"], minRevenue: 0 }
      },
      {
        id: "2",
        title: "RKVY RAFTAAR",
        description: "Up to ₹50 Lakhs grant for agribusinesses and agri-tech.",
        url: "/services/rkvy-raftaar",
        conditions: { sectors: ["Agriculture"], stages: ["Idea", "Prototype", "Early Traction"], minRevenue: 0 }
      },
      {
        id: "3",
        title: "Samridh Scheme",
        description: "Up to ₹25 Lakhs for IT and software product startups.",
        url: "/services/samridh-scheme",
        conditions: { sectors: ["IT/Tech"], stages: ["Early Traction", "Scaling"], minRevenue: 0 }
      },
      {
        id: "4",
        title: "PMEGP Loan",
        description: "Up to ₹40 Lakhs credit-linked subsidy for manufacturing.",
        url: "/services/pmegp-scheme",
        conditions: { sectors: ["Manufacturing"], stages: ["Idea", "Prototype"], minRevenue: 0 }
      }
    ];
    setAllSchemes(data);
    setIsLoading(false);
  }, []);

  const handleSelect = (key: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const calculateEligibility = () => {
    const eligible = allSchemes.filter((scheme) => {
      const conditions = scheme.conditions || { sectors: [], stages: [], minRevenue: 0 };
      
      const sectorMatch = !conditions.sectors || conditions.sectors.length === 0 || conditions.sectors.includes("All") || conditions.sectors.includes(answers.sector);
      const stageMatch = !conditions.stages || conditions.stages.length === 0 || conditions.stages.includes(answers.stage);
      
      let revValue = 0;
      if (answers.revenue === "Generating Revenue" || answers.revenue === "Profitable") revValue = 2000000;
      const revenueMatch = revValue >= (conditions.minRevenue || 0);

      return sectorMatch && stageMatch && revenueMatch;
    });

    setResults(eligible);
    setStep(4);
  };

  const nextStep = () => {
    if (step === 3) {
      calculateEligibility();
    } else {
      setStep((prev) => (prev + 1) as Step);
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/5 max-w-4xl mx-auto w-full">
      <div className="mb-10 text-center">
        <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Eligibility Engine</span>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary font-heading uppercase tracking-tight">
          Find Your <span className="text-primary">Perfect Schemes</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Answer 3 quick questions and our system will instantly match you with government schemes, grants, and registration services tailored exactly to your startup's profile.
        </p>
      </div>

      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step >= i ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                {i}
              </div>
              {i < 4 && <div className={`w-12 h-[2px] transition-all duration-300 ${step > i ? 'bg-primary' : 'bg-gray-100'}`} />}
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-[300px]">
        {step === 1 && (
          <motion.div initial={{ opacity: 1, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 1, x: -20 }}>
            <h3 className="text-2xl font-bold font-heading text-secondary text-center mb-8">What is your primary industry sector?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['IT/Tech', 'Agriculture', 'Manufacturing', 'Healthcare', 'General/Other', 'E-commerce'].map((sector) => (
                <button
                  key={sector}
                  onClick={() => handleSelect('sector', sector === 'General/Other' || sector === 'Healthcare' || sector === 'E-commerce' ? 'All' : sector)}
                  className={`p-6 border-2 rounded-lg text-left transition-all ${answers.sector === (sector === 'General/Other' || sector === 'Healthcare' || sector === 'E-commerce' ? 'All' : sector) ? 'border-primary bg-primary/5 shadow-md' : 'border-gray-100 hover:border-primary/30'}`}
                >
                  <div className="flex items-center gap-4">
                    <Building className={`w-6 h-6 ${answers.sector === sector ? 'text-primary' : 'text-gray-400'}`} />
                    <span className="font-bold text-secondary text-lg">{sector}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 1, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 1, x: -20 }}>
            <h3 className="text-2xl font-bold font-heading text-secondary text-center mb-8">What is the current stage of your business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Idea', 'Prototype', 'Early Traction', 'Scaling'].map((stage) => (
                <button
                  key={stage}
                  onClick={() => handleSelect('stage', stage)}
                  className={`p-6 border-2 rounded-lg text-left transition-all ${answers.stage === stage ? 'border-primary bg-primary/5 shadow-md' : 'border-gray-100 hover:border-primary/30'}`}
                >
                  <div className="flex items-center gap-4">
                    <Rocket className={`w-6 h-6 ${answers.stage === stage ? 'text-primary' : 'text-gray-400'}`} />
                    <span className="font-bold text-secondary text-lg">{stage}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {stage === 'Idea' && 'Just starting out, forming the concept.'}
                    {stage === 'Prototype' && 'Building the product or MVP.'}
                    {stage === 'Early Traction' && 'Have some early users or initial revenue.'}
                    {stage === 'Scaling' && 'Looking to grow and expand market reach.'}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 1, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 1, x: -20 }}>
            <h3 className="text-2xl font-bold font-heading text-secondary text-center mb-8">What is your current revenue status?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Pre-Revenue', 'Generating Revenue', 'Profitable'].map((rev) => (
                <button
                  key={rev}
                  onClick={() => handleSelect('revenue', rev)}
                  className={`p-6 border-2 rounded-lg text-center transition-all ${answers.revenue === rev ? 'border-primary bg-primary/5 shadow-md' : 'border-gray-100 hover:border-primary/30'}`}
                >
                  <IndianRupee className={`w-8 h-8 mx-auto mb-4 ${answers.revenue === rev ? 'text-primary' : 'text-gray-400'}`} />
                  <span className="font-bold text-secondary text-lg block">{rev}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div initial={{ opacity: 1, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold font-heading text-secondary">Analysis Complete!</h3>
              <p className="text-muted-foreground mt-2">Based on your profile, we found {results.length} highly relevant opportunities for your business.</p>
            </div>

            <div className="space-y-6">
              {results.length > 0 ? (
                results.map((scheme) => (
                  <div key={scheme.id} className="p-6 bg-gray-50 border border-gray-200 rounded-xl flex flex-col md:flex-row gap-6 items-center justify-between hover:shadow-lg transition-all duration-300">
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-xl font-bold text-secondary font-heading uppercase">{scheme.title}</h4>
                      <p className="text-muted-foreground mt-2">{scheme.description}</p>
                    </div>
                    <Link href={scheme.url} className="btn-primary whitespace-nowrap">
                      View Details
                    </Link>
                  </div>
                ))
              ) : (
                <div className="text-center p-8 bg-gray-50 rounded-lg">
                  <p className="text-lg text-secondary font-medium">We recommend starting with a generic company incorporation and then exploring funding options once you reach the prototype stage.</p>
                  <Link href="/services/register-private-limited" className="btn-primary mt-6 inline-block">
                    Incorporate Your Business
                  </Link>
                </div>
              )}
            </div>

            <div className="mt-12 text-center border-t pt-8">
              <p className="text-muted-foreground mb-6">Need a personalized consultation with our experts to review these schemes?</p>
              <Link href="/contact" className="text-primary font-bold uppercase tracking-widest text-sm border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
                BOOK A FREE STRATEGY CALL
              </Link>
            </div>
          </motion.div>
        )}
      </div>

      {step < 4 && (
        <div className="mt-10 flex justify-between items-center border-t pt-8">
          <button
            onClick={() => setStep((prev) => Math.max(1, prev - 1) as Step)}
            className={`font-bold text-sm tracking-widest uppercase transition-colors ${step === 1 ? 'text-transparent pointer-events-none' : 'text-gray-400 hover:text-secondary'}`}
          >
            Back
          </button>
          <button
            onClick={nextStep}
            disabled={(step === 1 && !answers.sector) || (step === 2 && !answers.stage) || (step === 3 && !answers.revenue)}
            className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step === 3 ? 'View Results' : 'Continue'} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
