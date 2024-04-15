"use client"

import { useEffect, useState } from "react"
import { cn } from "@/utils/tailwind/cn"
import { useTheme } from "next-themes"
import { PiMonitorDuotone, PiMoonDuotone, PiSunDuotone } from "react-icons/pi"

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
        <PiMonitorDuotone size={18} />
      </Button>
    )
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={className}>
          {theme === "light" ? (
            <PiSunDuotone size={18} />
          ) : theme === "dark" ? (
            <PiMoonDuotone size={18} />
          ) : (
            <PiMonitorDuotone size={18} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={cn(
            "space-x-2",
            theme === "light" && "!border-divider bg-content2 text-primary"
          )}
          onClick={() => setTheme("light")}
        >
          <PiSunDuotone size={16} />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            "space-x-2",
            theme === "dark" && "!border-divider bg-content2 text-primary"
          )}
          onClick={() => setTheme("dark")}
        >
          <PiMoonDuotone size={16} />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            "space-x-2",
            theme === "system" && "!border-divider bg-content2 text-primary"
          )}
          onClick={() => setTheme("system")}
        >
          <PiMonitorDuotone size={16} />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
