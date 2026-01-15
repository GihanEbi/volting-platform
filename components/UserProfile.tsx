
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

interface Props {
  user: User;
}

const UserProfile: React.FC<Props> = ({ user }) => {
  return (
    <div className="bg-background-dark min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-3">
            <div className="flex items-center justify-center size-8 bg-primary rounded-lg text-white">
              <span className="material-symbols-outlined text-[20px]">how_to_vote</span>
            </div>
            <span className="text-xl font-bold tracking-tight">EDU Vote</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/dashboard" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Vote</Link>
            <span className="text-sm font-medium text-white border-b-2 border-primary pb-5">Profile</span>
            <Link to="/dashboard" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Settings</Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-xs font-mono font-medium text-primary">Sepolia Testnet</span>
            </div>
            <button class="flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-card-dark border border-white/10">
              <div class="size-6 rounded-full bg-gradient-to-tr from-blue-400 to-primary"></div>
              <span class="text-sm font-bold text-gray-200">{user.address}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="relative p-6 rounded-xl bg-card-dark border border-card-border shadow-xl flex flex-col sm:flex-row gap-6 text-left">
              <div className="shrink-0 relative">
                <div className="size-32 rounded-xl overflow-hidden ring-4 ring-background-dark shadow-lg">
                  <img src="https://picsum.photos/seed/profile/200/200" class="w-full h-full object-cover" alt="Profile" />
                </div>
                <button class="absolute -bottom-2 -right-2 size-8 flex items-center justify-center rounded-full bg-accent-teal text-background-dark shadow-lg">
                  <span class="material-symbols-outlined text-[18px]">edit</span>
                </button>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-1">{user.name}</h1>
                    <div class="flex items-center gap-2 text-slate-400 text-sm font-mono">
                      <span>{user.address}</span>
                      <span class="material-symbols-outlined text-sm">content_copy</span>
                    </div>
                  </div>
                  <span class="px-2.5 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary border border-primary/20">Top 5% Voter</span>
                </div>
                <div className="mt-6 flex gap-3">
                  <button className="h-10 px-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-bold transition-all">Share Profile</button>
                  <button className="h-10 px-6 rounded-lg bg-transparent border border-white/10 text-slate-400 hover:text-white text-sm transition-all">Manage ENS</button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="p-6 rounded-xl bg-card-dark border border-card-border shadow-xl h-full flex flex-col justify-between text-left">
              <div>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Unclaimed Rewards</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-bold text-accent-teal font-mono tracking-tight">1,250</span>
                  <span className="text-lg font-bold text-slate-500">EDU</span>
                </div>
              </div>
              <button className="w-full h-11 mt-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">account_balance_wallet</span> Claim Tokens
              </button>
            </div>
          </div>

          <div className="col-span-12 mt-8 text-left">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">history</span> Voting History
            </h2>
            <div className="space-y-4">
              {[
                { round: 42, title: 'Governance Upgrade: Protocol v2.1', status: 'Voted YES', date: 'Oct 24, 2023', reward: '+50.00 EDU', color: 'green-400' },
                { round: 41, title: 'Treasury Allocation Q3', status: 'ABSTAINED', date: 'Oct 10, 2023', reward: '+10.00 EDU', color: 'slate-400' },
                { round: 40, title: 'Emergency Parameter Adjust', status: 'Voted NO', date: 'Sep 28, 2023', reward: '+25.00 EDU', color: 'red-400' }
              ].map(item => (
                <div key={item.round} className="bg-card-dark border border-card-border rounded-xl p-4 flex flex-col md:flex-row items-center gap-4 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-4 min-w-[200px] text-left w-full md:w-auto">
                    <div className={`shrink-0 size-10 rounded-full bg-white/5 flex items-center justify-center text-${item.color}`}>
                      <span className="material-symbols-outlined">{item.round === 40 ? 'thumb_down' : item.round === 41 ? 'remove' : 'thumb_up'}</span>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">Round {item.round}</div>
                      <div className={`text-sm font-bold text-${item.color}`}>{item.status}</div>
                    </div>
                  </div>
                  <div className="flex-1 text-left w-full md:w-auto">
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-500">Executed on {item.date}</p>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-6 min-w-[200px] w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-white/5">
                    <div className="text-right">
                      <p className="text-xs text-slate-500 uppercase">Reward</p>
                      <p className="text-sm font-bold text-accent-teal">{item.reward}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-400 border border-green-500/20`}>Confirmed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
