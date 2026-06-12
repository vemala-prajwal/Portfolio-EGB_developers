'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { usePathname } from 'next/navigation';

const links: { href: Route; label: string }[] = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/projects', label: 'Projects' },
  { href: '/admin/projects/new', label: 'New' }
];

export function AdminMobileNav() {
  const pathname = usePathname();

  return (
    <div className="mb-8 flex flex-wrap gap-2 border-b border-white/10 pb-6 lg:hidden">
      {links.map((link) => {
        const active = pathname === link.href || (link.href !== '/admin/dashboard' && pathname.startsWith(link.href));
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 text-sm transition ${
              active ? 'bg-white/10 text-white' : 'text-muted hover:bg-white/5 hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
