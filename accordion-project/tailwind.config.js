/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-red': 'hsl(14, 88%, 65%)',
        'greyish-blue': 'hsl(240, 6%, 50%)'
      }
    },
  },
  plugins: [],
}