
export interface User {
  address: string;
  name?: string;
  avatar?: string;
  isLoggedIn: boolean;
}

export interface Proposal {
  id: string;
  number: number;
  title: string;
  description: string;
  status: 'active' | 'upcoming' | 'completed' | 'draft';
  votesCount?: string;
  blockHeight?: string;
  endsIn?: string;
  quorum: number;
  image?: string;
}

export interface Peer {
  id: string;
  name: string;
  address: string;
  avatar: string;
  score: number;
  isSelf?: boolean;
}

export interface Reward {
  rank: string;
  wallet: string;
  votingPower: string;
  rewardAmount: string;
  status: 'Distributed' | 'Processing';
  txHash: string;
  avatarColor: string;
}
