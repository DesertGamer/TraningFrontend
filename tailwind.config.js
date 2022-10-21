/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // add this,
  content: [
    "./pages/**/*.js",
    "./pages/*.js",
    "./components/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
    },
  ],
  darkMode: false,
  variants: {
    extend: {
      padding: ['last'],
    },
  },
}
