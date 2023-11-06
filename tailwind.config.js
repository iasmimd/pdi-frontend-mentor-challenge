/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,scss,ts}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                primary: '#EA7317',
                lightPrimary: '#F9D5B9',
                darkPumpkin: '#331705',
                lightWhite: '#FFFBFF',
                mustard: '#E1AD01',
            },
            fontFamily: {
                sans: ['Bai Jamjuree', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
