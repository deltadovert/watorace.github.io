module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {
      colors: {
        primary: "#E98524",
        "primary-hover": "#eb8f33",
        background: "#ffffff",
      },
      backgroundImage: theme => ({
        'hero-image': "url('/assets/images/indy-rendering.jpg')"
      }),
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(5px)',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-filters'),
  ],
};
