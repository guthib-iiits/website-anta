import { Metadata } from 'next';
import { IIITMap } from '@/components/sections/iiit-map';
import { iiits } from '@/data/iiits';

export const metadata: Metadata = {
  title: 'IIIT Map | UDBHAV – Inter-IIIT Hackathon',
  description: 'Interactive map of participating IIITs across India for UDBHAV 2025–26.',
};

export const revalidate = 120;

export default function IIITsPage() {
  const institutes = [...iiits].sort((a, b) => a.state.localeCompare(b.state));

  return (
    <div className="space-y-10">
      <section className="glass-panel gradient-border p-8 space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">IIIT Network</p>
        <h1 className="text-4xl font-semibold">Neon nodes across India</h1>
        <p className="text-white/70 max-w-3xl">
          Explore all 24 IIITs joining UDBHAV. Hover or tap markers to reveal details and jump to institute resources. The dataset lives locally for now and can plug into your backend later.
        </p>
      </section>
      <IIITMap institutes={institutes} />
    </div>
  );
}
