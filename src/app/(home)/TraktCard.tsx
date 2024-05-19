import { getTrakt } from "@/lib/activity"
import getBase64 from "@/lib/getBase64"
import { imageSources } from "@/lib/metadata"
import { Button } from "@/components/ui/button"
import { WatchingIcon } from "@/components/Icons"
import ImageWithFallback from "@/components/ImageWithFallback"
import { Typography } from "@/components/Typography"

export default async function TraktCard() {
  const traktData = await getTrakt()
  if (!traktData) return
  const { data, poster } = traktData
  if (!data) return

  const blurData = poster ? await getBase64(poster) : undefined

  return (
    <Button
      asChild
      variant="ghost"
      className="flex h-auto items-center space-x-5 rounded-lg px-3 py-2 text-base"
    >
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <ImageWithFallback
          src={poster ?? imageSources.traktFallback}
          fallbackSrc={imageSources.traktFallback}
          blurDataURL={blurData}
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
