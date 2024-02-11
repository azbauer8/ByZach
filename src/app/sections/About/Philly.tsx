import { Tooltip } from "@nextui-org/react"

export default function Philly() {
  return (
    <Tooltip
      className="bg-[#004C54] dark:bg-[#004C54]"
      content={
        <div className="font-mono text-lg font-semibold tracking-wider text-white dark:text-white">
          GO BIRDS!
        </div>
      }
    >
      <span className="group/philly inline-flex">
        <span className="group/philly inline-flex cursor-birds select-none  group-hover/philly:text-[#004C54] ">
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
    </Tooltip>
  )
}
