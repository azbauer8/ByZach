"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const tabs = [
  { id: "/uses", label: "Software" },
  { id: "/uses/hardware", label: "Hardware" },
]
export default function UsesTabs() {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname || "/uses")

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "relative rounded-md px-3 py-1.5 text-sm font-medium transition",
            activeTab !== tab.id &&
              "text-foreground-muted hover:bg-muted hover:text-foreground"
          )}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 rounded-md border"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </Link>
      ))}
    </div>
  )
}
