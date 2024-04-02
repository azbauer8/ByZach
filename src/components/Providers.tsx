"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

import TailwindIndicator from "@/components/ui/tailwind-indicator"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <TailwindIndicator />
    </NextThemesProvider>
  )
}
