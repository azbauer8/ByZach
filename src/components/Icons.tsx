import {
  PiArrowLeftBold,
  PiArrowUpLeftBold,
  PiArrowUpRightBold,
  PiAtBold,
  PiBookmarkBold,
  PiCaretDoubleUpBold,
  PiCodeBold,
  PiFilePdfBold,
  PiGithubLogoBold,
  PiHammerBold,
  PiHouseBold,
  PiLaptopBold,
  PiLastfmLogoBold,
  PiLightbulbBold,
  PiPopcornBold,
  PiSpotifyLogoBold,
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
export const HomeIcon = twcn(PiHouseBold)`${iconSize}`
export const ProjectsIcon = twcn(PiLaptopBold)`${iconSize}`
export const ThoughtsIcon = twcn(PiLightbulbBold)`${iconSize}`
export const SnippetsIcon = twcn(PiCodeBold)`${iconSize}`
export const DiscoveriesIcon = twcn(PiBookmarkBold)`${iconSize}`
export const UsesIcon = twcn(PiHammerBold)`${iconSize}`

// about links
export const GithubIcon = twcn(PiGithubLogoBold)`${iconSize}`
export const EmailIcon = twcn(PiAtBold)`${iconSize}`
export const ResumeIcon = twcn(PiFilePdfBold)`${iconSize}`

// social / activity
export const SpotifyIcon = twcn(PiSpotifyLogoBold)`${iconSize}`
export const LastfmIcon = twcn(PiLastfmLogoBold)`${iconSize}`
export const TraktIcon = twcn(SiTrakt)`${iconSize}`
export const WatchingIcon = twcn(PiPopcornBold)`${iconSize}`
export const ListeningIcon = twcn(PiWaveformBold)`${iconSize}`
