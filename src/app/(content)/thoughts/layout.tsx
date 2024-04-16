import Thoughts from "@/app/(content-lists)/thoughts/Thoughts"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Thoughts isContentPage />
      <div className="flex-1">{children}</div>
    </div>
  )
}
