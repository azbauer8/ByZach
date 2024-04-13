"use client"

import * as React from "react"
import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider as NextThemesProvider } from "next-themes"

import TailwindIndicator from "@/components/TwIndicator"

export function Providers({ children }: { children: React.ReactNode }) {
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
