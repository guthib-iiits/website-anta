'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/iiits', label: 'IIITs' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
  { href: '/sponsors', label: 'Sponsors' },
];

export function NavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 10);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg bg-night/70 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group focus-visible:focus-visible">
          <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-neon-blue/80 via-neon-violet/80 to-neon-magenta/80 flex items-center justify-center shadow-neon">
            <span className="text-lg font-mono text-night">01</span>
          </span>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">UDBHAV</p>
            <p className="text-sm font-semibold text-white group-hover:text-neon-blue">Inter-IIIT Hackathon</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`px-2 py-1 transition-colors hover:text-neon-blue focus-visible:focus-visible ${
                    isActive ? 'text-white' : 'text-white/70'
                  }`}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-neon-blue via-neon-violet to-neon-magenta"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </nav>
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-neon-blue to-neon-magenta text-night shadow-glow hover:shadow-[0_0_35px_rgba(72,181,255,0.6)] focus-visible:focus-visible"
        >
          Register | 0101
        </Link>
      </div>
    </header>
  );
}
