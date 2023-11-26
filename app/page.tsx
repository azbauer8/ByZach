"use client";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Socials from "@/sections/Socials";
import Activity from "@/sections/Activity";

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
