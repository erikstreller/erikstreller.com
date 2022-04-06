const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      colors: {
        light: '#fefefe',
        dark: '#121212'
      }
    }
  },
  plugins: []
}
