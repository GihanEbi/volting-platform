
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-cosmic-gradient">
      {/* Navbar */}
      <header class="fixed top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
        <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div class="flex items-center gap-3">
            <div class="relative flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-purple-900 shadow-lg shadow-primary/20">
              <span class="material-symbols-outlined text-white" style={{fontSize: '24px'}}>how_to_vote</span>
            </div>
            <span class="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-xl font-bold tracking-tight text-transparent">VoteChain</span>
          </div>
          <nav class="hidden md:flex items-center gap-8">
            <a class="text-sm font-medium text-gray-300 transition-colors hover:text-white hover:glow-text" href="#">Home</a>
            <a class="text-sm font-medium text-gray-300 transition-colors hover:text-white hover:glow-text" href="#how-it-works">How It Works</a>
            <Link to="/dashboard" class="text-sm font-medium text-gray-300 transition-colors hover:text-white hover:glow-text">Voting Rounds</Link>
            <Link to="/admin" class="text-sm font-medium text-gray-300 transition-colors hover:text-white hover:glow-text">Admin</Link>
          </nav>
          <Link to="/connect" class="group relative overflow-hidden rounded-xl bg-surface-dark border border-primary/30 px-6 py-2.5 transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(100,60,221,0.4)]">
            <div class="relative flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              <span class="text-sm font-bold text-white group-hover:text-primary-light transition-colors">Connect Wallet</span>
            </div>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main class="flex-grow pt-20">
        <div class="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div class="absolute top-20 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"></div>
          <div class="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div class="flex flex-col gap-8">
              <div class="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary-light">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Round #42 is Live
              </div>
              <h1 class="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
                Governance for the <br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-white">Next Generation</span>
              </h1>
              <p class="max-w-xl text-lg leading-relaxed text-gray-400">
                Participate in transparent governance on the blockchain. Cast your vote securely, validate proposals, and earn <span class="text-white font-medium">VOTE</span> tokens for securing the network.
              </p>
              <div class="flex flex-wrap gap-4 pt-4">
                <Link to="/connect" class="h-14 min-w-[180px] flex items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white shadow-[0_0_30px_-10px_rgba(100,60,221,0.6)] transition-transform hover:scale-105 hover:bg-primary-light active:scale-95">
                  Connect Wallet
                </Link>
                <Link to="/dashboard" class="h-14 min-w-[160px] flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 text-base font-medium text-white transition-colors hover:bg-white/10">
                  View Proposals
                </Link>
              </div>
              <div class="flex items-center gap-4 text-sm text-gray-500">
                <div class="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} class="h-8 w-8 rounded-full border-2 border-background-dark bg-cover bg-center" style={{backgroundImage: `url(https://picsum.photos/seed/${i + 10}/100/100)`}}></div>
                  ))}
                </div>
                <p>Trusted by 12,000+ voters</p>
              </div>
            </div>

            {/* Visual */}
            <div class="relative hidden lg:block">
              <div class="relative aspect-square w-full max-w-lg mx-auto">
                <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-3xl"></div>
                <div class="relative h-full w-full rounded-2xl border border-white/10 bg-surface-dark/50 backdrop-blur-sm p-2 shadow-2xl transition-transform hover:rotate-1 duration-700 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000" class="h-full w-full object-cover rounded-xl opacity-60" alt="Blockchain visualization" />
                  <div class="absolute bottom-8 left-8 right-8 flex flex-col gap-3">
                    <div class="flex items-center justify-between rounded-lg bg-black/60 p-4 backdrop-blur-md border border-white/10">
                      <div class="flex items-center gap-3">
                        <div class="rounded-full bg-green-500/20 p-2 text-green-400">
                          <span class="material-symbols-outlined text-sm">check_circle</span>
                        </div>
                        <div>
                          <div class="text-xs text-gray-400">Latest Block</div>
                          <div class="text-sm font-bold text-white">#18,293,001</div>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="text-xs text-gray-400">Reward</div>
                        <div class="text-sm font-bold text-primary-light">+450 VOTE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div class="border-y border-white/5 bg-white/[0.02]">
          <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-12 text-center sm:text-left">
              <div class="flex flex-col gap-1 border-l-2 border-primary/30 pl-6">
                <span class="text-sm font-medium text-gray-400 uppercase tracking-wider">Total Votes Cast</span>
                <span class="text-3xl font-bold text-white tracking-tight">125,402+</span>
              </div>
              <div class="flex flex-col gap-1 border-l-2 border-accent-teal/30 pl-6">
                <span class="text-sm font-medium text-gray-400 uppercase tracking-wider">Active Proposals</span>
                <span class="text-3xl font-bold text-white tracking-tight">8 Live</span>
              </div>
              <div class="flex flex-col gap-1 border-l-2 border-purple-500/30 pl-6">
                <span class="text-sm font-medium text-gray-400 uppercase tracking-wider">Rewards Distributed</span>
                <span class="text-3xl font-bold text-white tracking-tight">500k VOTE</span>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div class="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32" id="how-it-works">
          <div class="mb-16 text-center max-w-2xl mx-auto">
            <h2 class="text-sm font-bold uppercase tracking-widest text-primary mb-3">Process</h2>
            <h3 class="text-3xl font-bold text-white sm:text-4xl">How It Works</h3>
            <p class="mt-4 text-gray-400">Our decentralized protocol ensures your voice is heard without intermediaries. Follow these three simple steps.</p>
          </div>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { id: 1, title: 'Connect Wallet', desc: 'Link your MetaMask or Web3 wallet securely. This creates a cryptographic signature to verify your identity.', icon: 'account_balance_wallet', color: 'primary' },
              { id: 2, title: 'Cast Your Vote', desc: 'Browse active proposals, analyze the smart contract details, and cast your vote directly on-chain.', icon: 'how_to_vote', color: 'accent-teal' },
              { id: 3, title: 'Earn Rewards', desc: 'Receive ERC-20 governance tokens automatically distributed to your wallet as a reward for participation.', icon: 'token', color: 'purple-400' }
            ].map(step => (
              <div key={step.id} class="group relative overflow-hidden rounded-2xl bg-card-gradient border border-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(100,60,221,0.2)]">
                <div class="relative z-10 flex flex-col gap-6">
                  <div class={`flex h-14 w-14 items-center justify-center rounded-xl bg-surface-dark border border-white/10 shadow-inner text-${step.color}`}>
                    <span class="material-symbols-outlined" style={{fontSize: '28px'}}>{step.icon}</span>
                  </div>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <span class={`flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-bold`}>{step.id}</span>
                      <h4 class="text-xl font-bold text-white">{step.title}</h4>
                    </div>
                    <p class="text-sm leading-relaxed text-gray-400">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer class="mt-20 border-t border-white/5 bg-background-dark py-12">
        <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-8">
          <div class="flex items-center gap-2">
            <span class="text-lg font-bold text-white">VoteChain</span>
          </div>
          <div class="flex gap-8 text-sm text-gray-400">
            <a class="hover:text-white" href="#">Privacy Policy</a>
            <a class="hover:text-white" href="#">Terms of Service</a>
            <a class="hover:text-white" href="#">Documentation</a>
          </div>
          <p class="text-xs text-gray-600">© 2023 VoteChain Decentralized Protocol. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
