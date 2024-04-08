import React from "react"
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal"

type Size =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "full"

type SizeValueMap = {
  [key in Size]: string
}

const sizeValueMap: SizeValueMap = {
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  full: "100vw",
}

function getSizeValue(size: Size): string | undefined {
  return sizeValueMap[size]
}

const Sheet = React.forwardRef<
  React.ElementRef<typeof Modal>,
  React.ComponentPropsWithoutRef<typeof Modal> & {
    side?: "left" | "right"
  }
>(({ className, children, side, ...props }, ref) => {
  const { size } = props
  const sheetSize = size ? getSizeValue(size) : getSizeValue("md")
  return (
    <Modal
      className={className}
      classNames={{
        base: `${
          side === "left" ? "left-0" : "right-0"
        } w-56 fixed top-0 rounded-none overflow-y-auto border-r-[0.5px] bg-content1 max-h-dvh min-h-dvh h-dvh m-0 md:m-0 sm:m-0 p-0`,
      }}
      motionProps={{
        variants: {
          enter: {
            x: 0,
            transition: {
              duration: 0.5,
              ease: [0.32, 0.72, 0, 1],
            },
          },
          exit: {
            x: side === "left" ? `-${sheetSize}` : sheetSize,
            transition: {
              duration: 0.3,
              ease: "linear",
            },
          },
        },
      }}
      ref={ref}
      {...props}
    >
      {children}
    </Modal>
  )
})
Sheet.displayName = Modal.displayName

const SheetContent = ModalContent

const SheetHeader = ModalHeader

const SheetBody = ModalBody

const SheetFooter = ModalFooter

export { Sheet, SheetContent, SheetHeader, SheetBody, SheetFooter }
