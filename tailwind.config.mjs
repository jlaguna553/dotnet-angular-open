/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: '#13262f',
        coral: '#f36f56',
        mint: '#a8e6cf',
        paper: '#f7f3eb',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(19, 38, 47, 0.10)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
