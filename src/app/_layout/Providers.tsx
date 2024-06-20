"use client"

import type * as React from "react"
import { ThemeProvider } from "next-themes"

import { LayoutTransition } from "@/app/_layout/PageTransition"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      <LayoutTransition
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </LayoutTransition>
    </ThemeProvider>
  )
}
