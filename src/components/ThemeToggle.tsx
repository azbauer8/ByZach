"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { PiMonitorBold, PiMoonBold, PiSunBold } from "react-icons/pi"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown"

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
      <Button aria-label="Theme Toggle">
        <PiMonitorBold size={iconSize} />
      </Button>
    )
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn("text-default3", className)}
          aria-label="Theme Toggle"
        >
          {theme === "light" ? (
            <PiSunBold size={iconSize} />
          ) : theme === "dark" ? (
            <PiMoonBold size={iconSize} />
          ) : (
            <PiMonitorBold size={iconSize} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={cn("space-x-2", theme === "light" && "bg-content2")}
          onClick={() => setTheme("light")}
        >
          <PiSunBold
            size={16}
            className={cn(theme === "light" && "text-primary")}
          />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn("space-x-2", theme === "dark" && "bg-content2")}
          onClick={() => setTheme("dark")}
        >
          <PiMoonBold
            size={16}
            className={cn(theme === "dark" && "text-primary")}
          />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn("space-x-2", theme === "system" && "bg-content2")}
          onClick={() => setTheme("system")}
        >
          <PiMonitorBold
            size={16}
            className={cn(theme === "system" && "text-primary")}
          />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
