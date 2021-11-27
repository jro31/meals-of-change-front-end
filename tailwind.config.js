module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.4s linear forwards',
        'fade-out': 'fadeOut 0.4s linear forwards',
        'slide-in-down': 'slideInDown 0.4s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'slide-out-left': 'slideOutLeft 0.4s ease-in forwards',
        'slide-out-right': 'slideOutRight 0.4s ease-in forwards',
        'slide-out-up': 'slideOutUp 0.4s ease-in forwards',
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
        slideInDown: {
          '0%': { transform: 'translateY(-100vh)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(100vw)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-100vw)' },
        },
        slideOutLeft: {
          '100%': { transform: 'translateX(-100vw)' },
        },
        slideOutRight: {
          '100%': { transform: 'translateX(100vw)' },
        },
        slideOutUp: {
          '100%': { transform: 'translateY(-100vh)' },
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
