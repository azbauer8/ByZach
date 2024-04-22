import Image, { ImageProps } from "next/image"
import Link, { LinkProps } from "next/link"
import { MDXProvider } from "@mdx-js/react"
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode, { Options } from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

import { cn } from "@/lib/utils"
import Anchor from "@/components/ui/Anchor"

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

const prettyCode = rehypePrettyCode as (
  options?: Options
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => void | Transformer<any, any>

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
            [prettyCode, codeOptions],
            [rehypeSlug],
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
            [remarkGfm],
          ],
        },
      }}
    />
  )
}
