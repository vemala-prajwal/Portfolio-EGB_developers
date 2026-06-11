'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' }
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = links.map((link) => document.querySelector(link.href));
      const current = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      setActive(current?.id ?? 'about');
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-4 z-50 mx-auto flex w-[calc(100%-1.5rem)] max-w-7xl justify-center px-3 transition-all duration-500 ${scrolled ? 'top-3' : 'top-4'}`}>
      <nav className={`glass-card flex w-full items-center justify-between rounded-full border border-white/10 px-4 py-3 shadow-glow backdrop-blur-2xl transition-all duration-500 ${scrolled ? 'px-5 py-2' : 'px-4 py-3'}`}>
        <a href="#home" className="text-sm font-semibold uppercase tracking-[0.35em] text-white">Apollo Vale</a>
        <div className="hidden items-center gap-2 md:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition ${active === item.href.slice(1) ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="rounded-full bg-gradient-to-r from-accent to-accent2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-glow transition hover:brightness-110">Start a project</a>
      </nav>
    </header>
  );
}
