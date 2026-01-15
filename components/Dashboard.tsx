
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PROPOSALS } from '../constants';
import { User } from '../types';

interface Props {
  user: User;
  onLogout: () => void;
}

const Dashboard: React.FC<Props> = ({ user, onLogout }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-dark">
      {/* Sidebar */}
      <aside className="flex w-72 flex-col border-r border-[#2D2A38] bg-background-dark hidden md:flex h-full">
        <div className="flex h-full flex-col justify-between p-6">
          <div className="flex flex-col gap-8">
            <Link to="/profile" className="flex gap-4 items-center">
              <div className="relative rounded-full size-12 overflow-hidden ring-2 ring-primary/20 bg-surface-dark">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-blue-500 opacity-80"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-lg font-bold leading-tight">{user.name || 'Web3 Edu'}</h1>
                <p className="text-slate-400 text-xs font-mono">{user.address}</p>
              </div>
            </Link>
            <nav className="flex flex-col gap-2">
              <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 text-white">
                <span className="material-symbols-outlined text-primary">how_to_vote</span>
                <span className="font-bold text-primary">Voting Rounds</span>
              </Link>
              <Link to="/rewards" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-dark group transition-colors text-slate-400">
                <span className="material-symbols-outlined group-hover:text-white transition-colors">analytics</span>
                <span className="group-hover:text-white transition-colors">Results</span>
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-4 border-t border-[#2D2A38] pt-6">
            <button onClick={onLogout} className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined">logout</span>
              <span className="text-sm font-medium">Disconnect Wallet</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto relative">
        <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none z-0"></div>
        <div className="relative z-10 p-6 md:p-10 max-w-7xl mx-auto flex flex-col gap-8 pb-20">
          <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary text-sm font-mono tracking-wider uppercase mb-1">
                <span className="w-2 h-2 rounded-full bg-[#0bda6c] animate-pulse"></span>
                Live Network Status: Synced
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[0.9]">
                Active Governance<br/>Rounds
              </h2>
            </div>
            <div className="hidden lg:flex gap-6">
              <div className="flex flex-col items-end">
                <span className="text-slate-500 text-xs uppercase tracking-widest font-bold">Total Votes</span>
                <span className="text-2xl font-bold font-mono">1.2M</span>
              </div>
              <div className="w-px bg-[#2D2A38]"></div>
              <div className="flex flex-col items-end">
                <span className="text-slate-500 text-xs uppercase tracking-widest font-bold">Block Height</span>
                <span className="text-2xl font-bold font-mono text-primary">#892,102</span>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {MOCK_PROPOSALS.map(proposal => (
              <article key={proposal.id} className="bg-[#1E1B29] border border-[#2D2A38] rounded-2xl overflow-hidden hover:-translate-y-1 transition-all hover:border-primary/50 flex flex-col h-full group">
                <div className="h-48 bg-cover bg-center relative" style={{backgroundImage: `url(${proposal.image})`}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B29] via-[#1E1B29]/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 ${proposal.status === 'active' ? 'bg-[#0bda6c]/20 text-[#0bda6c] border-[#0bda6c]/30' : 'bg-blue-500/20 text-blue-400 border-blue-500/30'} backdrop-blur-md border text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-1`}>
                      {proposal.status === 'active' && <span className="w-1.5 h-1.5 rounded-full bg-[#0bda6c] animate-pulse"></span>}
                      {proposal.status}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-4 -mt-12 relative z-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-primary text-xs font-mono">PROPOSAL #{proposal.number}</span>
                    <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-primary transition-colors">{proposal.title}</h3>
                    <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">{proposal.description}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-300 py-4 border-y border-white/5 my-auto">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg text-primary">schedule</span>
                      <span className="font-mono">{proposal.endsIn}</span>
                    </div>
                    {proposal.quorum > 0 && (
                      <>
                        <div className="w-px h-4 bg-white/10"></div>
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-lg text-slate-500">pie_chart</span>
                          <span>{proposal.quorum}% Quorum</span>
                        </div>
                      </>
                    )}
                  </div>
                  <Link 
                    to={proposal.status === 'active' ? `/vote/${proposal.id}` : '#'} 
                    className={`w-full ${proposal.status === 'active' ? 'bg-primary' : 'bg-transparent border border-white/20'} text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-auto`}
                  >
                    <span className="material-symbols-outlined text-lg">{proposal.status === 'active' ? 'how_to_vote' : 'visibility'}</span>
                    {proposal.status === 'active' ? 'Enter Voting Booth' : 'Preview Details'}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
