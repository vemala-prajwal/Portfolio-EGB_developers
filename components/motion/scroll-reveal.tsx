'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSmoothScroll } from '@/components/providers/smooth-scroll-provider';

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  as?: 'div' | 'section' | 'article' | 'p' | 'h2' | 'h3' | 'blockquote';
};

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 1,
  y = 48,
  once = true,
  as: Tag = 'div'
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const { ready, reducedMotion } = useSmoothScroll();

  useEffect(() => {
    const element = ref.current;
    if (!ready || !element) return;

    if (reducedMotion) {
      gsap.set(element, { opacity: 1, y: 0, clearProps: 'all' });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(element, {
        opacity: 0,
        y,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          toggleActions: once ? 'play none none none' : 'play reverse play reverse',
          once
        }
      });
    }, element);

    return () => ctx.revert();
  }, [ready, reducedMotion, delay, duration, y, once]);

  return (
    // @ts-expect-error dynamic tag ref
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

type ScrollRevealStaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  once?: boolean;
};

export function ScrollRevealStagger({
  children,
  className = '',
  stagger = 0.08,
  y = 40,
  once = true
}: ScrollRevealStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { ready, reducedMotion } = useSmoothScroll();

  useEffect(() => {
    const container = ref.current;
    if (!ready || !container) return;

    const items = container.querySelectorAll('[data-reveal-item]');
    if (!items.length) return;

    if (reducedMotion) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(items, {
        opacity: 0,
        y,
        duration: 0.85,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: once ? 'play none none none' : 'play reverse play reverse',
          once
        }
      });
    }, container);

    return () => ctx.revert();
  }, [ready, reducedMotion, stagger, y, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

type ScrollTextRevealProps = {
  text: string;
  className?: string;
  mutedPrefix?: string;
};

export function ScrollTextReveal({ text, className = '', mutedPrefix }: ScrollTextRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { ready, reducedMotion } = useSmoothScroll();

  useEffect(() => {
    const element = ref.current;
    if (!ready || !element) return;

    if (reducedMotion) {
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(element, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'top 55%',
          scrub: 1.2
        }
      });
    }, element);

    return () => ctx.revert();
  }, [ready, reducedMotion]);

  return (
    <h2 ref={ref} className={className}>
      {mutedPrefix ? <span className="text-muted">{mutedPrefix}</span> : null}
      {text}
    </h2>
  );
}

type ScrollParallaxProps = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
};

export function ScrollParallax({ children, className = '', speed = 0.15 }: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { ready, reducedMotion } = useSmoothScroll();

  useEffect(() => {
    const element = ref.current;
    if (!ready || !element || reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { y: -speed * 100 },
        {
          y: speed * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
    }, element);

    return () => ctx.revert();
  }, [ready, reducedMotion, speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
