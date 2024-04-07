import { cva, type VariantProps } from "class-variance-authority"
import { twc, TwcComponentProps } from "react-twc"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fill disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      $variant: {
        default: "bg-tint text-tint shadow hover:bg-tint/90 active:bg-tint/90",
        outline:
          "border-[0.5px] bg-transparent shadow-sm hover:bg-secondary active:bg-secondary",
        ghost: "hover:bg-tertiary active:bg-tertiary",
        link: "text-tint underline-offset-4 hover:underline active:underline",
      },
      $size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "size-9",
      },
      $radius: {
        default: "rounded-md",
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      $variant: "default",
      $size: "default",
      $radius: "default",
    },
  }
)

type ButtonProps = TwcComponentProps<"button"> &
  VariantProps<typeof buttonVariants>

const Button = twc.button<ButtonProps>(({ $variant, $size }) =>
  buttonVariants({ $variant, $size })
)

export { Button as default, buttonVariants }
