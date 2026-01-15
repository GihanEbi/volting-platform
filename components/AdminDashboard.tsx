
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

interface Props {
  user: User;
}

const AdminDashboard: React.FC<Props> = ({ user }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-dark">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col border-r border-[#2d2a37] bg-[#131217] p-6 hidden lg:flex">
        <div className="flex flex-col gap-8 h-full">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-primary text-3xl">token</span>
              <h1 className="text-white text-xl font-bold tracking-tight">BlockVote</h1>
            </div>
            <p className="text-slate-500 text-[10px] uppercase tracking-wider">Admin Console v2.0</p>
          </div>
          <nav className="flex flex-col gap-2">
            <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white">
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              <span className="text-sm font-semibold">Overview</span>
            </Link>
            <Link to="/admin/create" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#2d2a37] text-slate-400">
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
              <span className="text-sm font-medium">Create Round</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[#2d2a37] bg-background-dark/90 backdrop-blur-md px-8 py-5">
          <h2 className="text-white text-2xl font-bold">Dashboard Overview</h2>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 bg-surface-dark border border-[#2d2a37] rounded-xl px-3 py-1.5">
              <div className="flex flex-col items-end">
                <span className="text-xs text-slate-500">ETH Mainnet</span>
                <span className="text-sm font-bold text-white font-mono">{user.address}</span>
              </div>
              <div class="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-xs">AD</div>
            </div>
          </div>
        </header>

        <div className="p-8 flex flex-col gap-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#24242F] to-[#1e1c26] p-6 rounded-2xl border border-[#2d2a37] flex flex-col justify-between min-h-[180px]">
              <div>
                <h3 className="text-white text-lg font-bold mb-1">New Initiative?</h3>
                <p className="text-slate-500 text-sm mb-6">Launch a new governance proposal or voting round.</p>
              </div>
              <Link to="/admin/create" className="bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[20px]">add</span> Create Round
              </Link>
            </div>

            <div className="bg-[#1E1B29] p-6 rounded-2xl border-l-4 border-l-primary flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <div class="p-2 bg-[#2d2a37] rounded-lg border border-white/5"><span class="material-symbols-outlined text-white">ballot</span></div>
                <span class="text-green-400 text-xs font-bold">+8.2%</span>
              </div>
              <div>
                <p class="text-slate-400 text-sm mb-1">Total Rounds</p>
                <p class="text-white text-3xl font-bold">24</p>
              </div>
            </div>

            <div className="bg-[#1E1B29] p-6 rounded-2xl border-l-4 border-l-accent-teal flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <div class="p-2 bg-[#2d2a37] rounded-lg border border-white/5"><span class="material-symbols-outlined text-white">group</span></div>
                <span class="text-green-400 text-xs font-bold">+12%</span>
              </div>
              <div>
                <p class="text-slate-400 text-sm mb-1">Active Voters</p>
                <p class="text-white text-3xl font-bold">1,204</p>
              </div>
            </div>

            <div className="bg-[#1E1B29] p-6 rounded-2xl border-l-4 border-l-purple-500 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <div class="p-2 bg-[#2d2a37] rounded-lg border border-white/5"><span class="material-symbols-outlined text-white">paid</span></div>
              </div>
              <div>
                <p class="text-slate-400 text-sm mb-1">Tokens Distributed</p>
                <p class="text-white text-3xl font-bold">50k <span class="text-sm text-purple-400">TKN</span></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
