import Link from "next/link"
import { Link as TransitionLink } from "next-view-transitions"

import { pageMetadata, siteMetadata } from "@/lib/metadata"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <>
      <footer className="absolute -bottom-8 right-0 hidden w-full justify-between gap-1 md:flex">
        <div className="h-fit rounded-md border bg-background px-2.5 py-1 text-xs text-foreground-muted">
          {siteMetadata.footer}
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            className="h-fit bg-background px-2.5 py-1 text-foreground-muted"
            asChild
          >
            <TransitionLink href={pageMetadata.colophon.link}>
              {pageMetadata.colophon.title}
            </TransitionLink>
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
      </footer>
    </>
  )
}
