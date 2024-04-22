"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export default function Tabs() {
  return (
    <div className="bg-accent flex items-center rounded-lg p-1 text-sm">
      <Tab title="Software" link="/uses" />
      <Tab title="Hardware" link="/uses/hardware" />
    </div>
  )
}

function Tab({ title, link }: { title: string; link: string }) {
  const path = usePathname()
  return (
    <Link
      className={cn(
        "text-foreground-muted flex-1 rounded-lg py-2 text-center font-medium",
        path === link && "bg-background text-foreground"
      )}
      href={link}
      prefetch={true}
    >
      {title}
    </Link>
  )
}
