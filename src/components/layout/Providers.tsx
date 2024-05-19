"use client"

import type * as React from "react"
import { ThemeProvider } from "next-themes"

import TailwindIndicator from "@/components/layout/TwIndicator"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      {children}
      <TailwindIndicator />
    </ThemeProvider>
  )
}
