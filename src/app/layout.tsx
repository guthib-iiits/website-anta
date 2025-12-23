import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  title: 'UDBHAV – The Inter-IIIT Hackathon 2025–26',
  description:
    'UDBHAV: The Inter-IIIT Hackathon hosted by IIIT Sri City, uniting 24 IIITs for a cyberpunk, future-forward build sprint.',
  openGraph: {
    title: 'UDBHAV – The Inter-IIIT Hackathon 2025–26',
    description: 'A cross-IIIT build marathon culminating at IIIT Sri City in Jan 2026.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'UDBHAV',
    images: [
      {
        url: '/udbhav-logo.svg',
        width: 1200,
        height: 630,
        alt: 'UDBHAV – The Inter-IIIT Hackathon',
      },
    ],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrains.variable}`}>
      <body className="relative">
        {children}
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  );
}
