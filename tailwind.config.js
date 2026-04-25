/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        beige: {
          light: '#F5F5F4',
          dark: '#E7E5E4',
        },
        tech: {
          black: '#1C1917',
          code: '#292524',
          emerald: '#10B981',
        }
      }
    }
  },
  plugins: [],
}
