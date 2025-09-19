/** @type {import('tailwindcss').Config} */
export default {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f0f0f',
        'dark-surface': '#1a1a1a',
        'dark-card': '#262626',
        'dark-text': '#e5e5e5',
        'dark-text-secondary': '#a3a3a3',
        'accent-primary': '#3b82f6',
        'accent-secondary': '#8b5cf6',
        'accent-hover': '#2563eb',
      },
      fontFamily: {
        'palatino': ['Palatino', 'serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
        'gradient-cta': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      }
    },
  },
  plugins: [],
}