'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reducedMotion;
}

export function VertealBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const orbPrimaryRef = useRef<HTMLDivElement>(null);
  const orbSecondaryRef = useRef<HTMLDivElement>(null);
  const orbAccentRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;

    const onMove = (event: MouseEvent) => {
      if (!isFinePointer || !spotlightRef.current) return;
      gsap.to(spotlightRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 1.4,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });

    const ctx = gsap.context(() => {
      if (orbPrimaryRef.current) {
        gsap.fromTo(
          orbPrimaryRef.current,
          { y: -40, x: 0 },
          {
            y: () => window.innerHeight * 0.45,
            x: () => window.innerWidth * 0.06,
            ease: 'none',
            scrollTrigger: {
              trigger: document.body,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.8
            }
          }
        );
      }

      if (orbSecondaryRef.current) {
        gsap.fromTo(
          orbSecondaryRef.current,
          { y: 60, x: 0 },
          {
            y: () => -window.innerHeight * 0.35,
            x: () => -window.innerWidth * 0.1,
            ease: 'none',
            scrollTrigger: {
              trigger: document.body,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 2.4
            }
          }
        );
      }

      if (orbAccentRef.current) {
        gsap.fromTo(
          orbAccentRef.current,
          { y: 0, scale: 1 },
          {
            y: () => window.innerHeight * 0.55,
            scale: 1.15,
            ease: 'none',
            scrollTrigger: {
              trigger: document.body,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.2
            }
          }
        );
      }

      if (gridRef.current) {
        gsap.to(gridRef.current, {
          backgroundPosition: '0px 240px',
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
          }
        });
      }
    }, rootRef);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <div ref={rootRef} className="verteal-bg pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-surface" />

      <div
        ref={orbPrimaryRef}
        className="verteal-orb verteal-orb-primary absolute -left-[10%] top-[8%] will-change-transform"
      />
      <div
        ref={orbSecondaryRef}
        className="verteal-orb verteal-orb-secondary absolute -right-[8%] top-[38%] will-change-transform"
      />
      <div
        ref={orbAccentRef}
        className="verteal-orb verteal-orb-accent absolute bottom-[12%] left-[28%] will-change-transform"
      />

      <div ref={gridRef} className="verteal-grid absolute inset-0" />
      <div className="verteal-vignette absolute inset-0" />
      <div className="noise-overlay absolute inset-0" />

      <div
        ref={spotlightRef}
        className="verteal-spotlight absolute hidden will-change-transform md:block"
        style={{ left: 0, top: 0 }}
      />
    </div>
  );
}
