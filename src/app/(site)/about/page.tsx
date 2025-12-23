import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'About | UDBHAV – Inter-IIIT Hackathon',
  description: 'Overview, ethos, and structure of UDBHAV hosted by IIIT Sri City.',
};

export default async function AboutPage() {
  const sponsorCount = await prisma.sponsor.count();

  return (
    <div className="space-y-10">
      <section className="glass-panel gradient-border p-8 space-y-4 card-sheen">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">About</p>
        <h1 className="text-4xl font-semibold">UDBHAV — Collaborative combustion across 24 IIITs</h1>
        <p className="text-white/70 text-lg">
          UDBHAV is IIIT Sri City&apos;s flagship Inter-IIIT hackathon for 2025–26. Crafted to feel like a product launch, it blends cyberpunk polish with rigorous engineering. Expect curated prompts, sponsor-backed challenges, and seamless orchestration from registration to live judging.
        </p>
        <div className="grid md:grid-cols-3 gap-4 pt-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-sm text-white/60">Prize pool</p>
            <p className="text-2xl font-semibold text-neon-green">₹1.5 Lakh</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-sm text-white/60">Participating IIITs</p>
            <p className="text-2xl font-semibold text-neon-blue">24</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-sm text-white/60">Sponsors lined up</p>
            <p className="text-2xl font-semibold text-neon-magenta">{sponsorCount}+ in pipeline</p>
          </div>
        </div>
      </section>
      <section className="glass-panel gradient-border p-8">
        <h2 className="text-2xl font-semibold mb-3">Event Ethos</h2>
        <ul className="space-y-2 text-white/70">
          <li>• Cyberpunk aesthetic with accessible, inclusive experience for all 24 IIITs.</li>
          <li>• Seamless data-driven ops: Prisma + Mongo for teams, sponsors, and IIIT roster.</li>
          <li>• Judging that respects clarity: succinct demos, crisp submissions, transparent scoring.</li>
          <li>• High-signal programming: focused problem statements, anti-bloat UI, strong hierarchy.</li>
        </ul>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="glass-panel gradient-border p-6">
          <h3 className="text-xl font-semibold">Rounds blueprint</h3>
          <p className="text-white/70 mt-2 leading-relaxed">
            Round 1 runs within each IIIT with domain assignments: Cybersecurity, Blockchain, or AI-ML. Round 2 mixes pools across IIITs on 1 Nov 2025 with sponsor problems. The Grand Finale brings all finalists to IIIT Sri City from 24–26 Jan 2026 for a 24-hour build sprint.
          </p>
        </div>
        <div className="glass-panel gradient-border p-6">
          <h3 className="text-xl font-semibold">Experience promises</h3>
          <p className="text-white/70 mt-2 leading-relaxed">
            Expect neon-lit staging, real-time leaderboard updates, ergonomic submission flow, and on-ground hospitality that mirrors a FAANG launch night. Micro-interactions guide teams, while accessibility and performance remain first-class.
          </p>
        </div>
      </section>
    </div>
  );
}
