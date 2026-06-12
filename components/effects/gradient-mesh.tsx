'use client';

import { motion } from 'framer-motion';

interface GradientMeshProps {
  mouseX?: number;
  mouseY?: number;
}

export function GradientMesh({ mouseX = 0.5, mouseY = 0.5 }: GradientMeshProps) {
  const offsetX = (mouseX - 0.5) * 40;
  const offsetY = (mouseY - 0.5) * 40;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
        style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
        className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 22, ease: 'easeInOut' }}
        style={{ transform: `translate(${-offsetX * 0.6}px, ${-offsetY * 0.6}px)` }}
        className="absolute -right-10 top-1/4 h-[400px] w-[400px] rounded-full bg-accent2/15 blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[90px]"
      />
    </div>
  );
}
