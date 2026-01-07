
import React, { useEffect } from 'react';
import { Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO.tsx';

const Consultation: React.FC = () => {
  useEffect(() => {
    // Load Calendly script dynamically
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="py-24 bg-white">
      <SEO 
        title="Book a Strategic Consultation" 
        description="Schedule a 30-minute discovery session with the Melotto Group leadership team. Discuss your organization's messaging goals and project requirements in full confidentiality." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <h1 className="text-5xl font-serif font-bold mb-8 text-charcoal tracking-tight">The First Step Towards Clarity.</h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Our consultations are non-transactional discovery calls. We want to understand your vision, your audience, and the impact you need to make.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: <Clock />, title: "30-Minute Discovery", desc: "A focused, strategic session to gauge project fit and scope." },
                { icon: <MessageSquare />, title: "Direct to Leadership", desc: "Speak with a founder or senior strategist immediately." },
                { icon: <ShieldCheck />, title: "Full Privacy", desc: "All discussions are considered confidential by default." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-light text-brand rounded-xl">
                    {/* Fix: Explicitly cast to React.ReactElement<any> to resolve TypeScript error where 'size' is not recognized on the base ReactElement type */}
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-charcoal">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-sm text-gray-500 italic leading-relaxed">
                "We respect your time. These sessions are designed to provide immediate value by helping you articulate your messaging goals, regardless of whether we move forward together."
              </p>
            </div>
          </div>

          <div className="relative">
            {/* 
                The container is now set to bg-white with a clean border as requested.
                The height is pinned to 630px to match the widget's content area perfectly, 
                eliminating any "grey background" or empty space beneath the embed.
            */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/[0.02] overflow-hidden max-h-[630px]">
              <div 
                className="calendly-inline-widget w-full" 
                data-url="https://calendly.com/melottogroup/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=115cef" 
                style={{ minWidth: '320px', height: '630px' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
