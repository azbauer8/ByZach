import { Snippets } from "@/app/(content-lists)/snippets/page"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex size-full">
      <Snippets isContentPage />
      <div className="flex-1">{children}</div>
    </div>
  )
}
