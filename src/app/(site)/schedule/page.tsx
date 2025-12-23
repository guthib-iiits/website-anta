import { Metadata } from 'next';
import { rounds } from '@/data/rounds';

export const metadata: Metadata = {
  title: 'Schedule | UDBHAV – Inter-IIIT Hackathon',
  description: 'Timeline for UDBHAV 2025–26 including rounds, locations, and deliverables.',
};

const milestones = [
  { label: 'Registrations open', date: '05 Sep 2025' },
  { label: 'Round 1 deadline', date: '19 Oct 2025' },
  { label: 'Round 1 results', date: '24 Oct 2025' },
  { label: 'Round 2 (Online)', date: '01 Nov 2025' },
  { label: 'Finalists announcement', date: '05 Nov 2025' },
  { label: 'Grand Finale (Onsite)', date: '24–26 Jan 2026' },
];

export default function SchedulePage() {
  return (
    <div className="space-y-10">
      <section className="glass-panel gradient-border p-8 space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">Schedule</p>
        <h1 className="text-4xl font-semibold">UDBHAV timeline</h1>
        <p className="text-white/70 max-w-3xl">
          Clean checkpoints, no ambiguity. Each round ships with structured deliverables and crisp review cycles. Expect calendar invites and reminders aligned with IIIT academic calendars.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        {rounds.map((round) => (
          <div key={round.title} className="glass-panel gradient-border p-6 card-sheen h-full flex flex-col gap-3">
            <h3 className="text-xl font-semibold">{round.title}</h3>
            <p className="text-neon-blue text-sm">{round.date}</p>
            <p className="text-white/70 text-sm leading-relaxed">{round.desc}</p>
          </div>
        ))}
      </section>
      <section className="glass-panel gradient-border p-8">
        <h2 className="text-2xl font-semibold">Milestones</h2>
        <div className="mt-4 space-y-3">
          {milestones.map((item, idx) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="w-12 text-right text-sm text-white/60">{String(idx + 1).padStart(2, '0')}</div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-neon-blue/70 via-neon-magenta/70 to-transparent" />
              <div className="w-48 text-sm font-semibold text-white">{item.label}</div>
              <div className="text-sm text-neon-violet">{item.date}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
