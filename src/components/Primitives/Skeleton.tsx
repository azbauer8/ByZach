import { cn } from "@/lib/utils"

function Skeleton({
  className,
  disableAnimation = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { disableAnimation?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-lg bg-content2",
        !disableAnimation && "animate-pulse",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
