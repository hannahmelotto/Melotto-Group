
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, UserCheck, ShieldCheck, Search, Globe, MessageSquare, Sparkles } from 'lucide-react';
import AntiAiBadge from '../components/AntiAiBadge';
import MockUiSnippet from '../components/MockUiSnippet';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative z-10">
              <AntiAiBadge />
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-charcoal leading-[1.05] tracking-tight">
                High-Impact Content.<br />
                <span className="text-brand">Human Intelligence.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Melotto Group provides premium writing, research, and strategy for organizations that refuse to compromise. No algorithms. No AI. Just elite human expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/consultation" className="bg-brand text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-brand-dark transition-all flex items-center justify-center space-x-3 shadow-lg shadow-brand/20 hover:shadow-xl hover:-translate-y-0.5">
                  <span>Book a Consultation</span>
                  <ArrowRight size={20} />
                </Link>
                <Link to="/services" className="bg-white border border-gray-200 text-gray-700 px-8 py-5 rounded-2xl text-lg font-bold hover:border-brand/30 hover:text-brand transition-all text-center">
                  Explore Services
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-gray-400 font-medium pt-10">
                <span className="flex items-center space-x-2">
                  <Globe size={18} className="text-gray-300" />
                  <span>Trusted by Global Fortune 500s</span>
                </span>
                <span className="flex items-center space-x-2">
                  <UserCheck size={18} className="text-gray-300" />
                  <span>100% Expert Human Delivery</span>
                </span>
              </div>
            </div>
            
            <div className="relative hidden lg:block group">
              {/* Abstract Canvas Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 via-transparent to-brand/10 rounded-[4rem] blur-3xl -z-10 group-hover:from-brand/10 transition-colors duration-1000"></div>
              
              <div className="relative bg-gray-50/40 rounded-[4rem] p-6 border border-gray-100/50 shadow-inner overflow-hidden min-h-[650px] flex flex-col justify-center items-center">
                {/* Decorative Background Glows */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                   <div className="absolute top-1/4 -left-10 w-64 h-64 bg-brand/20 rounded-full blur-3xl animate-pulse"></div>
                   <div className="absolute bottom-1/4 -right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]"></div>
                </div>
                
                {/* Layered UI Snippets Cluster - Two on top, one bigger on bottom */}
                <div className="relative w-full flex flex-col items-center gap-8">
                  
                  {/* Top Row: Side by Side */}
                  <div className="flex w-full justify-center items-center gap-4">
                    {/* Card 1: Status (Left) */}
                    <div className="animate-float-slow transform -rotate-1 group-hover:rotate-0 transition-transform duration-700">
                      <div className="scale-[0.85] origin-center">
                        <MockUiSnippet type="status" />
                      </div>
                    </div>
                    {/* Card 2: Invoice (Right) */}
                    <div className="animate-float-fast transform rotate-1 group-hover:rotate-0 transition-transform duration-700">
                      <div className="scale-[0.85] origin-center">
                        <MockUiSnippet type="invoice" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Bigger card centered */}
                  <div className="animate-float-medium transform group-hover:scale-105 transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)">
                    <div className="scale-[0.9] origin-center">
                      <MockUiSnippet type="draft" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 mb-20">
            <div className="flex justify-center mb-4">
              <span className="px-4 py-1.5 bg-brand/5 text-brand rounded-full text-xs font-bold uppercase tracking-widest border border-brand/10">The Melotto Stance</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">We believe in humans supporting humans.</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              In an era of automated, low-quality output, Melotto Group stands as a bastion of quality, depth, and accuracy. We research, synthesize, and craft narratives that drive authority.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { 
                title: "Precision & Accuracy", 
                desc: "Every word is fact-checked and reviewed by specialists with real degrees in your field.",
                icon: <Search className="text-blue-600" />,
                accent: "bg-blue-50 border-blue-100"
              },
              { 
                title: "Deep Collaboration", 
                desc: "Work directly with your writer. No generic account managers or automated ticket systems.",
                icon: <MessageSquare className="text-indigo-600" />,
                accent: "bg-indigo-50 border-indigo-100"
              },
              { 
                title: "Zero AI Content", 
                desc: "We guarantee 100% human-originated work, ensuring total compliance and originality.",
                icon: <ShieldCheck className="text-emerald-600" />,
                accent: "bg-emerald-50 border-emerald-100"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className={`w-14 h-14 ${item.accent} border rounded-2xl flex items-center justify-center mb-8`}>
                  {item.icon}
                </div>
                <h4 className="text-2xl font-serif font-bold mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-brand text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to elevate your organization's voice?</h2>
              <p className="text-brand-light/90 text-xl leading-relaxed">Schedule a brief introduction to discuss your project needs and custom pricing with our leadership team.</p>
            </div>
            <Link to="/consultation" className="bg-white text-brand px-12 py-6 rounded-2xl font-bold text-xl hover:bg-brand-light transition-all shadow-2xl whitespace-nowrap hover:scale-105 active:scale-100">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
