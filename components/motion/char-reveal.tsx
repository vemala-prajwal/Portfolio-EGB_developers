'use client';

import { motion } from 'framer-motion';

interface CharRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'p' | 'span';
}

export function CharReveal({ text, className = '', delay = 0, as = 'span' }: CharRevealProps) {
  const words = text.split(' ');
  const Component = motion[as] as typeof motion.span;
  let charIndex = 0;

  return (
    <Component className={className} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
          {word.split('').map((char) => {
            const index = charIndex++;
            return (
              <motion.span
                key={`${char}-${index}`}
                className="inline-block"
                initial={{ opacity: 0, y: 40, rotateX: -80 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.55,
                  delay: delay + index * 0.018,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {char}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Component>
  );
}
