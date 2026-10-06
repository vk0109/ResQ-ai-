/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#0F172A',      // Slate-900 (Primary Dark Background)
        surface: '#1E293B',     // Slate-800 (Card Background)
        danger: '#DC2626',      // Red Emergency
        warning: '#F59E0B',     // Amber Caution
        success: '#10B981',     // Green Ready
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Open Sans', 'sans-serif'],
        display: ['Bricolage Grotesque', 'sans-serif'],
        hero: ['Bebas Neue', 'sans-serif'],
        accent: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}