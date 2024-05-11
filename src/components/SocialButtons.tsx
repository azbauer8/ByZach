import Link from "next/link"
import { Icon } from "@iconify-icon/react"

import { Button } from "@/components/ui/button"

export default function SocialButtons({
  links,
}: {
  links: {
    name: string
    href: string
    icon: string
  }[]
}) {
  return (
    <div className="-mx-3 flex flex-wrap items-center gap-1">
      {links.map((link) => (
        <Button key={link.name} variant="ghost" asChild>
          <Link href={link.href} target="_blank">
            <Icon icon={link.icon} size={20} />
            {link.name}
          </Link>
        </Button>
      ))}
    </div>
  )
}
