import { cn } from "@/lib/utils"

export function Dots({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {children}
    </div>
  )
}

export function Grid({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      {children}
    </div>
  )
}

export function GridSmall({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      {children}
    </div>
  )
}
