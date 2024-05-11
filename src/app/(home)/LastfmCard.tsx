import Image from "next/image"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"

import { getLastFm } from "@/lib/activity"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/Typography"

export default async function LastFmCard() {
  const data = await getLastFm()
  if (!data) return <LastFmFallback />
  const { latestTrack, playingWhen } = data

  return (
    <Button
      variant="ghost"
      className="-mx-3 flex h-auto items-center space-x-5 rounded-lg px-3 py-2 text-base md:mx-0"
      asChild
    >
      <a href={latestTrack.url} target="_blank" rel="noopener noreferrer">
        <Image
          src={latestTrack.image[3]["#text"] ?? "/lastfm_placeholder.png"}
          alt={latestTrack.album["#text"]}
          width={144}
          height={144}
          loading="eager"
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUUdGoBwAB1QDxUtk2pwAAAABJRU5ErkJggg=="
          sizes="100vw"
          className="aspect-square max-w-[25%] flex-none animate-reveal items-center justify-center self-center rounded-lg"
        />
        <div className="my-auto grow space-y-0.5 text-wrap">
          <div className="flex flex-row items-center space-x-1 text-emerald-600/95 dark:text-emerald-500">
            {playingWhen === "Now Playing" ? (
              <Image src="/bars.svg" alt="Now Playing" width={14} height={14} />
            ) : (
              <Icon icon="ph:waveform-bold" size={20} />
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

function LastFmFallback() {
  return (
    <div className="flex max-w-xl items-center space-x-5">
      <Image
        src="/lastfm_placeholder.png"
        alt="Album Cover Placeholder"
        width={144}
        height={144}
        loading="eager"
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUUdGoBwAB1QDxUtk2pwAAAABJRU5ErkJggg=="
        sizes="100vw"
        className="w-1/4 flex-none animate-reveal items-center justify-center self-center rounded-lg"
      />
      <div className="my-auto grow text-wrap">
        <div className="flex flex-row items-center space-x-1 pb-1 text-emerald-600/95 dark:text-emerald-500">
          <Icon icon="ph:waveform-bold" size={20} />
          <Typography affects="small">{"(ノಠ益ಠ)ノ彡┻━┻"}</Typography>
        </div>
        <Typography variant="h5">Untitled</Typography>
        <Typography affects="muted">Anonymous</Typography>
      </div>
    </div>
  )
}
