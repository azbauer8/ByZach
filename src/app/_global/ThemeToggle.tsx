"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import * as React from "react"

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react"
import clsx from "clsx"

export function ThemeToggle() {
  const { theme, systemTheme, setTheme } = useTheme()
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="light">
          {(theme === "system" && systemTheme === "light") ||
          theme === "light" ? (
            <SunIcon className="size-[1.2rem]" />
          ) : (
            <MoonIcon className="size-[1.2rem]" />
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem
          className={clsx(theme === "light" && "bg-default")}
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownItem>
        <DropdownItem
          className={clsx(theme === "dark" && "bg-default")}
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownItem>
        <DropdownItem
          className={clsx(theme === "system" && "bg-default")}
          onClick={() => setTheme("system")}
        >
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
