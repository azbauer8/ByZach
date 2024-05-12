import {
  FaAt,
  FaBookmark,
  FaBrain,
  FaCode,
  FaFilePdf,
  FaGithub,
  FaHammer,
  FaHome,
  FaLaptop,
  FaLastfmSquare,
  FaSpotify,
} from "react-icons/fa"
import {
  PiArrowLeftBold,
  PiArrowUpLeftBold,
  PiArrowUpRightBold,
  PiCaretDoubleUpBold,
  PiPopcornBold,
  PiWaveformBold,
} from "react-icons/pi"
import { SiTrakt } from "react-icons/si"

import { twcn } from "@/lib/utils"

const iconSize = "size-4"

// ui
export const BackIcon = twcn(PiArrowUpLeftBold)`${iconSize}`
export const Back2Icon = twcn(PiArrowLeftBold)`${iconSize}`
export const DrawerIcon = twcn(PiCaretDoubleUpBold)`${iconSize}`
export const ExternalLinkIcon = twcn(PiArrowUpRightBold)`${iconSize}`

// nav links
export const HomeIcon = twcn(FaHome)`${iconSize}`
export const ProjectsIcon = twcn(FaLaptop)`${iconSize}`
export const ThoughtsIcon = twcn(FaBrain)`${iconSize}`
export const SnippetsIcon = twcn(FaCode)`${iconSize}`
export const DiscoveriesIcon = twcn(FaBookmark)`${iconSize}`
export const UsesIcon = twcn(FaHammer)`${iconSize}`

// about links
export const GithubIcon = twcn(FaGithub)`${iconSize}`
export const EmailIcon = twcn(FaAt)`${iconSize}`
export const ResumeIcon = twcn(FaFilePdf)`${iconSize}`

// social / activity
export const SpotifyIcon = twcn(FaSpotify)`${iconSize}`
export const LastfmIcon = twcn(FaLastfmSquare)`${iconSize}`
export const TraktIcon = twcn(SiTrakt)`${iconSize}`
export const WatchingIcon = twcn(PiPopcornBold)`${iconSize}`
export const ListeningIcon = twcn(PiWaveformBold)`${iconSize}`
