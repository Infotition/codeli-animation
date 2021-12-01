module.exports = {
  // important: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,scss}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#9ED1F3',
        background: '#292D3E',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
