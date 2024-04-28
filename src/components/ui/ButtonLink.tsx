import { Button, extendVariants } from "@nextui-org/react"

const ButtonLink = extendVariants(Button, {
  variants: {
    active: {
      true: "border",
      false: "border border-transparent",
    },
    linkStyle: {
      true: "justify-start px-2 py-1.5 font-medium transition-transform duration-200 ease-in-out buttonLink h-fit",
    },
  },
  defaultVariants: {
    active: false,
    disableRipple: "true",
    linkStyle: true,
  },
})

export default ButtonLink
