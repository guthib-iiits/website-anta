'use client';

import { IIIT } from '@prisma/client';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

interface MapProps {
  institutes: IIIT[];
}

const indiaBounds = { minLat: 6, maxLat: 37.5, minLng: 68, maxLng: 97 };

function project(lat?: number | null, lng?: number | null) {
  if (!lat || !lng) return { x: 0, y: 0, valid: false };
  const x = ((lng - indiaBounds.minLng) / (indiaBounds.maxLng - indiaBounds.minLng)) * 100;
  const y = (1 - (lat - indiaBounds.minLat) / (indiaBounds.maxLat - indiaBounds.minLat)) * 100;
  return { x, y, valid: true };
}

export function IIITMap({ institutes }: MapProps) {
  const [activeId, setActiveId] = useState<string | null>(institutes[0]?.id ?? null);

  const activeInstitute = useMemo(
    () => institutes.find((i) => i.id === activeId) ?? institutes[0],
    [activeId, institutes]
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr] items-start">
      <div className="relative glass-panel gradient-border p-6 overflow-hidden">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">Interactive Map</p>
        <h2 className="text-2xl font-semibold mb-4">Hover or tap a neon node</h2>
        <div className="relative aspect-[4/3] rounded-2xl bg-edge overflow-hidden">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-white/10">
            <defs>
              <linearGradient id="mapGradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(72,181,255,0.3)" />
                <stop offset="100%" stopColor="rgba(255,61,154,0.25)" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#mapGradient)" opacity="0.15" />
            <path
              d="M27 18c6 2 11 4 14 7 5 6 9 9 10 17 0 7-5 12-6 18-1 8-3 14-7 19-2 3-5 5-10 6-5 1-11 1-18-1-2-7-2-13 0-17 2-4 4-7 3-10-1-3-3-6-3-11 0-5 1-9 3-12 2-3 5-6 7-9 3-4 5-6 7-7z"
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1.5"
            />
            <path
              d="M48 14c5 1 10 4 14 8 4 4 7 8 8 14 1 4 0 8-1 13-1 5-2 11-1 16 1 5 3 10 7 15-5 3-10 5-16 5-6 0-12-2-16-6-4-4-7-9-8-15-2-7-1-14 1-21 2-7 6-13 12-19z"
              fill="none"
              stroke="rgba(72,181,255,0.3)"
              strokeWidth="1.2"
            />
          </svg>
          <div className="absolute inset-0">
            {institutes.map((iiit) => {
              const { x, y, valid } = project(iiit.latitude ?? undefined, iiit.longitude ?? undefined);
              const isActive = activeId === iiit.id;
              return (
                <button
                  key={iiit.id}
                  type="button"
                  className="absolute -translate-x-1/2 -translate-y-1/2 focus-visible:focus-visible"
                  style={{ left: `${valid ? x : 50}%`, top: `${valid ? y : 50}%` }}
                  onMouseEnter={() => setActiveId(iiit.id)}
                  onClick={() => setActiveId(iiit.id)}
                  aria-label={`${iiit.name} marker`}
                >
                  <motion.span
                    animate={{ scale: isActive ? 1.25 : 1, boxShadow: isActive ? '0 0 20px rgba(72,181,255,0.9)' : '0 0 12px rgba(124,91,255,0.6)' }}
                    className={`w-3 h-3 rounded-full block ${
                      isActive ? 'bg-neon-blue' : 'bg-neon-magenta'
                    } border border-white/60`}
                  />
                  <span className="relative top-2 text-[10px] text-white/70 font-mono">{iiit.city}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="binary-divider mt-4">1 0 | 0 1 | 1 1 | 0 1</div>
      </div>
      <div className="glass-panel gradient-border p-6 space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">IIIT Details</p>
        {activeInstitute ? (
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">{activeInstitute.name}</h3>
            <p className="text-white/70">{activeInstitute.city}, {activeInstitute.state}</p>
            {activeInstitute.website && (
              <a
                href={activeInstitute.website}
                target="_blank"
                rel="noreferrer"
                className="text-neon-blue hover:underline text-sm"
              >
                Visit website ↗
              </a>
            )}
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/70">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">Latitude</p>
                <p className="font-mono">{activeInstitute.latitude ?? '–'}</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">Longitude</p>
                <p className="font-mono">{activeInstitute.longitude ?? '–'}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-white/60">Select a node to view details.</p>
        )}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-white/80">All IIITs</h4>
          <div className="grid gap-2 max-h-64 overflow-y-auto pr-2">
            {institutes.map((iiit) => (
              <button
                key={iiit.id}
                type="button"
                onClick={() => setActiveId(iiit.id)}
                className={`flex items-center justify-between rounded-lg px-3 py-2 border border-white/5 text-left transition-colors ${
                  activeId === iiit.id ? 'bg-white/10 text-neon-blue' : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <span className="text-sm">{iiit.name}</span>
                <span className="text-[11px] text-white/60">{iiit.state}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
