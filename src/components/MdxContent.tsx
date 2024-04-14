import React from "react"
import Image, { ImageProps } from "next/image"
import Link, { LinkProps } from "next/link"
import { cn } from "@/utils/tailwind/cn"
import { MDXProvider } from "@mdx-js/react"
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc"
import { highlight } from "sugar-high"

function CustomLink(
  props: LinkProps & {
    children: React.ReactNode
    href: string
  }
) {
  const href = props.href
  href.startsWith("/") && <Link {...props}>{props.children}</Link>
  href.startsWith("#") && <a {...props} />
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage({ alt, className, ...props }: ImageProps) {
  return <Image {...props} alt={alt} className={cn("rounded-lg", className)} />
}

function Code({
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  children: string
}) {
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str: string) {
  console.log("🚀 ~ slugify ~ str:", str)
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
}

function createHeading(level: number) {
  const heading = ({ children }: { children: string | React.ReactNode }) => {
    // @ts-expect-error it works I think
    const slug = slugify(children?.props?.children || children)
    return React.createElement(`h${level}`, { id: slug }, [
      React.createElement(
        "a",
        {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        },
        children
      ),
    ])
  }
  return heading
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
} as React.ComponentProps<typeof MDXProvider>["components"]

export function MDXContent(props: MDXRemoteProps) {
  return (
    <MDXRemote {...props} components={{ ...components, ...props.components }} />
  )
}
