import Uses from "@/app/(content-lists)/uses/Uses"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex size-full">
      <Uses isContentPage />
      <div className="flex-1">{children}</div>
    </div>
  )
}
