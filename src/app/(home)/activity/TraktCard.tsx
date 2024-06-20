import { imageSources } from "@/lib/metadata"
import { Button } from "@/components/ui/button"
import DynamicImage from "@/components/DynamicImage"
import { WatchingIcon } from "@/components/Icons"
import { Typography } from "@/components/Typography"

import { getTrakt } from "./getActivity"

export default async function TraktCard() {
  const traktData = await getTrakt()
  if (!traktData) return
  const { data, poster } = traktData
  if (!data) return

  return (
    <Button
      asChild
      variant="ghost"
      className="flex h-auto items-center space-x-5 rounded-lg p-2.5 text-base"
    >
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <DynamicImage
          src={poster}
          fallbackSrc={imageSources.traktFallback}
          placeholder="blur"
          alt={data.title}
          width={144}
          height={216}
          sizes="100vw"
          className="aspect-[2/3] max-w-[25%] flex-none items-center justify-center self-center"
        />

        <div className="my-auto grow space-y-0.5 text-wrap">
          <div className="flex flex-row items-center space-x-1 text-red-500/95 dark:text-red-400">
            <WatchingIcon />
            <Typography affects="small">{data.playingWhen}</Typography>
          </div>
          <Typography className="font-semibold text-foreground">
            {data.title}
          </Typography>
          {data.episode ? (
            <>
              <Typography affects="muted">{`S${data.season}E${data.episodeNum}: ${data.episode}`}</Typography>
            </>
          ) : (
            <>
              <Typography affects="muted" className="italic">
                {data.tagline}
              </Typography>
            </>
          )}
        </div>
      </a>
    </Button>
  )
}
