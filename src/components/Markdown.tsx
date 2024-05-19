import type { ImageProps } from "next/image"
import type { MDXProvider } from "@mdx-js/react"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode, { type Options } from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

import "@/styles/prose.css"

import DynamicImage from "@/components/DynamicImage"

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href?.toString()
  if (href?.startsWith("#"))
    return (
      <a
        className="text-foreground no-underline underline-offset-2 hover:underline"
        {...props}
      />
    )
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

const components = {
  Image: RoundedImage,
  a: CustomLink,
} as React.ComponentProps<typeof MDXProvider>["components"]

const codeOptions: Options = {
  theme: {
    dark: "vesper",
    light: "github-light-default",
  },
  keepBackground: false,
}

export function Markdown(props: MDXRemoteProps) {
  return (
    <div className="prose prose-neutral text-foreground-muted dark:prose-invert prose-a:no-underline">
      <MDXRemote
        {...props}
        components={{ ...components, ...props.components }}
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [
              // @ts-expect-error
              [rehypePrettyCode, codeOptions],
              [rehypeSlug],
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
              [remarkGfm],
            ],
          },
        }}
      />
    </div>
  )
}
