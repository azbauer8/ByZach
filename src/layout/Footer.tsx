import Link from "next/link"

import { links, siteMetadata } from "@/lib/metadata"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="hidden w-full justify-end gap-1 md:flex">
      <Button
        variant="outline"
        size="sm"
        className="h-fit bg-background px-2.5 py-1 text-foreground-muted"
        asChild
      >
        <Link href={links.professional.github.href} target="_blank">
          {siteMetadata.footer}
        </Link>
      </Button>
    </footer>
  )
}
