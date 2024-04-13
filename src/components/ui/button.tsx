import { cva, VariantProps } from "class-variance-authority"
import { twc, TwcComponentProps } from "react-twc"

const buttonVariants = cva(
  "hover:bg-content2 p-1.5 rounded-md flex items-center justify-center hover:cursor-pointer",
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
