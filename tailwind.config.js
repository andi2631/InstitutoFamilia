/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pantone: {
          // Example: Pantone 19-4052 Classic Blue
          'classic-blue': '#0F4C81',
          // You can add more Pantone colors here
        },
      },
    },
  },
  plugins: [],
}