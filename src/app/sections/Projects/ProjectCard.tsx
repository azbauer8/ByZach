import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react"
import { GithubIcon } from "lucide-react"

import { Project } from "./projects"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-content1/50">
      <CardHeader className="flex items-center justify-between pb-0">
        <h1 className="mb-2 font-semibold text-pop">{project.name}</h1>
        <Button
          aria-label={project.name}
          as={Link}
          variant="light"
          className="text-foreground hover:text-pop"
          href={project.github}
          isExternal
          isIconOnly
        >
          <GithubIcon className="size-6" />
        </Button>
      </CardHeader>
      <CardBody className="py-0">
        <p className="leading-relaxed">{project.description}</p>
      </CardBody>
      {project.link && project.linkTitle && (
        <CardFooter>
          <Button
            as={Link}
            href={project.link}
            isExternal
            showAnchorIcon
            className="w-full"
            variant="flat"
          >
            {project.linkTitle}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
