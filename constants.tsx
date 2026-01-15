
import { Proposal, Reward, Peer } from './types';

export const MOCK_PROPOSALS: Proposal[] = [
  {
    id: '1',
    number: 42,
    title: 'Curriculum Expansion: Solidity 2.0',
    description: 'Proposal to integrate advanced Solidity security patterns into the core developer track. This affects the certification requirements.',
    status: 'active',
    endsIn: '14h 32m',
    quorum: 68,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    number: 41,
    title: 'Grant Allocation: Q3 Research',
    description: 'Allocate 50,000 EDU tokens to the Zero-Knowledge Proof research group for Q3 2024 development sprint.',
    status: 'active',
    endsIn: '2h 15m',
    quorum: 92,
    image: 'https://images.unsplash.com/photo-1640341719917-0a557c688d2a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    number: 43,
    title: 'Token Economics Adjustment',
    description: 'Review proposed changes to staking rewards APY and validator slashing conditions for the next epoch.',
    status: 'upcoming',
    endsIn: 'Starts Oct 24',
    quorum: 0,
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800'
  }
];

export const MOCK_PEERS: Peer[] = [
  { id: '1', name: 'Sarah_WAGMI', address: '0x82...91B2', avatar: 'https://picsum.photos/seed/sarah/100/100', score: 85 },
  { id: '2', name: 'CryptoDave', address: '0xA4...22C1', avatar: 'https://picsum.photos/seed/dave/100/100', score: 0 },
  { id: '3', name: 'BuilderBob', address: '0x11...99F0', avatar: 'https://picsum.photos/seed/bob/100/100', score: 0 },
  { id: '4', name: 'Jess_DeFi', address: '0xCC...1029', avatar: 'https://picsum.photos/seed/jess/100/100', score: 92 },
  { id: '5', name: 'Alex.eth (You)', address: '0x71...39A2', avatar: 'https://picsum.photos/seed/alex/100/100', score: 0, isSelf: true },
  { id: '6', name: 'Ryker_DAO', address: '0x33...88B1', avatar: 'https://picsum.photos/seed/ryker/100/100', score: 60 },
  { id: '7', name: 'LilaMoves', address: '0xBB...44D3', avatar: 'https://picsum.photos/seed/lila/100/100', score: 0 },
  { id: '8', name: 'MadMax', address: '0xEE...2211', avatar: 'https://picsum.photos/seed/max/100/100', score: 0 },
];

export const MOCK_REWARDS: Reward[] = [
  { rank: '#01', wallet: '0x71B...3A9', votingPower: '45,200 VP', rewardAmount: '+450.00 TKN', status: 'Distributed', txHash: '0x8a...9f2', avatarColor: 'from-blue-500 to-cyan-400' },
  { rank: '#02', wallet: '0xa4C...22B', votingPower: '32,150 VP', rewardAmount: '+320.00 TKN', status: 'Distributed', txHash: '0xb2...1c4', avatarColor: 'from-purple-500 to-pink-500' },
  { rank: '#03', wallet: '0x99F...8E1', votingPower: '28,900 VP', rewardAmount: '+285.00 TKN', status: 'Processing', txHash: 'Waiting...', avatarColor: 'from-orange-500 to-yellow-400' },
  { rank: '#04', wallet: '0x2D1...44C', votingPower: '15,400 VP', rewardAmount: '+150.00 TKN', status: 'Distributed', txHash: '0xc4...5a1', avatarColor: 'from-green-500 to-teal-400' },
  { rank: '#05', wallet: '0xE43...9B0', votingPower: '12,100 VP', rewardAmount: '+120.00 TKN', status: 'Distributed', txHash: '0xd9...2b8', avatarColor: 'from-indigo-500 to-purple-600' },
];
