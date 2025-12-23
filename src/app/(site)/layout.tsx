import React from 'react';
import { NavBar } from '@/components/layout/nav-bar';
import { Footer } from '@/components/layout/footer';
import { FloatingGrid } from '@/components/layout/floating-grid';
import { PageShell } from '@/components/layout/page-shell';

export const dynamic = 'force-static';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageShell>
      <FloatingGrid />
      <NavBar />
      <main className="relative z-10 pt-28 pb-20 px-4 md:px-10 max-w-6xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </PageShell>
  );
}
