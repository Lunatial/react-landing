const defaultTheme = require("tailwindcss/defaultTheme")
const {themeable} = require('tailwindcss-themeable')

// tailwind.config.js
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        name: 'primary-theme',
        extend: {
            height: {
                140: '40rem',
                700: '700px',
            },
            width: {
                140: '40rem',
            },
            minWidth: {
                140: '40rem',
            },
            fontFamily: {
                VinSansPro: ["Vin Sans Pro", ...defaultTheme.fontFamily.sans],
                Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
                Playfair: ["Playfair", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        themeable({
            defaultTheme: 'primary-theme',
            themes: [
                {
                    name: 'primary-theme',
                    palette: {
                        dark: '#1F1D26',
                        brightGreen: '#42E3BA',
                        lightGreen: '#BBE2CF',
                        blue: '#608ac9',
                        green: '#1c8416',
                        yellow: '#e09900',
                        lightGray: '#b2bcc9',
                        orange: '#ff722f',
                    }
                },
                {
                    name: 'secondary-theme',
                    palette: {
                        // make sure all your themes have your customized keys to avoid problems when switching themes
                        dark: '#2a0a9a',
                        brightGreen: '#41a8f6',
                        lightGreen: '#25417e',
                        blue: '#59759f',
                        green: '#10590c',
                        yellow: '#d59711',
                        lightGray: '#b4c2d5',
                        orange: '#a84a1d',
                    }
                }
            ]
        }),
    ],
};
