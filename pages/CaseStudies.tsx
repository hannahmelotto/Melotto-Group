
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock } from 'lucide-react';
import SEO from '../components/SEO.tsx';

export const CASE_STUDIES_DATA = {
  "argus-research": {
    id: "argus-research",
    company: "Argus Research",
    industry: "Independent Equity Research",
    type: "Market Analysis",
    summary: "Institutional-grade industry analysis requiring high-density financial synthesis updated semi-annually.",
    outcome: "Production of complex 20+ page sector reports that maintain objective financial foresight for institutional investors.",
    confidential: false,
    content: {
      overview: "Argus Research is a pillar of independent equity research in the U.S., founded in 1934. They are globally recognized for their rigorous analytic methodology and total independence from brokerage influence.",
      challenge: "The firm required a scalable method to produce 20+ page industry market analysis reports that adhered to their legacy of objective, high-stakes financial foresight while meeting strict semi-annual deadlines.",
      solution: "Melotto Group established a dedicated research workflow, matching Argus with analysts possessing advanced degrees in economics. We produce high-density reports focusing on sector forecasts, interest rate impacts, and corporate fundamentals.",
      results: [
        "Consistent delivery of 20+ page specialized market reports.",
        "Successful semi-annual update cycles for institutional clients.",
        "Enhanced readability and clarity for high-net-worth investors.",
        "Precision alignment with established financial analysis standards."
      ]
    }
  },
  "penn-community-bank": {
    id: "penn-community-bank",
    company: "Penn Community Bank",
    industry: "Community Banking",
    type: "Financial Literacy",
    summary: "Translating complex banking products into consumer-friendly eBooks and educational resources.",
    outcome: "Successfully established the bank as a trusted authority for financial literacy within the local community.",
    confidential: false,
    content: {
      overview: "Penn Community Bank is a relationship-focused institution managing over $2.9 billion in assets, prioritizing community support and local decision-making.",
      challenge: "The bank wanted to deepen customer relationships by offering high-value financial literacy resources that felt accessible and human rather than purely transactional.",
      solution: "We collaborated with banking leads to develop a series of educational eBooks. We translated dense regulatory and technical financial topics—such as mortgage structures and cash management—into authoritative, reader-friendly guides.",
      results: [
        "Launched a comprehensive series of 5 custom educational eBooks.",
        "Significant increase in customer engagement with digital literacy tools.",
        "Successful simplification of complex, compliance-heavy banking topics.",
        "Strengthened brand positioning as a community-first advisor."
      ]
    }
  },
  "wral-digital": {
    id: "wral-digital",
    company: "WRAL Digital Solutions",
    industry: "Media & Marketing",
    type: "Narrative Strategy",
    summary: "Interview-driven storytelling focusing on capturing the authentic human narratives behind successful businesses.",
    outcome: "Developed an ongoing engine of high-engagement content through authentic, deep-dive human interviews.",
    confidential: false,
    content: {
      overview: "WRAL Digital Solutions, the marketing arm of Capitol Broadcasting Company, helps SMBs grow through integrated digital and broadcast strategies.",
      challenge: "The agency needed to showcase the real-world impact of their services through 'Client Spotlight' campaigns that felt genuine, requiring a partner capable of conducting high-level, nuanced interviews.",
      solution: "Melotto Group acts as the narrative engine for this series. We conduct deep-dive interviews with business owners, translating their experiences into engaging multi-platform content that highlights their partnership success.",
      results: [
        "Conducted and published dozens of authentic client interviews.",
        "Consistent production schedule for high-value account spotlights.",
        "Measurable increase in site dwell time on narrative-heavy pages.",
        "Captured nuanced business insights that traditional reporting often misses."
      ]
    }
  },
  "inconcert-web": {
    id: "inconcert-web",
    company: "inConcert Web Solutions",
    industry: "Digital Agency",
    type: "Content Strategy",
    summary: "A five-year partnership delivering consistent, high-quality blog and SEO content on a high-velocity schedule.",
    outcome: "Half a decade of sustained growth and content authority through elite editorial consistency.",
    confidential: false,
    content: {
      overview: "inConcert Web Solutions is a performance-driven digital agency founded in 2002, specializing in tailored marketing for lead generation.",
      challenge: "Maintaining a high volume of quality content without sacrificing brand voice is a struggle for many agencies. They needed a long-term partner to act as an editorial extension of their team.",
      solution: "We have maintained an active relationship with inConcert for over five years. We handle their monthly editorial ecosystem, ensuring every piece is thoroughly researched and optimized for both readers and search performance.",
      results: [
        "Sustained 5+ year strategic editorial partnership.",
        "Hundreds of high-performing deliverables completed on schedule.",
        "Significant growth in SEO rankings for core agency services.",
        "Total elimination of internal content management overhead for the agency."
      ]
    }
  }
};

const CaseStudies: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <SEO 
        title="Success Stories & Case Studies" 
        description="Explore the impact of human-led content strategy. Our case studies showcase successful projects for equity research, community banking, and narrative-driven media." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <div className="inline-block mb-6">
            <span className="px-3 py-1 bg-brand-light text-brand rounded-full text-[10px] font-bold uppercase tracking-widest border border-brand/10">Case Studies</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-charcoal">Selected Work.</h1>
          <p className="text-xl text-gray-500 leading-relaxed font-medium">
            Exploring the intersection of complex information and clear narrative across various industries and scales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {Object.values(CASE_STUDIES_DATA).map((c) => (
            <Link 
              to={`/case-studies/${c.id}`} 
              key={c.id} 
              className="group block"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-gray-50 mb-8 border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-brand/5 group-hover:-translate-y-1">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative p-12 overflow-hidden">
                   {/* Textured Graph Line Canvas Background */}
                   <div 
                     className="absolute inset-0 opacity-[0.08] pointer-events-none" 
                     style={{ 
                       backgroundImage: `linear-gradient(to right, #115cef 1px, transparent 1px), linear-gradient(to bottom, #115cef 1px, transparent 1px)`,
                       backgroundSize: '24px 24px'
                     }}
                   ></div>
                   
                   {/* Subtle Top Overlay Shadow for Depth */}
                   <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-white/60 pointer-events-none"></div>

                   <div className="text-center space-y-4 relative z-10">
                      <span className="text-[10px] font-bold text-brand uppercase tracking-[0.3em] block mb-2">{c.type}</span>
                      <h3 className="text-4xl font-serif font-bold text-charcoal">{c.company}</h3>
                   </div>

                   <div className="absolute bottom-10 right-10 w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand shadow-sm border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300 z-20">
                      <ArrowRight size={20} />
                   </div>
                </div>
              </div>
              <div className="px-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{c.industry}</span>
                </div>
                <p className="text-lg text-gray-600 font-medium leading-relaxed group-hover:text-charcoal transition-colors">
                  {c.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* NDA Notice */}
        <div className="mt-32 p-16 bg-gray-50/50 rounded-[3rem] border border-gray-100 text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-white rounded-full text-gray-300 shadow-sm">
              <Lock size={24} />
            </div>
          </div>
          <p className="text-gray-500 text-lg italic leading-relaxed font-medium">
            "Melotto Group prioritizes client privacy. While many of our most impactful projects for Fortune 500 organizations are protected by non-disclosure agreements, we can discuss scope and methodology during a private consultation."
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
