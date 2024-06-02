import { Typography } from "@/components/Typography"

export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children?: React.ReactNode
}) {
  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <Typography variant="h4">{title}</Typography>
        {subtitle && <Typography affects="muted">{subtitle}</Typography>}
      </div>
      {children}
    </div>
  )
}
