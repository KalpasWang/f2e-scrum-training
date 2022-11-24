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
      transparent: 'transparent',
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      minHeight: {
        24: '6rem', // 96px
        96: '24rem', // 384px
      },
      minWidth: {
        72: '18rem', //288px
      },
      borderRadius: {
        '4xl': '2.25rem',
        '5xl': '2.5rem',
      },
      borderWidth: {
        3: '3px',
        6: '6px',
        7: '7px',
        22: '22px',
        26: '26px',
        44: '44px',
      },
      width: {
        26: '6.5rem', // 104px
      },
      height: {
        26: '6.5rem', // 104px
      },
    },
  },
  plugins: [],
};
