export const dynamic = "force-static"

export default function ListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <div className="max-h-dvh min-h-dvh w-full overflow-y-auto border-r-[0.5px] bg-content1 transition-all duration-200 ease-in-out md:w-80">
        {children}
      </div>
      <div className="flex-1" />
    </div>
  )
}
