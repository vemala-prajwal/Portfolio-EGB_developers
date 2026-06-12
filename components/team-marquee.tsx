'use client';

import { teamRoles } from '@/lib/content';

export function TeamMarquee() {
  const items = [...teamRoles, ...teamRoles];

  return (
    <section className="border-y border-white/[0.06] py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.4em] text-muted">
          A dedicated team, fully embedded
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-6">
          {items.map((role, i) => (
            <div
              key={`${role}-${i}`}
              className="surface-card shrink-0 rounded-full px-8 py-4 font-display text-sm font-medium text-white"
            >
              {role}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
