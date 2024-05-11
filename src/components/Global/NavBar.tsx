"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { pageMetadata } from "@/siteData"

// import { Tab, Tabs } from "@nextui-org/tabs"

export default function NavBar() {
  const pathname = usePathname()
  const selectedObject = Object.entries(pageMetadata).find(([, link]) =>
    link.link === "/" ? pathname === link.link : pathname.startsWith(link.link)
  )
  const selected = selectedObject ? selectedObject[1] : undefined

  const fullySelected = pathname === selected?.link

  return (
    <div className="hidden w-full items-center justify-center gap-2 py-3 pb-8 md:block">
      {/* <Tabs
        aria-label="NavBar Tabs"
        selectedKey={selected?.link}
        defaultSelectedKey="/"
        variant="light"
        classNames={{
          base: "w-full",
          tabList:
            "justify-center max-w-3xl w-[105%] p-0 -mx-1 px-1  rounded-none",
          tab: "h-auto py-2 buttonLink font-medium hover:bg-default/40 hover:text-foreground-muted data-[hover-unselected=true]:opacity-100",
          cursor: `${fullySelected ? "bg-content2 dark:bg-content2" : "bg-transparent dark:bg-transparent"} border rounded-md`,
        }}
      >
        {Object.entries(pageMetadata).map(([, link]) => (
          <Tab
            as={Link}
            key={link.link}
            href={link.link}
            title={
              <div className="flex items-center space-x-2">
                <span>{link.title}</span>
              </div>
            }
          />
        ))}
      </Tabs> */}
    </div>
  )
}
