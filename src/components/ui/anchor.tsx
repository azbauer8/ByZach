import { cn } from "@/lib/utils"

function Anchor({
  className,
  target,
  rel,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement> & {
  href: string
  target?: string
  rel?: string
}) {
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
      <span className="underline decoration-default3/35 decoration-2 underline-offset-2 transition-colors group-hover:decoration-foreground/75">
        {props.children}
      </span>
      <span className="-translate-y-0.5 text-[0.9em] text-default3 transition-colors group-hover:text-foreground">
        ↗
      </span>
    </a>
  )
}

export default Anchor
