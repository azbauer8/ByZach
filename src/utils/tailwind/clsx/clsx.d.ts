declare namespace clsx {
  type ClassValue =
    | ClassArray
    | ClassDictionary
    | string
    | number
    | null
    | boolean
    | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type ClassDictionary = Record<string, any>
  type ClassArray = ClassValue[]
  function clsx(...inputs: ClassValue[]): string
}

declare function clsx(...inputs: clsx.ClassValue[]): string

export = clsx
