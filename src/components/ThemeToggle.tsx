"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { PiMonitorDuotone, PiMoonDuotone, PiSunDuotone } from "react-icons/pi"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown"

export default function ThemeToggle() {
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
        <Button>
          {theme === "light" ? (
            <PiSunDuotone size={18} />
          ) : theme === "dark" ? (
            <PiMoonDuotone size={18} />
          ) : (
            <PiMonitorDuotone size={18} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className={cn(
            "group space-x-2",
            theme === "light" && "bg-content2 text-primary !border-divider"
          )}
          onClick={() => setTheme("light")}
        >
          <PiSunDuotone size={16} className="group-hover:text-foreground" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            "group space-x-2",
            theme === "dark" && "bg-content2 text-primary !border-divider"
          )}
          onClick={() => setTheme("dark")}
        >
          <PiMoonDuotone size={16} className="group-hover:text-foreground" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            "group space-x-2",
            theme === "system" && "bg-content2 text-primary !border-divider"
          )}
          onClick={() => setTheme("system")}
        >
          <PiMonitorDuotone size={16} className="group-hover:text-foreground" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
