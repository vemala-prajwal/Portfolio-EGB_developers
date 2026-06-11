import { socialLinks } from '@/lib/content';

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-accent/80">Apollo Vale</p>
          <h3 className="text-3xl font-semibold text-white">Built to feel premium, memorable, and conversion-ready.</h3>
          <p className="text-sm text-slate-300">A refined agency-style website for modern brands, founders, and teams that want a digital presence that performs as beautifully as it looks—across every interaction and every launch moment.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <a href="#home" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:text-white">Home</a>
          <a href="#projects" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:text-white">Projects</a>
          <a href="#contact" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:text-white">Contact</a>
          <a href="/secret-admin-login" className="rounded-full border border-accent/40 bg-accent/10 px-3 py-2 text-accent transition hover:text-white">Admin login</a>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Apollo Vale. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} className="transition hover:text-white">{social.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
