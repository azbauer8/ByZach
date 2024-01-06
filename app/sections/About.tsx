import Link from "@/components/Link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import links from "@/data/links.json";

export default function About() {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Zach Bauer</h1>
        <h2 className="font-default text-lg">Full Stack Developer</h2>
      </div>
      <div>
        <div className="max-w-xl leading-loose">
          {`Hey there! I'm Zach. I'm currently living in `}
          <Philly /> {`and working at `}
          <a href="https://sig.com/" aria-label="SIG" className="link">
            SIG
          </a>
          {` developing internal monitoring and operations tools for support teams. In 2021, I graduated from `}
          <a href="https://www.pitt.edu/" aria-label="Pitt" className="link">
            Pitt
          </a>
          {` with a bachelor's in information science.`}
        </div>
        <div className="mt-3">
          {links[0].map((link, index) => (
            <Link key={index} name={link.name} link={link.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Philly() {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          <span className="group/korok inline-flex">
            <span className="group/korok inline-flex cursor-birds decoration-zinc-150 decoration-2 underline-offset-2 hover:no-underline group-hover/korok:text-[#004C54] dark:decoration-zinc-450 md:text-zinc-800 md:underline dark:md:text-zinc-50">
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
        </TooltipTrigger>
        <TooltipContent className="bg-[#004C54] dark:bg-[#004C54]">
          <div className="font-mono text-lg font-semibold tracking-wider text-white dark:text-white">
            GO BIRDS!
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
