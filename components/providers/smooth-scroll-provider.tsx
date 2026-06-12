'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type SmoothScrollContextValue = {
  ready: boolean;
  reducedMotion: boolean;
  progress: number;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  ready: false,
  reducedMotion: false,
  progress: 0
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({
  children,
  onProgress
}: {
  children: React.ReactNode;
  onProgress?: (progress: number) => void;
}) {
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [progress, setProgress] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isReduced = motionQuery.matches;
    setReducedMotion(isReduced);

    if (isReduced) {
      const onScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const next = max > 0 ? (window.scrollY / max) * 100 : 0;
        setProgress(next);
        onProgress?.(next);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      setReady(true);
      return () => window.removeEventListener('scroll', onScroll);
    }

    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.085,
      smoothWheel: true,
      touchMultiplier: 1.4,
      wheelMultiplier: 1,
      anchors: {
        offset: -80
      }
    });

    lenisRef.current = lenis;

    lenis.on('scroll', (instance) => {
      ScrollTrigger.update();
      const next = instance.progress * 100;
      setProgress(next);
      onProgress?.(next);
    });

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: document.documentElement.style.transform ? 'transform' : 'fixed'
    });

    ScrollTrigger.addEventListener('refresh', () => lenis.resize());
    ScrollTrigger.refresh();

    const handleMotionChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    setReady(true);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [onProgress]);

  return (
    <SmoothScrollContext.Provider value={{ ready, reducedMotion, progress }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
