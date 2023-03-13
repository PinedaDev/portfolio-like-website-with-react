/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      main: '#222831',
      secondary: '#393E46',
      third: '#EEEEEE',
      accent: '#EEEEEE',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
  }
}
