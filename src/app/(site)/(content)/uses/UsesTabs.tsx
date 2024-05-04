"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Tab, Tabs } from "@nextui-org/tabs"

export default function UsesTabs() {
  const pathname = usePathname()

  return (
    <Tabs
      aria-label="Uses Tabs"
      selectedKey={pathname}
      defaultSelectedKey="/uses"
      variant="light"
      classNames={{
        base: "w-full",
        tabList: "w-[105%] p-0 -mx-1 px-1  rounded-none",
        tab: "h-auto py-2 buttonLink font-medium hover:bg-default/40 hover:text-foreground-muted data-[hover-unselected=true]:opacity-100",
        cursor: "bg-content2 dark:bg-content2 border rounded-md",
      }}
    >
      <Tab as={Link} key="/uses" href="/uses" title="Software" />
      <Tab
        as={Link}
        key="/uses/hardware"
        href="/uses/hardware"
        title="Hardware"
      />
    </Tabs>
  )
}
