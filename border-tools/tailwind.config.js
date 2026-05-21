/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-barlow)', 'sans-serif'],
        condensed: ['var(--font-barlow-condensed)', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: '#09090b',
          secondary: '#111113',
          tertiary: '#18181c',
          card: '#1c1c21',
          hover: '#222228',
        },
        gold: {
          DEFAULT: '#c8a84b',
          light: '#e8c96a',
          dark: '#9a7c30',
          muted: 'rgba(200,168,75,0.15)',
        },
        zinc: {
          850: '#1f1f23',
        },
      },
      backgroundImage: {
        'grid-pattern': "repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255,255,255,0.02) 80px), repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.02) 80px)",
      },
    },
  },
  plugins: [],
};
