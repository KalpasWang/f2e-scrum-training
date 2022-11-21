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
      gray5: '#E0E0E0',
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
      borderRadius: {
        '4xl': '2.25rem',
        '5xl': '2.5rem',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
