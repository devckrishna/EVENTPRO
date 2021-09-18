module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus','active'] ,
    scale: ['responsive', 'hover', 'focus' ,'active'],
    backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  },
  plugins: [],
}
