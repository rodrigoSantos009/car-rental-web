/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./global.d.ts"
],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#E5E5E5;"
        },
        purple: {
          "100": "#2d3748"
        },
        orange: {
          "100": "#FF4D30"
        }
      }
    },
  },
  plugins: [],
}
