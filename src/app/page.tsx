import Activity from "@/sections/Activity"
import Projects from "@/sections/Projects"
import Socials from "@/sections/Socials"

import About from "@/app/sections/About"

export default function Home() {
  return (
    <div className="space-y-8">
      <About />
      <Projects />
      <Activity />
      <Socials />
    </div>
  )
}
