module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan your React files for Tailwind
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#1c1c1c',
      },
    },
  },
  plugins: [],
};