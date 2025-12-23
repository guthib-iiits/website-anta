import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './scripts/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        night: '#05060a',
        neon: {
          blue: '#48b5ff',
          magenta: '#ff3d9a',
          violet: '#7c5bff',
          cyan: '#30e8c9',
          green: '#8cff4d',
        },
        card: '#0c0f16',
        edge: '#111827',
      },
      fontFamily: {
        display: ['Space Grotesk', ...fontFamily.sans],
        mono: ['JetBrains Mono', ...fontFamily.mono],
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(72, 181, 255, 0.25) 1px, transparent 0)',
        'noise-texture': 'linear-gradient(rgba(255,255,255,0.02), rgba(255,255,255,0.02))',
      },
      boxShadow: {
        glow: '0 0 25px rgba(72, 181, 255, 0.45)',
        neon: '0 0 10px rgba(72, 181, 255, 0.8)',
      },
      animation: {
        pulseSlow: 'pulse 4s ease-in-out infinite',
        scan: 'scan 6s linear infinite',
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
