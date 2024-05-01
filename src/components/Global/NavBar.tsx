"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Tab, Tabs } from "@nextui-org/tabs"

import { navLinks } from "@/lib/consts"

export default function NavBar() {
  const pathname = usePathname()
  const selected = navLinks.find((link) =>
    link.href === "/" ? pathname === link.href : pathname.startsWith(link.href)
  )

  return (
    <div className="hidden w-full items-center justify-center py-2 pb-8 md:flex">
      <Tabs
        aria-label="NavBar Tabs"
        selectedKey={selected?.href}
        defaultSelectedKey="/"
        variant="underlined"
        classNames={{
          base: "w-full",
          tabList: "mx-auto max-w-3xl w-full",
        }}
      >
        {navLinks.map((link) => (
          <Tab
            as={Link}
            key={link.href}
            href={link.href}
            title={
              <div className="flex items-center space-x-2">
                {link.icon}
                <span>{link.name}</span>
              </div>
            }
          />
        ))}
      </Tabs>
    </div>
  )
}
