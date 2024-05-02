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
    <div className="hidden w-full items-center justify-center gap-2 py-3 pb-8 md:block">
      <Tabs
        aria-label="NavBar Tabs"
        selectedKey={selected?.href}
        defaultSelectedKey="/"
        variant="light"
        classNames={{
          base: "w-full",
          tabList:
            "justify-center max-w-3xl w-[105%] p-0 -mx-1 px-1  rounded-none",
          tab: "h-auto py-2 buttonLink font-medium hover:bg-default/40 hover:text-foreground-muted data-[hover-unselected=true]:opacity-100",
          cursor: "bg-content2 dark:bg-content2 border rounded-md",
        }}
      >
        {navLinks.map((link) => (
          <Tab
            as={Link}
            key={link.href}
            href={link.href}
            title={
              <div className="flex items-center space-x-2">
                {/* {link.icon} */}
                <span>{link.name}</span>
              </div>
            }
          />
        ))}
      </Tabs>
    </div>
  )
}
