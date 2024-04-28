import "@/styles/prose.css"

import ContentHeader from "@/components/ContentHeader"

export function ContentLayout({
  title,
  list,
  children,
}: {
  title: string
  children: React.ReactNode
  list?: string
}) {
  return (
    <>
      <ContentHeader title={title} list={list} />
      <div className="mx-auto max-w-3xl space-y-5 px-4 py-12 md:px-8">
        {children}
      </div>
    </>
  )
}
