import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#030303',
        surface2: '#0a0a0a',
        muted: '#888888',
        accent: '#6b5bff',
        accent2: '#38d7ff'
      },
      fontSize: {
        hero: ['clamp(2.75rem,7vw,6.5rem)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        'hero-lg': ['clamp(3.5rem,9vw,7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        section: ['clamp(2rem,4.5vw,4rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        metric: ['clamp(3rem,8vw,6rem)', { lineHeight: '1', letterSpacing: '-0.04em' }]
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif']
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
