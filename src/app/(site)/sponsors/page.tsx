import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'Sponsors | UDBHAV – Inter-IIIT Hackathon',
  description: 'Sponsor slate and tiers for UDBHAV 2025–26.',
};

export default async function SponsorsPage() {
  const sponsors = await prisma.sponsor.findMany({ orderBy: { order: 'asc' } });

  const tiers = sponsors.reduce<Record<string, typeof sponsors>>((acc, sponsor) => {
    acc[sponsor.tier] = acc[sponsor.tier] ? [...acc[sponsor.tier], sponsor] : [sponsor];
    return acc;
  }, {});

  return (
    <div className="space-y-10">
      <section className="glass-panel gradient-border p-8 space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">Partners</p>
        <h1 className="text-4xl font-semibold">Sponsor grid</h1>
        <p className="text-white/70 max-w-3xl">
          Early slate of partners supporting UDBHAV. Import tools let you onboard more sponsors later via CSV/Excel with Prisma-backed persistence.
        </p>
      </section>
      {Object.entries(tiers).map(([tier, list]) => (
        <section key={tier} className="glass-panel gradient-border p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">{tier} tier</h2>
            <div className="binary-divider">1 0 | 1 1</div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {list.map((sponsor) => (
              <div key={sponsor.id} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{sponsor.name}</p>
                  {sponsor.url && (
                    <a href={sponsor.url} className="text-sm text-neon-blue hover:underline" target="_blank" rel="noreferrer">
                      Visit ↗
                    </a>
                  )}
                </div>
                {sponsor.logoUrl && (
                  <img src={sponsor.logoUrl} alt={sponsor.name} className="h-10 object-contain opacity-80" />
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
      {sponsors.length === 0 && (
        <div className="glass-panel gradient-border p-6 text-white/70">Sponsor data will appear here once imported.</div>
      )}
    </div>
  );
}
