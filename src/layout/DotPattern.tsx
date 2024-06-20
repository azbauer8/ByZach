import { cn } from "@/lib/utils"

export function DotPattern() {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 h-full w-full fill-foreground-muted/60 dark:fill-foreground-muted/30",
        "[mask-image:radial-gradient(black,transparent)]"
      )}
    >
      <defs>
        <pattern
          id="dots"
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={1}
          y={1}
        >
          <circle cx={1} cy={1} r={1} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={"url(#dots)"} />
    </svg>
  )
}

export default DotPattern
