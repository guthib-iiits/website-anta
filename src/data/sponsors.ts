export type Sponsor = {
  id: string;
  name: string;
  tier: string;
  logoUrl?: string;
  url?: string;
  order?: number;
};

export const sponsors: Sponsor[] = [
  { id: 'sp1', name: 'NeonStack', tier: 'Title', logoUrl: 'https://dummyimage.com/180x80/0af/fff&text=NeonStack', url: 'https://example.com', order: 1 },
  { id: 'sp2', name: 'QuantumLeap', tier: 'Platinum', logoUrl: 'https://dummyimage.com/160x70/f0f/fff&text=Quantum', url: 'https://example.com', order: 2 },
  { id: 'sp3', name: 'CyberMesh', tier: 'Gold', logoUrl: 'https://dummyimage.com/140x60/0ff/000&text=CyberMesh', url: 'https://example.com', order: 3 },
];
