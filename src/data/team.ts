export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio?: string;
  imageUrl?: string;
  socials?: Record<string, string>;
  order?: number;
};

export const team: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Ananya Rao',
    role: 'Lead Organizer',
    bio: 'Driving cross-IIIT collaboration and the grand finale experience.',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: 'https://www.linkedin.com' },
    order: 1,
  },
  {
    id: 'tm2',
    name: 'Karthik Menon',
    role: 'Tech & Platform',
    bio: 'Architecting resilient judging pipelines and realtime updates.',
    imageUrl: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80',
    socials: { github: 'https://www.github.com' },
    order: 2,
  },
  {
    id: 'tm3',
    name: 'Riya Kapoor',
    role: 'Design & Experience',
    bio: 'Crafting the cyberpunk-elite visual identity for UDBHAV.',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    socials: { behance: 'https://www.behance.net' },
    order: 3,
  },
];
