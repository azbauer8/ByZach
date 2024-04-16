import { Projects } from "@/app/(content-lists)/projects/page"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex size-full">
      <Projects isContentPage />
      <div className="flex-1">{children}</div>
    </div>
  )
}
