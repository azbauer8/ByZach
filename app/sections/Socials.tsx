import Link from "@/components/Link";
import links from "@/data/links.json";

export default function Socials() {
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-bold">Follow me on</h1>
      <div className="mb-5 space-y-0">
        <div className="flex flex-wrap">
          {links[1].map((link, index) => (
            <Link key={index} name={link.name} link={link.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
