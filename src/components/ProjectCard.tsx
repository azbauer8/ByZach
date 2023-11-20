import { FaGithub } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";

type ProjectCardProps = {
  name: string;
  description: string;
  github: string;
  link?: string;
  linkTitle?: string;
};

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
        <a href={github}>
          <FaGithub className="font-default mr-2 h-6 w-6" />
        </a>
      </div>
      <div className="p-5">
        <h3 className="font-pop mb-2 font-semibold">{name}</h3>
        <p className="leading-relaxed">{description}</p>
        {link && linkTitle ? (
          <a
            href={link}
            className="focusable mt-4 flex cursor-pointer items-center justify-center rounded-md bg-zinc-200 px-2.5 py-2  text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-500 dark:text-zinc-200 dark:hover:bg-zinc-600"
          >
            <HiExternalLink className="mr-1" />
            {linkTitle}
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
