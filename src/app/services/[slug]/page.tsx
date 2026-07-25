import { PageHero } from "@/components/layout/PageHero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { SocialShare } from "@/components/ui/SocialShare";
import { getServicePageMetadata } from "@/lib/seo";

// Comprehensive StartupFlora Services fallback records
export const servicesData: Record<string, any> = {
  "agri-preneur-cohort": { title: "Agri-Preneur Cohort", subtitle: "Upto ₹20 Lakh Funding", description: "Specialized funding and mentorship for agricultural startups.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Expert Mentorship", "Seed Funding", "Market Access"], features: [{title:"Agri-Tech Focus", desc:"Dedicated support for agricultural innovation."}], process: "Apply -> Pitch -> Get Funded" },
  "seed-fund": { title: "Seed Fund", subtitle: "Upto ₹25 Lakh Funding", description: "Early-stage financial support for startups under the Startup India Seed Fund Scheme (SISFS).", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["No collateral required", "Easy application process", "Fast disbursement"], features: [{title:"Early Stage Focus", desc:"Perfect for prototype development to market entry phase."}], process: "DPIIT Recognition -> Online Application -> Incubator Pitch -> Funding" },
  "rkvy-raftaar": { title: "RKVY RAFTAAR", subtitle: "Upto ₹50 Lakh Funding", description: "Remunerative Approaches for Agriculture and Allied Sectors Rejuvenation. A scheme to promote agri-entrepreneurship and agribusiness by providing financial support and nurturing the incubation ecosystem.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["High grant amount", "Government backing", "Incubation support"], features: [{title:"Agri-business Innovation", desc:"Specifically targeted at agriculture-based innovative businesses."}], process: "Application submission -> Committee Review -> Grant Approval" },
  "textile-grants": { title: "Textile Grants", subtitle: "Upto ₹2 Cr Funding", description: "Grants and subsidies designed specifically for the modernization and technological upgradation of the textile and jute industry in India.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Massive capital funding", "Technological upgrade subsidy", "Export promotion"], features: [{title:"Textile Modernization", desc:"Financial assistance for upgrading power looms and machinery."}], process: "Detailed Project Report -> Application -> Inspection -> Disbursement" },
  "cgtmse-scheme": { title: "CGTMSE Scheme", subtitle: "Upto ₹40 Lakh Loan", description: "Credit Guarantee Fund Trust for Micro and Small Enterprises provides collateral-free credit to the micro and small enterprise sector.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Collateral-free business loan", "Low interest rates", "High approval rate"], features: [{title:"Credit Guarantee", desc:"Government stands as the guarantor for your business loan."}], process: "Bank Application Preparation -> Loan Sanction -> CGTMSE Approval" },
  "samridh-scheme": { title: "Samridh Scheme", subtitle: "Upto ₹25 Lakh Funding", description: "Startup Accelerators of MeitY for Product Innovation, Development and growth to support IT based startups to scale their products.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["IT sector focus", "Accelerator matching", "Market access support"], features: [{title:"Software & IT Ecosystem", desc:"Dedicated for software product startups looking for acceleration."}], process: "MeitY Portal Application -> Selection by Accelerator -> Fund Disbursement" },
  "pmmy-scheme": { title: "PMMY Scheme", subtitle: "Upto ₹50 Lakh Loan", description: "Pradhan Mantri Mudra Yojana for non-corporate, non-farm small/micro enterprises to provide them with easy credit.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Shishu, Kishore, Tarun loan categories", "Easy access to working capital"], features: [{title:"Micro-finance Priority", desc:"Best suited for small vendors, traders, and service providers."}], process: "Business Plan Prep -> Bank Branch Visit -> Loan Sanction" },
  "pmegp-scheme": { title: "PMEGP Scheme", subtitle: "Upto ₹40 Lakh Loan", description: "Prime Minister's Employment Generation Programme is a credit-linked subsidy scheme to generate employment opportunities.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Government margin money subsidy attached", "Employment generation focus"], features: [{title:"Manufacturing & Service Focus", desc:"Ideal for setting up new micro-enterprise projects."}], process: "Online Application -> KVIC/DIC Approval -> Bank Sanction -> Subsidy Claim" },
  
  "startup-india": { title: "Startup India Registration", subtitle: "DPIIT Recognition", description: "Get recognized by Startup India and unlock access to grants, incubators, and government support like tax exemptions.", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop", benefits: ["Tax Exemption", "Easy Patent Filing", "Government Tenders"], features: [{title:"Official Recognition", desc:"Get your startup officially certified by the government."}], process: "Document Prep -> DPIIT Submission -> Certificate Issuance" },
  "udyam-registration": { title: "MSME Udyam Registration", subtitle: "MSME Recognition", description: "Register your business as an MSME to access collateral-free loans, subsidies, and government tender priority.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop", benefits: ["Collateral Free Loans", "Subsidy on Patents", "Protection against delayed payments"], features: [{title:"MSME Benefits", desc:"Unlock a host of state and central government incentives."}], process: "Aadhaar Verification -> Udyam Portal Submission -> Certificate Generation" },
  "government-grants": { title: "Government Grants", subtitle: "Non-dilutive Capital", description: "Navigate and apply for state and central government grants tailored for innovative startups.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Zero Equity Dilution", "High Capital Infusion", "Government Backing"], features: [{title:"Grant Discovery", desc:"We match your startup with the right government scheme."}], process: "Eligibility Check -> Proposal Drafting -> Pitching -> Disbursement" },
  "incubation-support": { title: "Incubation Support", subtitle: "Ecosystem Access", description: "Connect with the right incubators across India to get mentorship, lab facilities, and early-stage funding.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop", benefits: ["Mentorship", "Workspace & Labs", "Networking Opportunities"], features: [{title:"Incubator Matching", desc:"We bridge the gap between founders and top incubators."}], process: "Profile Assessment -> Incubator Application -> Pitch Preparation -> Incubation" },
  "startup-funding-consultancy": { title: "Startup Funding Consultancy", subtitle: "Raise Capital Strategically", description: "Expert guidance on raising venture capital, angel investment, and seed funds. We help you prepare pitch decks and financial models.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop", benefits: ["Valuation Strategy", "Investor Network Access", "Term Sheet Guidance"], features: [{title:"End-to-end Fundraising", desc:"From pitch deck to money in the bank."}], process: "Financial Modeling -> Pitch Deck -> Investor Outreach -> Due Diligence" },
  
  "start-one-person-company": { title: "Start One Person Company", subtitle: "StartMyBusiness Module", description: "Register your One Person Company (OPC) easily with our guided legal process. An OPC gives a single promoter full control over the company while limiting his/her liability.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Limited liability protection", "Single ownership and full control", "Corporate legal identity"], features: [{title:"Separate Legal Entity", desc:"Your business exists separately from you, protecting personal assets."}], process: "Obtain DIN/DSC -> Name Approval -> Filing of MoA & AoA -> Certificate of Incorporation" },
  "register-llp": { title: "Register LLP in 15 Days", subtitle: "StartMyBusiness Module", description: "Form a Limited Liability Partnership (LLP) quickly and efficiently. LLPs offer the flexibility of a partnership with the limited liability benefits of a corporation.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Operational flexibility", "Limited liability for partners", "Lower compliance burden compared to Pvt Ltd"], features: [{title:"Hybrid Structure", desc:"Combines the best features of both a traditional company and a partnership firm."}], process: "Digital Signature Certificate (DSC) -> Name Reservation -> LLP Agreement Drafting -> Incorporation" },
  "section-8-company": { title: "Section 8 Company", subtitle: "StartMyBusiness Module", description: "Register an NGO or non-profit organization legally under Section 8 of the Companies Act to promote commerce, art, science, sports, education, research, or social welfare.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Tax exemptions under IT Act", "No minimum capital requirement", "High credibility among donors"], features: [{title:"Social Cause Commitment", desc:"Revenues are strictly applied to promote the charitable objectives of the company."}], process: "Apply for License -> Incorporation Filing -> Apply for 12A/80G Registrations" },
  "register-private-limited": { title: "Register Private Limited Company", subtitle: "StartMyBusiness Module", description: "Incorporate a Private Limited Company (Pvt Ltd) - the most popular, scalable, and investor-friendly business structure for ambitious startups in India.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Highly fundable by VC/Angel investors", "Limited Liability for shareholders", "High market credibility"], features: [{title:"Scalability & Equity", desc:"Easily issue ESOPs and raise venture capital through equity dilution."}], process: "Name Approval via RUN -> Drafting MoA/AoA -> SPICe+ Filing -> Issuance of COI, PAN, and TAN" },
  "company-incorporation": { title: "Company Incorporation", subtitle: "StartMyBusiness Module", description: "Incorporate a Private Limited Company (Pvt Ltd) - the most popular, scalable, and investor-friendly business structure for ambitious startups in India.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Highly fundable by VC/Angel investors", "Limited Liability for shareholders", "High market credibility"], features: [{title:"Scalability & Equity", desc:"Easily issue ESOPs and raise venture capital through equity dilution."}], process: "Name Approval via RUN -> Drafting MoA/AoA -> SPICe+ Filing -> Issuance of COI, PAN, and TAN" },
  "register-partnership": { title: "Register Your Partnership Firm", subtitle: "StartMyBusiness Module", description: "Easy and quick registration for traditional partnership firms. Ideal for small businesses with multiple co-founders who want minimal regulatory compliance.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Minimal statutory compliance", "Easy and inexpensive formation", "Flexibility in operation"], features: [{title:"Traditional Agreement", desc:"Governed simply by a mutual Partnership Deed between the partners."}], process: "Drafting Partnership Deed -> Notarization -> Registrar of Firms (RoF) Registration" },
  "12a-80g-registration": { title: "Get 12A and 80G Registration", subtitle: "StartMyBusiness Module", description: "Crucial tax exemption registrations for NGOs, Trusts, and Section 8 Companies. These registrations make your organization's income tax-free and allow donors to claim tax deductions.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Tax-free organizational income", "Donor income tax deduction benefits", "Eligibility for government grants"], features: [{title:"NGO Funding Essential", desc:"Absolutely crucial for legally accepting large donations and CSR funds."}], process: "Document Collation -> Form 10A Application -> Income Tax Commissioner (CIT) Approval" },
  
  "enhance-credibility-zed": { title: "Enhance Business Credibility ZED", subtitle: "RegisterMyBusiness Module", description: "Zero Defect Zero Effect (ZED) certification for MSMEs to encourage and enable them for manufacturing of quality products while ensuring minimal impact on the environment.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Quality assurance recognition", "Access to government subsidies", "Improved global competitiveness"], features: [{title:"Quality & Ecology", desc:"Focuses on global quality standards with zero ecological footprint."}], process: "Online Registration -> Desktop Assessment -> Site Audit -> Certification Issuance" },
  "iso-certification": { title: "Go Global with ISO Certification", subtitle: "RegisterMyBusiness Module", description: "Get ISO certified to prove your quality management standards globally. ISO certification enhances your brand reputation and is often a prerequisite for international trade and government tenders.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Global brand recognition", "Increased customer trust", "Eligibility for high-value tenders"], features: [{title:"International Standards", desc:"Strict adherence to globally recognized quality and operational standards."}], process: "Gap Analysis Audit -> Process Correction -> Final Audit -> ISO Certification Grant" },
  "gst-registered": { title: "Get Your Business GST Registered", subtitle: "RegisterMyBusiness Module", description: "Quick and hassle-free Goods and Services Tax (GST) registration. Mandatory for businesses exceeding the turnover threshold or engaging in inter-state supply of goods/services.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Ability to claim Input Tax Credit (ITC)", "Legal compliance and recognition", "Inter-state sales authorization"], features: [{title:"Unified Taxation", desc:"Integration into India's unified indirect tax system."}], process: "Document submission on GST Portal -> ARN Generation -> Document Verification -> GSTIN Issuance" },
  
  "manufacturing-funding": { title: "Manufacturing Funding", subtitle: "FundMyBusiness Module", description: "Specific funding avenues, term loans, and capital subsidies tailored for the manufacturing sector to boost production capacity and technological advancement.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Machinery purchase loans", "Capital subsidy access", "Longer repayment tenures"], features: [{title:"Capex Centric", desc:"Designed for heavy capital expenditure and infrastructure development."}], process: "Detailed Project Report (DPR) Prep -> Bank/Govt Nodal Agency Application -> Approval" },
  "trading-business-boost": { title: "Boost Your Trading Business", subtitle: "FundMyBusiness Module", description: "Working capital loans, Cash Credit (CC), and Overdraft (OD) facilities specifically designed for traders, distributors, and wholesalers to maintain healthy cash flows.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Instant working capital access", "Overdraft facilities", "Inventory financing"], features: [{title:"Liquidity Management", desc:"Ensures you have the cash flow needed to manage inventory and receivables."}], process: "Financial Health Assessment -> Collateral Evaluation -> Loan Sanction and Disbursement" },
  
  "labour-id-registration": { title: "Quick Labour ID Registration", subtitle: "ProtectMyBusiness Module", description: "Ensure complete legal compliance with state and central labour laws with quick Shops & Establishments and Labour ID registration.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop", benefits: ["Complete legal compliance", "Employee welfare assurance", "Avoidance of statutory penalties"], features: [{title:"Statutory Requirement", desc:"Mandatory legal prerequisite for hiring and managing employees."}], process: "Document Collation -> Online Application Submission -> Labour Inspector Review -> License Grant" },

  // IT Services
  "web-development": { 
    title: "Custom Web Development", 
    subtitle: "Scalable & Secure Solutions", 
    description: "We build scalable, high-performance websites and web applications tailored to your specific business needs. From corporate websites to complex SaaS platforms, our expert team delivers robust digital experiences.", 
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop", 
    benefits: [{title: "Responsive Design", description: "Flawless experience across all devices."}, {title: "SEO Optimized", description: "Built with search engine best practices from day one."}, {title: "High Performance", description: "Lightning-fast load times for better conversion."}], 
    features: [{title:"Full-Stack Expertise", desc:"Next.js, React, Node.js, and modern cloud architecture."}, {title:"Custom CMS", desc:"Easy content management tailored to your team."}], 
    process: "Discovery & Planning -> UI/UX Design -> Development -> Testing & Launch" 
  },
  "mobile-app-development": { 
    title: "Mobile App Development", 
    subtitle: "iOS & Android", 
    description: "Native and cross-platform mobile applications designed to engage your users and grow your business. We handle everything from concept to App Store deployment.", 
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop", 
    benefits: [{title: "Cross-Platform", description: "Reach both iOS and Android users efficiently."}, {title: "Intuitive UX", description: "User-centric design for higher retention."}, {title: "Scalable Backend", description: "Robust APIs to power your mobile experience."}], 
    features: [{title:"React Native & Flutter", desc:"Modern frameworks for rapid, high-quality development."}, {title:"Store Optimization", desc:"ASO strategies to help your app get discovered."}], 
    process: "Wireframing -> Prototyping -> Development -> App Store Submission" 
  },
  "mvp-development": {
    title: "MVP Development",
    subtitle: "Launch in 4-8 Weeks",
    description: "Rapidly build and launch a Minimum Viable Product (MVP) to validate your startup idea. We focus on core functionalities to get your product into the hands of users and investors as quickly as possible.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
    benefits: [{title: "Fast Time to Market", description: "Launch weeks or months faster than traditional agencies."}, {title: "Cost Effective", description: "Focus your budget only on features that matter most."}, {title: "Investor Ready", description: "Show traction with a working, polished prototype."}],
    features: [{title:"Agile Sprints", desc:"Weekly deliverables and constant communication."}, {title:"Scalable Architecture", desc:"Built so you don't have to rewrite everything when you grow."}],
    process: "Feature Scoping -> Rapid Prototyping -> Core Development -> Beta Launch"
  },
  "ui-ux-design": {
    title: "UI/UX Design & Prototyping",
    subtitle: "Validate Before Coding",
    description: "Beautiful, user-centric interfaces designed in Figma. We create clickable, high-fidelity prototypes that look and feel like a real app, perfect for pitching to investors before spending money on engineering.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    benefits: [{title: "Zero Development Risk", description: "Test the user flow perfectly before writing code."}, {title: "Investor Wow Factor", description: "Raise money on the strength of a stunning prototype."}, {title: "User Tested", description: "Identify friction points early."}],
    features: [{title:"High-Fidelity Figma", desc:"Pixel-perfect designs handed off seamlessly to developers."}, {title:"Design Systems", desc:"Reusable components for long-term consistency."}],
    process: "Wireframing -> Visual Design -> Interactive Prototyping -> User Testing"
  },
  "cloud-infrastructure": { 
    title: "Cloud Infrastructure Setup", 
    subtitle: "AWS, Azure, GCP", 
    description: "Secure, scalable, and cost-effective cloud architecture setup. We help startups migrate to the cloud or build cloud-native applications from scratch.", 
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop", 
    benefits: [{title: "High Availability", description: "99.99% uptime guarantees for your services."}, {title: "Cost Optimization", description: "Pay only for what you use with auto-scaling."}, {title: "Enterprise Security", description: "Best-in-class data protection and compliance."}], 
    features: [{title:"DevOps Pipeline", desc:"Automated CI/CD for faster, reliable deployments."}, {title:"Serverless Architecture", desc:"Modern infrastructure that scales automatically."}], 
    process: "Architecture Audit -> Cloud Strategy -> Migration/Setup -> Ongoing Management" 
  },

  // AI Services
  "custom-ai-chatbots": {
    title: "Custom AI Chatbots",
    subtitle: "24/7 Customer Support",
    description: "Deploy intelligent customer service agents trained directly on your business data. Our custom LLM-powered chatbots understand context, resolve queries instantly, and escalate complex issues to human agents.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    benefits: [{title: "Reduce Support Costs", description: "Automate up to 80% of routine customer inquiries."}, {title: "Instant Responses", description: "Zero wait time for your customers, 24/7."}, {title: "Data Secure", description: "Built with privacy in mind; your proprietary data is protected."}],
    features: [{title:"RAG Architecture", desc:"Retrieval-Augmented Generation ensures responses are based solely on your documents."}, {title:"Multi-Channel Integration", desc:"Deploy on WhatsApp, Website, and Facebook Messenger."}],
    process: "Data Collection -> Model Training -> Testing & Refinement -> Deployment"
  },
  "ai-workflow-automation": {
    title: "AI Workflow Automation",
    subtitle: "Scale Without Hiring",
    description: "Automate repetitive tasks and accelerate business processes with AI agents. We build custom automations that connect your CRMs, emails, and internal tools using intelligent decision-making logic.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
    benefits: [{title: "Eliminate Human Error", description: "Consistent and accurate task execution."}, {title: "Save Thousands of Hours", description: "Free your team to focus on high-value creative work."}, {title: "Instant Scalability", description: "Handle 10x the volume without adding headcount."}],
    features: [{title:"Intelligent Routing", desc:"AI parses incoming emails and routes them automatically."}, {title:"Automated Data Entry", desc:"Extract data from invoices and PDFs directly into your CRM."}],
    process: "Process Audit -> AI Strategy -> Building Workflows -> Team Onboarding"
  },
  "predictive-analytics": {
    title: "Predictive Analytics",
    subtitle: "Data-Driven Decisions",
    description: "Harness machine learning models to forecast trends, customer behavior, and inventory needs. Stop guessing and start making strategic decisions backed by your own historical data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    benefits: [{title: "Demand Forecasting", description: "Optimize inventory and avoid stockouts."}, {title: "Churn Prediction", description: "Identify at-risk customers before they leave."}, {title: "Price Optimization", description: "Dynamic pricing models to maximize revenue."}],
    features: [{title:"Custom ML Models", desc:"Built specifically for your industry's unique variables."}, {title:"Interactive Dashboards", desc:"Real-time visualization of predictions and metrics."}],
    process: "Data Cleaning -> Feature Engineering -> Model Training -> Dashboard Integration"
  },
  "ai-readiness-audit": {
    title: "AI Readiness Audit",
    subtitle: "Strategic AI Implementation",
    description: "A comprehensive consulting engagement for non-tech MSMEs. We analyze your workflows, identify massive time-sinks, and provide a roadmap for exactly which AI tools can save you money and how to deploy them.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    benefits: [{title: "Stop Wasting Money", description: "Identify inefficient processes instantly."}, {title: "Clear Roadmap", description: "Know exactly which AI tools to buy and how to configure them."}, {title: "Team Upskilling", description: "We train your staff on how to use new AI technologies."}],
    features: [{title:"Process Mining", desc:"Deep dive into how your employees currently spend their time."}, {title:"Vendor Selection", desc:"Unbiased recommendations for off-the-shelf vs custom AI."}],
    process: "Discovery -> Workflow Observation -> Opportunity Mapping -> Strategic Roadmap Delivery"
  },
  "custom-ai-voice-agents": {
    title: "Custom AI Voice Agents",
    subtitle: "Automated Phone Support & Sales",
    description: "Deploy highly conversational, low-latency AI voice agents that handle inbound support calls, book appointments, and run outbound lead qualification campaigns 24/7.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop",
    benefits: [{title: "24/7 Availability", description: "Answer every customer call instantly without delay."}, {title: "Zero Waiting Times", description: "Scale calls concurrently to handle peak volume."}, {title: "Integration Ready", description: "Automatically update CRM records and schedule meetings during the call."}],
    features: [{title: "Natural Conversations", desc: "Low latency voice responses that sound human and understanding."}, {title: "Multi-language Support", desc: "Speak to customers in their preferred regional languages."}],
    process: "Script Drafting -> Voice Synthesis -> Logic Integration -> Live Testing"
  },
  "ai-powered-ads": {
    title: "AI Powered Ads",
    subtitle: "Maximize Marketing ROI",
    description: "Leverage machine learning algorithms to design, deploy, and continuously optimize digital ad campaigns across search, social, and display channels for the highest conversion rates.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    benefits: [{title: "Higher Conversion Rates", description: "Target the exact audiences most likely to buy your product."}, {title: "Lower Customer Acquisition Costs (CAC)", description: "Optimize bidding strategies in real-time to save budget."}, {title: "Automated Ad Copy & Creatives", description: "Generate and test hundreds of ad variations automatically."}],
    features: [{title: "Audience Prediction", desc: "AI models segment and find high-intent potential customers."}, {title: "Smart Budget Allocation", desc: "Automatically shifts budget to top-performing ad sets."}],
    process: "Setup Conversion Tracking -> AI Audience Mapping -> Creative Generation -> Live Optimization"
  },

  // Marketing Services
  "seo-services": { 
    title: "Search Engine Optimization (SEO)", 
    subtitle: "Dominate Search Results", 
    description: "Rank higher on Google, drive organic traffic to your business, and outpace your competitors with our data-driven SEO strategies.", 
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000&auto=format&fit=crop", 
    benefits: [{title: "Increased Organic Traffic", description: "Consistent, free traffic from search engines."}, {title: "Higher Conversion Rates", description: "Target users actively searching for your services."}, {title: "Long-term ROI", description: "SEO provides compounding returns over time."}], 
    features: [{title:"Technical SEO Audit", desc:"Fixing underlying issues that hold your site back."}, {title:"Content Strategy", desc:"Creating high-value content that ranks and converts."}], 
    process: "Site Audit -> Keyword Research -> On-Page Optimization -> Link Building" 
  },
  "social-media": { 
    title: "Social Media Management", 
    subtitle: "Build Your Brand", 
    description: "Build brand awareness, engage with your audience across platforms, and convert followers into loyal customers with our comprehensive social media management.", 
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop", 
    benefits: [{title: "Brand Awareness", description: "Get your business in front of the right audience."}, {title: "Community Engagement", description: "Build relationships with your target market."}, {title: "Visual Storytelling", description: "Professional graphics and video content."}], 
    features: [{title:"Multi-Platform Strategy", desc:"Instagram, LinkedIn, Twitter, and Facebook."}, {title:"Analytics & Reporting", desc:"Track growth and engagement with detailed reports."}], 
    process: "Audience Analysis -> Content Calendar Creation -> Publishing -> Community Management" 
  },
  "performance-marketing": { 
    title: "Performance Marketing", 
    subtitle: "Data-Driven ROI", 
    description: "Data-driven ad campaigns designed to maximize your ROI. We manage Google Ads, Facebook Ads, and LinkedIn Ads to generate high-quality leads.", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop", 
    benefits: [{title: "Immediate Results", description: "Start generating leads and sales instantly."}, {title: "Targeted Audience", description: "Reach exact demographics and interests."}, {title: "Measurable ROI", description: "Track every penny spent and earned."}], 
    features: [{title:"A/B Testing", desc:"Continuous optimization of ad creatives and copy."}, {title:"Retargeting Campaigns", desc:"Bring back visitors who didn't convert initially."}], 
    process: "Campaign Strategy -> Ad Creation -> Launch -> Optimization & Scaling" 
  },
  "b2b-lead-generation": {
    title: "B2B Lead Generation",
    subtitle: "Automate Your Sales Pipeline",
    description: "Fill your sales pipeline predictably with automated cold-email systems and highly targeted LinkedIn outreach. We handle the data scraping, copywriting, and inbox management.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2000&auto=format&fit=crop",
    benefits: [{title: "Predictable Revenue", description: "A steady flow of meetings booked on your calendar."}, {title: "Scale Outreach", description: "Contact thousands of ideal prospects every month."}, {title: "Done-for-You", description: "Focus on closing deals, not prospecting."}],
    features: [{title:"Advanced Personalization", desc:"AI-driven icebreakers that increase reply rates."}, {title:"Deliverability Setup", desc:"Technical configuration to ensure emails avoid the spam folder."}],
    process: "Targeting Strategy -> Domain Setup -> Copywriting -> Launch & Meeting Booking"
  },
  "brand-identity": {
    title: "Brand Identity Setup",
    subtitle: "Look Premium Instantly",
    description: "Build trust with investors and enterprise clients through a cohesive, professional brand identity. We design logos, color palettes, typography, and complete corporate stationery.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    benefits: [{title: "Instant Credibility", description: "Look like a well-funded, established corporation."}, {title: "Brand Consistency", description: "Unified aesthetic across your website, pitch deck, and socials."}, {title: "Memorable Impact", description: "Stand out in a crowded market."}],
    features: [{title:"Comprehensive Guidelines", desc:"A rulebook for how to use your new brand assets."}, {title:"Social Media Kits", desc:"Ready-to-use templates for LinkedIn and Instagram."}],
    process: "Discovery & Moodboarding -> Concept Creation -> Refinement -> Final Asset Delivery"
  },
  "influencer-marketing": {
    title: "Influencer Marketing",
    subtitle: "Amplify Your Reach",
    description: "Leverage industry leaders and niche creators to amplify your brand's credibility. We handle the end-to-end process from identifying the right influencers to negotiating rates and measuring campaign ROI.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2000&auto=format&fit=crop",
    benefits: [{title: "Instant Trust", description: "Borrow credibility from established industry voices."}, {title: "Targeted Reach", description: "Get in front of highly engaged, niche audiences."}, {title: "Authentic Content", description: "User-generated content that performs better than traditional ads."}],
    features: [{title:"Vetted Network", desc:"Access to our curated list of high-ROI creators."}, {title:"Performance Tracking", desc:"Detailed analytics on engagement, reach, and conversions."}],
    process: "Audience Analysis -> Creator Matching -> Campaign Briefing -> Content Go-Live"
  },

  // Legal & Compliance Services
  "dpiit-registration": {
    title: "DPIIT Startup India Registration",
    subtitle: "Unlock Government Benefits",
    description: "The most critical registration for early-stage startups. We help you get recognized by DPIIT, opening the door to Angel Tax exemptions (Section 56), fast-track patents, and seed fund eligibility.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop",
    benefits: [{title: "Angel Tax Exemption", description: "Raise funds without heavy tax penalties."}, {title: "Tender Relaxations", description: "Exemptions from prior experience/turnover in government tenders."}, {title: "Self-Certification", description: "Compliance with labour and environmental laws made easy."}],
    features: [{title:"Guaranteed Approval", desc:"We handle the complex application correctly the first time."}, {title:"Inter-Ministerial Board Support", desc:"Assistance for advanced tax exemption applications."}],
    process: "Document Collection -> Application Drafting -> DPIIT Submission -> Certificate Issuance"
  },
  "pitch-deck-creation": {
    title: "Pitch Deck & Financial Modeling",
    subtitle: "Raise Capital Successfully",
    description: "Professional investor pitch decks and precise financial models. We craft your narrative, visualize your traction, and build the 3-year financial projections that VC firms demand.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    benefits: [{title: "Stand Out to VCs", description: "A visually stunning deck that grabs attention."}, {title: "Defend Your Valuation", description: "Robust financial models that prove your worth."}, {title: "Clear Narrative", description: "Distill your complex tech into an easy-to-understand story."}],
    features: [{title:"Market Sizing (TAM/SAM/SOM)", desc:"Accurate data research for your industry."}, {title:"Cap Table Structuring", desc:"Forecast equity dilution correctly."}],
    process: "Founders Interview -> Financial Modeling -> Narrative & Copywriting -> Design & Review"
  },
  "virtual-cfo": {
    title: "Virtual CFO Services",
    subtitle: "Enterprise Finance Management",
    description: "Enterprise-level financial strategy and management at a fraction of the cost. We handle your bookkeeping, compliance, cash flow forecasting, and monthly MIS reporting.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
    benefits: [{title: "Investor Ready", description: "Maintain clean books that will pass any due diligence."}, {title: "Strategic Insights", description: "Know exactly where you are bleeding cash."}, {title: "Zero Penalties", description: "Never miss a GST, TDS, or ROC filing deadline."}],
    features: [{title:"Monthly MIS Reports", desc:"Clear dashboards summarizing financial health."}, {title:"Burn Rate Monitoring", desc:"Real-time tracking of your startup runway."}],
    process: "System Onboarding -> Historical Cleanup -> Routine Bookkeeping -> Monthly Strategy Reviews"
  },
  "trademark-registration": {
    title: "Trademark & IP Registration",
    subtitle: "Protect Your Brand",
    description: "Legally protect your brand name, logo, and intellectual property. We conduct thorough trademark searches and handle the entire filing process to secure your rights.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop",
    benefits: [{title: "Exclusive Rights", description: "Prevent competitors from stealing your identity."}, {title: "Franchise Ready", description: "Create a licensable asset for future growth."}, {title: "Legal Protection", description: "Grounds to sue for infringement and counterfeiting."}],
    features: [{title:"Thorough Search", desc:"Ensure your name isn't already taken before filing."}, {title:"Objection Handling", desc:"We reply to registry objections on your behalf."}],
    process: "Trademark Search -> Filing Application -> Using 'TM' Symbol -> Certificate Issuance"
  },
  "pitch-deck": {
    title: "Pitch Deck Preparation",
    subtitle: "Raise Capital Successfully",
    description: "Professional investor pitch decks and precise financial models. We craft your narrative, visualize your traction, and build the projections that VC firms demand.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    benefits: ["Stand Out to VCs", "Defend Your Valuation", "Clear Narrative"],
    features: [{title:"Market Sizing", desc:"Accurate data research for your industry."}, {title:"Compelling Story", desc:"Distill your complex tech into an easy-to-understand story."}],
    process: "Founders Interview -> Content & Narrative -> Design -> Final Review"
  },
  "financial-modeling": {
    title: "Financial Modeling",
    subtitle: "Forecast Your Growth",
    description: "Robust financial models that prove your worth. We build 3-5 year financial projections, cap table structuring, and unit economics analysis for your startup.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    benefits: ["Investor Ready", "Cap Table Clarity", "Burn Rate Strategy"],
    features: [{title:"Revenue Projections", desc:"Detailed forecasting based on unit economics."}, {title:"Scenario Analysis", desc:"Best, base, and worst-case scenario planning."}],
    process: "Data Collection -> Assumption Building -> Model Construction -> Review & Polish"
  },
  "business-plan": {
    title: "Business Plan Strategy",
    subtitle: "Roadmap to Success",
    description: "Comprehensive business plans that outline your go-to-market strategy, competitive analysis, and operational roadmap to ensure long-term scalability.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
    benefits: ["Strategic Clarity", "Market Positioning", "Operational Focus"],
    features: [{title:"Competitor Analysis", desc:"In-depth research into market leaders and gaps."}, {title:"Go-to-Market Strategy", desc:"Clear steps on how to acquire your first 1,000 customers."}],
    process: "Strategy Session -> Market Research -> Drafting -> Finalization"
  },
  "dpiit-recognition": {
    title: "DPIIT Recognition Support",
    subtitle: "Unlock Government Benefits",
    description: "The most critical registration for early-stage startups. We help you get recognized by DPIIT, opening the door to Angel Tax exemptions, fast-track patents, and seed funds.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop",
    benefits: ["Angel Tax Exemption", "Tender Relaxations", "Self-Certification"],
    features: [{title:"Guaranteed Approval", desc:"We handle the complex application correctly the first time."}, {title:"Tax Exemption Support", desc:"Assistance for advanced Section 80IAC applications."}],
    process: "Document Collection -> Application Drafting -> DPIIT Submission -> Certificate Issuance"
  },
  "valuation": {
    title: "Valuation Certificates",
    subtitle: "Determine Your Startup's Worth",
    description: "Certified startup valuation reports by registered valuers. Essential for fundraising, issuing ESOPs, and compliance with Income Tax and FEMA regulations.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
    benefits: ["Regulatory Compliance", "Fundraising Readiness", "Accurate Worth"],
    features: [{title:"DCF Method", desc:"Discounted Cash Flow method for accurate future projections."}, {title:"Registered Valuer", desc:"Reports signed by IBBI registered valuers."}],
    process: "Financial Review -> Method Selection -> Draft Report -> Final Certification"
  },
  "whatsapp-green-tick": {
    title: "WhatsApp Green Tick",
    subtitle: "Build Official Brand Trust",
    description: "Get the official WhatsApp Green Tick verification for your business API account to build immediate trust and credibility with your customers.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
    benefits: ["Instant Credibility", "Higher Open Rates", "Brand Authenticity"],
    features: [{title:"API Integration", desc:"Setup of WhatsApp Business API."}, {title:"Verification Support", desc:"We handle the PR and documentation required by Meta."}],
    process: "Business Verification -> PR Placement -> Meta Application -> Green Tick Approval"
  },
  "digital-marketing": {
    title: "Digital Marketing Growth",
    subtitle: "Scale Your Audience",
    description: "End-to-end digital marketing solutions including SEO, paid advertising, and content marketing to drive high-quality leads and scale your customer base.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000&auto=format&fit=crop",
    benefits: ["Targeted Traffic", "Higher Conversions", "Measurable ROI"],
    features: [{title:"Omnichannel Strategy", desc:"Presence across search, social, and display."}, {title:"Data-Driven Decisions", desc:"Continuous optimization based on analytics."}],
    process: "Audit -> Strategy -> Campaign Execution -> Optimization"
  },
  "sales-training": {
    title: "Sales & Leadership Training",
    subtitle: "Empower Your Team",
    description: "Expert-led workshops and training programs to transform your founders and executives into high-closing sales leaders and effective managers.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2000&auto=format&fit=crop",
    benefits: ["Higher Closing Rates", "Effective Leadership", "Team Motivation"],
    features: [{title:"B2B Sales Tactics", desc:"Proven frameworks for enterprise sales."}, {title:"Leadership Coaching", desc:"Developing core management competencies."}],
    process: "Needs Assessment -> Custom Curriculum -> Workshop Delivery -> Ongoing Coaching"
  }
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fallback = servicesData[slug];
  const imageUrl = fallback?.image;
  return await getServicePageMetadata(slug, imageUrl);
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const fallback = servicesData[slug];
  if (!fallback) {
    notFound();
  }

  const serviceImage = fallback.image || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop";

  const service = {
    title: fallback.title || "Service Details",
    subtitle: fallback.subtitle || "Expert Consulting",
    description: fallback.description || "Expert business guidance and consultancy support.",
    image: serviceImage,
    benefits: fallback.benefits || ["Quality Guidance", "Growth Acceleration", "Professional Support"],
    features: fallback.features || [{ title: "Strategic Advising", desc: "Expert mentorship to guide your corporate goals." }],
    process: fallback.process || "Apply -> Review -> Execute",
    faqs: fallback.faqs || [],
    whyChooseUs: fallback.whyChooseUs || [],
    testimonials: fallback.testimonials || [],
    cta: fallback.cta || null,
    pricing: fallback.pricing || null,
  };

  // Structured schema for search engine rich results
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "VenturesNodes",
      "url": "https://venturesnodes.com",
      "logo": "https://venturesnodes.com/logo.png"
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHero 
        title={service.title} 
        breadcrumb={[
          { name: "Services", href: "/services" },
          { name: service.title }
        ]}
      />
      
      <section className="section-padding bg-gray-50/50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Sidebar */}
            <div className="w-full lg:w-1/3 order-2 lg:order-1">
              <div className="sticky top-32">
                <ServiceSidebar activeSlug={slug} />
              </div>
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-2/3 order-1 lg:order-2">
              <div className="mb-16 rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent z-10 opacity-60 mix-blend-multiply pointer-events-none transition-opacity duration-500 group-hover:opacity-40"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                  <div className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-md text-white font-bold py-2 px-5 rounded-full shadow-xl uppercase text-xs md:text-sm tracking-widest mb-4">
                    {service.subtitle}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white font-heading tracking-tight drop-shadow-lg leading-tight">
                    {service.title}
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-12 whitespace-pre-line text-[17px] md:text-[19px] font-body border-l-4 border-primary pl-6">
                  {service.description}
                </p>
              </div>

              {/* Features Bento Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                {service.features.map((feature: any, idx: number) => (
                  <div key={idx} className="p-8 bg-white rounded-[24px] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(5,165,199,0.1)] hover:-translate-y-2 hover:border-primary/20 transition-all duration-500 group">
                    <h3 className="font-heading font-bold uppercase text-secondary mb-4 text-xl group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed font-body">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <h3 className="text-3xl font-bold text-secondary font-heading uppercase tracking-tight mb-8">Key Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
                {service.benefits.map((benefit: any, idx: number) => (
                  <div key={idx} className="flex flex-col gap-3 p-6 bg-white border border-gray-100 rounded-[20px] shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-full shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                      <div className="mt-1">
                        <span className="font-bold text-secondary font-heading tracking-wide text-lg">
                          {typeof benefit === 'string' ? benefit : benefit.title}
                        </span>
                        {typeof benefit === 'object' && benefit.description && (
                          <p className="text-muted-foreground text-[14px] mt-2 font-body leading-relaxed">
                            {benefit.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Process Section */}
              <div className="p-10 md:p-14 bg-secondary rounded-[32px] text-white shadow-[0_20px_50px_rgba(11,18,33,0.3)] relative overflow-hidden mb-16 border border-white/10">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold font-heading uppercase tracking-tight mb-10 text-white">Our Process</h3>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-4 items-start sm:items-center">
                    {service.process.split(' -> ').map((step: string, index: number, arr: string[]) => (
                      <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex items-center gap-4 group cursor-default">
                          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/20 text-primary font-heading font-bold text-xl group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-inner">
                            {index + 1}
                          </span>
                          <span className="font-heading tracking-wider font-semibold text-lg">{step}</span>
                        </div>
                        {index < arr.length - 1 && <div className="hidden sm:block h-[2px] w-8 lg:w-12 bg-white/10 ml-2"></div>}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Background glowing orb */}
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
              </div>
              {/* Pricing Section (SEO) */}
              {service.pricing && (
                <div className="mb-12 p-8 border-2 border-primary/20 bg-primary/5 rounded-xl text-center">
                  <h3 className="text-2xl font-bold font-heading uppercase tracking-tight text-secondary mb-2">Pricing</h3>
                  <p className="text-xl font-bold text-primary">{service.pricing}</p>
                </div>
              )}

              {/* Why Choose Us Section (SEO) */}
              {service.whyChooseUs && service.whyChooseUs.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-secondary font-heading uppercase tracking-tight mb-8">Why Choose Us</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.whyChooseUs.map((reason: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-muted rounded-md border border-gray-200">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="font-medium text-secondary text-sm">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonials Section (E-E-A-T) */}
              {service.testimonials && service.testimonials.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-secondary font-heading uppercase tracking-tight mb-8">Client Success Stories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.testimonials.map((test: any, idx: number) => (
                      <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                        <p className="italic text-muted-foreground mb-4">"{test.quote}"</p>
                        <p className="font-bold text-secondary">{test.author}</p>
                        {test.company && <p className="text-xs text-muted-foreground uppercase tracking-widest">{test.company}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Section (SEO) */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-secondary font-heading uppercase tracking-tight mb-8">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq: any, idx: number) => (
                      <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-bold text-secondary text-lg mb-2">{faq.question}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Section (SEO) */}
              {service.cta && (
                <div className="mb-12 text-center bg-secondary p-12 rounded-xl text-white">
                  <h3 className="text-3xl font-bold font-heading uppercase tracking-tight mb-6">{service.cta.title}</h3>
                  <a href={service.cta.buttonLink || "/contact"} className="inline-block bg-primary hover:bg-white hover:text-secondary text-white font-bold px-8 py-4 rounded-full uppercase tracking-widest transition-all shadow-lg hover:shadow-xl">
                    {service.cta.buttonText || "Get Started"}
                  </a>
                </div>
              )}

              {/* Off-Page SEO Widgets */}
              <SocialShare title={service.title} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
