import { FaGithub, FaHandPeace } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import SidebarContents from "./sidebarContents";
import { useState } from "react";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <nav className="sticky top-0 z-10 flex w-full items-center justify-between bg-opacity-100 bg-clip-padding px-6 py-2.5 pl-4 backdrop-blur-3xl backdrop-filter lg:hidden">
        <SheetTrigger>
          <button className="mt-2 rounded-lg p-2 text-sm text-neutral-400 hover:text-white">
            <span className="sr-only">Open sidebar</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </SheetTrigger>

        <div className="flex flex-row space-x-8 pt-1">
          <a href="https://byzach.dev">
            <FaHandPeace className="h-6 w-6 rounded-lg text-neutral-400 hover:text-white" />
          </a>
          <a href="https://github.com/azbauer8/Games">
            <FaGithub className="h-6 w-6 rounded-lg text-neutral-400 hover:text-white" />
          </a>
        </div>
      </nav>
      <SheetContent side={"left"} className="w-80 bg-stone-900 p-0 pt-10">
        <SidebarContents setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  );
};

export default Topbar;
