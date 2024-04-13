/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        divider: 'rgb(var(--divider))',
        focus: 'rgb(var(--focus))',
        content1: 'rgb(var(--content1))',
        content2: 'rgb(var(--content2))',
        content3: 'rgb(var(--content3))',
        content4: 'rgb(var(--content4))',
        primary: 'rgb(var(--primary))',
        secondary: 'rgb(var(--secondary))',
        success: 'rgb(var(--success))',
        warning: 'rgb(var(--warning))',
        danger: 'rgb(var(--danger))',
        default: {
          DEFAULT: 'rgb(var(--default))',
          50: 'rgb(var(--default-50))',
          100: 'rgb(var(--default-100))',
          200: 'rgb(var(--default-200))',
          300: 'rgb(var(--default-300))',
          400: 'rgb(var(--default-400))',
          500: 'rgb(var(--default-500))',
          600: 'rgb(var(--default-600))',
          700: 'rgb(var(--default-700))',
          800: 'rgb(var(--default-800))',
          900: 'rgb(var(--default-900))',
        }
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require("tailwindcss-animate")],
}

