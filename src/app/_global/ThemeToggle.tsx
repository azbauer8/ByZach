"use client"

import { useEffect, useState } from "react"
import { Button } from "@nextui-org/react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme, setTheme } = useTheme()

  // avoids hydration error since the theme is known on the server
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button isIconOnly variant="light" aria-label="Theme toggle">
        <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-transform duration-75 dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-transform duration-75 dark:rotate-0 dark:scale-100" />
      </Button>
    )
  }

  function toggleTheme() {
    if (theme === "system") {
      setTheme(systemTheme === "dark" ? "light" : "dark")
    } else {
      setTheme(theme === "dark" ? "light" : "dark")
    }
  }

  return (
    <Button
      isIconOnly
      variant="light"
      aria-label="Theme toggle"
      onClick={toggleTheme}
    >
      <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-transform duration-75 dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-transform duration-75 dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
