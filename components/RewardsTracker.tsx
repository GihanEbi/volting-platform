
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_REWARDS } from '../constants';
import { User } from '../types';

interface Props {
  user: User;
}

const RewardsTracker: React.FC<Props> = ({ user }) => {
  return (
    <div className="bg-background-dark min-h-screen flex flex-col text-white">
      <header className="w-full border-b border-[#2d2a37] bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-8 text-primary">
              <span className="material-symbols-outlined text-4xl">hive</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">VotingDAO</h2>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/dashboard" className="text-slate-400 hover:text-white">Governance</Link>
            <span className="text-white border-b-2 border-primary pb-1">Rewards</span>
            <Link to="/rewards" className="text-slate-400 hover:text-white">Leaderboard</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-surface-dark border border-[#2d2a37] px-4 py-2 rounded-xl text-sm font-bold">
              <span className="truncate">{user.address}</span>
              <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider">
              <span className="material-symbols-outlined text-base">token</span>
              <span>TKN Distribution</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Cycle #42 Rewards</h1>
            <p className="text-slate-400 max-w-xl text-lg">Tracking real-time token payouts and transaction finality for the latest governance voting round.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-500 bg-surface-dark px-3 py-1 rounded-full border border-slate-800 flex items-center gap-2">
              <span className="size-2 rounded-full bg-green-500 animate-pulse"></span> Sepolia Testnet
            </span>
            <button className="bg-surface-dark border border-[#2d2a37] text-white px-5 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
              <span className="material-symbols-outlined text-lg">download</span> Export CSV
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div className="bg-[#24242F] rounded-2xl p-6 border border-[#2d2a37] shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-[#2d2a37] rounded-lg text-primary"><span class="material-symbols-outlined">payments</span></div>
              <span class="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-md">+12% vs last cycle</span>
            </div>
            <p className="text-slate-400 text-sm font-medium uppercase">Total Distributed</p>
            <p className="text-3xl font-bold text-white mt-1">50,000 <span class="text-lg text-slate-500">TKN</span></p>
          </div>
          <div className="bg-[#24242F] rounded-2xl p-6 border border-[#2d2a37] shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-[#2d2a37] rounded-lg text-orange-400"><span class="material-symbols-outlined">hourglass_top</span></div>
              <span class="text-xs font-medium text-slate-400 bg-[#2d2a37] px-2 py-1 rounded-md">Processing</span>
            </div>
            <p className="text-slate-400 text-sm font-medium uppercase">Pending Payouts</p>
            <p className="text-3xl font-bold text-white mt-1">2,500 <span class="text-lg text-slate-500">TKN</span></p>
          </div>
          <div className="bg-[#24242F] rounded-2xl p-6 border border-[#2d2a37] shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-[#2d2a37] rounded-lg text-accent-teal"><span class="material-symbols-outlined">groups</span></div>
            </div>
            <p className="text-slate-400 text-sm font-medium uppercase">Total Winners</p>
            <p className="text-3xl font-bold text-white mt-1">154 <span class="text-lg text-slate-500">Wallets</span></p>
          </div>
        </div>

        <div className="bg-[#24242F] rounded-2xl border border-[#2d2a37] overflow-hidden shadow-2xl shadow-black/40">
          <div className="overflow-x-auto text-left">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#2d2a37] text-xs uppercase tracking-wider text-slate-500 bg-[#1e1c24]">
                  <th className="px-6 py-4 font-semibold">Rank & Wallet</th>
                  <th className="px-6 py-4 font-semibold text-right">Voting Power</th>
                  <th className="px-6 py-4 font-semibold text-right">Reward</th>
                  <th className="px-6 py-4 font-semibold text-center">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Transaction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2d2a37]">
                {MOCK_REWARDS.map(reward => (
                  <tr key={reward.wallet} className="group hover:bg-[#2d2a37]/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <span className="text-slate-600 font-mono text-xs w-6">{reward.rank}</span>
                        <div className={`size-8 rounded bg-gradient-to-br ${reward.avatarColor}`}></div>
                        <span className="text-white font-mono font-medium">{reward.wallet}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right"><span className="text-slate-400 font-mono">{reward.votingPower}</span></td>
                    <td className="px-6 py-4 text-right"><span className="text-accent-teal font-bold text-lg font-mono">{reward.rewardAmount}</span></td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${reward.status === 'Distributed' ? 'bg-accent-teal/10 text-accent-teal border-accent-teal/20' : 'bg-orange-500/10 text-orange-400 border-orange-500/20 animate-pulse'}`}>
                        <span className="material-symbols-outlined text-[14px]">{reward.status === 'Distributed' ? 'check_circle' : 'progress_activity'}</span>
                        {reward.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-slate-500 text-xs font-mono">{reward.txHash}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RewardsTracker;
