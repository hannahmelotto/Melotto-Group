
import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-12 bg-white px-4">
      <div className="w-full max-w-[400px]">
        
        {!submitted ? (
          <>
            <div className="text-center mb-10">
              <h1 className="text-4xl font-serif font-bold mb-3 text-charcoal tracking-tight">Reset Password</h1>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                Enter your email address and we will send you instructions to reset your account.
              </p>
            </div>

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
              <button 
                disabled={loading}
                className={`w-full bg-brand text-white py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-dark active:scale-[0.99]'}`}
              >
                {loading ? 'Processing...' : 'Send Reset Link'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-3xl font-serif font-bold mb-4 text-charcoal">Check your email</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              We've sent a recovery link to your inbox. Please follow the instructions to reset your credentials.
            </p>
            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Notice</p>
              <p className="text-xs text-gray-500">Links are inactive in this preview environment.</p>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link to="/portal" className="text-[10px] font-bold text-gray-400 hover:text-brand transition-colors uppercase tracking-[0.2em]">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
