'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const binaryString =
  '01010101 01000100 01000010 01001000 01000001 01010110 00100000 00110010 00110000 00110010 00110110 00100000 00101101 00100000 01001111 01110010 01100111 01100001 01101110 01101001 01110011 01100101 01100100 00100000 01100010 01111001 00100000 01001001 01001001 01001001 01010100 00100000 01010011 01110010 01101001 00100000 01000011 01101001 01110100 01111001';

export function Hero() {
  return (
    <section className="pt-10 grid gap-10 lg:grid-cols-2 items-center">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.3em] text-neon-blue"
        >
          <span className="h-2 w-2 rounded-full bg-neon-magenta shadow-neon" /> UDBHAV 2025 | 24 IIITs | Cyberpunk build sprint
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
        >
          UDBHAV — The Inter-IIIT Hackathon 2025–26
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-violet to-neon-magenta">
            Hosted by IIIT Sri City
          </span>
        </motion.h1>
        <p className="text-lg text-white/70 max-w-2xl">
          A three-stage gauntlet forged for the 24 IIITs. Cybersecurity, Blockchain, and AI-ML domains converge into a weekend-long finale with neon-lit innovation at IIIT Sri City.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="#contact">Register Now</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/schedule">View Schedule</Link>
          </Button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="glass-panel gradient-border p-4 flex items-center gap-4 max-w-xl"
        >
          <div className="flex-1">
            <p className="text-xs text-white/60">System readout</p>
            <p className="font-mono text-sm text-neon-cyan tracking-tight leading-relaxed whitespace-pre-wrap">
              {binaryString.replace(/ /g, ' ')}
            </p>
          </div>
          <div className="h-full w-[2px] bg-gradient-to-b from-neon-blue via-neon-magenta to-neon-violet" aria-hidden="true" />
          <p className="text-xs text-white/60 max-w-[120px]">Decoded: UDBHAV 2026 | Organized by IIIT Sri City</p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-violet/20 to-neon-magenta/20 blur-3xl" aria-hidden="true" />
        <div className="relative glass-panel gradient-border p-6 card-sheen">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/60">Rounds</p>
              <p className="text-2xl font-semibold">3-stage gauntlet</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-white/10 text-neon-green text-xs font-semibold">₹1.5 Lakh Prize</span>
          </div>
          <div className="mt-6 space-y-4 text-sm text-white/80">
            <div className="flex items-center justify-between">
              <span>Round 1 · Intra-IIIT</span>
              <span className="text-neon-blue">19 Oct 2025</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Round 2 · Online Cross-IIIT</span>
              <span className="text-neon-violet">1 Nov 2025</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Round 3 · Grand Finale</span>
              <span className="text-neon-magenta">24–26 Jan 2026</span>
            </div>
          </div>
          <div className="binary-divider mt-6">1 0 | 1 1 | 0 1 | 0 1</div>
        </div>
      </motion.div>
    </section>
  );
}
