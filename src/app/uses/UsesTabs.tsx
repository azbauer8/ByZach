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
      variant="bordered"
      classNames={{ base: "w-full", tabList: "w-full" }}
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
