import {
  FaGithub,
  FaLinkedin,
  FaSquareLastfm,
  FaGoodreads,
} from "react-icons/fa6";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { SiTrakt } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";

import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer>
      <hr className="mb-5 dark:border-zinc-800" />
      <div className="mb-2 space-y-0">
        <div className="flex flex-wrap justify-center space-x-3">
          <Button
            asChild
            className="mb-3 bg-[#6a518f] p-3 text-white hover:bg-[#4d3a69] dark:bg-[#6a518f] dark:text-white dark:hover:bg-[#4d3a69]"
          >
            <a href="https://github.com/azbauer8/">
              <FaGithub className="mr-2 h-6 w-6" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            className="mb-3 bg-blue-600 p-3 text-white hover:bg-blue-800 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-800 "
          >
            <a href="https://www.linkedin.com/in/zach-bauer8/">
              <FaLinkedin className="mr-2 h-6 w-6" />
              LinkedIn
            </a>
          </Button>
          <Button
            asChild
            className="mb-3 bg-cyan-600 p-3 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:text-white dark:hover:bg-cyan-800"
          >
            <a href="mailto:hi@byzach.dev">
              <MdAlternateEmail className="mr-2 h-6 w-6" />
              Email
            </a>
          </Button>
          <Button
            asChild
            className="mb-3 bg-amber-600 p-3 text-white hover:bg-amber-800 dark:bg-amber-600 dark:text-white dark:hover:bg-amber-800"
          >
            <a href="/Resume.pdf">
              <HiDocumentArrowDown className="mr-2 h-6 w-6" />
              Resume
            </a>
          </Button>
        </div>
        <div className="flex flex-wrap justify-center space-x-3">
          <Button
            asChild
            className="mb-3 bg-rose-700 p-3 text-white hover:bg-rose-900 dark:bg-rose-700 dark:text-white dark:hover:bg-rose-900"
          >
            <a href="https://www.last.fm/user/zacharlatanz">
              <FaSquareLastfm className="mr-2 h-6 w-6" />
              Last.fm
            </a>
          </Button>
          <Button
            asChild
            className="mb-3 bg-red-600 p-3 text-white hover:bg-red-800 dark:bg-red-600 dark:text-white dark:hover:bg-red-800"
          >
            <a href="https://trakt.tv/users/zacharlatan">
              <SiTrakt className="mr-2 h-6 w-6" />
              Trakt
            </a>
          </Button>
          <Button
            asChild
            className="bg-green-700 p-3 text-white hover:bg-green-900 dark:bg-green-700 dark:text-white dark:hover:bg-green-900"
          >
            <a href="https://www.goodreads.com/zacharlatan">
              <FaGoodreads className="mr-2 h-6 w-6" />
              GoodReads
            </a>
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="https://github.com/azbauer8/ByZach"
          className="group inline-flex"
        >
          <FaGithub className="mr-2 h-6 w-6" />
          <p className="underline decoration-zinc-150 decoration-2 underline-offset-2 group-hover:decoration-zinc-450 dark:decoration-zinc-450 dark:group-hover:decoration-zinc-150">
            By Zach Bauer, 2023
          </p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
