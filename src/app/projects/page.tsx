import { ListLayout } from "@/components/Layouts"
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

export default function Projects() {
  return (
    <ListLayout title="Projects">
      <ProjectsList />
    </ListLayout>
  )
}

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
