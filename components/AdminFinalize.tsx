
import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

const AdminFinalize: React.FC = () => {
  const navigate = useNavigate();
  const [isDistributing, setIsDistributing] = useState(false);

  const handleDistribute = () => {
    setIsDistributing(true);
    setTimeout(() => {
      navigate('/rewards');
    }, 2000);
  };

  return (
    <div className="bg-background-dark min-h-screen text-white flex flex-col">
      <header className="flex items-center justify-between border-b border-[#27363a] px-6 lg:px-10 py-4 bg-[#101718] z-50">
        <div className="flex items-center gap-4">
          <Link to="/admin" className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-lg">
            <span className="material-symbols-outlined">how_to_vote</span>
          </Link>
          <h2 className="text-lg font-bold">Voting Admin <span class="text-slate-500 font-normal mx-2">/</span> Round #802</h2>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/admin" class="text-slate-400 hover:text-primary">Dashboard</Link>
          <span class="text-white border-b-2 border-primary pb-0.5">Rounds</span>
          <Link to="/admin/treasury" class="text-slate-400 hover:text-primary">Treasury</Link>
        </nav>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-left">
          <div class="flex flex-col gap-2">
            <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-4">
              DeFi Education Initiative
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium uppercase">
                <span class="material-symbols-outlined text-[16px]">check_circle</span> Completed
              </span>
            </h1>
            <p class="text-slate-400 text-lg">Review final scores, verify calculations, and execute the reward distribution.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <section className="bg-surface-dark rounded-xl border border-[#27363a] p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">trophy</span> Top 3 Winners
                  </h3>
                </div>
                <div class="text-right">
                  <span class="block text-2xl font-bold text-primary">850 TKN</span>
                  <span class="text-xs text-slate-500 uppercase tracking-wider">Total Pool</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end pt-4 text-left">
                {/* 2nd Place */}
                <div className="order-2 sm:order-1 flex flex-col items-center">
                  <div className="relative mb-3">
                    <img src="https://picsum.photos/seed/win2/100/100" class="w-16 h-16 rounded-full border-2 border-slate-600" />
                    <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-700 text-white text-xs font-bold px-2 py-0.5 rounded-md">#2</div>
                  </div>
                  <div class="text-center p-4 bg-[#1e3036] rounded-lg w-full border border-[#27363a]">
                    <p class="font-bold">Bob.lens</p>
                    <p class="text-primary font-mono text-sm mt-1">92.0 Pts</p>
                  </div>
                </div>
                {/* 1st Place */}
                <div className="order-1 sm:order-2 flex flex-col items-center">
                  <div className="relative mb-3">
                    <img src="https://picsum.photos/seed/win1/100/100" class="w-24 h-24 rounded-full border-2 border-primary" />
                    <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-black text-sm font-black px-3 py-1 rounded-md">#1</div>
                  </div>
                  <div class="text-center p-5 bg-gradient-to-b from-[#1e3036] to-[#16262b] rounded-lg w-full border border-primary/30">
                    <p class="font-bold text-lg">Alice.eth</p>
                    <p class="text-primary font-mono font-bold mt-1">98.5 Pts</p>
                  </div>
                </div>
                {/* 3rd Place */}
                <div className="order-3 sm:order-3 flex flex-col items-center">
                  <div className="relative mb-3">
                    <img src="https://picsum.photos/seed/win3/100/100" class="w-16 h-16 rounded-full border-2 border-orange-700" />
                    <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#7c4d21] text-white text-xs font-bold px-2 py-0.5 rounded-md">#3</div>
                  </div>
                  <div class="text-center p-4 bg-[#1e3036] rounded-lg w-full border border-[#27363a]">
                    <p class="font-bold">Charlie.sol</p>
                    <p class="text-primary font-mono text-sm mt-1">88.2 Pts</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-surface-dark rounded-xl border border-[#27363a] p-6 shadow-xl sticky top-6 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <h3 className="text-lg font-bold">Finalize Round</h3>
              </div>
              <div className="space-y-6">
                <div className="relative pl-4 space-y-6 border-l border-[#27363a]">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-primary"></div>
                    <p className="text-sm font-medium">Voting Period Ended</p>
                    <p className="text-xs text-slate-500">Oct 24, 14:00 UTC</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-background-dark border-2 border-primary animate-pulse"></div>
                    <p className="text-sm font-medium text-primary">Awaiting Distribution</p>
                  </div>
                </div>
                
                <div className="bg-[#1e3036] rounded-lg p-3 flex justify-between items-center text-sm border border-[#27363a]">
                  <span className="text-slate-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">local_gas_station</span> Est. Gas
                  </span>
                  <span className="font-mono font-bold text-white">0.004 ETH</span>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex gap-3">
                  <span className="material-symbols-outlined text-red-500 shrink-0">warning</span>
                  <p className="text-xs text-red-400">
                    <strong>Warning:</strong> This action creates an irreversible on-chain transaction.
                  </p>
                </div>

                <button 
                  onClick={handleDistribute}
                  disabled={isDistributing}
                  className="w-full bg-primary hover:bg-[#33d3ff] text-black font-bold h-12 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/40 disabled:opacity-50"
                >
                  {isDistributing ? 'Distributing...' : 'Distribute Rewards'}
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminFinalize;
