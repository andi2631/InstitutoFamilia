/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fontFamily: {
          'lexend': ['Lexend', 'sans-serif'],
        },
        pantone: {
          'classic-blue': '#003DA5'
        },
      },
    },
  },
  plugins: [],
}