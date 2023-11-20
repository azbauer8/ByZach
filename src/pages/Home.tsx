import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-12">
      <div className="space-y-8">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">Zach Bauer</h1>
          <h2 className="text-lg text-zinc-400 dark:text-zinc-450">
            Full Stack Developer
          </h2>
        </div>
        <p className="max-w-xl leading-loose">
          Hey there! I'm Zach. I'm currently living in <Philly /> and working at{" "}
          <a href="https://sig.com/" className="link">
            SIG
          </a>{" "}
          developing internal monitoring and operations tools for support teams.
          In 2021, I graduated from{" "}
          <a href="https://www.pitt.edu/" className="link">
            Pitt
          </a>{" "}
          with a bachelor's in information science.
        </p>
      </div>
      <div className="space-y-5">
        <div>
          <h1 className="text-xl font-bold">Projects</h1>
          <p>Some projects I've worked on in my spare time.</p>
        </div>
        <div className="lg:max-w-screen-md-8 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
function Philly() {
  return (
    <span className="group/korok inline-flex">
      <span className="group/korok cursor-birds inline-flex group-hover/korok:text-[#004C54] md:text-zinc-800 dark:md:text-zinc-50">
        <span className="sr-only">Philly</span>
        <span
          className="transition delay-[50ms] duration-75 group-hover/korok:-translate-y-px"
          aria-hidden="true"
        >
          P
        </span>
        <span
          className="transition delay-[75ms] duration-75 group-hover/korok:-translate-y-px"
          aria-hidden="true"
        >
          h
        </span>
        <span
          className="transition delay-[100ms] duration-75 group-hover/korok:-translate-y-px"
          aria-hidden="true"
        >
          i
        </span>
        <span
          className="transition delay-[125ms] duration-75 group-hover/korok:-translate-y-px"
          aria-hidden="true"
        >
          l
        </span>
        <span
          className="transition delay-[150ms] duration-75 group-hover/korok:-translate-y-px"
          aria-hidden="true"
        >
          l
        </span>
        <span
          className="transition delay-[200ms] duration-75 group-hover/korok:-translate-y-px"
          aria-hidden="true"
        >
          y
        </span>
      </span>
    </span>
  );
}
