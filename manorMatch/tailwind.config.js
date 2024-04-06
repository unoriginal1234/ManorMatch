/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mmblue': '#053C5E',
        'mmsand': '#DFB48C',
        'mmcream': '#FFF4E0',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['PT', 'serif'],
      },
    },
  },
  plugins: [],
}