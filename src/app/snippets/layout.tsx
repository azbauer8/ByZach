import { getSnippets } from "@/lib/getLocalContent"
import ContentList from "@/components/ContentList"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Snippets />
      <div className="flex-1">{children}</div>
    </div>
  )
}

async function Snippets() {
  const snippets = await getSnippets().then((snippets) =>
    snippets.map((snippet) => ({
      slug: snippet.slug,
      entry: { title: snippet.entry.title, dateTime: snippet.entry.dateTime },
    }))
  )

  return <ContentList type="snippets" links={snippets} />
}
