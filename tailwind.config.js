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
      black: '#000000',
      white: '#FFFFFF',
      purple: '#330087',
      green: '#00C784',
      lightGreen: '#E5F4EB',
      grey: {
        100: 'var(--grey-100)',
        300: 'var(--grey-300)',
        500: 'var(--grey-500)',
        700: 'var(--grey-700)',
        900: 'var(--grey-900)',
      },
    },
    extend: {},
  },
  plugins: [],
};
