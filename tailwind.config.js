const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,pug,md}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'can-hover': {'raw': '(hover: hover)'}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
