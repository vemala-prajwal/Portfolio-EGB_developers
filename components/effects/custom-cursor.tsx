'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isDesktop);
    if (!isDesktop) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const hide = () => setVisible(false);
    const show = () => setVisible(true);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest('a, button, [data-cursor="pointer"]'));
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousemove', checkHover);
    window.addEventListener('mouseleave', hide);
    window.addEventListener('mouseenter', show);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousemove', checkHover);
      window.removeEventListener('mouseleave', hide);
      window.removeEventListener('mouseenter', show);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
        animate={{
          x: pos.x - (hovering ? 20 : 6),
          y: pos.y - (hovering ? 20 : 6),
          width: hovering ? 40 : 12,
          height: hovering ? 40 : 12,
          opacity: visible ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.5 }}
        style={{ borderRadius: '50%', border: '1.5px solid white' }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] h-8 w-8 rounded-full bg-accent/20 blur-xl"
        animate={{ x: pos.x - 16, y: pos.y - 16, opacity: visible ? 0.6 : 0 }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      />
    </>
  );
}
