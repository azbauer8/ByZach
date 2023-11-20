/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "ui-sans-serif"],
      },
      colors: {
        zinc: {
          150: "#bbbbc0",
          450: "#898992",
        },
      },
      cursor: {
        birds: "url(/eagles.png), pointer",
      },
    },
  },
  plugins: [],
};
