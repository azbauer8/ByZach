"use client"

import { useEffect, useState } from "react"
import { cn } from "@/utils/tailwind/cn"
import { useTheme } from "next-themes"
import { PiMonitorBold, PiMoonBold, PiSunBold } from "react-icons/pi"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown"

export default function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button>
        <PiMonitorBold size={18} />
      </Button>
    )
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={cn("text-default3", className)}>
          {theme === "light" ? (
            <PiSunBold size={18} />
          ) : theme === "dark" ? (
            <PiMoonBold size={18} />
          ) : (
            <PiMonitorBold size={18} />
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
