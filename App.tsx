
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import WalletConnect from './components/WalletConnect';
import IdentitySetup from './components/IdentitySetup';
import Dashboard from './components/Dashboard';
import PeerEvaluation from './components/PeerEvaluation';
import VoteConfirmation from './components/VoteConfirmation';
import ResultsPage from './components/ResultsPage';
import RewardsTracker from './components/RewardsTracker';
import AdminDashboard from './components/AdminDashboard';
import CreateRound from './components/CreateRound';
import AdminFinalize from './components/AdminFinalize';
import UserProfile from './components/UserProfile';
import WrongNetwork from './components/WrongNetwork';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User>({
    address: '0x71...9A23',
    name: 'CyberUser.eth',
    isLoggedIn: false
  });

  const handleConnect = () => {
    setUser(prev => ({ ...prev, isLoggedIn: true }));
  };

  const handleLogout = () => {
    setUser(prev => ({ ...prev, isLoggedIn: false }));
  };

  return (
    <HashRouter>
      <div className="min-h-screen w-full bg-background-dark text-white font-display overflow-x-hidden selection:bg-primary selection:text-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/connect" element={<WalletConnect onConnect={handleConnect} />} />
          <Route path="/setup-identity" element={<IdentitySetup user={user} />} />
          <Route path="/dashboard" element={<Dashboard user={user} onLogout={handleLogout} />} />
          <Route path="/vote/:id" element={<PeerEvaluation user={user} />} />
          <Route path="/confirm-vote" element={<VoteConfirmation user={user} />} />
          <Route path="/results/:id" element={<ResultsPage user={user} />} />
          <Route path="/rewards" element={<RewardsTracker user={user} />} />
          <Route path="/admin" element={<AdminDashboard user={user} />} />
          <Route path="/admin/create" element={<CreateRound />} />
          <Route path="/admin/finalize/:id" element={<AdminFinalize />} />
          <Route path="/profile" element={<UserProfile user={user} />} />
          <Route path="/wrong-network" element={<WrongNetwork />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
