module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],

  variants: {
    extends: {
      backgroundColor: ['active'],
    },
  },

  content: ['./src/**/*.{js,jsx,ts,tsx}'],
};
