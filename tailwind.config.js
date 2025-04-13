/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-dm-sans)", ...fontFamily.sans],
        header: ["var(--font-playfair-display)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
