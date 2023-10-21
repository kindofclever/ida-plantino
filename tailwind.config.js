/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        '5xl': '40px',
        '4xl': '32px',
        '3xl': '28px',
        '2xl': '24px',
        xl: '20px',
        lg: '16px',
        md: '14px',
        sm: '12px',
        xs: '11px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1680px',
      },
      colors: {
        cream: '#F5F2E5',
        tomatoSoup: {
          100: '#DA8061'
        },
        plantGreen: {
          100: '#65674D',
          200: '#434433',
        },
      },
      fontFamily: {
        sans: ['Inter'],
      },
    },
  },
  plugins: [],
}