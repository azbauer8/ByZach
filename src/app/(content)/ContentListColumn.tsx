import { Typography } from "@/components/ui/typography"
import { SidebarToggle } from "@/components/Sidebar"
import StickyHeader from "@/components/StickyHeader"

export default function ContentListColumn({
  title,
  list,
}: {
  title: string
  list: JSX.Element
}) {
  return (
    <div className="absolute h-dvh -translate-x-full overflow-y-auto border-r border-border bg-accent  transition duration-200 ease-in-out lg:relative lg:w-80 lg:translate-x-0 xl:w-96">
      <StickyHeader className=" bg-accent/10">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-0.5">
            <SidebarToggle />
          </div>
          <Typography affects="small">{title}</Typography>
        </div>
      </StickyHeader>
      <div className="flex flex-col lg:gap-1 lg:p-3"> {list}</div>
    </div>
  )
}
