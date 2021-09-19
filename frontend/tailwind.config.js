module.exports = {
  purge: ['./src/*/.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        blue: '2px solid #0000ff',
        gray: '2px solid #181818',
      }

    },
  },
  variants: {
    extend: {},
    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
    scale: ['responsive', 'hover', 'focus', 'active'],
    backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}