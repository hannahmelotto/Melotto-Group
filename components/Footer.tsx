import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-serif font-bold tracking-tight text-charcoal">
                Melotto<span className="text-brand">Group</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Professional writing, research, and strategy. Human-led by design, quality-driven by nature.
            </p>
            <div className="flex items-center space-x-2 text-brand font-bold text-xs uppercase tracking-widest border border-brand/10 bg-brand-light px-3 py-1.5 rounded-lg w-fit">
              <ShieldAlert size={14} />
              <span>Anti-AI Certified</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-charcoal">The Group</h4>
            <ul className="space-y-4">
              <li><Link to="/team" className="text-sm text-gray-500 hover:text-brand transition-colors">Our Team</Link></li>
              <li><Link to="/services" className="text-sm text-gray-500 hover:text-brand transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-sm text-gray-500 hover:text-brand transition-colors">Case Studies</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-500 hover:text-brand transition-colors">Pricing Philosophy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-charcoal">Access</h4>
            <ul className="space-y-4">
              <li><Link to="/portal" className="text-sm text-gray-500 hover:text-brand transition-colors">Client Portal</Link></li>
              <li><Link to="/consultation" className="text-sm text-gray-500 hover:text-brand transition-colors">Book a Consultation</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-500 hover:text-brand transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-500 hover:text-brand transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-charcoal">Location</h4>
            <address className="not-italic text-sm text-gray-500 leading-relaxed">
              Melotto Group LLC<br />
              1500 Chestnut St Suite 2<br />
              Philadelphia, PA 19102<br />
              United States
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-medium tracking-wider uppercase">
          <p>© {new Date().getFullYear()} Melotto Group LLC. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Humans Supporting Humans™</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;