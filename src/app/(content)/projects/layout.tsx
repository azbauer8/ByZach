import Projects from "@/app/(content-lists)/projects/Projects"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Projects isContentPage />
      <div className="flex-1">{children}</div>
    </div>
  )
}
