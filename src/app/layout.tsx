import { Providers } from "@/app/_global/Providers"
import "@/app/_global/styles.css"
import { siteConfig } from "@/data/site"
import clsx from "clsx"
import { Metadata, Viewport } from "next"
import Footer from "./_global/Footer"
import { ThemeToggle } from "./_global/ThemeToggle"

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
  },
}

export const fetchCache = "default-no-store"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "bg-background text-foreground antialiased",
          siteConfig.font.className,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            disableTransitionOnChange: true,
          }}
        >
          <div className="mx-auto max-w-3xl space-y-5 mb-10">
            <nav className="flex w-full justify-end px-6 py-5">
              <ThemeToggle />
            </nav>
            <div className="m-5 space-y-8 lg:m-0">
              <main>{children}</main>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
