import svgToDataUri from "mini-svg-data-uri"
import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
//@ts-expect-error no types provided
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette"

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        muted: "rgb(var(--muted))",
        secondary: "rgb(var(--secondary))",
        tertiary: "rgb(var(--tertiary))",
        tint: "rgb(var(--tint))",
        background: "rgb(var(--backgorund))",
        foreground: "rgb(var(--foreground))",
        separator: "rgb(var(--separator))",
        selection: "rgb(var(--selection))",
        placeholder: "rgb(var(--placeholder))",
        link: "rgb(var(--link))",
        fill: "rgb(var(--fill))",

        iBue: "rgb(var(--blue))",
        iGreen: "rgb(var(--green))",
        iRed: "rgb(var(--red))",
        iYellow: "rgb(var(--yellow))",
        iOrange: "rgb(var(--orange))",
        iPurple: "rgb(var(--purple))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      )
    },
  ],
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"))
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ":root": newVars,
  })
}

export default config
