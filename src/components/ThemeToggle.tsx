"use client"

import { useEffect, useState } from "react"
import { Icon } from "@iconify-icon/react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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
        <Icon icon="ph:monitor-duotone" size={18} />
      </Button>
    )
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Icon icon="ph:monitor-duotone" size={18} />
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
          <Icon
            icon="ph:sun-duotone"
            size={16}
            className="group-hover:text-foreground"
          />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            "group space-x-2",
            theme === "dark" && "bg-content2 text-primary !border-divider"
          )}
          onClick={() => setTheme("dark")}
        >
          <Icon
            icon="ph:moon-duotone"
            size={16}
            className="group-hover:text-foreground"
          />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            "group space-x-2",
            theme === "system" && "bg-content2 text-primary !border-divider"
          )}
          onClick={() => setTheme("system")}
        >
          <Icon
            icon="ph:monitor-duotone"
            size={16}
            className="group-hover:text-foreground"
          />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
