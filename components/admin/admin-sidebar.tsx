'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/admin/dashboard', label: 'Overview' },
  { href: '/admin/projects', label: 'Projects' },
  { href: '/admin/projects/new', label: 'Add Project' }
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col border-r border-white/10 bg-[#050505] p-6">
      <div className="mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent/80">EGB Admin</p>
        <h2 className="mt-2 font-display text-xl font-semibold text-white">Content Studio</h2>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href as Route}
              className={`block rounded-xl px-4 py-3 text-sm transition ${
                active ? 'bg-white/10 text-white' : 'text-muted hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-3 border-t border-white/10 pt-6">
        <Link href="/" className="block text-sm text-muted transition hover:text-white">
          View public site →
        </Link>
        <form action="/api/admin/logout" method="post">
          <button type="submit" className="text-sm text-red-300/80 transition hover:text-red-300">
            Sign out
          </button>
        </form>
      </div>
    </aside>
  );
}
