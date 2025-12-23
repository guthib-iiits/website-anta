import { Button } from '@/components/ui/button';

export function ContactCTA() {
  return (
    <section id="contact" className="mt-16 glass-panel gradient-border p-8 grid gap-6 md:grid-cols-2 items-center">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">Reach Out | Register</p>
        <h2 className="text-3xl font-semibold">Ready to enter the neon arena?</h2>
        <p className="text-white/70">
          Have queries on tracks, infrastructure or cross-IIIT logistics? The UDBHAV core team is a message away.
        </p>
      </div>
      <form className="grid gap-4">
        <div>
          <label className="text-sm text-white/70">Name</label>
          <input
            className="w-full mt-1 px-4 py-3 rounded-xl bg-edge border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
            placeholder="Your name"
            type="text"
            required
          />
        </div>
        <div>
          <label className="text-sm text-white/70">Email</label>
          <input
            className="w-full mt-1 px-4 py-3 rounded-xl bg-edge border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-violet"
            placeholder="you@iiit.ac.in"
            type="email"
            required
          />
        </div>
        <div>
          <label className="text-sm text-white/70">Message</label>
          <textarea
            className="w-full mt-1 px-4 py-3 rounded-xl bg-edge border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-magenta"
            placeholder="Tell us about your team, sponsorship, or travel queries"
            rows={3}
            required
          />
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <Button type="submit">Send Transmission</Button>
          <Button variant="ghost" type="button">
            Or email: core@udbhav.in
          </Button>
        </div>
      </form>
    </section>
  );
}
