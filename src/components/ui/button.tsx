import { cva, VariantProps } from "@/utils/tailwind/cva"
import { twcn } from "@/utils/tailwind/twc"
import { TwcComponentProps } from "react-twc"

const buttonVariants = cva(
  "flex items-center justify-center rounded-md p-1.5 hover:bg-content2 active:bg-content2",
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
