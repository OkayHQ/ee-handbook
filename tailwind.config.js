const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ceddff',
          500: '#306eff',
          900: '#ceddff'
        },
        gray: {
          ...defaultTheme.colors.gray, 
          900: '#12263f'
        }
      },
      spacing: {
        2: '0.125rem'
      }
    }
  }
}