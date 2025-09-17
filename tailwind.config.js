/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
   
    screens: {

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',

      '3xl': '1736px',

    },
    fontFamily: {
      'cooper': ['CooperSTD'],
      'volkorn': ['Vollkorn'],
      'nunito': ['Nunito'],
       'nave': ['nave'],
    },
    extend: {
      colors: {
        'brandgreenlight': '#2cd994',
        'brandgreen': '#008176',
        'brandgreendark': '#00b374',
        'brandgray': '#333841',
        'brandgrayblue':'#131415',
        'brandorange':'#cf4b00',
      },
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(-1rem)' },
          '50%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        updown: 'updown 1.5s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
}

