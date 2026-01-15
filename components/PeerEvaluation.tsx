
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MOCK_PEERS } from '../constants';
import { User } from '../types';

interface Props {
  user: User;
}

const PeerEvaluation: React.FC<Props> = ({ user }) => {
  const navigate = useNavigate();
  // Fix: Explicitly type the reduce accumulator to ensure the state is correctly inferred as Record<string, number>
  const [scores, setScores] = useState<Record<string, number>>(
    MOCK_PEERS.reduce<Record<string, number>>((acc, peer) => ({ ...acc, [peer.id]: peer.score }), {})
  );

  const handleScoreChange = (id: string, val: number) => {
    setScores(prev => ({ ...prev, [id]: val }));
  };

  // Fix: Explicitly cast Object.values to number[] to resolve 'unknown' comparison error on line 21
  const completedCount = (Object.values(scores) as number[]).filter(s => s > 0).length;
  const progress = Math.round((completedCount / MOCK_PEERS.length) * 100);

  return (
    <div className="bg-background-dark min-h-screen flex flex-col relative">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-accent-teal/10 blur-[100px] rounded-full"></div>
      </div>

      <header className="relative z-20 flex items-center justify-between border-b border-white/10 px-6 py-4 lg:px-10 bg-background-dark/80 backdrop-blur-md sticky top-0">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-primary"><span className="material-symbols-outlined text-4xl">hive</span></Link>
          <h2 className="text-xl font-bold tracking-tight">Web3 EduVote</h2>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/dashboard" className="text-white/60 hover:text-white">Dashboard</Link>
          <span className="text-white relative after:content-[''] after:absolute after:-bottom-6 after:left-0 after:w-full after:h-0.5 after:bg-primary">Vote</span>
          <Link to="/rewards" className="text-white/60 hover:text-white">Leaderboard</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end mr-2">
            <span className="text-xs text-white/50 font-medium uppercase tracking-wider">Current Round</span>
            <span className="text-sm font-bold text-accent-teal">Genesis Block • 3/5</span>
          </div>
          <button className="flex items-center gap-2 h-10 px-4 bg-card-dark border border-white/10 text-white text-sm font-bold rounded-lg group">
            <span className="truncate max-w-[100px]">{user.address}</span>
            <div className="size-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          </button>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center px-4 py-8 md:px-8 lg:px-12 w-full max-w-7xl mx-auto mb-24">
        <section className="w-full flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit mb-2">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Voting Live</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              Peer Evaluation <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-teal">Phase</span>
            </h1>
            <p className="text-white/60 text-lg">Rate your peers based on their technical contribution and collaboration.</p>
          </div>
          <div className="flex gap-3 glass-panel p-4 rounded-xl border border-white/5">
            <div className="flex flex-col items-center gap-1 min-w-[60px]">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-background-dark border border-white/10">
                <span className="text-2xl font-bold font-mono">00</span>
              </div>
              <span className="text-[10px] uppercase text-white/40 tracking-widest">Days</span>
            </div>
            <div className="flex flex-col items-center gap-1 min-w-[60px]">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-background-dark border border-white/10">
                <span className="text-2xl font-bold font-mono text-primary">59</span>
              </div>
              <span className="text-[10px] uppercase text-white/40 tracking-widest">Mins</span>
            </div>
          </div>
        </section>

        <section className="w-full mb-10">
          <div className="flex justify-between items-end mb-3">
            <span className="text-white text-base font-bold">Your Progress: {completedCount} of {MOCK_PEERS.length} evaluated</span>
            <span className="text-accent-teal font-mono text-xl font-bold">{progress}%</span>
          </div>
          <div className="w-full h-3 bg-card-dark rounded-full overflow-hidden border border-white/5">
            <div className="h-full bg-gradient-to-r from-primary to-accent-teal transition-all" style={{width: `${progress}%`}}></div>
          </div>
        </section>

        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK_PEERS.map(peer => (
            <article key={peer.id} className={`group relative bg-card-dark rounded-xl p-6 border transition-all duration-300 ${peer.isSelf ? 'opacity-70 grayscale cursor-not-allowed' : 'hover:border-primary/50'} ${(scores[peer.id] || 0) > 0 && !peer.isSelf ? 'border-primary/30' : 'border-white/5'}`}>
              {!peer.isSelf && (scores[peer.id] || 0) > 0 && (
                <div className="absolute top-4 right-4 text-primary">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
              )}
              {peer.isSelf && (
                <div className="absolute top-4 right-4 text-white/20">
                  <span className="material-symbols-outlined">lock</span>
                </div>
              )}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img src={peer.avatar} className={`size-14 rounded-full border ${peer.isSelf ? 'border-white/10' : 'border-primary/30'}`} alt={peer.name} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">{peer.name}</h3>
                  <p className="text-xs text-white/40 font-mono">{peer.address}</p>
                </div>
              </div>
              <div className={`flex flex-col gap-4 ${peer.isSelf ? 'pointer-events-none' : ''}`}>
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Contribution</label>
                  <span className={`text-2xl font-bold ${peer.isSelf ? 'text-white/20' : 'text-primary'}`}>{peer.isSelf ? '-' : scores[peer.id]}</span>
                </div>
                <input 
                  type="range" 
                  min="0" max="100" 
                  value={scores[peer.id]}
                  disabled={peer.isSelf}
                  onChange={(e) => handleScoreChange(peer.id, parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </article>
          ))}
        </section>

        <div className="fixed bottom-0 left-0 w-full z-50 px-4 pb-6 pt-4">
          <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border border-white/10">
            <div className="flex items-center gap-3 px-2">
              <div className="size-8 rounded-full bg-white/5 flex items-center justify-center text-accent-teal">
                <span className="material-symbols-outlined text-[20px]">shield</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white">Fairness Check</span>
                <span className="text-xs text-white/50">All votes are final once submitted.</span>
              </div>
            </div>
            <button 
              onClick={() => navigate('/confirm-vote')}
              className="w-full md:w-auto h-12 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(100,60,221,0.4)] flex items-center justify-center gap-2"
            >
              Submit Votes <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PeerEvaluation;
