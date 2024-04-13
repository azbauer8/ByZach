import { cva, VariantProps } from "class-variance-authority"
import { twc, TwcComponentProps } from "react-twc"

const buttonVariants = cva(
  "flex items-center justify-center rounded-md p-1.5 hover:cursor-pointer hover:bg-content2",
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

const Button = twc.button<ButtonProps>(({ $variant }) =>
  buttonVariants({ $variant })
)

export { Button, buttonVariants }
