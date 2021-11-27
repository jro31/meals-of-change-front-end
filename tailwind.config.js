module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.4s linear forwards',
        'fade-out': 'fadeOut 0.4s linear forwards',
      },
      height: {
        'screen-minus-nav': 'calc(100vh - 3.5rem)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
        },
        fadeOut: {
          '100%': { opacity: '0' },
        },
      },
      minHeight: {
        33: '33%',
      },
      minWidth: {
        33: '33%',
        75: '75%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
