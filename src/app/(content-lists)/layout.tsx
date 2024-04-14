export default function ListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-h-dvh min-h-dvh w-full overflow-y-auto bg-content1 md:w-80 md:border-r-[0.5px]">
      {children}
    </div>
  )
}
