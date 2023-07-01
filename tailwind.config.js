/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow:{
      'basic': '0px 0px 10px 3px rgba(0,0,0,0.15)',
      'no-left': '5px 0px 10px 3px rgba(0,0,0,0.15)',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.p-calc': {
            paddingLeft: 'calc((100vw - 1188px)/2)',
            paddingRight: 'calc((100vw - 1188px)/2)',
        },
      });
    },
  ],
})