export default function Home() {
  return (
    <div>
      <h1 className=" text-3xl font-semibold sm:text-4xl md:text-5xl xl:text-6xl">
        Hey there,
        <br /> my name's Zach
      </h1>

      <div className="mb-3 mt-5 space-y-8 leading-relaxed lg:space-y-3 lg:text-lg lg:leading-relaxed">
        I'm a software developer based out of Philly currently working at SIG.
      </div>
      <div className="mt-12 space-y-8 leading-relaxed lg:space-y-10 lg:text-lg lg:leading-relaxed">
        <h1 className=" text-xl font-semibold sm:text-2xl md:text-3xl xl:text-4xl">
          Projects
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          <a href="http://games.byzach.dev">
            <li className="group relative flex flex-col items-start">
              <h2 className="text-xl font-semibold text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95  bg-zinc-800/50 opacity-0 transition group-hover:scale-100 group-hover:border-4 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <span className="relative z-10">Game Release Radar</span>
              </h2>
              <p className="relative z-10 mt-2 text-sm text-zinc-400">
                A micro-service site showing recent game releases fetched from
                rawg's api (also loosely cloned their layout)
              </p>
              <p className="relative z-10 mt-6 flex text-sm font-medium  text-zinc-300 transition group-hover:text-zinc-100">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none"
                >
                  <path
                    d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="ml-2">games.byzach.dev</span>
              </p>
            </li>
          </a>
        </ul>
      </div>

      <div className="mt-12 space-y-8 leading-relaxed lg:space-y-10 lg:text-lg lg:leading-relaxed">
        <h1 className=" text-xl font-semibold sm:text-2xl md:text-3xl xl:text-4xl">
          Links
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          <a href="../../Resume.pdf">
            <li className="group relative flex flex-col items-start">
              <h2 className="text-lg font-semibold text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-800/50 opacity-0 transition group-hover:scale-100 group-hover:border-4 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <span className="relative z-10">Resume</span>
              </h2>
              <p className="relative z-10 mt-4 flex text-sm font-medium  text-zinc-300 transition group-hover:text-zinc-100">
                Updated Oct. 2023
              </p>
            </li>
          </a>
          <a href="https://github.com/azbauer8">
            <li className="group relative flex flex-col items-start">
              <h2 className="text-lg font-semibold text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95  bg-zinc-800/50 opacity-0 transition group-hover:scale-100 group-hover:border-4 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <span className="relative z-10">Github</span>
              </h2>
              <p className="relative z-10 mt-4 flex text-sm font-medium  text-zinc-300 transition group-hover:text-zinc-100">
                @azbauer8
              </p>
            </li>
          </a>
          <a href="https://www.linkedin.com/in/zach-bauer8/">
            <li className="group relative flex flex-col items-start">
              <h2 className="text-lg font-semibold text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95  bg-zinc-800/50 opacity-0 transition group-hover:scale-100 group-hover:border-4 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <span className="relative z-10">LinkedIn</span>
              </h2>
              <p className="relative z-10 mt-4 flex text-sm font-medium  text-zinc-300 transition group-hover:text-zinc-100">
                @zach-bauer8
              </p>
            </li>
          </a>
          <a href="https://www.last.fm/user/zacharlatanz">
            <li className="group relative flex flex-col items-start">
              <h2 className="text-lg font-semibold text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-800/50 opacity-0 transition group-hover:scale-100 group-hover:border-4 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <span className="relative z-10">Last.fm</span>
              </h2>
              <p className="relative z-10 mt-4 flex text-sm font-medium  text-zinc-300 transition group-hover:text-zinc-100">
                @zacharlatanz
              </p>
            </li>
          </a>
          <a href="https://trakt.tv/users/zacharlatan">
            <li className="group relative flex flex-col items-start">
              <h2 className="text-lg font-semibold text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95  bg-zinc-800/50 opacity-0 transition group-hover:scale-100 group-hover:border-4 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <span className="relative z-10">Trakt</span>
              </h2>
              <p className="relative z-10 mt-4 flex text-sm font-medium  text-zinc-300 transition group-hover:text-zinc-100">
                @zacharlatan
              </p>
            </li>
          </a>
          <a href="https://www.goodreads.com/user/show/168866495-zach-bauer">
            <li className="group relative flex flex-col items-start">
              <h2 className="text-lg font-semibold text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-800/50 opacity-0 transition group-hover:scale-100 group-hover:border-4 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                <span className="relative z-10">Goodreads</span>
              </h2>
              <p className="relative z-10 mt-4 flex text-sm font-medium text-zinc-300 transition group-hover:text-zinc-100">
                @zacharlatan
              </p>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
