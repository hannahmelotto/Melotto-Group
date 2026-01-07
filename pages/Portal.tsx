
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.tsx';

interface PortalProps {
  isStaff?: boolean;
}

const Portal: React.FC<PortalProps> = ({ isStaff = false }) => {
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setLoading(false);
      setError(`The ${isStaff ? 'Staff Panel' : 'Client Portal'} is currently undergoing maintenance.`);
    }, 1200);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-12 bg-white px-4">
      <SEO 
        title={isStaff ? "Staff Workspace Login" : "Client Project Portal"} 
        description="Secure login for Melotto Group clients and staff. Manage your active content projects, review drafts, and collaborate with your specialist." 
      />
      <div className="w-full max-w-[400px]">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-3 text-charcoal tracking-tight">
            {isStaff ? 'Staff Login' : 'Client Login'}
          </h1>
          <p className="text-gray-500 text-sm font-medium">
            {isStaff 
              ? 'Enter your credentials to access the internal workspace.' 
              : 'Sign in to manage your active projects and drafts.'}
          </p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-gray-50 text-gray-800 rounded-xl text-sm border border-gray-100 text-center">
            <p className="font-semibold text-charcoal mb-1">Notice</p>
            <p className="opacity-70">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
            <input 
              required
              type="email" 
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-brand transition-all text-gray-700 font-medium"
              placeholder="name@company.com"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Password</label>
              <Link to="/forgot-password" size="sm" className="text-[10px] font-bold text-brand uppercase tracking-widest hover:underline">Forgot?</Link>
            </div>
            <input 
              required
              type="password" 
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-brand transition-all text-gray-700 font-medium"
              placeholder="••••••••"
            />
          </div>
          <button 
            disabled={loading}
            className={`w-full bg-brand text-white py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-dark active:scale-[0.99]'}`}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-12 text-center">
          {!isStaff ? (
            <Link to="/staff-login" className="text-[10px] font-bold text-gray-300 hover:text-brand transition-colors uppercase tracking-[0.2em]">
              Staff Login
            </Link>
          ) : (
            <Link to="/portal" className="text-[10px] font-bold text-brand hover:underline uppercase tracking-[0.2em]">
              Return to Client Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portal;
