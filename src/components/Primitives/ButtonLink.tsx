import { forwardRef } from "react"
import { Button, type ButtonProps } from "@nextui-org/button"
import type { ButtonVariantProps } from "@nextui-org/react"

import { cn } from "@/lib/utils"

interface LinkButtonProps extends ButtonProps, ButtonVariantProps {
  active?: boolean
  linkStyling?: boolean
}

const ButtonLink = forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({ className, active = false, linkStyling = true, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          linkStyling &&
            "buttonLink h-fit justify-start px-2 py-1.5 font-medium",
          active
            ? "border text-foreground"
            : "border border-transparent text-default-500",
          className
        )}
        disableRipple
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export default ButtonLink
