import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './data/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: colors.blue,
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(37, 99, 235, 0.35)',
      },
    },
  },
  plugins: [],
}

export default config


