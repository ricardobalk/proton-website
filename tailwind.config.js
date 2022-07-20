module.exports = {
  mode: "jit",
  content: [
    "./app.vue",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Arizona', 'sans-serif'],
    },
    extend: {
      colors: {
        purple: {
          25: '#f7f5ff',
          100: '#e2dbff',
        },
        proton: {
          default: '#6D4AFF',
          dark: '#372580',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};