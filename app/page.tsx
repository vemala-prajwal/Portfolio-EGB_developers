'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/hero';
import { AboutSection } from '@/components/about';
import { ServicesSection } from '@/components/services';
import { ProjectsSection } from '@/components/projects';
import { TestimonialsSection } from '@/components/testimonials';
import { AchievementsSection } from '@/components/achievements';
import { BlogSection } from '@/components/blog';
import { ContactSection } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <AboutSection />
      </motion.div>
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <AchievementsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
