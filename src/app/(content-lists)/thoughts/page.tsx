import ListItem from "@/components/ListItem"

export default function Thoughts() {
  return (
    <>
      {thoughts.map((thought) => (
        <ListItem
          key={thought.title}
          title={thought.title}
          link={thought.link}
          linkTitle={thought.linkTitle}
        />
      ))}
    </>
  )
}
const thoughts = [
  {
    title: "Thought 1",
    link: "/thoughts/thought-1",
    linkTitle: "wasd",
  },
  {
    title: "Thought 2",
    link: "/thoughts/thought-2",
    linkTitle: "wasd",
  },
  {
    title: "Thought 3",
    link: "/thoughts/thought-3",
    linkTitle: "wasd",
  },
  {
    title: "Thought 4",
    link: "/thoughts/thought-4",
    linkTitle: "wasd",
  },
  {
    title: "Thought 5",
    link: "/thoughts/thought-5",
    linkTitle: "wasd",
  },
  {
    title: "Thought 6",
    link: "/thoughts/thought-6",
    linkTitle: "wasd",
  },
  {
    title: "Thought 7",
    link: "/thoughts/thought-7",
    linkTitle: "wasd",
  },
  {
    title: "Thought 8",
    link: "/thoughts/thought-8",
    linkTitle: "wasd",
  },
  {
    title: "Thought 9",
    link: "/thoughts/thought-9",
    linkTitle: "wasd",
  },
  {
    title: "Thought 10",
    link: "/thoughts/thought-10",
    linkTitle: "wasd",
  },
  {
    title: "Thought 11",
    link: "/thoughts/thought-11",
    linkTitle: "wasd",
  },
  {
    title: "Thought 12",
    link: "/thoughts/thought-12",
    linkTitle: "wasd",
  },
  {
    title: "Thought 13",
    link: "/thoughts/thought-13",
    linkTitle: "wasd",
  },
  {
    title: "Thought 14",
    link: "/thoughts/thought-14",
    linkTitle: "wasd",
  },
  {
    title: "Thought 15",
    link: "/thoughts/thought-15",
    linkTitle: "wasd",
  },
  {
    title: "Thought 16",
    link: "/thoughts/thought-16",
    linkTitle: "wasd",
  },
] as const
