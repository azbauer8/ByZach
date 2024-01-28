import { links } from "@/data/links"

import IconLink from "@/components/IconLink"

export default function Socials() {
	return (
		<div className="space-y-2">
			<h1 className="text-xl font-bold">Follow me on</h1>
			<div className="mb-5 space-y-0">
				<div className="flex flex-wrap">
					{links.socials.map((link) => (
						<IconLink key={link.url} link={link} />
					))}
				</div>
			</div>
		</div>
	)
}
