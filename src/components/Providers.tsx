"use client"

import type * as React from "react"
import { useRouter } from "next/navigation"
import { NextUIProvider } from "@nextui-org/react"
import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider } from "next-themes"

import TailwindIndicator from "@/components/TwIndicator"

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        <JotaiProvider>{children}</JotaiProvider>
        <TailwindIndicator />
      </ThemeProvider>
    </NextUIProvider>
  )
}
