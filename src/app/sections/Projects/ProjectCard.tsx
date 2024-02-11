import { Project } from "@/data/projects"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react"
import { GithubIcon } from "lucide-react"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
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
          <GithubIcon className="h-6 w-6" />
        </Button>
      </CardHeader>
      <CardBody>
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
            variant="faded"
          >
            {project.linkTitle}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
