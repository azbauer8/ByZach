import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <hr className="mb-8 dark:border-zinc-800" />

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