import { cva, type VariantProps } from "class-variance-authority"
import type { TwcComponentProps } from "react-twc"

import { twcn } from "@/lib/utils"

const textVariants = cva("", {
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
      lead: "text-lg text-foreground-muted/95",
      large: "text-lg font-semibold",
      small: "text-sm font-semibold leading-none",
      muted: "text-foreground-muted/95",
    },
  },
})

type TypographyProps = TwcComponentProps<"header"> &
  VariantProps<typeof textVariants>

const Text = twcn.header<TypographyProps>(({ variant, affects }) =>
  textVariants({ variant, affects })
)

export { Text, textVariants }
