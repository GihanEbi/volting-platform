
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WrongNetwork: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-dark min-h-screen flex flex-col overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none"></div>
      
      <header className="flex items-center justify-between border-b border-[#262626] px-6 lg:px-10 py-4 bg-[#141414] z-20">
        <div className="flex items-center gap-4 text-white">
          <span className="material-symbols-outlined text-primary text-3xl">how_to_vote</span>
          <h2 className="text-lg font-bold">Voting DApp</h2>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-[#262626] border border-red-900/40 text-red-400 text-xs font-bold px-3 py-2 opacity-80 cursor-not-allowed">
          <span className="material-symbols-outlined text-[16px]">warning</span>
          <span>WRONG NETWORK</span>
        </button>
      </header>

      <main className="relative flex-1 flex flex-col items-center justify-center p-4 z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="w-full max-w-[460px] bg-[#262626] rounded-xl border border-[#333] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col backdrop-blur-sm">
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-90"></div>
          <div className="p-8 md:p-10 flex flex-col items-center text-center">
            <div className="relative mb-8 mt-2">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl transform scale-110"></div>
              <div className="relative bg-[#1A1A1A] border border-red-500/20 rounded-full p-6 flex items-center justify-center ring-1 ring-red-500/10">
                <span className="material-symbols-outlined text-red-500 text-5xl">wifi_off</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-[-0.03em]">Wrong Network</h1>
            <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-[340px]">
              This DApp currently only supports the <strong className="text-white">Sepolia Testnet</strong>. You are connected to an unsupported network.
            </p>
            <div className="w-full flex flex-col gap-4">
              <button onClick={() => navigate('/')} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-12 rounded-lg flex items-center justify-center gap-3 transition-all uppercase tracking-wide text-sm shadow-lg shadow-red-600/20">
                <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
                <span>Switch to Sepolia Testnet</span>
              </button>
              <button className="text-slate-500 hover:text-slate-300 text-xs font-bold uppercase tracking-widest py-3 flex items-center justify-center gap-2 transition-colors">
                <span className="material-symbols-outlined text-[16px]">logout</span>
                Disconnect Wallet
              </button>
            </div>
          </div>
          <div className="bg-[#1f1f1f] px-6 py-3 border-t border-[#333] flex justify-between items-center text-[10px] text-[#444] font-mono uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-red-500 animate-pulse"></span>
              Connection Halted
            </span>
            <span>Error 0xAE41</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WrongNetwork;
