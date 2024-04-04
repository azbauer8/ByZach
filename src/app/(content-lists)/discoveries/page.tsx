import ListItem from "@/components/ListItem"

export default function Discoveries() {
  return (
    <>
      {discoveries.map((discovery) => (
        <ListItem
          key={discovery.title}
          title={discovery.title}
          link={discovery.link}
          linkTitle={discovery.linkTitle}
        />
      ))}
    </>
  )
}

const discoveries = [
  {
    title: "Discovery 1",
    link: "/discoveries/discovery-1",
    linkTitle: "wasd",
  },
  {
    title: "Discovery 2",
    link: "/discoveries/discovery-2",
    linkTitle: "wasd",
  },
  {
    title: "Discovery 3",
    link: "/discoveries/discovery-3",
    linkTitle: "wasd",
  },
  {
    title: "Discovery 4",
    link: "/discoveries/discovery-4",
    linkTitle: "wasd",
  },
  {
    title: "Discovery 5",
    link: "/discoveries/discovery-5",
    linkTitle: "wasd",
  },
  {
    title: "Discovery 6",
    link: "/discoveries/discovery-6",
    linkTitle: "wasd",
  },
  {
    title: "Discovery 7",
    link: "/discoveries/discovery-7",
    linkTitle: "wasd",
  },
  {
    title: "Discovery 8",
    link: "/discoveries/discovery-8",
    linkTitle: "wasd",
  },
  {
    title: "Discovery 9",
    link: "/discoveries/discovery-9",
    linkTitle: "wasd",
  },
  {
    title: "Discovery 10",
    link: "/discoveries/discovery-10",
    linkTitle: "wasd",
  },
] as const
