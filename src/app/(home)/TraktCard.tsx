import Image from "next/image"

import { getTrakt } from "@/lib/activity"
import { Button } from "@/components/ui/button"
import { WatchingIcon } from "@/components/Icons"
import ImageWithFallback from "@/components/ImageWithFallback"
import { Typography } from "@/components/Typography"

export default async function TraktCard() {
  const traktData = await getTrakt()
  if (!traktData) return <TraktFallback />
  const { data, poster } = traktData
  if (!data) return <TraktFallback />
  return (
    <Button
      asChild
      variant="ghost"
      className="flex h-auto items-center space-x-5 rounded-lg px-3 py-2 text-base"
    >
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <ImageWithFallback
          src={poster ?? "/trakt_placeholder.svg"}
          fallbackSrc="/trakt_placeholder.svg"
          alt={data.title}
          width={144}
          height={216}
          loading="eager"
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUUdGoBwAB1QDxUtk2pwAAAABJRU5ErkJggg=="
          sizes="100vw"
          className="aspect-[2/3] max-w-[25%] flex-none animate-reveal items-center justify-center self-center rounded-lg"
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

function TraktFallback() {
  return (
    <div className="flex h-auto items-center space-x-5 text-wrap rounded-lg px-3 py-2">
      <Image
        src="/trakt_placeholder.svg"
        alt="Poster Placeholder"
        width={144}
        height={216}
        loading="eager"
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUUdGoBwAB1QDxUtk2pwAAAABJRU5ErkJggg=="
        sizes="100vw"
        className="w-1/5 flex-none items-center justify-center self-center rounded-lg"
      />
      <div className="my-auto grow">
        <div className="flex flex-row items-center space-x-1 text-red-500/95 dark:text-red-400">
          <WatchingIcon />
          <Typography affects="small">{"(ノಠ益ಠ)ノ彡┻━┻"}</Typography>
        </div>
        <Typography variant="h5">Untitled</Typography>
        <Typography affects="muted">
          {"S4E04: The gang hits an api error"}
        </Typography>
      </div>
    </div>
  )
}
