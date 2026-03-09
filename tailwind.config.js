/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
          'berge': '#F3EDD7',
          'laranja': '#D37037',
          'verde-musgo': '#8C8E45',
          'musgo-claro': '#C1C991',
      },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};