import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#FAFAF8',
        'warm-gray': '#F0EFEB',
        'charcoal': '#1A1A1A',
        'slate-gray': '#5C5C5C',
        'berlin-blue': '#2D5A8A',
        'amber-gold': '#C9A227',
        'soft-gray': '#E0DED8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-ibm-plex)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
