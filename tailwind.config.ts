// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
      screens: {
        sm: '375px',   // Mobile
        md: '768px',   // Tablet
        lg: '1440px',  // Desktop
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
      },
      colors: {
        // Add brand colors here if needed
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
