import Link from "next/link"
import { Link as TransitionLink } from "next-view-transitions"

import { siteMetadata } from "@/lib/metadata"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <>
      <footer className="absolute -bottom-8 right-0 hidden w-full justify-between gap-1 md:flex">
        <div className="h-fit rounded-md border bg-background px-2.5 py-1 text-xs text-foreground-muted">
          Created by Zach Bauer
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            className="h-fit bg-background px-2.5 py-1 text-foreground-muted"
            asChild
          >
            <TransitionLink href="/colophon">Colophon</TransitionLink>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-fit bg-background px-2.5 py-1 text-foreground-muted"
            asChild
          >
            <Link href={siteMetadata.source} target="_blank">
              Source
            </Link>
          </Button>
        </div>
      </footer>
    </>
  )
}
