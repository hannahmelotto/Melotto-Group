
import React from 'react';
import { PenTool, Search, BookOpen, Microscope, ShieldCheck, Database, Check, GraduationCap, UserCheck, Lock } from 'lucide-react';
import SEO from '../components/SEO.tsx';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Creative & Marketing",
      icon: <PenTool size={28} />,
      accent: "bg-blue-50 text-blue-600",
      items: [
        "Brand Messaging & Voice Development",
        "Creative Campaign Copywriting",
        "High-Level Marketing Strategy",
        "Editorial Planning & Execution"
      ]
    },
    {
      title: "Scientific & Clinical",
      icon: <Microscope size={28} />,
      accent: "bg-indigo-50 text-indigo-600",
      items: [
        "Clinical Trial Reports",
        "Medical & Scientific Research Papers",
        "Regulatory Documentation",
        "Healthcare Compliance Content"
      ]
    },
    {
      title: "Technical & Enterprise",
      icon: <Database size={28} />,
      accent: "bg-emerald-50 text-emerald-600",
      items: [
        "Industry White Papers",
        "Technical Business Documentation",
        "Compliance-Driven Content",
        "Detailed Market Research"
      ]
    },
    {
      title: "Thought Leadership",
      icon: <BookOpen size={28} />,
      accent: "bg-purple-50 text-purple-600",
      items: [
        "Executive Ghostwriting",
        "Op-Eds and Commentary",
        "Long-Form Research Essays",
        "Industry Positioning Strategy"
      ]
    }
  ];

  const pipelineFeatures = [
    { 
      icon: <GraduationCap size={20} />, 
      text: "Specialists with advanced academic credentials" 
    },
    { 
      icon: <UserCheck size={20} />, 
      text: "Direct line to your creative lead" 
    },
    { 
      icon: <Search size={20} />, 
      text: "Deep domain-specific knowledge" 
    },
    { 
      icon: <Lock size={20} />, 
      text: "Strict adherence to NDAs & Privacy" 
    }
  ];

  return (
    <div className="py-24 bg-white">
      <SEO 
        title="Professional Writing & Research Services" 
        description="Explore our specialized services: Creative & Marketing strategy, Scientific & Clinical reporting, Technical white papers, and Executive Thought Leadership." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1.5 bg-brand/5 text-brand rounded-full text-xs font-bold uppercase tracking-widest border border-brand/10">Capabilities</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Expertise Across Every Spectrum.</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Whether it’s a high-stakes clinical trial report or a brand-defining marketing campaign, we have the right expert for the task.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-28">
          {serviceCategories.map((service, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group duration-300">
              <div className={`w-16 h-16 ${service.accent} rounded-2xl flex items-center justify-center mb-8 transform transition-transform group-hover:scale-110 duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-3xl font-serif font-bold mb-8 text-gray-900">{service.title}</h3>
              <ul className="space-y-5">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-4 text-gray-600">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-brand/5 text-brand rounded-full flex items-center justify-center">
                       <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-lg leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* pipeline section */}
        <div className="bg-charcoal text-white rounded-[3.5rem] overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 p-16 md:p-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">The Expert-Client<br />Direct Pipeline.</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                We eliminate the "Account Manager" buffer. You collaborate directly with your assigned specialist—someone who shares your goals and speaks your language.
              </p>
              <div className="space-y-6">
                {pipelineFeatures.map((item, i) => (
                  <div key={i} className="flex items-center space-x-5 group/feature">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 transition-all group-hover/feature:bg-brand/20 group-hover/feature:border-brand/40 group-hover/feature:scale-110">
                      <div className="text-brand-light">
                        {item.icon}
                      </div>
                    </div>
                    <span className="text-lg font-medium text-gray-100">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20">
                <PenTool size={40} className="text-brand-light" />
              </div>
              <h4 className="text-2xl font-serif font-bold mb-10 border-b border-white/10 pb-6">Engagement Model:</h4>
              <div className="space-y-10">
                {[
                  { step: "01", title: "Discovery", desc: "Understanding your vision, audience, and technical requirements." },
                  { step: "02", title: "Specialist Matching", desc: "Assigning the writer with the specific background your project demands." },
                  { step: "03", title: "Execution", desc: "Collaborative drafting, research-backed precision, and elite execution." }
                ].map((s, i) => (
                  <div key={i} className="flex space-x-6">
                    <span className="text-brand-light font-bold text-xl font-serif">{s.step}</span>
                    <div className="space-y-2">
                      <h5 className="text-xl font-bold">{s.title}</h5>
                      <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
