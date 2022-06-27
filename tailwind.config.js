const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B3262',
        secondary: '#E7E8E6',
      },
      height: {
        140: '40rem',
        700: '700px',
      },
      width: {
        140: '40rem',
      },
      fontFamily: {
        VinSansPro: ["Vin Sans Pro", ...defaultTheme.fontFamily.sans],
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        Playfair: ["Playfair", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
