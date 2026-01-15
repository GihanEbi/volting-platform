
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface Props {
  onConnect: () => void;
}

const WalletConnect: React.FC<Props> = ({ onConnect }) => {
  const navigate = useNavigate();

  const handleConnect = () => {
    onConnect();
    navigate('/setup-identity');
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background-dark">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,60,221,0.15),transparent_60%)] pointer-events-none"></div>
      
      <header class="relative z-10 flex items-center justify-between border-b border-white/5 px-6 py-4 md:px-10 backdrop-blur-sm">
        <Link to="/" class="flex items-center gap-3">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <span class="material-symbols-outlined text-xl">how_to_vote</span>
          </div>
          <h2 class="text-lg font-bold tracking-tight text-white">VoteDApp</h2>
        </Link>
        <button class="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white/10">
          <span class="material-symbols-outlined text-[18px]">help</span>
          <span>Help</span>
        </button>
      </header>

      <main class="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-10">
        <div class="bg-[#24242F]/70 backdrop-blur-xl relative flex w-full max-w-[440px] flex-col items-center rounded-2xl border border-white/10 p-8 md:p-10 shadow-[0_0_0_1px_rgba(100,60,221,0.5),0_0_40px_-10px_rgba(100,60,221,0.3)]">
          <div class="mb-6 relative group">
            <div class="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 opacity-50"></div>
            <div class="relative h-20 w-20 overflow-hidden rounded-full bg-background-dark border border-white/10 flex items-center justify-center shadow-2xl">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" class="h-12 w-12" alt="MetaMask" />
            </div>
          </div>
          <div class="mb-8 text-center">
            <h1 class="mb-3 text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">Connect Your Wallet</h1>
            <p class="px-4 text-base font-normal leading-relaxed text-slate-400">
              To participate in educational voting, please connect your MetaMask wallet.
            </p>
          </div>
          <button onClick={handleConnect} class="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-xl bg-primary text-white transition-all duration-300 hover:bg-[#7a5af8] active:scale-[0.98] shadow-lg shadow-primary/40">
            <span class="mr-2 font-bold tracking-wide">Connect MetaMask</span>
            <span class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
          <div class="mt-6 flex items-center justify-center gap-2 rounded-full border border-white/5 bg-background-dark/50 px-3 py-1.5 backdrop-blur-md">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-teal opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-accent-teal shadow-[0_0_8px_#94E6E6]"></span>
            </span>
            <span class="text-xs font-medium uppercase tracking-widest text-accent-teal">Sepolia Testnet Detected</span>
          </div>
          <p class="mt-8 text-sm text-slate-500 text-center">
            New to Web3? <a class="text-white hover:text-primary transition-colors" href="#">Learn how to create a wallet</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default WalletConnect;
