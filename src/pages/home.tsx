import { FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-12">
      <div className="space-y-8">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">Zach Bauer</h1>
          <h2 className="dark:text-zinc-450 text-lg text-zinc-400">
            Full Stack Developer
          </h2>
        </div>
        <p className="max-w-xl leading-loose">
          Hey there! I'm Zach. I'm currently living in Philly and working at SIG
          developing internal monitoring and operations tools for support teams.
          Before that, I graduated from Pitt in 2021 with a bachelor's in
          information science.
        </p>
      </div>
      <div className="space-y-5">
        <div>
          <h1 className="text-xl font-bold">Projects</h1>
          <p>A selection of projects I've worked on in my spare time.</p>
        </div>
        <div className="lg:max-w-screen-md-8 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          <div className="relative flex flex-col rounded-lg border border-zinc-200 dark:border-zinc-800">
            <div className="absolute right-3 top-5">
              <a href="https://github.com/azbauer8/Games">
                <FaGithub className="font-default mr-2 h-6 w-6" />
              </a>
            </div>
            <div className="p-5">
              <h3 className="font-pop mb-2 font-semibold">Games Radar</h3>
              <p className="leading-relaxed">
                A micro-service site showing recent game releases fetched from
                rawg's api (also loosely cloned their layout).
              </p>
              <a
                href="https://games.byzach.dev"
                className="focusable mt-4 flex cursor-pointer items-center justify-center rounded-md bg-zinc-200 px-2.5 py-2 font-medium  hover:bg-zinc-300 dark:bg-zinc-500 dark:hover:bg-zinc-600"
              >
                Check it out
              </a>
            </div>
          </div>
          <div className="relative flex flex-col rounded-lg border border-zinc-200 dark:border-zinc-800">
            <div className="absolute right-3 top-5">
              <a href="https://github.com/azbauer8/Dotfiles">
                <FaGithub className="font-default mr-2 h-6 w-6" />
              </a>
            </div>
            <div className="p-5">
              <h3 className="font-pop mb-2 font-semibold">Dotfiles</h3>
              <p className="leading-relaxed">
                A collection of configuration files I've tweaked for a variety
                of tools I use on Windows and Mac.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col rounded-lg border border-zinc-200 dark:border-zinc-800">
            <div className="absolute right-3 top-5">
              <a href="https://github.com/azbauer8/Uses">
                <FaGithub className="font-default mr-2 h-6 w-6" />
              </a>
            </div>
            <div className="p-5">
              <h3 className="font-pop mb-2 font-semibold">Uses</h3>
              <p className="leading-relaxed">
                The apps and tools I'm using to get stuff done. May be a little
                outdated, I'm looking to find a better workflow for maintaining
                this.
              </p>
              <a
                href="https://uses.byzach.dev"
                className="focusable mt-4 flex cursor-pointer items-center justify-center rounded-md bg-zinc-200 px-2.5 py-2 font-medium  hover:bg-zinc-300 dark:bg-zinc-500 dark:hover:bg-zinc-600"
              >
                Check it out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
