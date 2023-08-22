/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './index.jsx',
    './src/*.jsx',
    './src/components/**/*.jsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('./src/assets/images/home_background.jpg')",
      },
      colors: {
        'udesc-beige': '#D3DBC8',
        'udesc-green': '#0F9653',
        'udesc-green-dark': '#095028',
        'udesc-black': '#010101',
        'udesc-gray': '#7B8399',
        'udesc-gray-light': '#D1D1D1',
        'udesc-white': '#F3F3F3',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
