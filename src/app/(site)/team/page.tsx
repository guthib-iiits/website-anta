import { Metadata } from 'next';
import { TeamGrid } from '@/components/sections/team-grid';
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'Team | UDBHAV – Inter-IIIT Hackathon',
  description: 'Meet the organizing crew behind UDBHAV hosted by IIIT Sri City.',
};

export const revalidate = 120;

export default async function TeamPage() {
  const members = await prisma.teamMember.findMany({ orderBy: { order: 'asc' } });

  return (
    <div className="space-y-10">
      <section className="glass-panel gradient-border p-8 space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">Organizers</p>
        <h1 className="text-4xl font-semibold">Humans behind the neon</h1>
        <p className="text-white/70 max-w-3xl">
          A multi-disciplinary crew covering operations, tech, design, partnerships, and judging logistics. Reach out for collaboration, sponsorship, or mentorship.
        </p>
      </section>
      <TeamGrid members={members} title="Core & Ops Team" />
    </div>
  );
}
