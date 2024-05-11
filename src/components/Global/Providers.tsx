"use client"

import type * as React from "react"
import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider } from "next-themes"

import TailwindIndicator from "@/components/Global/TwIndicator"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      <JotaiProvider>{children}</JotaiProvider>
      <TailwindIndicator />
    </ThemeProvider>
  )
}
