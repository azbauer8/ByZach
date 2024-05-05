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
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      keyframes: {
        reveal: {
          '0%': { opacity: 0, filter: 'blur(10px)' },
          '10%': { opacity: 1, filter: 'blur(5px)' },
          '100%': { filter: 'blur(0)' }
        }
      },
      animation: {
        reveal: 'reveal 0.5s ease-in-out',
      },
      transitionTimingFunction: {
        nav: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require("tailwindcss-animate"), nextui({
    layout: {
      radius: {
        small: "6px",
        medium: "8px",
        large: "10px",
      }
    },
    themes: {
      light: {
        colors: {
          foreground: '#2e2e2e',
          background: '#fefefe',
          accent: '#fbfbfb'
        }
      },
      dark: {
        colors: {
          foreground: '#f5f5f5',
          background: '#121212',
          accent: '#171717'
        }
      },
    }
  })]
}
