import { clsx, type ClassValue } from "clsx"
import { createTwc } from "react-twc"
import { twMerge } from "tailwind-merge"

export function formatDate(date: string | null | undefined) {
  return new Date(date ?? "").toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function unslugify(slug: string) {
  return slug
    .replace(/\-/g, " ")
    .replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    )
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const twcn = createTwc({ compose: cn })
