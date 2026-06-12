'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from '@/components/hero';
import { Navigation } from '@/components/navigation';
import { MarqueeStrip } from '@/components/marquee-strip';
import { ManifestoSection } from '@/components/manifesto';
import { ApproachSection } from '@/components/approach';
import { TeamMarquee } from '@/components/team-marquee';
import { ProjectsSection } from '@/components/projects';
import { ImpactMetrics } from '@/components/impact-metrics';
import { WhyUsSection } from '@/components/why-us';
import { CtaBand } from '@/components/cta-band';
import { ServicesSection } from '@/components/services';
import { TestimonialsSection } from '@/components/testimonials';
import { StackSection } from '@/components/stack';
import { FaqSection } from '@/components/faq';
import { ContactSection } from '@/components/contact';
import { Footer } from '@/components/footer';
import { CustomCursor } from '@/components/effects/custom-cursor';
import { AmbientBackground } from '@/components/effects/ambient-background';

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      gsap.ticker.remove(tick);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-surface">
      <CustomCursor />
      <AmbientBackground />

      <div
        className="pointer-events-none fixed left-0 top-0 z-50 h-px w-full origin-left bg-white/30"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <MarqueeStrip />
        <ManifestoSection />
        <ApproachSection />
        <TeamMarquee />
        <ProjectsSection />
        <ImpactMetrics />
        <WhyUsSection />
        <CtaBand />
        <ServicesSection />
        <TestimonialsSection />
        <StackSection />
        <FaqSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
