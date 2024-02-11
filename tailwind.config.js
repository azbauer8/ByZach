import { nextui } from "@nextui-org/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/react/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/system/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.1rem",
        screens: {
          "2xl": "1400px",
        },
      },
			cursor: {
				birds: "url(/eagles.png), pointer",
			},
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#fafafa",
            foreground: "#52525b",
            pop: "#27272a",
            primary: {
              DEFAULT: "#006FEE",
              foreground: "#52525b",
            },
            secondary: {
              DEFAULT: "#0E8AAA",
              foreground: "#52525b",
            },
          },
        },
        dark: {
          colors: {
            background: "#0d0d0f",
            foreground: "#bbbbc0",
            pop: "#fafafa",
            primary: {
              DEFAULT: "#006FEE",
              foreground: "#bbbbc0",
            },
            secondary: {
              DEFAULT: "#09AACD",
              foreground: "#bbbbc0",
            },
          },
        },
      },
    }),
  ],
}
