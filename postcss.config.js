module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env')({
      browsers: ['last 2 versions', '> 5%'],
    }),
  ],
};
