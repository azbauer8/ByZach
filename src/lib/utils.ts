import { createTwc } from "react-twc";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx"

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function formatUrl(url: string | undefined | null) {
  return new URL(url ?? "").hostname.replace("www.", "")
}

export function formatDate(date: string | null | undefined) {
  return new Date(date ?? "").toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const twcn = createTwc({ compose: cn })