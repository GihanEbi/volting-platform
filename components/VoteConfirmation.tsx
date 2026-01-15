
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types';

interface Props {
  user: User;
}

const VoteConfirmation: React.FC<Props> = ({ user }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/results/1');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-background-dark">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="w-full max-w-[440px] bg-surface-dark rounded-xl shadow-[0_0_40px_-10px_rgba(100,60,221,0.3)] border border-white/10 overflow-hidden relative backdrop-blur-sm">
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
          <div className="h-full w-2/3 bg-accent-teal animate-pulse"></div>
        </div>
        
        <div className="p-6 md:p-8 flex flex-col gap-6 text-center">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm animate-pulse">radio_button_checked</span>
              Awaiting Signature
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white">Confirm Your Vote</h1>
            <p className="text-slate-400 text-sm font-mono bg-black/20 inline-block px-3 py-1 rounded-md border border-white/5">
              Wallet: {user.address}
            </p>
          </div>

          <div className="relative w-full aspect-[2.5/1] rounded-lg overflow-hidden bg-black border border-white/5">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800')] opacity-30 bg-cover bg-center"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-5xl animate-bounce">rocket_launch</span>
            </div>
          </div>

          <div className="space-y-3 text-left">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-500 font-bold px-1">
              <span>Action Summary</span>
              <span>Vote Weight: 1.0</span>
            </div>
            <div className="bg-[#1A1825] rounded-lg p-1 border border-white/5 shadow-inner">
              {[
                { name: 'Project Alpha', score: '9.0' },
                { name: 'Project Beta', score: '7.5' }
              ].map(item => (
                <div key={item.name} className="flex justify-between items-center p-3 hover:bg-white/5 rounded transition-colors group">
                  <div className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">check_circle</span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="text-white font-bold text-sm bg-white/10 px-2 py-0.5 rounded shadow-sm">{item.score}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background-dark/50 rounded-lg p-4 border border-primary/20 flex justify-between items-end">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-xs text-primary font-bold uppercase flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">bolt</span> Est. Fee
              </span>
              <span className="text-xs text-slate-400">Speed: <span className="text-green-500">Fast</span></span>
            </div>
            <div className="text-right">
              <div className="text-white font-bold font-mono text-lg leading-none">0.0042 ETH</div>
              <div className="text-xs text-slate-500 mt-1">~$12.50 USD</div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={handleConfirm}
              disabled={loading}
              className={`w-full bg-primary hover:bg-[#592ADE] text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <span class="animate-spin material-symbols-outlined">progress_activity</span>
              ) : (
                <>
                  <span>Confirm Transaction</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </>
              )}
            </button>
            <button onClick={() => navigate(-1)} className="text-slate-500 hover:text-white py-2 text-sm font-medium">
              Reject & Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteConfirmation;
