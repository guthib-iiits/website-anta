import { Hero } from '@/components/sections/hero';
import { StatsStrip } from '@/components/sections/stats-strip';
import { Rounds } from '@/components/sections/rounds';
import { TeamGrid } from '@/components/sections/team-grid';
import { ContactCTA } from '@/components/sections/contact-cta';
import { prisma } from '@/lib/prisma';

export const revalidate = 60;

export default async function HomePage() {
  const [members, institutes] = await Promise.all([
    prisma.teamMember.findMany({ orderBy: { order: 'asc' } }),
    prisma.iIIT.findMany({ take: 6, orderBy: { name: 'asc' } }),
  ]);

  return (
    <div className="space-y-14">
      <Hero />
      <StatsStrip />
      <section className="grid gap-6 lg:grid-cols-[2fr,1fr] items-start">
        <div className="glass-panel gradient-border p-6 card-sheen">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Why UDBHAV</p>
          <h2 className="text-3xl font-semibold">Cross-IIIT collision of talent.</h2>
          <p className="text-white/70 mt-3">
            Build with the sharpest 24 IIIT teams. Domains span Cybersecurity, Blockchain, and AI-ML. Expect sponsor-driven prompts, mixed pools in Round 2, and a finale that feels like a FAANG launch night.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-white/60">Venue</p>
              <p className="text-lg font-semibold">IIIT Sri City · Neon Arena</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-white/60">Prize</p>
              <p className="text-lg font-semibold">₹1.5 Lakh & the UDBHAV Trophy</p>
            </div>
          </div>
          <div className="binary-divider mt-6">1 0 | 1 1 | 0 1 | 0 1 | 1 0</div>
        </div>
        <div className="glass-panel gradient-border p-6 flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Rounds radar</p>
          <div className="space-y-3 text-sm text-white/75">
            <div className="flex items-center justify-between">
              <span>Round 1</span>
              <span className="px-2 py-1 rounded bg-white/10 text-neon-blue text-[11px]">Intra-IIIT</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Round 2</span>
              <span className="px-2 py-1 rounded bg-white/10 text-neon-violet text-[11px]">Online Cross-IIIT</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Round 3</span>
              <span className="px-2 py-1 rounded bg-white/10 text-neon-magenta text-[11px]">Grand Finale</span>
            </div>
          </div>
          <div className="neo-divider" />
          <p className="text-xs text-white/60">Registration closes: 10 Oct 2025 | Eligibility: IIIT students (teams of 2–3)</p>
        </div>
      </section>
      <Rounds />
      <section className="mt-10 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Participating IIITs</p>
            <h2 className="text-3xl font-semibold">Neon nodes mapped</h2>
          </div>
          <a href="/iiits" className="text-sm text-neon-blue hover:underline">View interactive map →</a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {institutes.map((iiit) => (
            <div key={iiit.id} className="glass-panel p-4 border border-white/5">
              <p className="text-lg font-semibold">{iiit.name}</p>
              <p className="text-sm text-white/60">{iiit.city}, {iiit.state}</p>
              {iiit.website && (
                <a
                  href={iiit.website}
                  className="text-sm text-neon-blue hover:underline mt-2 inline-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
      <TeamGrid members={members} />
      <ContactCTA />
    </div>
  );
}
