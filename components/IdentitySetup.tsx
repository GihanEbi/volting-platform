
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types';

interface Props {
  user: User;
}

const IdentitySetup: React.FC<Props> = ({ user }) => {
  const [handle, setHandle] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/dashboard');
  };

  return (
    <div className="bg-background-dark min-h-screen flex flex-col relative">
      <div className="absolute inset-0 bg-[radial-gradient(#2d2a37_1px,transparent_1px)] bg-[length:40px_40px] opacity-20 pointer-events-none"></div>
      
      <header className="w-full border-b border-[#2d2a37] bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <div className="size-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-xl">how_to_vote</span>
            </div>
            <h2 class="text-white text-lg font-bold tracking-tight">VoteChain</h2>
          </div>
          <div class="hidden md:flex items-center gap-3 bg-surface-dark border border-[#2d2a37] rounded-full pl-1 pr-4 py-1">
            <div class="size-6 rounded-full bg-gradient-to-tr from-green-400 to-blue-500"></div>
            <span class="text-xs font-medium text-slate-400 font-mono tracking-wide">{user.address}</span>
            <div class="size-2 bg-green-500 rounded-full animate-pulse ml-2"></div>
          </div>
        </div>
      </header>

      <main class="flex-grow flex items-center justify-center p-6">
        <div class="relative w-full max-w-lg">
          <div class="bg-[#1f1d26] border border-[#2d2a37] rounded-2xl shadow-[0_0_40px_-10px_rgba(100,60,221,0.3)] p-8 md:p-10 flex flex-col gap-8">
            <div class="text-center space-y-2">
              <div class="mx-auto size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 text-primary">
                <span class="material-symbols-outlined text-4xl">fingerprint</span>
              </div>
              <h1 class="text-3xl font-bold text-white tracking-tight">Establish Identity</h1>
              <p class="text-slate-400 text-base max-w-sm mx-auto">
                Your display name helps the community recognize your contributions and votes on the chain.
              </p>
            </div>

            <div class="bg-background-dark border border-dashed border-[#2d2a37] rounded-xl p-4 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="size-10 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
                <div class="flex flex-col">
                  <span class="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Connected Wallet</span>
                  <span class="text-white font-mono text-sm">{user.address}</span>
                </div>
              </div>
              <button class="text-slate-500 hover:text-white transition-colors p-2 rounded-lg">
                <span class="material-symbols-outlined text-lg">logout</span>
              </button>
            </div>

            <div class="space-y-6">
              <div class="space-y-2">
                <label class="block text-sm font-medium text-white ml-1">Display Name</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                    <span class="material-symbols-outlined">alternate_email</span>
                  </div>
                  <input 
                    type="text"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    className="block w-full rounded-xl bg-background-dark border-[#2d2a37] text-white pl-11 pr-4 py-4 focus:border-primary focus:ring-1 focus:ring-primary placeholder-slate-600 transition-all font-medium"
                    placeholder="Choose a unique handle"
                  />
                </div>
                <p class="text-xs text-slate-500 flex items-center gap-1.5 ml-1 mt-2">
                  <span class="material-symbols-outlined text-[14px]">public</span>
                  Publicly visible on proposals and leaderboards.
                </p>
              </div>

              <div class="flex flex-col gap-3 pt-2">
                <button onClick={handleSave} class="w-full bg-primary hover:bg-[#502db8] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2">
                  <span>Save Identity</span>
                  <span class="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
                <button onClick={() => navigate('/dashboard')} class="w-full bg-transparent hover:bg-white/5 text-slate-500 hover:text-white font-medium py-3 px-6 rounded-xl transition-colors text-sm">
                  Skip for now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IdentitySetup;
