/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    mobile: "320px",
    tablet: "600px",
    laptop: "1280px",
    desktop: "1440px",
  },
};
