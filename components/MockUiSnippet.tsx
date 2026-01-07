
import React from 'react';
import { FileText, CheckCircle2, Clock, DollarSign, BarChart3, ArrowUpRight } from 'lucide-react';

type MockType = 'status' | 'draft' | 'invoice' | 'analytics';

interface MockUiSnippetProps {
  type: MockType;
}

const MockUiSnippet: React.FC<MockUiSnippetProps> = ({ type }) => {
  // Enhanced shadow with better spread and lower opacity to look natural when scaled.
  // Removed any filters or backdrops that might cause "ghost box" rendering artifacts.
  const cardClasses = "bg-white rounded-[2rem] border border-gray-100/50 shadow-[0_30px_70px_-10px_rgba(0,0,0,0.1)] p-6 w-full max-w-[300px] transition-all duration-500 ease-out will-change-transform";

  if (type === 'status') {
    return (
      <div className={cardClasses}>
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">Live Status</span>
          </div>
          <span className="bg-brand/10 text-brand text-[9px] font-bold px-2.5 py-1 rounded-full border border-brand/5">ACTIVE</span>
        </div>
        <div className="space-y-5">
          <div>
            <div className="flex justify-between text-[11px] mb-2">
              <span className="font-bold text-gray-800">Clinical Research v4</span>
              <span className="text-brand font-bold">85%</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div className="bg-brand h-full w-[85%] rounded-full shadow-sm shadow-brand/20"></div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-gray-50">
            <div className="flex -space-x-2.5">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="team" />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-semibold text-gray-400">Reviewing now</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'draft') {
    return (
      <div className={cardClasses}>
        <div className="flex items-start justify-between mb-5">
          <div className="p-3 bg-brand-light rounded-2xl border border-brand/5 shadow-sm shadow-brand/5">
            <FileText size={22} className="text-brand" />
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Version 3.2</p>
            <p className="text-[10px] text-green-600 font-bold mt-0.5">Ready for Final Approval</p>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="text-base font-bold text-gray-900 leading-tight mb-2">Voice_Strategy_Final.pdf</h4>
          <p className="text-[12px] text-gray-500 leading-relaxed font-medium">Completed editorial review and technical compliance check.</p>
        </div>
        <button className="group/btn w-full bg-charcoal text-white py-3.5 rounded-2xl text-[13px] font-bold hover:bg-brand transition-all flex items-center justify-center space-x-2 shadow-xl shadow-gray-200 hover:shadow-brand/20">
          <CheckCircle2 size={16} className="transition-transform group-hover/btn:scale-110" />
          <span>Approve Content</span>
        </button>
      </div>
    );
  }

  if (type === 'invoice') {
    return (
      <div className={cardClasses}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Project Investment</p>
            <h3 className="text-2xl font-serif font-bold text-gray-900">$4,850.00</h3>
          </div>
          <div className="p-2.5 bg-gray-50 rounded-xl text-gray-400 border border-gray-100">
            <DollarSign size={20} />
          </div>
        </div>
        <div className="space-y-4 mb-5">
          <div className="flex justify-between items-center text-[12px]">
            <span className="text-gray-500 font-medium">Research Hours (12)</span>
            <span className="font-bold text-gray-900">$2,400</span>
          </div>
          <div className="flex justify-between items-center text-[12px]">
            <span className="text-gray-500 font-medium">Editorial Design</span>
            <span className="font-bold text-gray-900">$1,250</span>
          </div>
          <div className="flex justify-between items-center text-[12px] pt-3 border-t border-gray-100">
            <span className="text-gray-900 font-bold italic">Total</span>
            <span className="font-bold text-brand text-sm">$3,650</span>
          </div>
        </div>
        <div className="text-[10px] text-center text-gray-400 font-bold tracking-tight bg-gray-50/50 py-1.5 rounded-lg border border-gray-100/50 uppercase">Auto-pay: Oct 1st</div>
      </div>
    );
  }

  return (
    <div className={cardClasses}>
      <div className="flex items-center justify-between mb-5">
        <div className="p-2.5 bg-brand-light rounded-xl">
          <BarChart3 size={20} className="text-brand" />
        </div>
        <span className="text-[10px] font-bold text-brand uppercase tracking-widest">Analytics</span>
      </div>
      <div className="space-y-5">
        <div className="h-28 flex items-end justify-between px-2">
          {[40, 70, 45, 90, 65, 80].map((h, i) => (
            <div key={i} className="w-2.5 bg-gray-100 rounded-t-full relative group/bar">
              <div 
                className="absolute bottom-0 w-full bg-brand/30 rounded-t-full transition-all duration-700 group-hover/bar:bg-brand" 
                style={{ height: `${h}%` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="pt-2">
          <p className="text-[12px] font-bold text-gray-800">Reach Growth</p>
          <div className="flex items-center text-green-600 space-x-1 mt-1">
            <ArrowUpRight size={14} strokeWidth={3} />
            <span className="text-sm font-bold">+24.8%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockUiSnippet;
