
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

interface Props {
  user: User;
}

const ResultsPage: React.FC<Props> = ({ user }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-dark">
      {/* Sidebar - Same as Dashboard */}
      <aside className="flex w-72 flex-col border-r border-[#2d2a37] bg-[#131217] p-4 flex-shrink-0 hidden lg:flex">
        <div className="flex flex-col gap-8 h-full">
          <Link to="/" className="text-white text-2xl font-bold px-2">ChainVote</Link>
          <div className="flex flex-col gap-2 flex-1">
            <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#2d2a37] text-slate-400">
              <span className="material-symbols-outlined">dashboard</span>
              <span>Dashboard</span>
            </Link>
            <Link to="/rewards" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/20 border border-primary/20 text-white">
              <span className="material-symbols-outlined text-primary fill-1">trophy</span>
              <span className="font-bold">Results</span>
            </Link>
          </div>
          <div className="mt-auto px-4 py-4 border-t border-[#2d2a37]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">JS</div>
              <div className="flex flex-col">
                <p className="text-white text-sm font-medium">{user.name}</p>
                <p className="text-slate-500 text-xs">{user.address}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-8 pb-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary font-medium text-sm tracking-wide uppercase">
              <span className="material-symbols-outlined text-lg">check_circle</span>
              Voting Completed
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-white">
              DeFi Governance Round #42
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              Consensus reached on "Liquidity Mining Proposal v3". Rewards have been distributed to 400 participants.
            </p>
          </div>

          {/* Claim Banner */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-[#2d2a37] to-[#1c1a22] p-1">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 bg-[#131217]/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-5 text-left w-full">
                <div className="w-14 h-14 rounded-full bg-[#2d2a37] border border-[#423d51] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">celebration</span>
                </div>
                <div>
                  <p className="text-white text-lg font-bold">Congratulations! You placed 12th.</p>
                  <p className="text-slate-400 text-sm">Your contribution earned you <span className="text-white font-mono font-medium">50.00 TOKEN</span></p>
                </div>
              </div>
              <button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/40">
                Claim Reward
              </button>
            </div>
          </div>

          {/* Podium */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-500">emoji_events</span>
              <h3 className="text-xl font-bold">Top Contributors</h3>
            </div>
            <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-6 min-h-[360px]">
              {/* 2nd Place */}
              <div className="order-2 md:order-1 w-full md:w-1/3">
                <div className="relative p-6 rounded-t-3xl rounded-b-xl border border-slate-500/30 bg-slate-800/40 h-[300px] flex flex-col items-center gap-4">
                  <div className="absolute -top-6 w-12 h-12 bg-slate-400 rounded-full flex items-center justify-center font-bold text-black border-2 border-background-dark">2</div>
                  <img src="https://picsum.photos/seed/winner2/100/100" class="w-20 h-20 rounded-full border-2 border-slate-400 mt-4" alt="Silver" />
                  <div class="text-center">
                    <h4 class="text-white font-bold">BlockBuilder</h4>
                    <p class="text-slate-400 text-xs">0x89...2b1a</p>
                  </div>
                  <p class="mt-auto text-slate-300 font-bold text-xl">1,500 <span class="text-sm">TKN</span></p>
                </div>
              </div>
              {/* 1st Place */}
              <div className="order-1 md:order-2 w-full md:w-1/3 z-10">
                <div className="relative p-8 rounded-t-3xl rounded-b-xl border border-yellow-500/30 bg-yellow-900/20 h-[360px] flex flex-col items-center gap-4">
                  <div className="absolute -top-8 text-yellow-500"><span class="material-symbols-outlined text-6xl">crown</span></div>
                  <img src="https://picsum.photos/seed/winner1/100/100" class="w-24 h-24 rounded-full border-2 border-yellow-500 mt-4" alt="Gold" />
                  <div class="text-center">
                    <h4 class="text-white font-bold text-2xl">CryptoKing</h4>
                    <p class="text-yellow-500/80 text-sm">0x3f...9e21</p>
                  </div>
                  <p class="mt-auto text-yellow-400 font-bold text-3xl">2,000 <span class="text-base">TKN</span></p>
                </div>
              </div>
              {/* 3rd Place */}
              <div className="order-3 w-full md:w-1/3">
                <div className="relative p-6 rounded-t-3xl rounded-b-xl border border-orange-700/30 bg-orange-900/20 h-[280px] flex flex-col items-center gap-4">
                  <div className="absolute -top-6 w-12 h-12 bg-orange-700 rounded-full flex items-center justify-center font-bold text-black border-2 border-background-dark">3</div>
                  <img src="https://picsum.photos/seed/winner3/100/100" class="w-20 h-20 rounded-full border-2 border-orange-700 mt-4" alt="Bronze" />
                  <div class="text-center">
                    <h4 class="text-white font-bold">ChainDev</h4>
                    <p class="text-orange-400/80 text-sm">0x7a...4c88</p>
                  </div>
                  <p class="mt-auto text-orange-400 font-bold text-xl">1,000 <span class="text-sm">TKN</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResultsPage;
