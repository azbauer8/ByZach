"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { pageMetadata, siteMetadata } from "@/lib/metadata"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function TopNav() {
  const pathname = usePathname()
  return (
    <header className="hidden w-full justify-between gap-1.5 md:flex">
      <div className="flex items-center gap-1">
        {Object.entries(pageMetadata)
          .filter(([, link]) => link !== pageMetadata.colophon)
          .map(([, link]) => {
            const active =
              link.link === pageMetadata.home.link
                ? pathname === link.link
                : pathname.startsWith(link.link)

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
                <Link href={link.link}>{link.title}</Link>
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
          <Link href={pageMetadata.colophon.link}>
            {pageMetadata.colophon.title}
          </Link>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-fit bg-background px-2.5 py-1 text-foreground-muted"
          asChild
        >
          <Link href={siteMetadata.source.link} target="_blank">
            {siteMetadata.source.title}
          </Link>
        </Button>
      </div>
    </header>
  )
}
