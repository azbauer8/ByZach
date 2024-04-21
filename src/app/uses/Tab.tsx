"use client"

import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export default function Tab({ title }: { title: string }) {
  const path = usePathname()
  const activeTab = path.includes("hardware") ? "Hardware" : "Software"
  const isActive = activeTab === title
  return (
    <div
      className={cn(
        "rounded-lg py-2 text-center font-medium text-default3",
        isActive && "bg-background text-foreground"
      )}
    >
      {title}
    </div>
  )
}
