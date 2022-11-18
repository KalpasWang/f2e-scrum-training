/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Cubic 11"', 'sans-serif'],
    },
    colors: {
      primary1: '#5137FF',
      primary2: '#FF60FA',
      primary3: '#FFCB2D',
      assist1: '#2B2B2B',
      assist2: '#FFF9F6',
      disabled: '#BDBDBD',
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      minHeight: {
        3.75: '3.75rem',
      },
    },
  },
  plugins: [],
};
