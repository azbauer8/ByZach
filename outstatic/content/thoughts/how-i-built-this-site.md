---
title: 'How I built this site'
status: 'draft'
author:
  name: 'Zach Bauer'
  picture: 'https://avatars.githubusercontent.com/u/8096606?v=4'
slug: 'how-i-built-this-site'
description: ''
coverImage: ''
publishedAt: '2024-05-04T15:24:51.903Z'
---

 What's a dev blog without a post explaining how it was made?

At a high level, this site is 99% static content with a small bit content dynamically fetched from an api. I'm using Next.js 14 with partial pre-rendering to make this feel closer to 100% static.

## Design

I was inspired to make this site look the way it does after stumbling upon [Brian Lovin's personal site](https://brianlovin.com/). I love the way it integrates Apple's mobile design into a website format, and I felt compelled to take a stab at it myself.

Beyond Brian's website, I used a couple iPad apps as reference material, namely [Mela](https://apps.apple.com/us/app/mela-recipe-manager/id1548466041) and [Interactful](https://apps.apple.com/us/app/interactful/id1528095640). While Interactful is primarily targeted towards Swift developers, it proved to be an invaluable resource for this use case. It details nearly every aspect of the UI system including color palettes, component variants, and specific layouts that can be hard to find out in the wild.

## Layout

This site heavily utilizes route groups and layouts to achieve an app-like feel in Next.js's app router.

At the global scope, every page is wrapped with a sidebar that hides at a certain breakpoint. It is up to each page to decide how/if to display the mobile sidebar.

Content list routes (ie. `/projects`, `/thoughts`, etc.) and content routes (ie. `/projects/stacks`, `/thoughts/hello-world`, etc.) are separated into respective route groups so that their layouts are distinct, rather than nesting within one another. This is important because each content page needs to share the same layout in order for things like scroll persistence to work, but that layout shouldn't be applied to the content list page.

Let's look at a single content type, to make things easier to explain.

The file structure of its pages would look something like this:

```
- (content-lists)
  - thoughts
    - page.tsx
    - Thoughts.tsx
- (content)
  - thoughts
    - [thought]
      - page.tsx
    - layout.tsx
```

`(content-lists)/thoughts/page.tsx` simply exports some metadata and the `Thoughts.tsx` component, which is what actually fetches and renders the content list.

```tsx
export default async function Thoughts({
  isContentPage,
}: {
  isContentPage?: boolean
}) {
  const thoughts = getThoughts()
  if (!thoughts) return null

  return (
    <ContentListLayout type="Thoughts" isContentPage={isContentPage}>
      <NavList type="thoughts" links={thoughts} />
    </ContentListLayout>
  )
}
```

The benefit of breaking this content list out into a reusable component is that we can use it both as a standalone page and as a sidebar for the content pages. The `ContentListLayout` component that wraps the list takes a boolean which determines whether the list should do some fancy dynamic resizing or just be a sidebar.

`(content)/thoughts/layout.tsx` wraps every content page with the content list as a sidebar so that the layout persists between pages.

```tsx
export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Thoughts isContentPage />
      <div className="flex-1">{children}</div>
    </div>
  )
}
```

Finally, `(content)/thoughts/[thought]/page.tsx` is wrapped by a `ContentLayout` component that applies a header and a basic page layout. 

```tsx
export default async function Thought({
  params,
}: {
  params: { thought: string }
}) {
  const thought = getThoughts().find(
    (thought) => thought.slug === params.thought
  )
  if (!thought) return null
  return (
    <ContentLayout title={thought.metadata.title} type="thoughts">
      <div className="space-y-1.5">
        <Typography variant="h2">{thought.metadata.title}</Typography>
        <Typography affects="muted">
          {formatDate(thought.metadata.dateTime)}
        </Typography>
      </div>
      <main className="prose prose-neutral dark:prose-invert">
        <MDXContent source={thought.content} />
      </main>
    </ContentLayout>
  )
}
```

### Dynamic Headers

Every page and content list has a header which will dynamically show the title of the page/list once a specific vertical breakpoint is hit. But, given that there are multiple scrollbars on any given page, this is not as simple as just getting the `window.scrollY` value. For any scroll area that is not the main body of the page, I track the scroll position in a state and pass it into the header to use instead of the window's scroll position.

```tsx
export function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const [scroll, setScroll] = useState(0)
  const onScroll = () => {
    const scrollTop = document.getElementById("sidebar")?.scrollTop
    scrollTop && setScroll(scrollTop)
  }
  return (
    <nav
      className="bg-accent absolute top-0 z-30 flex max-h-dvh min-h-dvh w-56 min-w-56 max-w-56 -translate-x-full flex-col overflow-y-auto border-r-[0.5px] lg:sticky lg:translate-x-0"
      id="sidebar"
      onScroll={onScroll}
    >
      <DynamicHeader
        title={siteConfig.title}
        rightContent={<ThemeToggle iconSize={20} />}
        scrollPos={scroll}
      />
      {children}
    </nav>
  )
}
```

## Content Management 

One of my top priorities when researching content mangement solutions was being able to easily add content both locally and in production. For longer form content like blog posts, I want to be able to write them in my editor of choice and preview the results in real-time. But for other stuff like tools or code snippets I find on Twitter, I want to be able to quickly save them from my phone.

[Keystatic](https://keystatic.com/) is the closest thing I've found that strikes that balance. Once you've set up all the scaffolding, you get access to a dashboard on your site both locally and in production to draft content you've defined in your config. All content is saved to a local directory, and changes made in the production dashboard automatically push a commit to rebuild the site.

## Content rendering 

While Keystatic is great at managing content, I did not find it to be quite as great at fetching content. The reader api was showing strange behaviors with content blipping in and out of existence.

Maybe it was a skill issue, but I ended up just using Node's native `fs` api instead. Here's how I'm fetching the content, fully ripped from [leerob's blog guide](https://leerob.io/blog/2023):

```tsx
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match?.[1]
  const content = fileContent.replace(frontmatterRegex, "").trim()
  const frontMatterLines = frontMatterBlock?.trim().split("\n")
  const metadata: Partial<Metadata> = {}

  frontMatterLines?.forEach((line) => {
    const [key, ...valueArr] = line.split(": ")
    const value = valueArr
      .join(": ")
      .trim()
      .replace(/^['"](.*)['"]$/, "$1")
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata, content }
}

function getMDXFiles(dir: fs.PathLike) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filePath, "utf-8")
  return parseFrontmatter(rawContent)
}

function getJSONFiles(dir: fs.PathLike) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".json")
}

function readJSONFiles(filePath: fs.PathOrFileDescriptor) {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"))
}
```

Keystatic actually does come in handy here, as I'm able to use the content collection schema defined in the config to type the frontmatter data.

```tsx
type ThoughtMetadata = Entry<
  (typeof keystaticConfig)["collections"]["thoughts"]
>

export function getThoughts(limit?: number) {
  const dir = path.join(process.cwd(), "content/thoughts")
  const mdxFiles = getMDXFiles(dir)
    .map((file) => {
      const { metadata, content } = readMDXFile(path.join(dir, file))
      const slug = path.basename(file, path.extname(file))
      return {
        metadata: metadata as ThoughtMetadata,
        slug,
        content,
      }
    })
    .sort(
      (a, b) =>
        new Date(b.metadata.dateTime).getTime() -
        new Date(a.metadata.dateTime).getTime()
    )
  return limit ? mdxFiles.slice(0, limit) : mdxFiles
}
```

## Conclusion

If you're curious about any details I didn't cover here, the site is fully [open source](https://github.com/azbauer8/ByZach), so feel free to take a look around. I'm sure I will tweak things here and there, but for now I am very happy with how this site looks and functions.

Now I just have to actually add content 🙃

 