'use client';

import { testimonials } from '@/lib/content';

function Card({ item }: { item: (typeof testimonials)[0] }) {
  return (
    <article className="surface-card w-[360px] shrink-0 rounded-2xl p-8">
      <p className="text-base leading-[1.75] text-muted">&ldquo;{item.quote}&rdquo;</p>
      <div className="mt-8 flex items-center gap-4 border-t border-white/[0.06] pt-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-semibold text-white">
          {item.initials}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{item.author}</p>
          <p className="text-xs text-muted">{item.role}, {item.company}</p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="border-y border-white/[0.06] py-20">
      <div className="mb-12 px-6 text-center sm:px-10 lg:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.4em] text-muted">Testimonials</p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-5 px-4">
          {items.map((item, i) => (
            <Card key={`${item.author}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
