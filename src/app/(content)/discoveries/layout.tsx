import Discoveries from "@/app/(content-lists)/discoveries/Discoveries"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex size-full">
      <Discoveries isContentPage />
      <div className="flex-1">{children}</div>
    </div>
  )
}
