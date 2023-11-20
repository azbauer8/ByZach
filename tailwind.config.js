/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif"],
      },
      colors: {
        zinc: {
          150: "#bbbbc0",
          450: "#898992",
        },
      },
      cursor: {
        birds:
          "url(https://play.tailwindcss.com/favicons/favicon-16x16.png?v=3), pointer",
      },
    },
  },
  plugins: [],
};
