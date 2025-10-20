import type { ForwardRefExoticComponent, SVGProps } from "react"
import type { ClassValue } from "clsx"
import {
  ArrowLeft,
  ArrowUpLeft,
  ArrowUpRight,
  AtSign,
  AudioLines,
  Bookmark,
  ChevronsUp,
  Code,
  Copy,
  CopyCheck,
  FileText,
  Hammer,
  Home,
  Laptop,
  Lightbulb,
  Popcorn,
} from "lucide-react"

import { twcn } from "@/lib/utils"

const iconSize = "size-4"

export type Icon = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "className"> & { className?: ClassValue }
>

// ui
export const BackIcon = twcn(ArrowUpLeft)`${iconSize}`
export const Back2Icon = twcn(ArrowLeft)`${iconSize}`
export const DrawerIcon = twcn(ChevronsUp)`size-5`
export const ExternalLinkIcon = twcn(ArrowUpRight)`${iconSize}`
export const CopyIcon = twcn(Copy)`${iconSize}`
export const CopiedIcon = twcn(CopyCheck)`${iconSize}`

// nav links
export const HomeIcon = twcn(Home)`${iconSize}`
export const ProjectsIcon = twcn(Laptop)`${iconSize}`
export const ThoughtsIcon = twcn(Lightbulb)`${iconSize}`
export const SnippetsIcon = twcn(Code)`${iconSize}`
export const DiscoveriesIcon = twcn(Bookmark)`${iconSize}`
export const UsesIcon = twcn(Hammer)`${iconSize}`

// about links
export const EmailIcon = twcn(AtSign)`${iconSize}`
export const ResumeIcon = twcn(FileText)`${iconSize}`

// social / activity
export const WatchingIcon = twcn(Popcorn)`${iconSize}`
export const ListeningIcon = twcn(AudioLines)`${iconSize}`

const Trakt = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12s-5.385 12-12 12m0-22.789C6.05 1.211 1.211 6.05 1.211 12S6.05 22.79 12 22.79S22.79 17.95 22.79 12S17.95 1.211 12 1.211m-7.11 17.32A9.6 9.6 0 0 0 12 21.644a9.6 9.6 0 0 0 4.027-.876l-6.697-6.68zm14.288-.067a9.65 9.65 0 0 0 2.484-6.466c0-3.885-2.287-7.215-5.568-8.76l-6.089 6.076l9.164 9.15zm-9.877-8.429L4.227 15.09l-.679-.68l5.337-5.336l6.23-6.225A9.8 9.8 0 0 0 12 2.34C6.663 2.337 2.337 6.663 2.337 12c0 2.172.713 4.178 1.939 5.801l5.056-5.055l.359.329l7.245 7.245a3 3 0 0 0 .42-.266L9.33 12.05l-4.854 4.855l-.679-.679l5.535-5.535l.359.331l8.46 8.437c.135-.1.255-.215.375-.316L9.39 10.027l-.083.015zm3.047 1.028l-.678-.676l4.788-4.79l.679.689l-4.789 4.785zm4.542-6.578l-5.52 5.52l-.68-.679l5.521-5.52l.679.684z"
      />
    </svg>
  )
}

const Github = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </svg>
  )
}

const AppleMusic = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Apple Music</title>
      <path
        fill="currentColor"
        d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z"
      />
    </svg>
  )
}

const LastFm = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 1000 1000"
      {...props}
    >
      <path
        fill="currentColor"
        d="M196.049.188C88.327.188.157 88.328.157 196.049v607.863c0 107.721 88.171 195.861 195.892 195.861h607.863c107.722 0 195.861-88.14 195.861-195.861V196.049C999.773 88.328 911.634.188 803.912.188zm88.713 253.013c135.353 0 203.53 48.874 246.264 181.175l33.592 101.743c24.429 74.295 67.169 128.241 169.957 128.241c69.203 0 105.836-15.287 105.836-52.934c0-29.518-17.283-50.874-69.183-63.09l-69.214-16.28c-84.459-20.352-118.055-64.099-118.055-133.304c0-110.928 89.558-145.553 181.143-145.553c103.805 0 166.909 37.651 175.051 129.241l-101.774 12.218c-4.075-43.76-30.522-62.059-79.369-62.059c-44.785 0-72.276 20.332-72.276 54.934c0 30.531 13.254 48.852 58.027 59.027l65.12 14.249c87.523 20.356 134.334 63.121 134.334 145.553c0 101.766-85.47 140.428-211.673 140.428c-176.056 0-237.11-79.372-269.669-178.081l-32.592-101.774c-24.429-74.295-52.908-132.304-142.459-132.304c-62.088 0-125.179 44.783-125.179 169.957c0 97.699 49.856 158.739 120.085 158.739c79.367 0 132.304-59.027 132.304-59.027l32.561 88.557s-54.974 53.934-169.957 53.934c-142.481 0-221.859-83.448-221.859-238.139c0-160.793 79.388-255.451 228.984-255.451z"
      />
    </svg>
  )
}

// brand icons
export const GithubIcon = twcn(Github)`${iconSize}`
export const AppleMusicIcon = twcn(AppleMusic)`${iconSize}`
export const LastfmIcon = twcn(LastFm)`${iconSize}`
export const TraktIcon = twcn(Trakt)`${iconSize}`
