'use client';

import { footerLinks, socialLinks, contact } from '@/lib/content';
import { Magnetic } from '@/components/motion/magnetic';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-white">egb developers</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Great products come from teams that are close enough to care — and opinionated enough to change things.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">Links</p>
              <ul className="mt-4 space-y-2">
                {footerLinks.navigation.map((l) => (
                  <li key={l.href}><a href={l.href} className="link-premium text-sm text-muted hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">Plans</p>
              <ul className="mt-4 space-y-2">
                {footerLinks.services.map((l) => (
                  <li key={l.label}><a href={l.href} className="link-premium text-sm text-muted hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-muted">© 2026 EGB Developers</p>
          <div className="flex gap-6">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} className="text-xs text-muted hover:text-white">{s.label}</a>
            ))}
          </div>
          <Magnetic strength={0.15}>
            <a href={`mailto:${contact.email}`} data-cursor="pointer" className="btn-primary px-5 py-2.5 text-xs">
              Schedule your call
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
