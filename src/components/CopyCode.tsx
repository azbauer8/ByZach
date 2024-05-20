"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { CopiedIcon, CopyIcon } from "@/components/Icons"

export default function ClipboardButton() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        onClick={(e) => {
          const target = e.currentTarget
          const div = target.parentNode
          if (div === null) {
            console.log("Code not found")
            return
          }
          const pre = div.nextSibling
          if (pre === null) {
            console.log("Code not found")
            return
          }
          const code = pre.textContent as string

          if (navigator.clipboard?.writeText) {
            navigator.clipboard
              .writeText(code)
              .then(() => {
                setIsClicked((isClicked) => !isClicked)
                target.disabled = true
                setTimeout(() => {
                  setIsClicked((isClicked) => !isClicked)
                  target.disabled = false
                }, 2000)
              })
              .catch((error) => {
                console.error("Failed to save text to clipboard:", error)
              })
          } else {
            console.error("Clipboard API is not supported")
          }
        }}
      >
        {isClicked ? <CopiedIcon /> : <CopyIcon />}
      </Button>
    </>
  )
}
