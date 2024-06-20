import { siteMetadata } from "@/lib/metadata"

export default function Footer() {
  return (
    <footer className="hidden w-full justify-end gap-1 md:flex">
      <div className="h-fit rounded-md border bg-background px-2.5 py-1 text-xs text-foreground-muted">
        {siteMetadata.footer}
      </div>
    </footer>
  )
}
