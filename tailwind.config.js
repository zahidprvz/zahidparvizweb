// tailwind.config.js

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Update content sources
  darkMode: 'media', // Update darkMode option
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
