import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        "foreground-muted": 'rgb(var(--foreground-muted))',
        divider: 'rgb(var(--divider))',
        accent: 'rgb(var(--accent))',
        "accent-secondary": 'rgb(var(--accent-secondary))',
        neutral: 'rgb(var(--neutral))',
        primary: 'rgb(var(--primary))',
        secondary: 'rgb(var(--secondary))',
        success: 'rgb(var(--success))',
        warning: 'rgb(var(--warning))',
        danger: 'rgb(var(--danger))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono],

      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        reveal: {
          '0%': { opacity: 0, filter: 'brightness(1) blur(15px)', scale: '1.0125' },
          '10%': { opacity: 1, filter: 'brightness(1.25) blur(10px)' },
          '100%': { opacity: 1, filter: 'brightness(1) blur(0)', scale: '1' }
        }
      },
      animation: {
        reveal: 'reveal 0.7s ease-in-out',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        card: 'var(--card-shadow)',
        'card-hover': 'var(--card-shadow-hover)',
      }
    },
  },
  plugins: [require('@tailwindcss/typography'), require("tailwindcss-animate")]
}
