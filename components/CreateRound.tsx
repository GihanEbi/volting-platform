
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateRound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-dark">
      {/* Sidebar - Same */}
      <aside className="w-72 hidden md:flex flex-col border-r border-[#2d2a37] bg-background-dark h-full">
        <div className="p-6">
          <div className="flex flex-col gap-1 mb-8">
            <h1 className="text-white text-xl font-bold">Admin Portal</h1>
            <p className="text-slate-500 text-[10px] uppercase tracking-wider">Web3 DApp Manager</p>
          </div>
          <nav className="flex flex-col gap-2">
            <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link to="/admin/create" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
              <span className="material-symbols-outlined fill-1">how_to_vote</span>
              <span className="text-sm font-bold">Voting</span>
            </Link>
          </nav>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        <header className="relative z-10 flex items-center justify-between border-b border-[#2d2a37] px-8 py-5 bg-background-dark/80 backdrop-blur-md">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/admin" className="text-slate-500 hover:text-white">Dashboard</Link>
            <span className="text-slate-700">/</span>
            <span className="text-primary font-medium">Create New Round</span>
          </div>
          <button onClick={() => navigate('/admin')} className="text-white bg-surface-dark border border-[#2d2a37] px-4 py-2 rounded-lg text-sm font-bold">Save Draft</button>
        </header>

        <div className="relative z-10 flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-5xl mx-auto flex flex-col gap-8 pb-20">
            <div className="mb-4">
              <h2 className="text-4xl font-bold text-white tracking-tight mb-2">Initialize New Voting Round</h2>
              <p className="text-slate-500 text-lg">Configure parameters for the next governance cycle.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 flex flex-col gap-8">
                <section className="bg-surface-dark border border-[#2d2a37] rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                    <span className="material-symbols-outlined text-primary">edit_document</span>
                    <h3 className="text-lg font-bold text-white">General Information</h3>
                  </div>
                  <div className="flex flex-col gap-6">
                    <label className="flex flex-col gap-2">
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Round Name</span>
                      <input className="w-full bg-[#131217] border border-[#2d2a37] rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary" placeholder="e.g., Q3 Governance Grant Allocation" />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Description</span>
                      <textarea className="w-full bg-[#131217] border border-[#2d2a37] rounded-xl p-4 text-white placeholder-slate-600 h-40 focus:border-primary focus:ring-1 focus:ring-primary resize-none" placeholder="Describe the purpose of this voting round..."></textarea>
                    </label>
                  </div>
                </section>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-8">
                <section className="bg-surface-dark border border-[#2d2a37] rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-accent-teal">token</span>
                    <h3 className="text-lg font-bold text-white">Token Allocation</h3>
                  </div>
                  <div className="flex flex-col gap-6">
                    <label className="flex flex-col gap-2">
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">ERC-20 Asset</span>
                      <select className="w-full bg-[#131217] border border-[#2d2a37] rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary">
                        <option>UNI (Uniswap)</option>
                        <option>ETH (Ethereum)</option>
                        <option>USDC (USD Coin)</option>
                      </select>
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Amount</span>
                      <input className="w-full bg-[#131217] border border-[#2d2a37] rounded-xl px-4 py-3 text-white font-mono" type="text" defaultValue="50,000" />
                    </label>
                  </div>
                </section>
              </div>
            </div>
            
            <div className="fixed bottom-0 right-0 left-0 lg:left-72 z-50 p-6 bg-gradient-to-t from-background-dark via-background-dark to-transparent">
              <div className="max-w-5xl mx-auto flex justify-end">
                <button onClick={() => navigate('/admin')} className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(100,60,221,0.4)]">
                  <span className="material-symbols-outlined">rocket_launch</span>
                  Publish Round to Blockchain
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateRound;
