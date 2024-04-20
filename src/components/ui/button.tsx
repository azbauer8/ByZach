import { cva, VariantProps } from "class-variance-authority"
import { TwcComponentProps } from "react-twc"

import { twcn } from "@/lib/utils"

const buttonVariants = cva(
  "flex items-center justify-center rounded-lg p-1.5 ring-0 hover:bg-content2 focus:ring-0 active:bg-content2",
  {
    variants: {
      $variant: {
        primary: "",
        secondary: "",
      },
    },
  }
)

type ButtonProps = TwcComponentProps<"button"> &
  VariantProps<typeof buttonVariants>

const Button = twcn.button<ButtonProps>(({ $variant }) =>
  buttonVariants({ $variant })
)

export { Button, buttonVariants }
