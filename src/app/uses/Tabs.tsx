import Link from "next/link"

import Tab from "@/app/uses/Tab"

export default function Tabs() {
  return (
    <div className="flex items-center rounded-lg bg-content1 p-1 text-sm">
      <Link href="/uses" className="flex-1">
        <Tab title="Software" />
      </Link>
      <Link href="/uses/hardware" className="flex-1">
        <Tab title="Hardware" />
      </Link>
    </div>
  )
}
