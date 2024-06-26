import type { DetailedHTMLProps, HTMLAttributes } from "react"
import type { ImageProps } from "next/image"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"

import CopyToClipboard from "@/components/CopyCode"
import DynamicImage from "@/components/DynamicImage"

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="text-foreground no-underline underline-offset-2 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  )
}

function RoundedImage({ alt, className, ...props }: ImageProps) {
  return <DynamicImage {...props} alt={alt} placeholder="blur" />
}

export function Pre({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> & {
  "data-language": string
  "data-theme": string
}) {
  return (
    <div className="flex size-full flex-col divide-y rounded-lg border bg-accent text-foreground">
      <div className="flex w-full items-center justify-end px-2 py-0.5">
        <CopyToClipboard />
      </div>
      <pre {...props} className="my-0 flex-1 rounded-none bg-transparent p-2">
        {children}
      </pre>
    </div>
  )
}
const components = {
  Image: RoundedImage,
  a: CustomLink,
  pre: Pre,
}

export function Markdown(props: MDXRemoteProps) {
  return (
    <div className="prose prose-neutral text-foreground-muted dark:prose-invert prose-a:no-underline">
      <MDXRemote
        {...props}
        // @ts-expect-error
        components={{ ...components, ...props.components }}
        options={{
          mdxOptions: {
            rehypePlugins: [
              [
                // @ts-expect-error
                rehypePrettyCode,
                {
                  theme: {
                    dark: "vesper",
                    light: "github-light-default",
                  },
                },
              ],
            ],
          },
        }}
      />
    </div>
  )
}
