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
      },
      backgroundImage: {
        'card-mobile': "url('@/assets/image-header-mobile.jpg')",
        'card-desktop': "url('@/assets/image-header-desktop.jpg')",
       },
       padding: {
         '2/3': '66.66667%',
         '1/2': '50%',
         'full': '100%'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
