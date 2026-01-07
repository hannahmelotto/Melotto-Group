import React from 'react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const models = [
    {
      title: "Per-Project",
      desc: "Ideal for one-off needs with clearly defined scopes.",
      points: ["Defined deliverables", "Fixed timeline", "Specialized focus", "Zero revision surprises"]
    },
    {
      title: "Monthly Retainer",
      desc: "Continuous support for growing, high-velocity organizations.",
      points: ["Priority scheduling", "Consistent voice", "Strategic alignment", "Reserved capacity"]
    },
    {
      title: "Enterprise",
      desc: "Custom agreements for high-volume, multi-departmental needs.",
      points: ["Cross-department support", "Custom workflows", "Bulk-scale efficiency", "Dedicated lead strategist"]
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-1.5 bg-brand/5 text-brand rounded-full text-xs font-bold uppercase tracking-widest border border-brand/10">Investment</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Built for Impact.</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We don't offer generic "packages." We offer custom solutions priced fairly based on the expertise, complexity, and impact your project demands.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-28">
          {models.map((model, idx) => (
            <div key={idx} className="p-12 rounded-[2.5rem] border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group">
              <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">{model.title}</h3>
              <p className="text-gray-500 mb-10 leading-relaxed">{model.desc}</p>
              <ul className="space-y-5 mb-12 flex-grow">
                {model.points.map((p, i) => (
                  <li key={i} className="flex items-center space-x-4 text-gray-700 font-medium">
                    <div className="flex-shrink-0 w-5 h-5 bg-brand/5 text-brand rounded-full flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Link to="/consultation" className="w-full py-5 bg-gray-50 text-gray-900 text-center rounded-2xl font-bold hover:bg-brand hover:text-white transition-all flex items-center justify-center space-x-2">
                <span>Discuss Options</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-brand-light/40 p-16 rounded-[3.5rem] border border-brand/10 shadow-inner">
          <div className="flex flex-col md:flex-row items-start space-y-10 md:space-y-0 md:space-x-12">
            <div className="p-4 bg-brand text-white rounded-[1.5rem] flex-shrink-0 shadow-lg shadow-brand/20">
              <Info size={32} />
            </div>
            <div className="space-y-10">
              <h2 className="text-4xl font-serif font-bold text-gray-900">The Melotto Pricing Philosophy</h2>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-4">
                  <h4 className="font-bold text-xl text-brand uppercase tracking-widest text-[10px]">Specialized Expertise</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our pricing reflects the decades of combined experience our team brings. You aren't just paying for words; you're paying for the specialized knowledge required to make those words matter.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-xl text-brand uppercase tracking-widest text-[10px]">Complexity Oriented</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A technical clinical trial report requires different resources than a creative brand manifesto. We scope every project individually to ensure you only pay for the specific expertise required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;