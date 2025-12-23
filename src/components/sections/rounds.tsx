'use client';

import { motion } from 'framer-motion';
import { rounds } from '@/data/rounds';
import { Button } from '@/components/ui/button';

export function Rounds() {
  return (
    <section id="rounds" className="mt-16 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Timeline</p>
          <h2 className="text-3xl font-semibold">Three rounds. Laser-focused intent.</h2>
        </div>
        <Button variant="ghost" asChild>
          <a href="/schedule">Full Schedule</a>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {rounds.map((round, idx) => (
          <motion.div
            key={round.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="glass-panel gradient-border p-5 card-sheen scanline flex flex-col gap-4"
          >
            <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${round.accent}`} />
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{round.title}</h3>
              <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 font-mono">
                1 0 | 1
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">{round.desc}</p>
            <p className="text-sm font-semibold text-neon-blue">{round.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
