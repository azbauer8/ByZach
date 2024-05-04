import "@/styles/global.css"

import NavBar from "@/components/Global/NavBar"
import NavDrawer from "@/components/Global/NavDrawer"
import Providers from "@/components/Global/Providers"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <div className="mx-auto max-w-3xl flex-1 px-4 pb-20 pt-12 md:pb-12 md:pt-0">
        <NavBar />
        {children}
      </div>
      <NavDrawer />
    </Providers>
  )
}
