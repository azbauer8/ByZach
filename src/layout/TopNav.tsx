"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { links, pageMetadata } from "@/lib/metadata"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function TopNav() {
  const pathname = usePathname()
  return (
    <header className="z-10 hidden w-full justify-between gap-1.5 md:flex">
      <div className="flex items-center gap-1">
        {Object.entries(pageMetadata)
          .filter(([, link]) => link !== pageMetadata.colophon)
          .map(([, link]) => {
            const active =
              link.href === pageMetadata.home.href
                ? pathname === link.href
                : pathname.startsWith(link.href)

            return (
              <Button
                key={link.title}
                variant="outline"
                size="sm"
                className={cn(
                  "h-fit bg-background px-2.5 py-1 text-foreground-muted",
                  active && "text-foreground"
                )}
                asChild
              >
                <Link href={link.href}>{link.title}</Link>
              </Button>
            )
          })}
      </div>

      <div className="flex items-center gap-1.5">
        <Button
          variant="outline"
          size="sm"
          className="h-fit bg-background px-2.5 py-1 text-foreground-muted"
          asChild
        >
          <Link href={pageMetadata.colophon.href}>
            {pageMetadata.colophon.title}
          </Link>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-fit bg-background px-2.5 py-1 text-foreground-muted"
          asChild
        >
          <Link href={links.source.href} target="_blank">
            {links.source.title}
          </Link>
        </Button>
      </div>
    </header>
  )
}
