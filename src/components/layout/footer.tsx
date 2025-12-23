import Link from 'next/link';

const binaryBar = '1 0 | 1 1 | 0 1 | 1 0 | 0 0 | 1 1 | 1 0 | 0 1';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night/80 backdrop-blur-xl relative overflow-hidden">
      <div className="neo-divider" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 md:px-10 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">UDBHAV</p>
          <p className="text-lg font-semibold text-white">The Inter-IIIT Hackathon</p>
          <p className="text-white/60 text-sm mt-3">Hosted by IIIT Sri City | 24 IIITs united for a cyberpunk-grade build sprint.</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="text-white/70 font-semibold">Routes</p>
          <div className="flex flex-wrap gap-3 text-white/60">
            <Link href="/about" className="hover:text-neon-blue">About</Link>
            <Link href="/schedule" className="hover:text-neon-blue">Schedule</Link>
            <Link href="/iiits" className="hover:text-neon-blue">IIITs</Link>
            <Link href="/team" className="hover:text-neon-blue">Team</Link>
            <Link href="/contact" className="hover:text-neon-blue">Contact</Link>
            <Link href="/sponsors" className="hover:text-neon-blue">Sponsors</Link>
          </div>
        </div>
        <div className="text-sm space-y-3">
          <p className="text-white/70 font-semibold">Key Dates</p>
          <ul className="text-white/60 space-y-2">
            <li>Round 1 — Intra-IIIT | Deadline: 19 Oct 2025</li>
            <li>Round 2 — Online Cross-IIIT | 1 Nov 2025</li>
            <li>Round 3 — Grand Finale @ IIIT Sri City | 24–26 Jan 2026</li>
          </ul>
        </div>
      </div>
      <div className="binary-divider border-t border-white/5 py-4 bg-card/50">
        {binaryBar}
      </div>
    </footer>
  );
}
