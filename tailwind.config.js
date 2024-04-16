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
    },
    extend: {
      colors: {
        'brandgreenlight': '#2cd994',
        'brandgreen': '#00c784',
        'brandgreendark': '#00b374',
        'brandgray': '#0d0d0d',
        'brandgrayblue':'#131415',
      },
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(-1rem)' },
          '50%': { transform: 'translateY(0px)' },
        },
        cardIntro: {
          '0%': { transform: 'translateY(500px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        updown: 'updown 1.5s linear infinite',
        cardIntro: 'cardIntro 0.6s ease-out 0s both',
      },
    },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
}

