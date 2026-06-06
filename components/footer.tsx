import { socialLinks } from '@/lib/content';

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Apollo Vale</p>
          <p className="mt-4 max-w-md text-sm text-slate-400">A premium portfolio and agency-style website crafted for modern brands and high-impact launches.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
          <a href="/secret-admin-login" className="text-accent hover:text-white">
            Admin login
          </a>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
        <p>© 2026 Apollo Vale. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} className="text-slate-400 transition hover:text-white">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
