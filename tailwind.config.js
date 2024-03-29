module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
      colors: {
        'logo-green': 'rgb(113, 200 55)',
      },
      flex: {
        'grow-only': '1 0 auto',
      },
      height: {
        'screen-minus-nav': 'calc(100vh - 3.5rem)',
        'screen-minus-nav-minus-4rem': 'calc(100vh - 3.5rem - 4rem)',
        'full-minus-5rem': 'calc(100% - 5rem)',
        '40px': '40px',
        '50px': '50px',
        '11/12': '91.666667%',
        22: '5.5rem',
      },
      inset: {
        '1/6': '16.666667%',
        '1/12': '8.333333%',
        '1/24': '4.166667%',
        22: '5.5rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100vw)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        slideOutUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100vh)' },
        },
      },
      margin: {
        'half-screen-minus-nav': 'calc((100vh - 3.5rem) / 2)',
      },
      maxHeight: {
        'screen-minus-nav': 'calc(100vh - 3.5rem)',
        'full-minus-88px': 'calc(100% - 88px)',
        'full-minus-96px': 'calc(100% - 96px)',
        none: 'none',
      },
      maxWidth: {
        'screen-minus-40px': 'calc(100vw - 40px)',
        'half-screen': '50vw',
      },
      minHeight: {
        'screen-minus-nav': 'calc(100vh - 3.5rem)',
        'half-screen-minus-nav': 'calc((100vh - 3.5rem) / 2)',
        'screen-minus-nav-minus-13rem': 'calc(100vh - 3.5rem - 13rem)',
        33: '33%',
        75: '75%',
      },
      minWidth: {
        33: '33%',
        75: '75%',
        screen: '100vw',
      },
      padding: {
        '1/12': '8.333333%',
      },
      scrollMargin: {
        '1/12-screen': '8.333333vw',
      },
      transitionDuration: {
        400: '400ms',
      },
      width: {
        108: '27rem',
        '40px': '40px',
        '50px': '50px',
        'full-minus-2.5rem': 'calc(100% - 2.5rem)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
