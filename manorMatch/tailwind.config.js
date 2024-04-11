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
        'mmpurple': '#30011E'
      },
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
        serif: ['PT Serif', 'serif'],
        light: ['Raleway Light', 'sans-serif'],
        extralight: ['Raleway ExtraLight', 'sans-serif'],
        thin: ['Raleway Thin', 'sans-serif'],
        semibold: ['Raleway SemiBold', 'sans-serif'],
      },
      boxShadow: {
        'landinglogin': '2px 3px 0px 1px #020025',
      },
    },
  },
  plugins: [],
}