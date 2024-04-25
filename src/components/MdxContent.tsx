import Image, { type ImageProps } from "next/image"
import Link, { type LinkProps } from "next/link"
import type { MDXProvider } from "@mdx-js/react"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode, { type Options } from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

import { cn } from "@/lib/utils"
import Anchor from "@/components/ui/anchor"

function CustomLink(
  props: LinkProps & {
    children: React.ReactNode
    href: string
  }
) {
  const href = props.href
  if (href.startsWith("/"))
    return (
      <Link {...props} prefetch={true}>
        {props.children}
      </Link>
    )
  if (href.startsWith("#"))
    return (
      <a
        className="no-underline underline-offset-2 hover:underline"
        {...props}
      />
    )
  return (
    <Anchor target="_blank" rel="noopener noreferrer" isExternal {...props} />
  )
}

function RoundedImage({ alt, className, ...props }: ImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      className={cn("animate-reveal rounded-lg", className)}
      loading="eager"
      priority
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUUdGoBwAB1QDxUtk2pwAAAABJRU5ErkJggg=="
    />
  )
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

export function MDXContent(props: MDXRemoteProps) {
  return (
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
  )
}
