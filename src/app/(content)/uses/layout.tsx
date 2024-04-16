import { Uses } from "@/app/(content-lists)/uses/page"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Uses isContentPage />
      <div className="flex-1">{children}</div>
    </div>
  )
}
