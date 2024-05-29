/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.calc-width-70': {
          width: 'calc(100% - 30%)',
        },
      }, ['responsive', 'hover']);
    },
  ],
}

