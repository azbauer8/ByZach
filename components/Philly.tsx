import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Philly() {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          <span className="group/philly inline-flex">
            <span className="group/philly inline-flex cursor-birds select-none decoration-zinc-150 decoration-2 underline-offset-2 hover:no-underline group-hover/philly:text-[#004C54] dark:decoration-zinc-450 md:text-zinc-800 md:underline dark:md:text-zinc-50">
              <span className="sr-only select-text">Philly</span>
              <span
                className="transition delay-[50ms] duration-75 group-hover/philly:-translate-y-px"
                aria-hidden="true"
              >
                P
              </span>
              <span
                className="transition delay-[75ms] duration-75 group-hover/philly:-translate-y-px"
                aria-hidden="true"
              >
                h
              </span>
              <span
                className="transition delay-[100ms] duration-75 group-hover/philly:-translate-y-px"
                aria-hidden="true"
              >
                i
              </span>
              <span
                className="transition delay-[125ms] duration-75 group-hover/philly:-translate-y-px"
                aria-hidden="true"
              >
                l
              </span>
              <span
                className="transition delay-[150ms] duration-75 group-hover/philly:-translate-y-px"
                aria-hidden="true"
              >
                l
              </span>
              <span
                className="transition delay-[200ms] duration-75 group-hover/philly:-translate-y-px"
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
  )
}
