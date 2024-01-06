"use client";

import About from "@/sections/About";
import Activity from "@/sections/Activity";
import Projects from "@/sections/Projects";
import Socials from "@/sections/Socials";

export default function Home() {
  return (
    <div className="space-y-8">
      <About />
      <Projects />
      <Activity />
      <Socials />
    </div>
  );
}
