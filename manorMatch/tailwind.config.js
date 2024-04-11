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
        sans: ['Helvetica', 'sans-serif'],
        serif: ['PT Serif', 'serif'],
        light: ['Raleway Light', 'sans-serif'],
        extralight: ['Raleway ExtraLight', 'sans-serif'],
        thin: ['Raleway Thin', 'sans-serif'],
        semibold: ['Raleway SemiBold', 'sans-serif'],
      },
      boxShadow: {
        'landinglogin': '2px 4px 0px 1px rgba(0,0,0,0.76);',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          textShadow: '0 0 2px #000, 0 0 3px #000',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}