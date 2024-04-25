"use client"

import type * as React from "react"
import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider } from "next-themes"

import ThemeInit from "@/components/Theme"
import TailwindIndicator from "@/components/TwIndicator"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      <ThemeInit />
      <JotaiProvider>{children}</JotaiProvider>
      <TailwindIndicator />
    </ThemeProvider>
  )
}
