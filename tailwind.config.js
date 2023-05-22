/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    
    extend: {
      colors:{
        dark:'#323232',
        light: '#ffffff',
        primary: '#04DDB2',
        grey: '#E8EDF0',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
      
    },

  },
  plugins: [],
}

