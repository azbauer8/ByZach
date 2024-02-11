"use client"

import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react"
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
    <Dropdown
      classNames={{
        base: "before:bg-default-200",
        content: "p-0 border-small border-divider bg-background",
      }}
    >
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
      <DropdownMenu
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownItem
          startContent={<SunIcon size={20} />}
          className={clsx(theme === "light" && "bg-default-100")}
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownItem>
        <DropdownItem
          startContent={<MoonIcon size={20} />}
          className={clsx(theme === "dark" && "bg-default-100")}
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownItem>
        <DropdownItem
          startContent={<LaptopIcon size={20} />}
          className={clsx(theme === "system" && "bg-default-100")}
          onClick={() => setTheme("system")}
        >
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
