'use client';

import { motion } from 'framer-motion';

export function FloatingGrid() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-night/80" />
      <motion.div
        className="absolute -inset-20 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-magenta/10"
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(transparent 0%, rgba(72,181,255,0.08) 50%, transparent 100%)' }}
        animate={{ backgroundPosition: ['0% 0%', '0% 100%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}
