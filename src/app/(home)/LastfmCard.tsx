import Image from "next/image"

import { getLastFm } from "@/lib/activity"
import { imageSources } from "@/lib/metadata"
import { Button } from "@/components/ui/button"
import DynamicImage from "@/components/DynamicImage"
import { ListeningIcon } from "@/components/Icons"
import { Typography } from "@/components/Typography"

export default async function LastFmCard() {
  const data = await getLastFm()
  if (!data) return
  const { latestTrack, playingWhen } = data

  return (
    <Button
      variant="ghost"
      className="flex h-auto items-center space-x-5 rounded-lg px-3 py-2 text-base"
      asChild
    >
      <a href={latestTrack.url} target="_blank" rel="noopener noreferrer">
        <DynamicImage
          src={latestTrack.image[3]["#text"]}
          fallbackSrc={imageSources.lastfmFallback}
          alt={latestTrack.album["#text"]}
          width={144}
          height={144}
          sizes="100vw"
          className="aspect-square max-w-[25%] flex-none items-center justify-center self-center"
        />
        <div className="my-auto grow space-y-0.5 text-wrap">
          <div className="flex flex-row items-center space-x-1 text-emerald-600/95 dark:text-emerald-500">
            {playingWhen === "Now Playing" ? (
              <Image
                src={imageSources.nowPlaying}
                alt="Now Playing"
                width={14}
                height={14}
              />
            ) : (
              <ListeningIcon />
            )}
            <Typography affects="small">{playingWhen}</Typography>
          </div>
          <Typography className="font-semibold text-foreground">
            {latestTrack.name}
          </Typography>
          <Typography affects="muted">{latestTrack.artist["#text"]}</Typography>
        </div>
      </a>
    </Button>
  )
}
