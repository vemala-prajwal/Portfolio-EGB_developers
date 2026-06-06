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
        surface: '#0b1120',
        surface2: '#111827',
        accent: '#6b5bff',
        accent2: '#38d7ff'
      },
      boxShadow: {
        glow: '0 0 60px rgba(107, 91, 255, 0.22)',
        glass: '0 20px 80px rgba(0,0,0,0.14)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(107,91,255,0.18), transparent 32%), radial-gradient(circle at 20% 20%, rgba(56,215,255,0.18), transparent 25%)',
        'frost': 'linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03))'
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
