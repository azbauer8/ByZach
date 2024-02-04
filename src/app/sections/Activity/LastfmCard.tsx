import Image from "next/image"
import { PiWaveformBold } from "react-icons/pi"

import { getTimeDiff } from "@/lib/timeCalc"
import { LastFmData } from "@/types/apiData"

async function loader() {
	try {
		const response = await fetch(
			`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=zacharlatanz&api_key=${process.env.LAST_FM_API}&format=json`,
			{
				next: {
					revalidate: 0,
				},
			},
		)
		if (!response.ok) {
			throw new Error("Network response was not ok")
		}
		return (await response.json()) as LastFmData
	} catch (error) {
		console.error("Error fetching LastFM data:", error)
		return
	}
}

export default async function LastFmCard() {
	const data = await loader()

	if (!data) return

	const latestTrack = data.recenttracks.track[0]
	const playingWhen = latestTrack["@attr"]?.nowplaying
		? "Now Playing"
		: getTimeDiff(latestTrack.date["#text"], "lastfm")

	return (
		<a
			className={
				"flex max-w-xl items-center space-x-5 ring-offset-4 transition hover:opacity-60 focus:ring-red-500/40 dark:ring-offset-zinc-900 dark:focus:ring-red-400/40"
			}
			href={latestTrack.url}
		>
			<img
				src={latestTrack.image[3]["#text"]}
				alt={latestTrack.album["#text"]}
				width={0}
				height={0}
				sizes="100vw"
				className="w-1/4 flex-none items-center justify-center self-center rounded-lg"
			/>

			<div className="my-auto grow space-y-0.5">
				<div className="flex flex-row items-center space-x-1 text-emerald-500">
					{playingWhen === "Now Playing" ? (
						<Image src="/bars.svg" alt="Now Playing" width={14} height={14} />
					) : (
						<PiWaveformBold className="h-5 w-5" />
					)}
					<p className="text-sm font-medium">{playingWhen}</p>
				</div>
				<p className="font-pop text-lg font-semibold">{latestTrack.name}</p>
				<p className="font-default">{latestTrack.artist["#text"]}</p>
			</div>
		</a>
	)
}
