module.exports = {
  content: ['./content/**/*.{html,js}'],
    theme:{
      container:{
        center:true,
        padding: '16px',
    extend: {
      screens:{
        '2xl': '1320px', 
      }

    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  }
}