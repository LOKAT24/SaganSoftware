/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom dark tech theme colors
        tech: {
          bg: '#0a0a0a',
          surface: '#1a1a1a',
          primary: '#00f0ff', // Cyan/Neon Blue
          secondary: '#7000ff', // Neon Purple
          text: '#e0e0e0',
          muted: '#a0a0a0'
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'], // Tech feel
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
