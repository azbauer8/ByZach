import ListItem from "@/components/ListItem"

const projects = [
  {
    title: "Project 1",
    link: "/projects/project-1",
    linkTitle: "wasd",
  },
  {
    title: "Project 2",
    link: "/projects/project-2",
    linkTitle: "wasd",
  },
  {
    title: "Project 3",
    link: "/projects/project-3",
    linkTitle: "wasd",
  },
  {
    title: "Project 4",
    link: "/projects/project-4",
    linkTitle: "wasd",
  },
  {
    title: "Project 5",
    link: "/projects/project-5",
    linkTitle: "wasd",
  },
  {
    title: "Project 6",
    link: "/projects/project-6",
    linkTitle: "wasd",
  },
  {
    title: "Project 7",
    link: "/projects/project-7",
    icon: "👨‍💻",
    linkTitle: "wasd",
  },
  {
    title: "Project 8",
    link: "/projects/project-8",
    linkTitle: "wasd",
  },
  {
    title: "Project 9",
    link: "/projects/project-9",
    linkTitle: "wasd",
  },
  {
    title: "Project 10",
    link: "/projects/project-10",
    linkTitle: "wasd",
  },
  {
    title: "Project 11",
    link: "/projects/project-11",
    linkTitle: "wasd",
  },
] as const
export function ProjectsList() {
  return (
    <>
      {projects.map((project) => (
        <ListItem
          key={project.title}
          title={project.title}
          link={project.link}
          linkTitle={project.linkTitle}
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
export function ThoughtsList() {
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
export function DiscoveriesList() {
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

export function UsesList() {
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
