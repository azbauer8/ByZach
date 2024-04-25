"use client"

import * as React from "react"
import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

import TailwindIndicator from "@/components/TwIndicator"

export default function Providers({ children }: { children: React.ReactNode }) {
  const { theme, systemTheme, setTheme } = useTheme()

  React.useEffect(() => {
    if (theme === "system") {
      setTheme(systemTheme ?? "dark")
    }
  }, [theme, systemTheme, setTheme])
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <JotaiProvider>{children}</JotaiProvider>
      <TailwindIndicator />
    </NextThemesProvider>
  )
}
