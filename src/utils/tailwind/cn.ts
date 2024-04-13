import clsx, { ClassValue } from "@/utils/tailwind/clsx/clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
