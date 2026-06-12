'use client';

import { useState } from 'react';
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
import { VertealBackground } from '@/components/effects/verteal-background';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';
import type { ProjectData } from '@/lib/projects';

type HomePageProps = {
  projects: ProjectData[];
};

export function HomePage({ projects }: HomePageProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <SmoothScrollProvider onProgress={setScrollProgress}>
      <main className="relative overflow-x-hidden bg-surface">
        <CustomCursor />
        <VertealBackground />

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
          <ProjectsSection projects={projects} />
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
    </SmoothScrollProvider>
  );
}
