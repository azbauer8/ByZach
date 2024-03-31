import PageHeader from "@/components/PageHeader"
import ContentList from "@/app/(content)/ContentList"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex size-full bg-background">
      <div className="absolute h-dvh -translate-x-full overflow-y-auto border-r border-border bg-accent  transition duration-200 ease-in-out lg:relative lg:w-80 lg:translate-x-0 xl:w-96">
        <PageHeader />
        <div className="lg:space-y-1 lg:p-3">
          <ContentList />
        </div>
      </div>
      <div className="h-dvh flex-1 overflow-y-auto">{children}</div>
    </div>
  )
}
