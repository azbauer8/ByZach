"use client"

import * as React from "react"
import { NextUIProvider } from "@nextui-org/system"
import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider as NextThemesProvider } from "next-themes"

import TailwindIndicator from "@/components/ui/tailwind-indicator"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="relative flex size-full min-h-dvh">
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <JotaiProvider> {children}</JotaiProvider>
        <TailwindIndicator />
      </NextThemesProvider>
    </NextUIProvider>
  )
}
