import { cn } from "@/lib/utils"

export default function Dots({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative", className)} {...props}>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-dot-black/[0.1] dark:bg-dot-white/[0.1]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative size-full">{children}</div>
    </div>
  )
}
