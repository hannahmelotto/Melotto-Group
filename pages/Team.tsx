
import React from 'react';
import { GraduationCap, Microscope, PenTool, CheckCircle2, UserCheck, ShieldCheck } from 'lucide-react';
import MockUiSnippet from '../components/MockUiSnippet.tsx';
import SEO from '../components/SEO.tsx';

const Team: React.FC = () => {
  const teamPillars = [
    {
      title: "Advanced Research Bench",
      icon: <GraduationCap size={24} />,
      desc: "Our research bench includes specialists with distinguished educational backgrounds across life sciences, economics, and law.",
      accent: "bg-blue-50 text-blue-600"
    },
    {
      title: "Industry Veterans",
      icon: <Microscope size={24} />,
      desc: "Seasoned professionals with decades of hands-on experience in highly regulated industries.",
      accent: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Strategic Storytellers",
      icon: <PenTool size={24} />,
      desc: "Editorial leads who know how to translate complex technical data into compelling narratives.",
      accent: "bg-emerald-50 text-emerald-600"
    }
  ];

  const specialists = [
    { name: "Lead Content Strategist", role: "Strategy & Voice", img: "1" },
    { name: "Senior Research Lead", role: "Technical Synthesis", img: "2" },
    { name: "Director of Editorial", role: "Narrative Design", img: "3" },
  ];

  return (
    <div className="py-24 bg-white overflow-hidden">
      <SEO 
        title="Our Team of Experts" 
        description="Meet the human experts at Melotto Group. Our team consists of advanced researchers and strategic writers with backgrounds in life sciences, law, and economics." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-brand-light text-brand px-4 py-1.5 rounded-full border border-brand/10 mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Our Team</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-charcoal mb-8 leading-[1.1]">
              Elite Expertise.<br />
              <span className="text-brand">Human Intelligence.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              At Melotto Group, our greatest asset isn't a server farm—it's the collective experience of our writers, researchers, and strategists. We hire for depth, nuance, and the ability to think critically about high-stakes problems.
            </p>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-brand/5 blur-[80px] rounded-full -z-10 animate-pulse"></div>
            <div className="bg-gray-50/50 border border-gray-100 rounded-[3rem] p-10 relative overflow-hidden">
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200/50">
                  <h3 className="font-serif font-bold text-xl">Assigned Specialists</h3>
                  <span className="text-[10px] font-bold text-brand uppercase tracking-widest bg-brand/5 px-3 py-1 rounded-full">YOUR PROJECT</span>
                </div>
                {specialists.map((s, i) => (
                  <div key={i} className="flex items-center space-x-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.02] cursor-default group/card">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden ring-2 ring-brand/10">
                        <img src={`https://i.pravatar.cc/150?u=melotto-${s.img}`} alt="Specialist" className="grayscale" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900">{s.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{s.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-40">
          {teamPillars.map((pillar, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className={`w-14 h-14 ${pillar.accent} rounded-2xl flex items-center justify-center mb-8`}>
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Mock UI Integration - Direct Pipeline */}
        <div className="grid lg:grid-cols-2 gap-40 items-center mb-40">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">The Expert-Client<br />Direct Pipeline.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We eliminate the "Account Manager" buffer. You collaborate directly with your assigned specialist—someone who shares your goals and speaks your language. Every project is matched with a lead whose background specifically fits the task requirements.
            </p>
            <div className="space-y-4 pt-4">
              {[
                "Direct Slack & Email access to your lead specialist",
                "Regular strategic synchronization calls",
                "Total transparency in research and drafting",
                "Strict adherence to professional confidentiality"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-gray-700 font-semibold">
                  <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-brand" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end items-center order-1 lg:order-2 lg:pl-32">
            <div className="relative w-full max-w-[420px] lg:mr-10 py-10">
              {/* Premium Radial Gradient Background - Softly anchored behind the snippet */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(17,92,239,0.07)_0%,_transparent_70%)] pointer-events-none -z-10"></div>
              
              {/* Main status card wrapper */}
              <div className="relative transform rotate-2 hover:rotate-0 transition-all duration-700 scale-[1.25] z-20 ml-auto will-change-transform">
                <MockUiSnippet type="status" />
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="bg-charcoal text-white rounded-[3.5rem] p-12 md:p-24 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <div className="max-w-3xl mb-20">
              <div className="inline-block px-4 py-1.5 border border-white/10 rounded-full mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-light">Leadership</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">Founder-Led &<br />Hands-On.</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Melotto Group was established to restore the craft of high-level communication. Our founders are involved in every major client engagement, ensuring our standards never waver.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 lg:gap-32 border-t border-white/10 pt-16">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-2">Trever Gray</h3>
                <p className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Founder / CEO</p>
                <div className="relative">
                  <p className="text-gray-300 leading-relaxed italic text-lg relative z-10">
                    "Our focus has always been on depth. We believe that when a client trusts us with their most critical messaging, they deserve more than just a deliverable—they deserve a strategic partner who cares about the nuance as much as they do."
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold mb-2">Hannah Melotto</h3>
                <p className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Co-Founder / COO</p>
                <div className="relative">
                  <p className="text-gray-300 leading-relaxed italic text-lg relative z-10">
                    "Excellence is in the operations. My role is to ensure that our group of specialists has the environment and the rigorous quality frameworks needed to produce world-class work for every single partner, every single day."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-20 flex justify-center pt-10 border-t border-white/5">
              <div className="flex space-x-8 text-white/40">
                <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest"><ShieldCheck size={14} /> <span>Uncompromising Quality</span></div>
                <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest"><UserCheck size={14} /> <span>100% Specialist Delivery</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
