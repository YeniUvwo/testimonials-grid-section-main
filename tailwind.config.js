/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(210, 46%, 95%)',
        secondary: {
          purple: 'hsl(263, 55%, 52%)',
          darkgray: 'hsl(217, 19%, 35%)',
          darkblue: 'hsl(219, 29%, 14%)',
          white: 'hsl(0, 0%, 100%)',
          palewhite: 'hsl(0, 0%, 98%)',
          lightpurple: 'hsl(263, 55%, 82%)',
          lightgray: 'hsl(0, 0%, 81%)',
          lightgrayishblue: 'hsl(210, 46%, 95%)',
          footer: 'hsl(228, 45%, 44%)'
        },
      },
      fontFamily: {
        body: ['Barlow Semi Condensed']
      },
      fontSize: {
        s: '0.8rem',
      },
      maxHeight: {
        mx300: '18.75rem',
        mx310: '19.375',
        mx330: '20.625rem',
        mx340: '21.25rem',
        mx350: '21.875',
        mx600: '37.5rem',
        mx620: '38.75rem',
        mx660: '41.25rem',
        mx680: '42.5rem',
        mx700: '43.75rem'
      },
      width: {
        w55: '55%',
        w45: '45%',
        w30: '30%',
        w70: '70%',
        w23: '23%',
        w77: '77%'
      },
      lineHeight: {
        leading22: '1.375rem'
      }
    },
  },
  plugins: [],
}

