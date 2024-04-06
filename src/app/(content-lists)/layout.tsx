import { Dots } from "@/components/ui/bg-patterns"

export default function ListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Dots className="size-full">
      <div className="relative max-h-dvh min-h-dvh w-full overflow-y-auto border-r border-border bg-accent transition-all duration-200 ease-in-out lg:w-80 xl:w-96">
        {children}
      </div>
    </Dots>
  )
}
