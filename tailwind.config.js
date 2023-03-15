/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      pixel: ['pixel']
    },
    colors: {
      blue: 'purple'
    },
    screens: {
      md: '768px',
      xl: '1280px'
    },
    spacing: {
      inner: '4px',
      outer: '8px'
    }
  },
  plugins: [],
}
