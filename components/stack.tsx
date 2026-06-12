'use client';

import { stackItems } from '@/lib/content';

export function StackSection() {
  const items = [...stackItems, ...stackItems];

  return (
    <section id="stack" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.4em] text-muted">Technology</p>
        <div className="overflow-hidden">
          <div className="marquee-slow flex w-max gap-8">
            {items.map((item, i) => (
              <span
                key={`${item.name}-${i}`}
                className="flex shrink-0 items-center gap-3 font-display text-sm font-medium text-muted transition hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
