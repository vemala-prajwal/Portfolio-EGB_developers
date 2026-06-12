'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { processSteps } from '@/lib/content';
import { SectionHeader } from '@/components/motion/section-header';

const stepIcons: Record<string, string> = {
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  strategy: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  design: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  code: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  test: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  launch: 'M13 10V3L4 14h7v7l9-11h-7z'
};

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current, { scaleY: 0 }, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 55%',
          end: 'bottom 35%',
          scrub: 1,
          onUpdate: (self) => {
            const step = Math.min(processSteps.length - 1, Math.floor(self.progress * processSteps.length));
            setActiveStep(step);
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative px-6 py-32 sm:px-10 lg:px-16">
      <div className="section-glow top-0" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Process"
          title="A cinematic workflow designed for momentum and launch confidence."
          description="Every phase is intentional — research, positioning, design, build, proof, and launch."
        />

        <div className="relative">
          <div ref={lineRef} className="absolute left-6 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-accent via-accent2 to-transparent md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-10 md:space-y-14">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isActive = index <= activeStep;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className={`relative flex items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20'}`}>
                    <article className={`glass-card-premium glow-hover rounded-[2rem] p-8 transition-all duration-500 ${isActive ? 'border-accent/20 shadow-glow' : 'opacity-60'}`}>
                      <div className={`flex items-start gap-5 ${isEven ? 'md:flex-row-reverse md:text-right' : ''}`}>
                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 ${isActive ? 'border-accent/40 bg-accent/15 text-accent2' : 'border-white/10 bg-white/[0.04] text-slate-500'}`}>
                          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d={stepIcons[step.icon]} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent2">
                            {String(index + 1).padStart(2, '0')}
                          </p>
                          <h3 className="mt-2 font-display text-xl font-bold text-white">{step.title}</h3>
                          <p className="mt-3 text-base leading-7 text-slate-400">{step.description}</p>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className={`absolute left-6 hidden h-5 w-5 rounded-full border-2 transition-all duration-500 md:left-1/2 md:block md:-translate-x-1/2 ${isActive ? 'border-accent bg-accent shadow-glow scale-110' : 'border-white/20 bg-surface'}`} />
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
