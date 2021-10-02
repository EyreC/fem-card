const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ["Inter", ...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif],
      'mono': [,...defaultTheme.fontFamily.mono],
      'lexend': ["Lexend Deca", 'sans-serif']
    },
    extend: {
      colors: {
        'soft-violet':'#aa5cdb',
        'dark-blue': '#090b1a',
        'desaturate-dark-blue': '#1b1938'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
