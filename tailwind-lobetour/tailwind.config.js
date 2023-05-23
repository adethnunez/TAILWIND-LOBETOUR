/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark:'#323232',
        light:'#ffffff',
        primary: '#04ddb2',
        grey: '#e8edf0'
      }
    },
  },
  plugins: [],
}

