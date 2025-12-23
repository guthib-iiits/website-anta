import { Metadata } from 'next';
import { ContactCTA } from '@/components/sections/contact-cta';

export const metadata: Metadata = {
  title: 'Contact | UDBHAV – Inter-IIIT Hackathon',
  description: 'Get in touch with the UDBHAV organizing team for registrations, sponsorships, or logistics.',
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="glass-panel gradient-border p-8 space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">Contact</p>
        <h1 className="text-4xl font-semibold">Transmit a signal</h1>
        <p className="text-white/70 max-w-3xl">
          Whether you are a team lead, sponsor, or mentor, we&apos;re ready to collaborate. Expect a response within 48 hours from the core team at IIIT Sri City.
        </p>
      </section>
      <ContactCTA />
    </div>
  );
}
