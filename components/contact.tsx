import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Start your next premium project</h2>
        </div>
        <div className="glass-card rounded-[2.5rem] border border-white/10 p-10 shadow-glow">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-8">
                Ready to elevate your brand and launch a world-class digital experience? Let&apos;s connect and shape a polished, future-facing website together.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>hello@apollo-vale.com</p>
                </div>
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p>+1 555 012 9876</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-4 text-sm text-slate-400">
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-white">
                  Behance
                </a>
                <a href="#" className="hover:text-white">
                  Dribbble
                </a>
              </div>
            </div>
            <form className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Name" aria-label="Name" />
                <Input placeholder="Email" aria-label="Email" type="email" />
              </div>
              <Input placeholder="What would you like to build?" aria-label="Subject" />
              <textarea
                rows={5}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Tell me about your project"
              />
              <Button type="submit" className="w-full">
                Send inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
