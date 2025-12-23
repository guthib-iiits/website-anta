import { motion } from 'framer-motion';

const stats = [
  { label: 'IIIT Alliances', value: '24', accent: 'text-neon-blue' },
  { label: 'Prize Pool', value: '₹1.5 Lakh', accent: 'text-neon-green' },
  { label: 'Rounds', value: '3', accent: 'text-neon-magenta' },
  { label: 'Grand Finale', value: '24–26 Jan 2026', accent: 'text-neon-violet' },
];

export function StatsStrip() {
  return (
    <section className="mt-10 glass-panel gradient-border p-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="p-3 rounded-xl bg-white/5 border border-white/5 scanline"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">{stat.label}</p>
            <p className={`text-xl font-semibold ${stat.accent}`}>{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
