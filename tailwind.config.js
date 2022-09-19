/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {

    },
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": {opacity: 0},
          "100%": {opacity: 1},
        }
      },
      colors: {
        background: {
          light: 'rgba(41,50,65,0.19)',
          dark: '#293241'
        },
        primary: {
          light: 'rgba(238,108,77,0.1)',
          dark: '#ee6c4d'
        },
        secondary: {
          light: '#afafaf',
          dark: '#808080'
        },
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
  variants: {
    animation: ["motion-safe"]
  }
}
