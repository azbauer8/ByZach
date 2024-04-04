import { ContentListColumn } from "./ContentListColumn"

import "@/styles.css"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex size-full bg-background">
      <div className="absolute h-dvh -translate-x-full overflow-y-auto border-r border-border bg-accent  transition duration-200 ease-in-out lg:relative lg:w-80 lg:translate-x-0 xl:w-96">
        <ContentListColumn />
      </div>
      {children}
    </div>
  )
}
