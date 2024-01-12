import { HiExternalLink } from "react-icons/hi"
import { PiGithubLogoDuotone } from "react-icons/pi"

type ProjectCardProps = {
  name: string
  description: string
  github: string
  link?: string
  linkTitle?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  github,
  link,
  linkTitle,
}) => {
  return (
    <div className="relative flex flex-col rounded-lg border border-zinc-200 dark:border-zinc-800">
      <div className="absolute right-3 top-5">
        <a href={github} aria-label="GitHub">
          <PiGithubLogoDuotone className="font-default mr-2 h-6 w-6" />
        </a>
      </div>
      <div className="p-5">
        <h1 className="font-pop mb-2 font-semibold">{name}</h1>
        <p className="leading-relaxed">{description}</p>
        {link && linkTitle ? (
          <a
            href={link}
            aria-label={linkTitle}
            className="mt-4 flex cursor-pointer items-center justify-center rounded-md bg-zinc-200/70 px-2.5 py-2 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-700/30 dark:text-zinc-100 dark:hover:bg-zinc-700/50"
          >
            <HiExternalLink className="mr-1" />
            {linkTitle}
          </a>
        ) : null}
      </div>
    </div>
  )
}

export default ProjectCard
