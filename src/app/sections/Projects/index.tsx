import ProjectCard from "./ProjectCard"
import { projects } from "./projects"

export default function Projects() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-xl font-bold text-pop">Projects</h1>
        <p>{`Some projects I've worked on in my spare time.`}</p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.name} project={project} />
        })}
      </div>
    </div>
  )
}
