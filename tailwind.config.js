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
        dark: '#0D1117'
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))'
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none'
          }
        }
      },
      animation: {
        flicker: 'flicker 3.5s linear infinite'
      }
    }
  },
  plugins: []
}
