import { HiDocumentArrowDown } from "react-icons/hi2";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub, FaSquareLastfm, FaGoodreads } from "react-icons/fa6";
import { SiTrakt } from "react-icons/si";

import { Button } from "../components/ui/button";

type LinkProps = {
  name: string;
  link: string;
};

const Link: React.FC<LinkProps> = ({ name, link }) => {
  return (
    <Button
      asChild
      className="mb-3 bg-transparent p-3 text-zinc-800 hover:bg-transparent hover:text-zinc-450 dark:bg-transparent dark:text-zinc-50 dark:hover:bg-transparent dark:hover:text-zinc-450"
    >
      <a href={link}>
        {name === "GitHub" ? (
          <FaGithub className="mr-2 h-6 w-6" />
        ) : name === "Email" ? (
          <MdAlternateEmail className="mr-2 h-6 w-6" />
        ) : name === "Resume" ? (
          <HiDocumentArrowDown className="mr-2 h-6 w-6" />
        ) : name === "Last.fm" ? (
          <FaSquareLastfm className="mr-2 h-6 w-6" />
        ) : name === "Goodreads" ? (
          <FaGoodreads className="mr-2 h-6 w-6" />
        ) : name === "Trakt" ? (
          <SiTrakt className="mr-2 h-6 w-6" />
        ) : null}
        {name}
      </a>
    </Button>
  );
};

export default Link;
