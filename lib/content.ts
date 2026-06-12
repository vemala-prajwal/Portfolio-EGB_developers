export const hero = {
  name: 'EGB DEVELOPERS',
  eyebrow: 'Opinionated digital agency',
  headline: 'We build premium digital experiences for ambitious brands.',
  subheadline: "We don't just design websites — we engineer products that convert, scale, and feel unmistakably premium.",
  description: '',
  actions: [
    { label: 'Learn our approach', href: '#approach' },
    { label: 'View selected work', href: '#projects' }
  ],
  disciplines: ['SaaS', 'Web', 'Branding', 'Mobile'],
  stats: [
    { value: 48, suffix: '+', label: 'Projects delivered' },
    { value: 98, suffix: '%', label: 'Client satisfaction' },
    { value: 22, suffix: '+', label: 'Global clients' },
    { value: 12, suffix: '+', label: 'Technologies mastered' }
  ]
};

export const marqueeWords = ['Creative', 'Opinionated', 'Operators', 'Premium', 'Conversion-led', 'Cinematic'];

export const manifesto = {
  label: 'At EGB Developers',
  statement: 'we operate as an extension of your vision — not observers, builders. We embed, take ownership, and push your product further than typical agencies can.',
  pillars: ['Creative', 'Opinionated', 'Operators']
};

export const approach = [
  {
    step: '01',
    title: 'Schedule your call',
    description: 'A quick, honest conversation — no pitch decks, no fluff. We learn your product, your goals, and where we can move the needle fastest.'
  },
  {
    step: '02',
    title: 'Define the scope',
    description: 'Pick an engagement that fits where you are today. Clear deliverables, transparent timelines — we earn your trust by actually delivering.'
  },
  {
    step: '03',
    title: 'We ship in iterations',
    description: 'We prioritize and start moving fast. Weekly cycles, tight feedback loops, real output — not status updates and slide decks.'
  },
  {
    step: '04',
    title: 'Repeat & refine',
    description: 'The longer we collaborate, the sharper we get. Every cycle we understand your product deeper, move faster, and raise the bar.'
  }
];

export const teamRoles = [
  'Web Developer', 'UI/UX Designer', 'Brand Designer', 'Motion Designer',
  'Creative Director', 'Product Designer', 'Full-stack Engineer', '3D Designer'
];

export const founderQuote = {
  quote: "I've always believed a small, obsessed team can change a product completely.",
  author: 'EGB Developers',
  role: 'Founding Team',
  belief: 'The best products aren\'t built by distant vendors, but by teams that are embedded, aligned, and accountable.'
};

export const whyUs = [
  { title: 'No hiring overhead', description: 'Skip the time, cost, and risk of building in-house. Get a team that\'s already sharp, aligned, and ready to execute.' },
  { title: 'Speed by default', description: 'No ramp-up cycles. No long onboarding. We plug in fast and start moving immediately.' },
  { title: 'Backlog, reduced fast', description: 'We hit the ground running and clear the queue — shipping meaningful work from day one.' },
  { title: 'Deep product understanding', description: 'We think in systems, not tickets. Every decision connects to conversion and brand presence.' },
  { title: 'Flexible by design', description: 'Scale up, scale down, pivot. We adapt to what your product needs — not the other way around.' },
  { title: 'Built for iteration', description: 'We ship, learn, and improve in tight loops — so your product keeps getting better, fast.' }
];

export const impactMetrics = [
  { value: 48, suffix: '+', label: 'Projects delivered' },
  { value: 98, suffix: '%', label: 'Client satisfaction' },
  { value: 3, suffix: 'x', label: 'Faster iteration' },
  { value: 95, suffix: '+', label: 'Lighthouse score' }
];

export const about = {
  title: 'Your ideas deserve a dedicated team.',
  subtitle: "We're ready to revolutionize your product.",
  mission: 'To craft digital experiences that feel as considered as luxury products — where every pixel earns trust and drives conversion.',
  vision: 'A world where every brand can launch with the presence and polish of a global enterprise.',
  values: [
    { title: 'Craft', description: 'Every detail is intentional. Nothing ships without purpose.' },
    { title: 'Clarity', description: 'Complex ideas distilled into elegant, conversion-focused experiences.' },
    { title: 'Momentum', description: 'Fast launches without compromising quality or performance.' },
    { title: 'Partnership', description: 'We embed with your team and treat every project as our own.' }
  ],
  stats: [
    { label: 'Projects delivered', value: 48, suffix: '+' },
    { label: 'Years experience', value: 10, suffix: '' },
    { label: 'Clients worldwide', value: 22, suffix: '+' },
    { label: 'Awards won', value: 9, suffix: '' }
  ]
};

export const services = [
  {
    title: 'Launch',
    tier: 'ONE-OFF',
    price: 'Custom',
    subtitle: 'Full product launch — brand, design, and development in one cohesive engagement.',
    features: ['Brand & visual identity', 'UX/UI design system', 'Full-stack development', 'Motion & interactions', 'Performance optimization'],
    cta: 'Book your call'
  },
  {
    title: 'Studio',
    tier: 'ON-GOING',
    price: '$3,000',
    period: '/month',
    subtitle: 'Design & development, every sprint. Weekly planning, async-first collaboration.',
    features: ['Iterative feature delivery', 'Weekly planning call', 'Bug fixes & improvements', 'Design system maintenance', 'Pause or cancel anytime'],
    cta: 'Book your call',
    featured: true
  },
  {
    title: 'Embedded',
    tier: 'EMBEDDED',
    price: '$5,000',
    period: '/month',
    subtitle: 'Design & development, full throttle. Priority queue — your work ships first.',
    features: ['Two parallel workstreams', '48h average turnaround', 'Priority queue', 'Dedicated team lead', 'Pause or cancel anytime'],
    cta: 'Book your call'
  }
];

export const projects = [
  {
    id: 'nebula-labs',
    title: 'Nebula Labs',
    subtitle: 'Enterprise SaaS · Web Design & Dev',
    category: 'Enterprise SaaS',
    industry: 'SaaS',
    description: 'A modern launch platform with immersive product storytelling.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    stack: ['Next.js', 'React', 'TypeScript'],
    results: '+72% signups',
    size: 'large' as const,
    problem: 'Nebula needed enterprise-grade trust while feeling innovative.',
    solution: 'Immersive storytelling with scroll-driven reveals and conversion-optimized signup.',
    technology: 'Next.js, Framer Motion, PostgreSQL',
    outcome: 'Category leader positioning within 90 days.',
    impact: 'Cinematic product experience that drove measurable growth.',
    metrics: ['+72% signups', '94 Lighthouse', '3.2s session'],
    demo: '#',
    github: '#'
  },
  {
    id: 'arc-vista',
    title: 'Arc Vista',
    subtitle: 'Luxury Brand · Brand & Web',
    category: 'Luxury Brand',
    industry: 'Luxury',
    description: 'Editorial website blending luxury print traditions with digital elegance.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
    stack: ['Figma', 'GSAP', 'Tailwind'],
    results: '3x brand recall',
    size: 'medium' as const,
    problem: 'Digital presence needed to match physical luxury.',
    solution: 'Editorial-first design with cinematic typography and parallax imagery.',
    technology: 'Next.js, GSAP ScrollTrigger',
    outcome: '3x brand recall, +58% qualified leads.',
    impact: 'Regional luxury brand elevated to national recognition.',
    metrics: ['3x recall', '+58% leads', '2.1min avg'],
    demo: '#',
    github: '#'
  },
  {
    id: 'prism-works',
    title: 'Prism Works',
    subtitle: 'Studio Showcase · Product Design',
    category: 'Studio Showcase',
    industry: 'Creative',
    description: 'Interactive portfolio with animated transitions and storytelling.',
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1400&q=80',
    stack: ['GSAP', 'React', 'Node.js'],
    results: '+42% engagement',
    size: 'medium' as const,
    problem: 'Portfolio needed to demonstrate motion craft, not just describe it.',
    solution: 'Case-study showcase with GSAP scroll sequences and micro-interactions.',
    technology: 'React, GSAP, Supabase',
    outcome: '42% longer engagement, 3 enterprise clients in Q1.',
    impact: 'Interactive proof of capability that sells itself.',
    metrics: ['+42% engagement', '3 clients', 'Awwwards'],
    demo: '#',
    github: '#'
  }
];

export const testimonials = [
  { author: 'Mira Novak', company: 'Vast Labs', role: 'CEO', initials: 'MN', quote: 'EGB delivered a website that feels like a premium product in every interaction. Unmatched attention to motion and detail.' },
  { author: 'Evan Park', company: 'Luna Ventures', role: 'Founding Partner', initials: 'EP', quote: 'From concept to launch, flawless. Every design decision felt elevated. Our conversion rate speaks for itself.' },
  { author: 'Sofia Reyes', company: 'Meridian Health', role: 'Head of Digital', initials: 'SR', quote: 'They transformed our brand from generic to unmistakably premium. They understood our vision before we could articulate it.' },
  { author: 'James Chen', company: 'Atlas Fintech', role: 'CTO', initials: 'JC', quote: 'Engineering quality matched design quality. Our Lighthouse scores went from 62 to 97.' }
];

export const faqs = [
  { question: 'Do you only work on existing products?', answer: 'No. We work on greenfield launches, rebrands, and ongoing product evolution. Many partnerships start with a project and evolve into ongoing collaboration.' },
  { question: 'How quickly can you start?', answer: 'Typically within 1–2 weeks of signing. We move fast — no lengthy onboarding cycles or discovery phases that delay real output.' },
  { question: 'What does the monthly retainer include?', answer: 'Design, development, weekly planning, async collaboration, iterative delivery, and ongoing improvements. Scope scales with your tier.' },
  { question: 'Can I pause or cancel anytime?', answer: 'Yes. We believe in earning your trust month over month. No lock-in contracts — pause or cancel with 30 days notice.' }
];

export const stackItems = [
  { name: 'React', color: '#61dafb', abbr: 'Re' },
  { name: 'Next.js', color: '#ffffff', abbr: 'Nx' },
  { name: 'Node.js', color: '#68a063', abbr: 'No' },
  { name: 'TypeScript', color: '#3178c6', abbr: 'TS' },
  { name: 'Supabase', color: '#3ecf8e', abbr: 'Sb' },
  { name: 'PostgreSQL', color: '#336791', abbr: 'Pg' },
  { name: 'Tailwind', color: '#38bdf8', abbr: 'Tw' },
  { name: 'GSAP', color: '#88ce02', abbr: 'Gs' }
];

export const socialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'GitHub', href: '#' }
];

export const footerLinks = {
  navigation: [
    { label: 'Approach', href: '#approach' },
    { label: 'Work', href: '#projects' },
    { label: 'Pricing', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ],
  services: [
    { label: 'Launch', href: '#services' },
    { label: 'Studio', href: '#services' },
    { label: 'Embedded', href: '#services' }
  ]
};

export const contact = {
  headline: "Let's work together",
  subheadline: 'Built for momentum, not contracts. Schedule a 15-minute call — no compromise.',
  email: 'hello@egbdevelopers.com',
  phone: '+1 555 012 9876',
  availability: '2 spots left for 2026 engagements'
};

// Legacy exports for components still using these
export const trustMetrics = impactMetrics;
export const industries = ['SaaS', 'Luxury', 'Healthcare', 'Fintech', 'Venture', 'E-commerce'];
export const processSteps = approach.map((a, i) => ({ title: a.title, icon: ['search','strategy','design','launch'][i], description: a.description }));
export const achievements = [
  { label: 'Awwwards Honorable Mention', date: '2025' },
  { label: 'Top 10 Premium Web Studio', date: '2024' },
  { label: 'Certified UX Strategist', date: '2023' }
];
export const stats = impactMetrics;
export const blogPosts = [
  { title: 'Building elegant SaaS landing experiences', category: 'Design', excerpt: 'How to craft a homepage that feels premium while staying performance-friendly.', href: '#' },
  { title: 'Motion systems for modern brands', category: 'Motion', excerpt: 'A practical guide to meaningful animations without slowing the site.', href: '#' }
];
