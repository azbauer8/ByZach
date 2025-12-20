import { StarIcon } from "lucide-react"

import { imageSources } from "@/lib/metadata"
import { Button } from "@/components/ui/button"
import DynamicImage from "@/components/DynamicImage"
import { WatchingIcon } from "@/components/Icons"
import { Typography } from "@/components/Typography"

import { getTrakt } from "./getActivity"

export default async function TraktCards() {
  const traktData = await getTrakt()

  if (!traktData) return
  const { data, poster, ratingData, ratingPoster } = traktData
  if (!data) return

  return (
    <>
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
            className="aspect-2/3 max-w-[25%] flex-none items-center justify-center self-center"
          />

          <div className="my-auto grow space-y-0.5 text-wrap">
            <div className="flex flex-row items-center space-x-1 text-red-500/95 dark:text-red-400">
              <WatchingIcon />
              <Typography affects="small">{data.playingWhen}</Typography>
            </div>
            <Typography className="text-foreground font-semibold">
              {data.title}
            </Typography>
            {data.episode ? (
              <>
                <Typography affects="muted">{`S${data.season}E${data.episodeNum}: ${data.episode}`}</Typography>
              </>
            ) : (
              <>
                <Typography affects="small" className="font-normal italic">
                  {data.tagline}
                </Typography>
              </>
            )}
          </div>
        </a>
      </Button>
      <Button
        asChild
        variant="ghost"
        className="flex h-auto items-center space-x-5 rounded-lg p-2.5 text-base"
      >
        <a href={ratingData.url} target="_blank" rel="noopener noreferrer">
          <DynamicImage
            src={ratingPoster}
            fallbackSrc={imageSources.traktFallback}
            placeholder="blur"
            alt={ratingData.title}
            width={144}
            height={216}
            sizes="100vw"
            className="aspect-[2/3] max-w-[25%] flex-none items-center justify-center self-center"
          />

          <div className="my-auto grow space-y-0.5 text-wrap">
            <div className="flex flex-row items-center space-x-1 text-red-500/95 dark:text-red-400">
              <WatchingIcon />
              <Typography affects="small">{ratingData.ratedWhen}</Typography>
            </div>
            <Typography className="text-foreground font-semibold">
              {ratingData.title}
            </Typography>

            <div className="flex items-center">
              {Array.from({ length: Math.floor(ratingData.rating / 2) }).map(
                (_, index) => (
                  <StarIcon
                    key={index}
                    className="size-[18px] fill-yellow-500 text-yellow-500"
                  />
                )
              )}
              {Math.round(ratingData.rating) % 2 !== 0 && (
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <defs>
                    <mask id="half-mask">
                      <rect x="0" y="0" width="12" height="24" fill="white" />
                    </mask>
                  </defs>
                  <g mask="url(#half-mask)">
                    <StarIcon className="fill-yellow-500 text-yellow-500" />
                  </g>
                </svg>
              )}
            </div>
          </div>
        </a>
      </Button>
    </>
  )
}
