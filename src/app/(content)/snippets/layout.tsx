import Snippets from "@/app/(content-lists)/snippets/Snippets"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Snippets isContentPage />
      <div className="flex-1">{children}</div>
    </div>
  )
}
