import NextLink from "next/link"
import { PiArrowUpRightBold } from "react-icons/pi"

import { cn } from "@/lib/utils"

function Anchor({
  className,
  target,
  rel,
  isExternal,
  children,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement> & {
  href: string
  target?: string
  rel?: string
  isExternal?: boolean
}) {
  if (isExternal) {
    return (
      <a
        className={cn(
          "group inline-flex items-center gap-0.5 text-foreground",
          className
        )}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        {...props}
      >
        <span className="decoration-foreground-muted/35 underline decoration-2 underline-offset-2 transition-colors group-hover:decoration-foreground/75 group-active:decoration-foreground/75">
          {children}
        </span>
        <span className="text-foreground-muted -translate-y-0.5 text-[0.9em] transition-colors group-hover:text-foreground group-active:text-foreground">
          <PiArrowUpRightBold />
        </span>
      </a>
    )
  }
  return (
    <NextLink
      className={cn(
        "group inline-flex items-center gap-0.5 text-foreground",
        className
      )}
      {...props}
    >
      <span className="decoration-foreground-muted/35 underline decoration-2 underline-offset-2 transition-colors group-hover:decoration-foreground/75 group-active:decoration-foreground/75">
        {children}
      </span>
    </NextLink>
  )
}

export default Anchor
