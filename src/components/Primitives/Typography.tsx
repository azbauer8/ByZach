import { cva, type VariantProps } from "class-variance-authority"
import type { TwcComponentProps } from "react-twc"

import { twcn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "text-3xl font-semibold tracking-tight",
      h3: "text-2xl font-semibold tracking-tight",
      h4: "text-xl font-semibold",
      h5: "text-lg font-medium",
      p: "leading-7",
    },
    affects: {
      lead: "text-lg text-default-500",
      large: "text-lg font-semibold",
      small: "text-sm font-semibold leading-none",
      muted: "text-default-500",
    },
  },
})

type TypographyProps = TwcComponentProps<"header"> &
  VariantProps<typeof typographyVariants>

const Typography = twcn.header<TypographyProps>(({ variant, affects }) =>
  typographyVariants({ variant, affects })
)

export { Typography, typographyVariants }
