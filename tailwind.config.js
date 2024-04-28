import { nextui } from "@nextui-org/react";
import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      keyframes: {
        reveal: {
          '0%': { opacity: 0, filter: 'brightness(1) blur(15px)', scale: '1.0125' },
          '10%': { opacity: 1, filter: 'brightness(1.25) blur(10px)' },
          '100%': { opacity: 1, filter: 'brightness(1) blur(0)', scale: '1' }
        }
      },
      animation: {
        reveal: 'reveal 0.7s ease-in-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require("tailwindcss-animate"), nextui({
    layout: {
      radius: {
        small: "6px",
        medium: "8px",
        large: "10px",
      }
    }
  })]
}
