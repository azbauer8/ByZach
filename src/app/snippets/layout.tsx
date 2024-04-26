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
  const snippets = getSnippets().map((snippet) => ({
    slug: snippet.slug,
    entry: {
      title: snippet.metadata.title,
      dateTime: snippet.metadata.dateTime,
    },
  }))

  return <ContentList type="snippets" links={snippets} />
}
