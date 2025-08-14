/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      'Satoshi': 'sans-serif',
    },
    colors: {
      'transparent-white': {
        100: 'var(--color-transparent-white-100)',
        200: 'var(--color-transparent-white-200)',
      },
      'transparent-dark': 'var(--color-transparent-dark)',
      'transparent-dark-gray': 'var(--color-transparent-dark-gray)',
      'transparent-gray': 'var(--color-transparent-gray)',
      'transparent-light': 'var(--color-transparent-light)',
      'transparent-light-gray': 'var(--color-transparent-light-gray)',
      'transparent-green': 'var(--color-transparent-green)',
      black: 'var(--color-black)',
      gray: 'var(--color-gray)',
      white: 'var(--color-white)',
      pink: 'var(--color-pink)',
      blue: 'var(--color-blue)',
      yellow: 'var(--color-yellow)',
      purple: 'var(--color-purple)',
    },
    extend: {
      screens: {
        '2xs': '320px',
        'xs': '480px',
        '3xl': '1920px',
      },
      boxShadow: {
        'card': '0px 4px 4px 0px rgba(0, 0, 0, 0.05)'
      },
      maxWidth: {
        '8xl': '1560px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
