import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { twc } from "react-twc"

import { cn } from "@/lib/utils"

const Anchor = twc.a`hover:underline active:underline text-link decoration-link hover:cursor-pointer underline-offset-2`

export const typographyVariants = cva("", {
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
      lead: "text-lg text-muted",
      large: "text-lg font-semibold",
      small: "text-sm font-bold leading-none",
      muted: "text-muted",
    },
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, variant, affects, ...props }, ref) => {
    const Comp = variant || "p"
    return (
      <Comp
        className={cn(typographyVariants({ variant, affects, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Typography.displayName = "H1"

export { Typography, Anchor }
