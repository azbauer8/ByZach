import Link from "next/link"
import { siteMetadata } from "@/siteData"

import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <>
      <footer className="-mx-5 mt-5 border-t py-3 pb-[4.2rem] md:hidden">
        <div className="flex w-full items-center justify-between gap-2 px-5">
          <p className="text-xs text-foreground-muted">
            Created by Zach Bauer. <br />
            Last updated: {formatDate()}
          </p>
          <div className="flex items-center gap-1">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-fit px-2.5 py-1 text-foreground-muted"
            >
              <Link href="/colophon">Colophon</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-fit px-2.5 py-1 text-foreground-muted"
            >
              <Link href={siteMetadata.source} target="_blank">
                Source
              </Link>
            </Button>
          </div>
        </div>
      </footer>
      <footer className="absolute -bottom-8 right-0 hidden w-full justify-between gap-1 md:flex">
        <div className="h-fit rounded-md border bg-background px-2.5 py-1 text-xs text-foreground-muted">
          Created by Zach Bauer. Last updated: {formatDate()}
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            className="h-fit bg-background px-2.5 py-1 text-foreground-muted"
            asChild
          >
            <Link href="/colophon">Colophon</Link>
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
