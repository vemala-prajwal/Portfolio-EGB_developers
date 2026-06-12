'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Magnetic } from '@/components/motion/magnetic';

const links = [
  { label: 'Approach', href: '#approach' },
  { label: 'Work', href: '#projects' },
  { label: 'Pricing', href: '#services' },
  { label: 'Contact', href: '#contact' }
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`fixed inset-x-0 z-50 px-6 transition-all duration-500 sm:px-10 lg:px-16 ${scrolled ? 'top-0 py-4' : 'top-0 py-6'}`}>
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between transition-all duration-500 ${
            scrolled ? 'rounded-full border border-white/[0.06] bg-[#030303]/80 px-6 py-3 backdrop-blur-xl' : ''
          }`}
        >
          <a href="#home" className="font-display text-sm font-semibold tracking-tight text-white" data-cursor="pointer">
            egb developers
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-cursor="pointer"
                className="link-premium text-sm text-muted transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Magnetic strength={0.15} className="hidden sm:block">
              <a href="#contact" data-cursor="pointer" className="btn-primary px-5 py-2.5 text-xs font-semibold">
                Schedule call
              </a>
            </Magnetic>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center md:hidden"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block h-px w-5 bg-white transition-all ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-px w-5 bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-px w-5 bg-white transition-all ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-surface md:hidden"
          >
            {links.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="py-4 font-display text-3xl font-medium text-white"
              >
                {item.label}
              </motion.a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-8 px-8 py-4 text-sm">
              Schedule call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
