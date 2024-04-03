import ListItem from "@/components/ListItem"

export default function Uses() {
  return (
    <>
      {uses.map((use) => (
        <ListItem
          key={use.title}
          title={use.title}
          link={use.link}
          linkTitle={use.linkTitle}
        />
      ))}
    </>
  )
}

const uses = [
  {
    title: "Use 1",
    link: "/uses/use-1",
    linkTitle: "wasd",
  },
  {
    title: "Use 2",
    link: "/uses/use-2",
    linkTitle: "wasd",
  },
  {
    title: "Use 3",
    link: "/uses/use-3",
    linkTitle: "wasd",
  },
  {
    title: "Use 4",
    link: "/uses/use-4",
    linkTitle: "wasd",
  },
  {
    title: "Use 5",
    link: "/uses/use-5",
    linkTitle: "wasd",
  },
  {
    title: "Use 6",
    link: "/uses/use-6",
    linkTitle: "wasd",
  },
  {
    title: "Use 7",
    link: "/uses/use-7",
    linkTitle: "wasd",
  },
  {
    title: "Use 8",
    link: "/uses/use-8",
    linkTitle: "wasd",
  },
  {
    title: "Use 9",
    link: "/uses/use-9",
    linkTitle: "wasd",
  },
  {
    title: "Use 10",
    link: "/uses/use-10",
    linkTitle: "wasd",
  },
  {
    title: "Use 11",
    link: "/uses/use-11",
    linkTitle: "wasd",
  },
  {
    title: "Use 12",
    link: "/uses/use-12",
    linkTitle: "wasd",
  },
] as const
