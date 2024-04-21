"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { PiMoonBold, PiSpinnerBold, PiSunBold } from "react-icons/pi"

import { cn } from "@/lib/utils"
import Button from "@/components/ui/button"

export default function ThemeToggle({
  iconSize,
  className,
}: {
  iconSize: number
  className?: string
}) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        className={cn("text-default3", className)}
        aria-label="Theme Toggle"
      >
        <PiSpinnerBold size={iconSize} />
      </Button>
    )
  }
  return (
    <Button
      className={cn("text-default3", className)}
      aria-label="Theme Toggle"
      onClick={
        theme === "light" ? () => setTheme("dark") : () => setTheme("light")
      }
    >
      {theme === "light" ? (
        <PiSunBold size={iconSize} />
      ) : (
        <PiMoonBold size={iconSize} />
      )}
    </Button>
  )
}
