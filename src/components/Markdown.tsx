import type { ImageProps } from "next/image"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"
import rehypePrettyCode, { type Options } from "rehype-pretty-code"

import "@/styles/prose.css"

import { createElement, type ReactNode } from "react"

import { slugify } from "@/lib/utils"
import DynamicImage from "@/components/DynamicImage"

function createHeading(level: number) {
  return ({ children }: { children: ReactNode }) => {
    const slug = slugify(children?.toString() || "")
    return createElement(
      CustomLink,
      {
        href: `#${slug}`,
        id: slug,
      },
      createElement(`h${level}`, {}, children)
    )
  }
}

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

function Code({ children }: { children: ReactNode }) {
  // console.log("🚀 ~ Code ~ children:", children[0].props.children)
  return children
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
}

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
        // @ts-expect-error
        components={{ ...components, ...props.components }}
        options={{
          mdxOptions: {
            rehypePlugins: [
              // @ts-expect-error
              [rehypePrettyCode, codeOptions],
            ],
          },
        }}
      />
    </div>
  )
}
