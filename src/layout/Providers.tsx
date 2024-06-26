"use client"

import type * as React from "react"
import { ThemeProvider } from "next-themes"


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
        {children}
    </ThemeProvider>
  )
}
