import Image from 'next/image';
import { TeamMember } from '@/data/team';

interface TeamGridProps {
  members: TeamMember[];
  title?: string;
}

export function TeamGrid({ members, title = 'Crew behind the glow' }: TeamGridProps) {
  return (
    <section className="mt-16 space-y-6" id="team">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Team</p>
          <h2 className="text-3xl font-semibold">{title}</h2>
        </div>
        <div className="binary-divider">1 0 | 1 1 | 0 0 | 1 1</div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {members.map((member) => (
          <div key={member.id} className="glass-panel gradient-border p-4 flex flex-col gap-3 card-sheen">
            <div className="relative h-40 w-full rounded-xl overflow-hidden bg-edge">
              {member.imageUrl ? (
                <Image src={member.imageUrl} alt={member.name} fill className="object-cover" />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-white/60">Avatar incoming</div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">{member.name}</p>
                <p className="text-sm text-neon-blue">{member.role}</p>
              </div>
              <span className="px-2 py-1 rounded-full bg-white/10 text-[11px] text-white/70">{`#${member.order || 0}`}</span>
            </div>
            {member.bio && <p className="text-sm text-white/70 leading-relaxed">{member.bio}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
