"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { NextUIProvider } from "@nextui-org/system"
import { ThemeProvider as NextThemesProvider } from "next-themes"

import TailwindIndicator from "@/components/ui/tailwind-indicator"

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <NextUIProvider
      className="relative flex size-full min-h-dvh"
      navigate={router.push}
    >
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <TailwindIndicator />
      </NextThemesProvider>
    </NextUIProvider>
  )
}
