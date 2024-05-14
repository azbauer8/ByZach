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
  Omit<SVGProps<SVGSVGElement>, "className"> & {
    className?: ClassValue
  }
>

// ui
export const BackIcon = twcn(ArrowUpLeft)`${iconSize}`
export const Back2Icon = twcn(ArrowLeft)`${iconSize}`
export const DrawerIcon = twcn(ChevronsUp)`size-5`
export const ExternalLinkIcon = twcn(ArrowUpRight)`${iconSize}`

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

const Spotify = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12s12-5.4 12-12S18.66 0 12 0m5.521 17.34c-.24.359-.66.48-1.021.24c-2.82-1.74-6.36-2.101-10.561-1.141c-.418.122-.779-.179-.899-.539c-.12-.421.18-.78.54-.9c4.56-1.021 8.52-.6 11.64 1.32c.42.18.479.659.301 1.02m1.44-3.3c-.301.42-.841.6-1.262.3c-3.239-1.98-8.159-2.58-11.939-1.38c-.479.12-1.02-.12-1.14-.6s.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2m.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721c-.18-.601.18-1.2.72-1.381c4.26-1.26 11.28-1.02 15.721 1.621c.539.3.719 1.02.419 1.56c-.299.421-1.02.599-1.559.3"
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
export const SpotifyIcon = twcn(Spotify)`${iconSize}`
export const LastfmIcon = twcn(LastFm)`${iconSize}`
export const TraktIcon = twcn(Trakt)`${iconSize}`
