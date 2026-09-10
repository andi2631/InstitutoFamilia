/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      fraunces: ['Fraunces', 'serif'],
      serif: ['"Source Serif 4"', 'Georgia', 'serif'],
    },
      colors: {
        pantone: {
          'classic-blue': '#003DA5'
        },
      },
    },
  },
  plugins: [],
}