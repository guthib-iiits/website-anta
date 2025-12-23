import React from 'react';

export function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="relative min-h-screen text-white">{children}</div>;
}
