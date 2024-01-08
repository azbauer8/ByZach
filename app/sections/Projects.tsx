import projects from "@/data/projects.json"

import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Projects</h1>
        <p>{`Some projects I've worked on in my spare time.`}</p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:max-w-md">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              github={project.github}
              link={project.link}
              linkTitle={project.linkTitle}
            />
          )
        })}
      </div>
    </div>
  )
}
