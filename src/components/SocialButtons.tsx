import Link from "next/link"

import { Button } from "@/components/ui/button"
import type { Icon } from "@/components/Icons"

export default function SocialButtons({
  links,
}: {
  links: {
    name: string
    href: string
    icon: Icon
  }[]
}) {
  return (
    <div className="-mx-3 flex flex-wrap items-center gap-1">
      {links.map((link) => (
        <Button key={link.name} variant="ghost" className="px-2.5" asChild>
          <Link href={link.href} target="_blank">
            <link.icon />
            {link.name}
          </Link>
        </Button>
      ))}
    </div>
  )
}
