import Image from "next/image"
import { PiPopcornDuotone } from "react-icons/pi"

import { getTimeDiff } from "@/lib/timeCalc"
import { TraktEntry } from "@/types/apiData"

async function loader() {
	try {
		const response = await fetch(
			"https://api.trakt.tv/users/zacharlatan/history?extended=full",
			{
				headers: {
					"Content-Type": "application/json",
					"trakt-api-key": `${process.env.TRAKT_API}`,
					"trakt-api-version": "2",
				},
			},
		)
		const traktData = await response.json()

		const imdbId =
			traktData[0].type === "episode"
				? traktData[0].show.ids.imdb
				: traktData[0].movie.ids.imdb

		const imdbData = await fetch(
			`http://omdbapi.com/?apikey=${process.env.OMDB_API}&i=${imdbId}`,
		)

		const { Poster } = await imdbData.json()

		return { traktData: traktData as TraktEntry[], poster: Poster as string }
	} catch (error) {
		console.error("Error fetching Trakt data:", error)
		return
	}
}

export default async function TraktCard() {
	const data = await loader()

	if (!data) return

	const traktData = {
		title: data.traktData[0].show
			? data.traktData[0].show.title
			: data.traktData[0].movie
			  ? data.traktData[0].movie.title
			  : "",
		url: data.traktData[0].show
			? `https://trakt.tv/shows/${data.traktData[0].show.ids.slug}`
			: `https://trakt.tv/movies/${data.traktData[0].movie?.ids.slug}`,
		episode: data.traktData[0].episode?.title,
		season: data.traktData[0].episode?.season,
		episodeNum: data.traktData[0].episode?.number,
		tagline: data.traktData[0].movie?.tagline,
		playingWhen: data.traktData[0].watched_at
			? getTimeDiff(data.traktData[0].watched_at, "trakt")
			: "Currently Watching",
	}

	return (
		<a
			className="flex max-w-xl items-center space-x-5 ring-offset-4 transition hover:opacity-60 focus:ring-red-500/40 dark:ring-offset-zinc-900 dark:focus:ring-red-400/40"
			href={traktData.url}
		>
			<Image
				src={data.poster}
				alt={traktData.title}
				priority
				width={0}
				height={0}
				sizes="100vw"
				className="w-1/4 flex-none items-center justify-center self-center rounded-lg"
			/>

			<div className="my-auto grow space-y-0.5">
				<div className="flex flex-row items-center space-x-1 text-red-400">
					<PiPopcornDuotone className="h-5 w-5" />
					<p className="text-sm font-medium">{traktData.playingWhen}</p>
				</div>
				{traktData.episode ? (
					<>
						<p className="font-pop text-lg font-semibold">{traktData.title}</p>
						<p className="font-default text-lg">{`S${traktData.season}E${traktData.episodeNum}: ${traktData.episode}`}</p>
					</>
				) : (
					<>
						<p className="font-pop text-lg font-semibold">{traktData.title}</p>
						<p className="font-default text-lg italic">{traktData.tagline}</p>
					</>
				)}
			</div>
		</a>
	)
}
