import Link, { type LinkProps } from "next/link"
import { twc, type TwcComponentProps } from "react-twc"

type NavLinkProps = LinkProps & TwcComponentProps<"a"> & { $active?: boolean }

const NavLink = twc(Link)<NavLinkProps>(({ $active }) => [
  "hover:bg-highlight-hover active:bg-highlight-hover size-full rounded-lg px-2 py-1.5 border-[0.5px] border-transparent transition",
  $active &&
    "shadow-highlight-shadow bg-highlight hover:bg-highlight active:bg-highlight border-highlight-border",
])

export default NavLink
