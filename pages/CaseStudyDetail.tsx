import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { CASE_STUDIES_DATA } from './CaseStudies.tsx';

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams();
  const data = CASE_STUDIES_DATA[slug as keyof typeof CASE_STUDIES_DATA];

  if (!data) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-gray-50 py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/case-studies" className="inline-flex items-center space-x-2 text-xs font-bold text-gray-400 hover:text-brand transition-colors mb-16 uppercase tracking-[0.2em]">
            <ArrowLeft size={16} />
            <span>Success Stories</span>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <span className="px-3 py-1 bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest rounded-lg border border-brand/10">{data.industry}</span>
                <span className="text-gray-300">/</span>
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{data.type}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal leading-[1.1] mb-8">
                {data.company}:<br />
                <span className="text-brand">Impact & Strategy.</span>
              </h1>
            </div>
            <div className="pb-4">
              <p className="text-2xl text-gray-500 font-serif font-medium leading-relaxed max-w-xl italic">
                "{data.outcome}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-24">
            {/* Main Narrative */}
            <div className="lg:col-span-2 space-y-20">
              <div className="space-y-8">
                <h2 className="text-3xl font-serif font-bold text-charcoal">The Background</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  {data.content.overview}
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-3xl font-serif font-bold text-charcoal">The Challenge</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  {data.content.challenge}
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-3xl font-serif font-bold text-charcoal">The Solution</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  {data.content.solution}
                </p>
              </div>
            </div>

            {/* Sidebar Stats & Info */}
            <div className="space-y-12">
              <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] sticky top-32">
                <h3 className="text-xl font-serif font-bold mb-10 text-gray-900 border-b border-gray-50 pb-6">Core Results</h3>
                <ul className="space-y-8">
                  {data.content.results.map((result, i) => (
                    <li key={i} className="flex items-start space-x-5">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-brand-light text-brand rounded-full flex items-center justify-center">
                        <CheckCircle2 size={14} strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 font-bold leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-8 border-t border-gray-50">
                  <Link to="/consultation" className="text-brand font-bold text-sm uppercase tracking-widest hover:underline block text-center">
                    Discuss a Similar Project &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-charcoal text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Elevate your project standards.</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Our approach is built on depth, research, and technical precision. Let's discuss how we can support your organization's messaging goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/consultation" className="bg-brand text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-dark transition-all shadow-2xl shadow-brand/20">
              Book a Consultation
            </Link>
            <Link to="/case-studies" className="bg-white/5 text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/10 hover:bg-white/10 transition-all">
              View More Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;