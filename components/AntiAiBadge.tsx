
import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface AntiAiBadgeProps {
  className?: string;
}

const AntiAiBadge: React.FC<AntiAiBadgeProps> = ({ className = "" }) => {
  return (
    <div className={`inline-flex items-center space-x-2 bg-brand-light text-brand px-4 py-2 rounded-full border border-brand/20 ${className}`}>
      <ShieldCheck size={18} className="text-brand" />
      <span className="text-xs font-bold uppercase tracking-widest">Anti-AI Content Alliance</span>
    </div>
  );
};

export default AntiAiBadge;
